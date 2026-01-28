## 2026-01-28 - Missing Frontend Validation in Quiz
**Vulnerability:** The lead generation quiz accepted any input, relying only on HTML5 `required` attributes which are easily bypassed and insufficient for data format validation (e.g. phone numbers).
**Learning:** The "Quiz" pattern separates data collection across multiple steps, which can lead to overlooking validation on the final submission step.
**Prevention:** Implement explicit `validate()` functions in React components that handle user input, checking for format and length before state updates or submission.
