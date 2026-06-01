---
title: Parsing (4.1.1) vs. Name, Role, Value (4.1.2)
sidebar_position: 1
---

For years, developers and Web Accessibility Specialists (WAS) have navigated the complexities of WCAG Principle 4 (**Robust**), specifically Guideline 4.1 (**Compatible**). Under this guideline, two success criteria have frequently caused confusion: **4.1.1 Parsing** and **4.1.2 Name, Role, Value**.

With the release of **WCAG 2.2**, there has been a major paradigm shift. Understanding the differences between these two criteria—and how WCAG 2.2 handles them—is essential for modern accessibility engineering and auditing.

---

## The Big News: WCAG 2.2 Obsoletes 4.1.1 Parsing

In October 2023, the W3C officially published WCAG 2.2. The most notable structural change was that **Success Criterion 4.1.1 Parsing was officially obsoleted and removed** from all conformance levels (A, AA, AAA).

### Why was 4.1.1 removed?
When WCAG 2.0 was published in 2008, browsers and assistive technologies (like screen readers) had highly inconsistent and immature HTML parsers. A single unclosed tag or duplicate ID could cause a screen reader to completely fail to read a page.

Since then, the web landscape has changed dramatically:
1. **HTML5 Standardized Parsing**: The HTML5 specification introduced strict, standardized rules for how browsers must handle malformed markup (error-handling behavior).
2. **Browser Robustness**: All modern browsers now parse malformed HTML in the exact same, highly predictable way.
3. **Redundancy**: The W3C concluded that any parsing error that actually causes a barrier for assistive technologies is already caught by other success criteria, primarily **4.1.2 Name, Role, Value** or **1.3.1 Info and Relationships**.

Therefore, 4.1.1 became redundant. Removing it prevents developers from wasting valuable time fixing harmless HTML syntax issues that have zero impact on the user experience.

---

## Syntactic vs. Semantic Correctness

To understand why this change matters, we must look at the core differences between the two criteria.

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                               PRINCIPLE 4: ROBUST                       │
├────────────────────────────────────────┬────────────────────────────────┤
│          4.1.1 PARSING (Syntactic)     │ 4.1.2 NAME, ROLE, VALUE (Semantic)│
├────────────────────────────────────────┼────────────────────────────────┤
│  Is the code written correctly?        │  Does the browser understand   │
│  - Matching start/end tags             │  what the element is and does? │
│  - Correct nesting                     │  - Correct roles (button, link)│
│  - No duplicate IDs                    │  - Dynamic states (expanded)   │
│  - Well-formed XML/HTML                │  - Accessible names (labels)   │
└────────────────────────────────────────┴────────────────────────────────┘
```

### 1. 4.1.1 Parsing (Syntactic Correctness)
4.1.1 was a **code-quality** check. It didn't care about what the elements *meant* or how they behaved; it only cared if the markup followed the formal syntax rules of the technology (like HTML or XML). 

A page could violate 4.1.1 even if it was 100% usable by a screen reader user (e.g., having two duplicate IDs on static layout `<div>` containers that are never referenced by any scripts or labels).

### 2. 4.1.2 Name, Role, Value (Semantic Correctness)
4.1.2 is a **functional accessibility** check. It requires that all interactive user interface controls (buttons, inputs, links, custom widgets) programmatically expose their:
- **Name**: The accessible name (e.g., "Submit Form", "Close Dialog") so screen readers know what to announce.
- **Role**: The element's semantic role (e.g., `role="checkbox"`, `role="tab"`) so users know how to interact with it.
- **Value/State**: The current state or value (e.g., `aria-checked="true"`, `aria-expanded="false"`, `value="50"`) so users know its current status.

Unlike 4.1.1, a violation of 4.1.2 **always** directly impacts the user experience of assistive technology users.

---

## Detailed Comparison

| Feature | 4.1.1 Parsing (Obsolete) | 4.1.2 Name, Role, Value (Active) |
| :--- | :--- | :--- |
| **Focus** | Syntactic structure of markup code. | Semantic API exposure of interactive controls. |
| **Applicability** | Applied to **all** elements (interactive and static). | Applied primarily to **interactive** controls and custom widgets. |
| **Impact** | Often purely theoretical (harmless syntax errors). | Always functional (directly breaks assistive technology). |
| **Key Violations** | Duplicate IDs, unclosed tags, incorrect nesting. | Missing labels, incorrect ARIA roles, un-updated ARIA states. |
| **WCAG 2.2 Status** | **Removed** (Always marked as passed). | **Active** (Critical Level A requirement). |

---

## Common Pitfalls: When does a Parsing error become a 4.1.2 violation?

Even though 4.1.1 is gone, certain "parsing" errors are still critical failures because they directly trigger violations of **4.1.2 Name, Role, Value** or **1.3.1 Info and Relationships**.

### Case 1: Duplicate IDs
- **Harmless (Passed in WCAG 2.2)**: 
  ```html
  <!-- Duplicate IDs on static divs. No labels or scripts reference them. -->
  <div id="card">Card 1</div>
  <div id="card">Card 2</div>
  ```
  *Result*: This was a 4.1.1 violation. Under WCAG 2.2, this is **ignored** because it has no impact on accessibility.

- **Harmful (Violates 4.1.2 / 1.3.1)**:
  ```html
  <!-- Duplicate IDs on form inputs. The label only associates with the first input. -->
  <label for="user-input">First Name</label>
  <input id="user-input" type="text" />

  <label for="user-input">Last Name</label>
  <input id="user-input" type="text" />
  ```
  *Result*: Because of the duplicate ID, the second label fails to programmatically associate with the second input. The second input has no accessible name. This is a severe **4.1.2 Name, Role, Value** violation.

### Case 2: Broken Nesting and Unclosed Tags
- **Harmless (Passed in WCAG 2.2)**:
  ```html
  <!-- Unclosed paragraph tag inside a static container -->
  <div>
    <p>Some text
  </div>
  ```
  *Result*: Modern browsers automatically close the `<p>` tag. It has zero impact on assistive technologies and is **ignored** under WCAG 2.2.

- **Harmful (Violates 4.1.2)**:
  ```html
  <!-- Broken nesting that causes interactive elements to be swallowed -->
  <button>
    <a href="/home">Home Link</a>
  </button>
  ```
  *Result*: Nesting an interactive link inside an interactive button is invalid HTML. The browser's parser will struggle to construct the Accessibility Tree, leading to broken roles and focus states. This is a **4.1.2 Name, Role, Value** violation.

---

## WAS Audit Guidance (Modern Auditing)

As a Web Accessibility Specialist (WAS) conducting audits in 2026 and beyond, you should adapt your testing methodology to align with WCAG 2.2:

1. **Stop Reporting Pure Parsing Errors**: Do not report unclosed static tags, duplicate IDs on static elements, or minor nesting errors under 4.1.1. They are no longer WCAG violations.
2. **Trace the Functional Impact**: If an automated tool (like Axe or Lighthouse) flags a duplicate ID or nesting issue, verify if it breaks an interactive control's label, description, or state. If it does, report it under **4.1.2 Name, Role, Value** or **1.3.1 Info and Relationships**.
3. **Focus on the Accessibility Tree**: Use browser developer tools (the Accessibility pane) to inspect the computed properties of interactive controls. If the control has a valid Role, a clear Accessible Name, and accurate States/Values, it passes 4.1.2, regardless of how messy the underlying HTML parser error-correction might be.
