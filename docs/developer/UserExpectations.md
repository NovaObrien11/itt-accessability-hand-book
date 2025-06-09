---
sidebar_position: 8
description: Why not to surprise or subvert user expectations
---

# Don’t Subvert User Expectations

## Why it matters

- Users come to your product with a set of learned behaviors—ignore those at your peril.
- Unexpected or inconsistent behaviors confuse everyone, but especially hurt users with disabilities, cognitive differences, or those using assistive tech.
- If a button looks like a button, it should act like a button. If a link looks like a link, it should act like a link.

---

## Examples of Subverted Expectations

- Clicking a link opens a modal instead of navigating.
- Pressing “Enter” in a form does nothing, or triggers a surprise side effect.
- Back button doesn’t return the user to the previous page/state.
- Button with no visible focus, or with non-standard keyboard shortcuts.
- Changing content or state without notifying the user (silent errors, unannounced popups, etc).
- Hijacking scroll, context menu, or tab order.

---

## Good vs Bad

:::danger Bad Example
A “link” styled as a button that triggers file upload when clicked.  
A close “X” button that’s only visible on hover.
A dropdown that can only be opened with a mouse, not keyboard.
:::

:::success Good Example
A link (`<a>`) always navigates; a button (`<button>`) always performs an action.
Keyboard and mouse both work the same way.
All actions have clear, visible feedback.
:::

---

## TL;DR

> Design and build for predictability—don’t surprise users. Respect platform conventions and user expectations.

---

## References

- [Nielsen Norman Group: Jakob’s Law of Internet User Experience](https://www.nngroup.com/articles/law-of-the-web-user-experience/)
- [WAI: Involving Users in Web Projects for Better, More Accessible Design](https://www.w3.org/WAI/test-evaluate/involving-users/)
- [MDN: Designing for Accessibility and Usability](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/User_Experience)
