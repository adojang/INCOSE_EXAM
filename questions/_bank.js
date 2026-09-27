/*
 * Question bank registry.
 *
 * Each question file calls Q({...}) with:
 *   id  – unique id (domain prefix + number)
 *   d   – domain key (see DOMAINS below)
 *   ref – where to read about it in the INCOSE SE Handbook, 5th Edition (SEH5)
 *   b   – Bloom level: "remember" | "understand" | "apply"
 *   s   – question stem
 *   o   – exactly four options: [optionText, whyThisIsRightOrWrong]
 *   a   – index (0-3) of the single correct option
 *   t   – one-sentence key takeaway to remember
 *
 * Option order is shuffled at runtime, so explanations never refer to letters.
 */
window.DOMAINS = {
  intro: "Ch1 · SE Introduction & Systems Concepts",
  lifecycle: "Ch2 · Life Cycle Stages & Models",
  agreement: "Ch2 · Agreement Processes",
  org: "Ch2 · Organizational Project-Enabling Processes",
  techmgmt: "Ch2 · Technical Management Processes",
  technical: "Ch2 · Technical Processes",
  analyses: "Ch3 · Life Cycle Analyses & Methods",
  tailoring: "Ch4 · Tailoring & Application Considerations",
  practice: "Ch5 · Systems Engineering in Practice",
};

window.QUESTIONS = [];
window.Q = function (q) {
  window.QUESTIONS.push(q);
};
