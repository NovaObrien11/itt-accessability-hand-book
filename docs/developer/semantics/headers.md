---
sidebar_position: 3
description: Header element best practices
---

# Header Tags
Use semantic heading tags `(<h1>–<h6>)` in order to structure your content—never skip levels, never fake it with divs.

## Why Headers Matter

- Headings structure your content—**they’re the backbone of page navigation** for screen readers and power users.
- Don’t just make text big or bold; use semantic heading tags for real structure.

---

## Basics

- **Every major section needs a heading.**
- Start your content with `<h1>` as the main title.
- Use headings **in order**—don’t skip levels (use `<h2>` after `<h1>`, `<h3>` after `<h2>`, etc.).
- Don’t use headings *just* for styling. Use CSS for looks, semantic tags for structure.

---

## `<h1>` Best Practices

- **Only one `<h1>` per page.**
- `<h1>` is the *page title*, not the site name or logo.
- Use `<h2>`, `<h3>`, etc., for subsections—keep a clear hierarchy.

---

## Pitfalls

- **Don’t skip heading levels.** (Example: don’t go from `<h1>` to `<h4>`.)
- **Don’t use headings for navigation, sidebars, or footers.** Use them for content structure only.
- **Don’t use faux headings.** (`<div class="h2">` ≠ `<h2>`)
- Assistive tech relies on headings for orientation—get this right, and everyone wins.

---

## Good vs Bad Examples

:::tip Good Example
```html
<h1>Accessibility Handbook</h1>
  <h2>Getting Started</h2>
    <h3>Who is this for?</h3>
  <h2>Guidelines</h2>
```
:::

:::danger Bad Example
```html
<h1>Accessibility Handbook</h1>
  <h4>Who is this for?</h4> <!-- Skipped h2/h3, breaks outline -->
<div class="h2">Guidelines</div> <!-- Not semantic, not accessible --
```
:::


## Related Elements

- Use `<section>` to group related content—but only if it has its own heading.
- Use `<p>` for paragraphs of text, not as a substitute for headings or containers.
- Don’t use `<div>` or `<span>` for structure. They’re for styling, not semantics.


## Resources

- [W3C: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [H42: Using h1-h6 to Identify Headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
- [H69: Providing Headings at Section Start](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
