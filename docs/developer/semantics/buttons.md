---
sidebar_position: 1

---
# Buttons
Always use native buttons, never nest them, always label them, and always show focus.

## Button Labels

- `<button>` labels should **not change dynamically** after render, unless the button’s action or state actually changes (e.g., toggles, “Show more” → “Show less”).
- If you must update the label for a stateful button, make sure the change is clear and announced to assistive technologies.

### Accessible Labels
- Icon-only `<button>` elements must use `aria-label` so assistive tech can describe the action.

## Keyboard Accessibility
- Native `<button>` elements have keyboard accessibility built in—**don’t reinvent the wheel.**

## Use the Type Attribute
- If a `<button>` is inside a form, always set `type="button"` unless you want `type="submit"` or `type="reset"`.
- **Why?** Default is `submit`, which can break forms or confuse assistive tech.

## Contrast and Focus Styles
- Buttons must have **visible focus outlines** ([WCAG 2.1 – 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html))
- Text on buttons must have **4.5:1 color contrast** ([WCAG 2.1 – 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))
- Non-text button elements (borders, icons) must have **3:1 contrast** ([WCAG 2.1 – 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))
- **Why?** Users need to see what’s focused and what the button does.

## Pitfalls

[WCAG §4.1.2 – Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

A common pitfall with buttons is **nesting interactive elements**—like placing a `<button>` inside another `<button>`. Think of a clickable card component that also contains a call-to-action button. This is a no-go for accessibility.

For more on handling complex interactive cards, check this out:  
[Accessibility Dos and Don’ts for Interactive Cards](https://livefront.com/writing/accessibility-dos-and-donts-for-interactive-cards/)

While CSS can make elements appear visually nested, your HTML **must not** be structured this way.  
Nesting interactive elements breaks accessibility standards.

- **Why:** This violates WCAG 2.1 – 4.1.2 Name, Role, Value, because assistive technologies can’t accurately determine the name, role, and state of nested controls.  
  For more info, see [Deque: Nested Interactive Controls](https://dequeuniversity.com/rules/axe/4.8/nested-interactive).

- **Note:** Using a `<div onClick={}>` to wrap a `<button>` (like `<div onClick={() => {}}><button></button></div>`) is also invalid. This is not semantic, and is still considered nested interactivity.
