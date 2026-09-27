(function () {
  "use strict";

  var QUESTIONS = window.QUESTIONS || [];
  var DOMAINS = window.DOMAINS || {};
  var BY_ID = {};
  QUESTIONS.forEach(function (q) { BY_ID[q.id] = q; });

  var STORE_KEY = "sep-exam-session-v1";
  var LETTERS = ["A", "B", "C", "D"];
  var MODES = {
    study: { label: "Study mode", timed: false },
    sim: { label: "Real-exam simulation", timed: true, count: 120 },
    full: { label: "Full bank exam", timed: true, count: 200 },
  };
  var MILESTONES = [30, 10, 5, 1]; // minutes remaining that get announced

  var state = null;
  var tickHandle = null;

  // ---------- helpers ----------
  function $(id) { return document.getElementById(id); }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }

  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    var mm = (h ? String(m).padStart(2, "0") : String(m)) + ":" + String(s).padStart(2, "0");
    return h ? h + ":" + mm : mm;
  }

  function fmtSpoken(sec) {
    var m = Math.floor(sec / 60), s = Math.round(sec % 60);
    var parts = [];
    if (m) parts.push(m + (m === 1 ? " minute" : " minutes"));
    if (s || !m) parts.push(s + (s === 1 ? " second" : " seconds"));
    return parts.join(" ");
  }

  function announce(msg) {
    var a = $("announcer");
    a.textContent = "";
    setTimeout(function () { a.textContent = msg; }, 50);
  }

  function save() {
    try {
      if (state && !state.submitted) localStorage.setItem(STORE_KEY, JSON.stringify(state));
      else localStorage.removeItem(STORE_KEY);
    } catch (e) { /* storage unavailable: session just won't persist */ }
  }

  function loadSaved() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (!s || !s.ids || !s.ids.every(function (id) { return BY_ID[id]; })) return null;
      return s;
    } catch (e) { return null; }
  }

  function show(view) {
    ["start", "quiz", "results"].forEach(function (v) {
      $("view-" + v).hidden = v !== view;
    });
    $("timer").hidden = !(view === "quiz" && state && (MODES[state.mode].timed || state.studyClock));
    window.scrollTo(0, 0);
  }

  // ---------- theme ----------
  $("theme-btn").addEventListener("click", function () {
    var root = document.documentElement;
    var dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("sep-theme", root.dataset.theme); } catch (e) {}
    announce((dark ? "Light" : "Dark") + " theme on");
  });

  // ---------- start screen ----------
  function buildDomainList() {
    var counts = {};
    QUESTIONS.forEach(function (q) { counts[q.d] = (counts[q.d] || 0) + 1; });
    var list = $("domain-list");
    list.innerHTML = "";
    Object.keys(DOMAINS).forEach(function (k) {
      if (!counts[k]) return;
      list.appendChild(el("label", { class: "check" }, [
        el("input", { type: "checkbox", name: "domain", value: k, checked: "" }),
        " " + DOMAINS[k] + " ",
        el("span", { class: "hint", text: "(" + counts[k] + ")" }),
      ]));
    });
  }

  function setAllDomains(on) {
    document.querySelectorAll('input[name="domain"]').forEach(function (c) { c.checked = on; });
  }
  $("all-domains").addEventListener("click", function () { setAllDomains(true); });
  $("no-domains").addEventListener("click", function () { setAllDomains(false); });

  function syncDomainFieldset() {
    var mode = document.querySelector('input[name="mode"]:checked').value;
    $("domain-fieldset").disabled = mode !== "study";
  }
  document.querySelectorAll('input[name="mode"]').forEach(function (r) {
    r.addEventListener("change", syncDomainFieldset);
  });

  $("start-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var mode = document.querySelector('input[name="mode"]:checked').value;
    var pool = QUESTIONS;
    if (mode === "study") {
      var picked = Array.prototype.map.call(
        document.querySelectorAll('input[name="domain"]:checked'), function (c) { return c.value; });
      if (!picked.length) {
        $("start-error").textContent = "Pick at least one topic to study.";
        document.querySelector('input[name="domain"]').focus();
        return;
      }
      pool = QUESTIONS.filter(function (q) { return picked.indexOf(q.d) !== -1; });
    }
    $("start-error").textContent = "";
    var ids = shuffle(pool.map(function (q) { return q.id; }));
    if (MODES[mode].count) ids = ids.slice(0, MODES[mode].count);
    startSession(mode, ids, $("opt-timer-study").checked);
  });

  function startSession(mode, ids, studyClock) {
    var order = {};
    ids.forEach(function (id) { order[id] = shuffle([0, 1, 2, 3]); });
    var limit = MODES[mode].timed ? ids.length * 60 : null;
    state = {
      mode: mode,
      ids: ids,
      order: order,
      answers: {},     // id -> original option index
      checked: {},     // id -> true once feedback shown (study mode)
      flags: {},
      current: 0,
      limit: limit,
      elapsed: 0,
      paused: false,
      studyClock: mode === "study" && !!studyClock,
      announced: {},
      submitted: false,
    };
    save();
    enterQuiz();
  }

  function enterQuiz() {
    show("quiz");
    $("check-btn").hidden = state.mode !== "study";
    renderPalette();
    renderQuestion(true);
    startTimer();
  }

  // ---------- timer ----------
  function startTimer() {
    stopTimer();
    renderTimer();
    renderPaused();
    var last = Date.now();
    tickHandle = setInterval(function () {
      var now = Date.now();
      var dt = (now - last) / 1000;
      last = now;
      if (state.paused || state.submitted) return;
      state.elapsed += dt;
      renderTimer();
      if (state.limit) {
        var rem = state.limit - state.elapsed;
        MILESTONES.forEach(function (m) {
          if (rem <= m * 60 && !state.announced[m] && state.limit > m * 60) {
            state.announced[m] = true;
            announce(m + (m === 1 ? " minute" : " minutes") + " remaining.");
          }
        });
        if (rem <= 0) {
          announce("Time is up. Your exam has been submitted.");
          submit();
          return;
        }
      }
      if (Math.floor(state.elapsed) % 5 === 0) save();
    }, 1000);
  }

  function stopTimer() {
    if (tickHandle) clearInterval(tickHandle);
    tickHandle = null;
  }

  function renderTimer() {
    var t = $("timer-text");
    if (state.limit) {
      var rem = state.limit - state.elapsed;
      t.textContent = fmtTime(rem);
      $("timer").classList.toggle("low", rem <= 300);
    } else {
      t.textContent = fmtTime(state.elapsed);
    }
  }

  function renderPaused() {
    $("pause-btn").textContent = state.paused ? "Resume" : "Pause";
    $("pause-btn").setAttribute("aria-pressed", state.paused ? "true" : "false");
    $("paused-overlay").hidden = !state.paused;
    $("q-form").hidden = state.paused;
  }

  function togglePause() {
    if (!state || state.submitted) return;
    state.paused = !state.paused;
    renderPaused();
    save();
    if (state.paused) {
      announce("Paused. " + (state.limit ? fmtSpoken(state.limit - state.elapsed) + " remaining." : ""));
      $("unpause-btn").focus();
    } else {
      announce("Resumed.");
      $("q-heading").focus();
    }
  }
  $("pause-btn").addEventListener("click", togglePause);
  $("unpause-btn").addEventListener("click", togglePause);

  // ---------- question rendering ----------
  function currentQ() { return BY_ID[state.ids[state.current]]; }

  function renderQuestion(focus) {
    var q = currentQ();
    var n = state.current + 1, total = state.ids.length;
    var answeredCount = Object.keys(state.answers).length;
    $("q-counter").textContent = "Question " + n + " of " + total + " · " + answeredCount + " answered";
    $("progress-bar").style.width = (answeredCount / total * 100) + "%";
    $("q-domain").textContent = DOMAINS[q.d] || q.d;
    $("q-heading").textContent = n + ". " + q.s;

    var opts = $("q-options");
    opts.innerHTML = "";
    var chosen = state.answers[q.id];
    var locked = state.mode === "study" && state.checked[q.id];
    state.order[q.id].forEach(function (orig, pos) {
      var inputId = "opt-" + pos;
      var input = el("input", { type: "radio", name: "answer", id: inputId, value: String(orig) });
      if (chosen === orig) input.checked = true;
      if (locked) input.disabled = true;
      input.addEventListener("change", function () { choose(orig); });
      var label = el("label", { for: inputId, class: "option" }, [
        el("span", { class: "letter", "aria-hidden": "true", text: LETTERS[pos] }),
        el("span", { class: "opt-text" }, [
          el("span", { class: "visually-hidden", text: "Option " + LETTERS[pos] + ": " }),
          q.o[orig][0],
        ]),
      ]);
      if (locked) {
        if (orig === q.a) label.classList.add("is-correct");
        else if (orig === chosen) label.classList.add("is-wrong");
      }
      opts.appendChild(el("div", { class: "option-wrap" }, [input, label]));
    });

    renderFeedback(false);

    $("prev-btn").disabled = state.current === 0;
    var isLast = state.current === total - 1;
    $("next-btn").textContent = isLast ? "Finish →" : "Next →";
    $("check-btn").disabled = chosen === undefined || locked;
    $("check-btn").hidden = state.mode !== "study" || locked;
    $("next-btn").classList.toggle("btn-primary", state.mode !== "study" || !!locked);
    var flagged = !!state.flags[q.id];
    $("flag-btn").setAttribute("aria-pressed", flagged ? "true" : "false");
    $("flag-btn").textContent = flagged ? "⚑ Flagged" : "Flag for review";
    updatePalette();
    if (focus) $("q-heading").focus();
  }

  function choose(orig) {
    var q = currentQ();
    if (state.mode === "study" && state.checked[q.id]) return;
    state.answers[q.id] = orig;
    $("check-btn").disabled = false;
    var answeredCount = Object.keys(state.answers).length;
    $("q-counter").textContent = "Question " + (state.current + 1) + " of " + state.ids.length + " · " + answeredCount + " answered";
    $("progress-bar").style.width = (answeredCount / state.ids.length * 100) + "%";
    updatePalette();
    save();
  }

  function renderFeedback(announceIt) {
    var q = currentQ();
    var box = $("feedback");
    box.innerHTML = "";
    if (state.mode !== "study" || !state.checked[q.id]) return;
    var chosen = state.answers[q.id];
    box.appendChild(explanation(q, chosen, state.order[q.id]));
    if (announceIt) {
      box.querySelector(".verdict").focus();
    }
  }

  // The correct option's rationale opens with "Correct." for authoring clarity; drop it under the "Why it's right" label.
  function whyText(q, orig) {
    var w = q.o[orig][1];
    if (orig !== q.a) return w;
    w = w.replace(/^Correct\s*[.—–-]*\s*/, "");
    return w.charAt(0).toUpperCase() + w.slice(1);
  }

  // Full explanation block: verdict, every option's rationale, takeaway, reference.
  function explanation(q, chosen, order) {
    var right = chosen === q.a;
    var none = chosen === undefined;
    var verdictText = none ? "Not answered." : right ? "✓ Correct." : "✗ Not quite.";
    var wrap = el("div", { class: "explain " + (none ? "is-none" : right ? "is-right" : "is-wrongans") });
    var correctPos = order.indexOf(q.a);
    var verdict = el("p", { class: "verdict", tabindex: "-1" }, [
      el("strong", { text: verdictText }),
      " The correct answer is " + LETTERS[correctPos] + ": " + q.o[q.a][0],
    ]);
    wrap.appendChild(verdict);

    var list = el("ul", { class: "why-list" });
    order.forEach(function (orig, pos) {
      var tags = [];
      if (orig === q.a) tags.push("Correct answer");
      if (orig === chosen) tags.push("Your answer");
      var cls = "why" + (orig === q.a ? " why-correct" : "") + (orig === chosen && orig !== q.a ? " why-chosen-wrong" : "");
      list.appendChild(el("li", { class: cls }, [
        el("p", { class: "why-head" }, [
          el("span", { class: "why-icon", "aria-hidden": "true", text: orig === q.a ? "✓" : "✗" }),
          el("strong", { text: LETTERS[pos] + ". " + q.o[orig][0] }),
          tags.length ? el("span", { class: "tag", text: " — " + tags.join(", ") }) : null,
        ]),
        el("p", { class: "why-text", text: (orig === q.a ? "Why it's right: " : "Why it's wrong: ") + whyText(q, orig) }),
      ]));
    });
    wrap.appendChild(list);
    wrap.appendChild(el("p", { class: "takeaway" }, [el("strong", { text: "Key takeaway: " }), q.t]));
    wrap.appendChild(el("p", { class: "ref hint" }, [el("strong", { text: "Read more: " }), q.ref]));
    return wrap;
  }

  // ---------- navigation ----------
  function go(i) {
    if (i < 0 || i >= state.ids.length) return;
    state.current = i;
    save();
    renderQuestion(true);
  }

  function next() {
    if (state.current === state.ids.length - 1) confirmFinish();
    else go(state.current + 1);
  }

  $("prev-btn").addEventListener("click", function () { go(state.current - 1); });
  $("next-btn").addEventListener("click", next);

  $("q-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var q = currentQ();
    if (state.mode === "study") {
      if (state.checked[q.id]) { next(); return; }
      if (state.answers[q.id] === undefined) { announce("Choose an option first."); return; }
      state.checked[q.id] = true;
      save();
      renderQuestion(false);
      renderFeedback(true);
    } else {
      next();
    }
  });

  function toggleFlag() {
    var q = currentQ();
    if (state.flags[q.id]) delete state.flags[q.id]; else state.flags[q.id] = true;
    var flagged = !!state.flags[q.id];
    $("flag-btn").setAttribute("aria-pressed", flagged ? "true" : "false");
    $("flag-btn").textContent = flagged ? "⚑ Flagged" : "Flag for review";
    updatePalette();
    save();
  }
  $("flag-btn").addEventListener("click", toggleFlag);

  // ---------- palette ----------
  function renderPalette() {
    var pal = $("palette");
    pal.innerHTML = "";
    state.ids.forEach(function (id, i) {
      var b = el("button", { type: "button", class: "pal-btn", "data-i": String(i) });
      b.addEventListener("click", function () { go(i); });
      pal.appendChild(el("li", null, [b]));
    });
    updatePalette();
  }

  function updatePalette() {
    var btns = $("palette").querySelectorAll(".pal-btn");
    var flagged = 0, answered = 0;
    btns.forEach(function (b, i) {
      var id = state.ids[i];
      var ans = state.answers[id] !== undefined;
      var fl = !!state.flags[id];
      if (ans) answered++;
      if (fl) flagged++;
      b.textContent = (fl ? "⚑" : "") + (i + 1);
      b.classList.toggle("ans", ans);
      b.classList.toggle("flag", fl);
      b.classList.toggle("cur", i === state.current);
      if (i === state.current) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
      b.setAttribute("aria-label", "Question " + (i + 1) + (ans ? ", answered" : ", not answered") + (fl ? ", flagged" : ""));
    });
    $("palette-summary").textContent = answered + "/" + state.ids.length + " answered · " + flagged + " flagged";
  }

  // ---------- finish ----------
  function confirmFinish() {
    var unanswered = state.ids.filter(function (id) { return state.answers[id] === undefined; }).length;
    var flagged = Object.keys(state.flags).length;
    var msg = "Finish and see your results?";
    if (unanswered) msg += "\n\n" + unanswered + " question(s) are unanswered and will be marked wrong.";
    if (flagged) msg += "\n" + flagged + " question(s) are flagged for review.";
    if (window.confirm(msg)) submit();
  }
  $("finish-btn").addEventListener("click", confirmFinish);

  $("quit-btn").addEventListener("click", function () {
    if (!window.confirm("Leave this session? Your progress is saved on this device and you can resume it from the start screen.")) return;
    stopTimer();
    save();
    state = null;
    initStart();
  });

  function submit() {
    stopTimer();
    state.submitted = true;
    save();
    renderResults();
  }

  // ---------- results ----------
  var lastResult = null;

  function renderResults() {
    var total = state.ids.length;
    var correct = 0;
    var perDomain = {};
    state.ids.forEach(function (id) {
      var q = BY_ID[id];
      var d = perDomain[q.d] || (perDomain[q.d] = { n: 0, c: 0 });
      d.n++;
      if (state.answers[id] === q.a) { correct++; d.c++; }
    });
    var pct = total ? Math.round(correct / total * 100) : 0;
    $("r-score").textContent = correct + " / " + total + " (" + pct + "%)";
    var band;
    if (pct >= 80) band = "Strong — you're answering like someone ready for the exam. Keep reviewing the misses.";
    else if (pct >= 70) band = "Around the readiness line. Target the weakest topics below, then retake the simulation.";
    else if (pct >= 55) band = "Building. Go back to study mode for the lowest-scoring topics and read the handbook sections cited.";
    else band = "Early days. Work through study mode chapter by chapter, reading every explanation.";
    $("r-band").textContent = band;
    $("r-meta").textContent = MODES[state.mode].label + " · time used " + fmtTime(state.elapsed) +
      (state.limit ? " of " + fmtTime(state.limit) : "") +
      " · " + Object.keys(state.answers).length + " answered · INCOSE publishes no fixed pass mark; 70%+ is a sensible personal target.";

    var tbody = $("r-domains");
    tbody.innerHTML = "";
    Object.keys(DOMAINS).forEach(function (k) {
      var d = perDomain[k];
      if (!d) return;
      var p = Math.round(d.c / d.n * 100);
      var btn = el("button", { type: "button", class: "btn btn-small", text: "Study this topic" });
      btn.setAttribute("aria-label", "Study " + DOMAINS[k]);
      btn.addEventListener("click", function () {
        var ids = shuffle(QUESTIONS.filter(function (q) { return q.d === k; }).map(function (q) { return q.id; }));
        startSession("study", ids, false);
      });
      tbody.appendChild(el("tr", { class: p < 70 ? "weak" : "" }, [
        el("th", { scope: "row", text: DOMAINS[k] }),
        el("td", { text: d.c + " / " + d.n }),
        el("td", null, [
          el("span", { class: "bar", "aria-hidden": "true" }, [el("span", { style: "width:" + p + "%" })]),
          " " + p + "%" + (p < 70 ? " (focus here)" : ""),
        ]),
        el("td", null, [btn]),
      ]));
    });

    lastResult = {
      ids: state.ids.slice(),
      answers: Object.assign({}, state.answers),
      flags: Object.assign({}, state.flags),
      order: state.order,
    };
    var missed = lastResult.ids.filter(function (id) { return lastResult.answers[id] !== BY_ID[id].a; });
    $("retry-missed-btn").hidden = missed.length === 0;
    document.querySelector('input[name="rfilter"][value="wrong"]').checked = true;
    renderReview("wrong");

    show("results");
    $("r-heading").focus();
    announce("Exam finished. You scored " + correct + " out of " + total + ", " + pct + " percent.");
  }

  function renderReview(filter) {
    var r = lastResult;
    var list = $("r-review");
    list.innerHTML = "";
    var shown = 0;
    r.ids.forEach(function (id, i) {
      var q = BY_ID[id];
      var chosen = r.answers[id];
      var right = chosen === q.a;
      if (filter === "wrong" && right) return;
      if (filter === "flagged" && !r.flags[id]) return;
      shown++;
      var status = chosen === undefined ? "Unanswered" : right ? "Correct" : "Incorrect";
      var det = el("details", { class: "review-item " + (right ? "r-right" : "r-wrong") }, [
        el("summary", null, [
          el("span", { class: "r-status", text: (right ? "✓ " : "✗ ") + status }),
          (r.flags[id] ? " ⚑" : ""),
          el("span", { class: "r-q", text: " Q" + (i + 1) + ". " + q.s }),
        ]),
        explanation(q, chosen, r.order[id]),
      ]);
      list.appendChild(el("li", null, [det]));
    });
    $("r-review-count").textContent = shown ? shown + " question(s) shown. Open each one to read the explanations." : "Nothing to show for this filter.";
  }

  document.querySelectorAll('input[name="rfilter"]').forEach(function (r) {
    r.addEventListener("change", function () { renderReview(r.value); });
  });

  $("retry-missed-btn").addEventListener("click", function () {
    var missed = lastResult.ids.filter(function (id) { return lastResult.answers[id] !== BY_ID[id].a; });
    if (missed.length) startSession("study", shuffle(missed), false);
  });

  $("home-btn").addEventListener("click", function () { state = null; initStart(); });

  // ---------- keyboard shortcuts ----------
  document.addEventListener("keydown", function (e) {
    if (!state || state.submitted || $("view-quiz").hidden) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "textarea" || (tag === "input" && e.target.type === "text")) return;
    if (tag === "summary" || (tag === "button" && (e.key === "Enter" || e.key === " "))) return;
    if (state.paused) return;
    var k = e.key.toLowerCase();
    var idx = ["1", "2", "3", "4"].indexOf(k);
    if (idx === -1) idx = ["a", "b", "c", "d"].indexOf(k);
    if (idx !== -1) {
      var input = $("opt-" + idx);
      if (input && !input.disabled) { input.checked = true; input.focus(); choose(Number(input.value)); }
      e.preventDefault();
    } else if (k === "n") { next(); e.preventDefault(); }
    else if (k === "p") { go(state.current - 1); e.preventDefault(); }
    else if (k === "f") { toggleFlag(); e.preventDefault(); }
    else if (k === "enter" && tag !== "button") {
      $("q-form").requestSubmit ? $("q-form").requestSubmit() : $("check-btn").click();
      e.preventDefault();
    }
  });

  // ---------- init ----------
  function initStart() {
    stopTimer();
    buildDomainList();
    syncDomainFieldset();
    var saved = loadSaved();
    $("resume-box").hidden = !saved;
    if (saved) {
      var answered = Object.keys(saved.answers).length;
      $("resume-text").textContent = MODES[saved.mode].label + ": " + answered + " of " + saved.ids.length +
        " answered" + (saved.limit ? ", " + fmtTime(saved.limit - saved.elapsed) + " left on the clock (paused while away)" : "") + ".";
    }
    show("start");
    $("main").focus();
  }

  $("resume-btn").addEventListener("click", function () {
    var saved = loadSaved();
    if (!saved) { initStart(); return; }
    state = saved;
    state.paused = false;
    enterQuiz();
  });
  $("discard-btn").addEventListener("click", function () {
    try { localStorage.removeItem(STORE_KEY); } catch (e) {}
    $("resume-box").hidden = true;
    announce("Saved session discarded.");
  });

  if (!QUESTIONS.length) {
    $("start-error").textContent = "Question bank failed to load.";
  }
  initStart();
})();
