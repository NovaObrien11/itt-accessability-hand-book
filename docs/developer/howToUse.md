---
slug: /how-to-use
sidebar_position: 1
---

# How to Use This Handbook

This handbook is In Time Tec's internal guide for improving user experience, implementing accessible patterns, and maintaining compliance. It mirrors the structure of **WCAG 2.2 AA** and **EN 301-549**.

---

## The WCAG Numbering System

WCAG success criteria follow a strict, three-tier hierarchical format: **Principle . Guideline . Success Criterion**

Let's look at **SC 4.1.2 (Name, Role, Value)**:

```text
       4      .      1      .      2
   ┌───────┐     ┌───────┐     ┌───────┐
   Principle     Guideline     Success Criterion
   (Robust)     (Compatible)   (Name, Role, Value)
```

### 1. The Principle (The First Digit — `4`)
All accessibility rules fall under four main principles, known as **POUR**:
- **P**erceivable (1.x): Can users see/hear the content?
- **O**perable (2.x): Can users navigate and interact with the interface?
- **U**nderstandable (3.x): Can users make sense of the content and operation?
- **R**obust (4.x): Does it work reliably across different devices and screen readers?

### 2. The Guideline (The Second Digit — `4.1`)
Each principle is broken down into sub-guidelines focusing on specific objectives (e.g., `4.1` focuses on maximizing compatibility with current and future user agents).

### 3. The Success Criterion (The Third Digit — `4.1.2`)
This is the specific, testable rule (e.g., `4.1.2` requires interactive controls to programmatically expose their name, role, and value).

---

## WCAG Version Layering

WCAG is **backward-compatible**. When new versions are released, existing numbers never change. New rules are simply appended to the end of existing guidelines:

- **WCAG 2.0 (2008)**: The foundational bedrock (e.g., `1.1.1`, `2.1.1`, `4.1.2`).
- **WCAG 2.1 (2018)**: Added mobile and low-vision rules (e.g., `1.4.10 Reflow`).
- **WCAG 2.2 (2023)**: Added cognitive and motor rules (e.g., `3.3.7 Accessible Authentication`), and obsoleted `4.1.1 Parsing`.

---

## Resources
- [W3 Accessibility Principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/)
- [W3 WCAG Quick Ref](https://www.w3.org/WAI/WCAG22/quickref/)
