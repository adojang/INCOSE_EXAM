// Validates the question bank: node scripts/validate.mjs
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="(questions\/[^"]+)"/g)].map((m) => m[1]);
const ctx = {};
ctx.window = ctx; // browser-like: window is the global object
vm.createContext(ctx);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
const { QUESTIONS, DOMAINS } = ctx.window;

const errors = [];
const ids = new Set();
const stems = new Set();
const answerPos = [0, 0, 0, 0];
const perDomain = {};
const bloom = {};
let longest = 0;
const lengthCue = [];
for (const q of QUESTIONS) {
  const where = q.id || "(no id)";
  for (const k of ["id", "d", "ref", "b", "s", "o", "t"]) if (!q[k]) errors.push(`${where}: missing ${k}`);
  if (ids.has(q.id)) errors.push(`${where}: duplicate id`);
  ids.add(q.id);
  if (stems.has(q.s)) errors.push(`${where}: duplicate stem`);
  stems.add(q.s);
  if (!DOMAINS[q.d]) errors.push(`${where}: unknown domain ${q.d}`);
  if (!Array.isArray(q.o) || q.o.length !== 4) errors.push(`${where}: needs exactly 4 options`);
  else q.o.forEach((o, i) => {
    if (!Array.isArray(o) || o.length !== 2 || !o[0] || !o[1]) errors.push(`${where}: option ${i} needs [text, why]`);
  });
  if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) errors.push(`${where}: answer index must be 0-3`);
  else answerPos[q.a]++;
  const texts = (q.o || []).map((o) => o[0]);
  if (new Set(texts).size !== texts.length) errors.push(`${where}: duplicate option text`);
  if (/\b(option|answer) [A-D]\b/i.test(JSON.stringify(q.o))) errors.push(`${where}: refers to a letter (options are shuffled)`);
  // Length cue: a correct option that is much longer than every distractor gives the answer away.
  const lens = (q.o || []).map((o) => o[0].length);
  const others = lens.filter((_, i) => i !== q.a);
  if (lens[q.a] > Math.max(...others)) longest++;
  if (lens[q.a] > 1.3 * Math.max(...others)) lengthCue.push(q.id);
  perDomain[q.d] = (perDomain[q.d] || 0) + 1;
  bloom[q.b] = (bloom[q.b] || 0) + 1;
}

console.log(`Questions: ${QUESTIONS.length}`);
console.log("Per domain:", perDomain);
console.log("Bloom levels:", bloom);
console.log("Correct-answer position (authoring order, shuffled at runtime):", answerPos);
console.log(`Correct option is the longest in ${longest}/${QUESTIONS.length} (chance ≈ 25%)`);
if (lengthCue.length) console.log(`Length cue (correct > 1.3× longest distractor): ${lengthCue.length} → ${lengthCue.join(" ")}`);
if (longest > QUESTIONS.length * 0.4) errors.push(`correct answer is the longest option too often (${longest})`);
if (QUESTIONS.length !== 200) errors.push(`expected 200 questions, found ${QUESTIONS.length}`);
if (errors.length) {
  console.error("\nErrors:\n" + errors.join("\n"));
  process.exit(1);
}
console.log("OK");
