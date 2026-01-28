# Palette's Journal

## 2024-05-22 - Modal Accessibility Patterns
**Learning:** Modals in this codebase often lack basic accessibility features like Escape key handling and ARIA labels, making them difficult for keyboard and screen reader users.
**Action:** Always check for `role="dialog"`, `aria-modal="true"`, and keyboard event listeners when working with custom modal components.
