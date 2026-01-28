# Bolt's Journal

## 2025-02-21 - [Initial Setup]
**Learning:** Started performance optimization.
**Action:** Created journal.

## 2025-02-21 - [Lazy Loading Modals]
**Learning:** `next/dynamic` only defers loading if the component is NOT rendered. If a modal component handles its own visibility (returning `null`), it is still "rendered" by the parent, triggering the download.
**Action:** Always use conditional rendering (e.g., `{isOpen && <Modal />}`) in the parent when lazy loading interactive components to ensure code is only fetched when needed.
