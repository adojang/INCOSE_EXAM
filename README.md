# INCOSE ASEP / CSEP Practice Exam (SE Handbook 5th Edition)

A static, accessible study site: **200 multiple-choice questions** covering the INCOSE Systems Engineering Handbook, 5th Edition, with an explanation for **every** option, so each wrong answer tells you why it's wrong and what's right.

**Live site:** https://adojang.github.io/INCOSE_EXAM/ (after GitHub Pages is enabled, see below)

## About the real knowledge exam

| | |
|---|---|
| Source | INCOSE SE Handbook, 5th Ed. (sole source since 15 March 2025) |
| Length | Usually 120 questions: 100 scored + 20 unscored trial items (you can't tell which) |
| Time | 1 minute per question (120 minutes) |
| Format | Multiple choice, 4 options, one correct answer |
| Pass mark | Not published as a fixed number (INCOSE balances for difficulty) |

The same knowledge exam is used for ASEP and CSEP.

## Modes

- **Study mode**: untimed, filterable by chapter. After each answer you see the rationale for all four options, a key takeaway, and the handbook section to read.
- **Real-exam simulation**: 120 random questions, 120-minute countdown, results at the end.
- **Full bank exam**: all 200 questions, 200 minutes.

The results page shows your score per chapter, a review of every missed question with full explanations, and a **Retry the ones I missed** button. Progress is saved in your browser, so you can close the tab and resume later.

## How the questions are built

- **Blueprint** follows the handbook's structure: Ch1 intro & systems concepts (18), life cycle stages & models (22), agreement (8), organizational project-enabling (12), technical management (36), the 14 technical processes (60), Ch3 life cycle analyses & methods (26), Ch4 tailoring & application (13), Ch5 SE in practice (5).
- **Cognitive mix**: about 30% recall (definitions, process purposes), 50% understanding (telling similar concepts apart, e.g. verification vs validation, risk vs issue, MOE vs MOP), 20% application (short scenarios).
- **Distractors** are plausible misconceptions: the purpose of an adjacent process, a swapped term, the right idea at the wrong life cycle stage. There are no "all of the above" options. Option order is shuffled every time.
- **No length giveaway**: `scripts/validate.mjs` checks that the correct answer isn't systematically the longest option.

> **Disclaimer.** This is an independent study aid. The questions are original and paraphrase concepts from the SE Handbook 5th Ed. and ISO/IEC/IEEE 15288:2023. They are not official INCOSE exam items. Each explanation cites the handbook topic, so always confirm there.

## Accessibility

Keyboard shortcuts: `1`–`4` / `A`–`D` choose an option, `Enter` checks or moves on, `N`/`P` go next/previous, `F` flags a question. Options are real radio buttons in fieldsets. Feedback is announced to screen readers, and the timer announces only at 30/10/5/1 minutes left. The timer can be paused. Correct and incorrect are shown with text and icons, not just colour. There are light and dark themes, and the layout works down to 320px wide. Automated axe-core checks (WCAG 2.2 AA) report no violations.

## Enabling GitHub Pages (one-time)

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Re-run the **Deploy to GitHub Pages** workflow (Actions tab), or push any commit.

## Development

No build step and no dependencies. Open `index.html` directly, or run `python3 -m http.server`.

- Questions live in `questions/*.js` (format documented in `questions/_bank.js`).
- `node scripts/validate.mjs` checks the bank: 200 unique questions, 4 options each with a rationale, a valid answer index, and the answer-length cue check. CI runs it before deploying.
