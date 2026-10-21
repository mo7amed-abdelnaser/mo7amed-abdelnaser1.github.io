# PharmaMind — AI Evaluation Report (template)

Fill the numbers from the **AI Evaluation** tab in the app and from your own testing.

## 1. Where AI helped

| Area | How AI helped | Evidence |
|---|---|---|
| Development | Generated server/UI code, Arabic/English strings | e.g. built working MVP in __ hours |
| Product | Quiz generation from lectures | e.g. __ MCQs in 20 s vs. __ min manually |
| Prompt design | JSON-only output + verbatim `sourceQuote` | e.g. parsing succeeded __/__ runs |

## 2. Where AI failed

| Failure | Example | How I detected it | Fix |
|---|---|---|---|
| Hallucinated question | Question not in lecture | `sourceQuote` auto-check flagged __% | Strict prompt + verification + UI badge |
| Wrong/overconfident interaction | | Compared with Lexicomp/BNF | Confidence field + disclaimer |
| Broken code / API limits | | | |

## 3. Experiment (do this — it earns the "evaluation" marks)

1. Choose 3 real lectures (different topics, one in Arabic if possible).
2. Generate 20 MCQs from each → 60 questions.
3. Count: correct / wrong answer key / off-topic / unverifiable.
4. Test 15 drug pairs against a trusted reference. Count severity matches.

| Metric | Result |
|---|---|
| MCQs generated | |
| Unverifiable (auto-check) | |
| Marked wrong by me | |
| Interaction severity matches reference | /15 |

## 4. Lessons learned & limitations

- AI is a draft generator, not an authority: human review is required.
- Not for clinical use.
