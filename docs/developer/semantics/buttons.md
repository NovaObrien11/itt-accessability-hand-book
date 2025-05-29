# Buttons

## Pitfalls

A common pitfall with buttons is **nesting interactive elements**—like placing a `<button>` inside another `<button>`. Think of a clickable card component that also contains a call-to-action button. This is a no-go for accessibility.

For more on handling complex interactive cards, check this out:  
[Accessibility Dos and Don’ts for Interactive Cards](https://livefront.com/writing/accessibility-dos-and-donts-for-interactive-cards/)

While CSS can make elements appear visually nested, your HTML **must not** be structured this way.  
Nesting interactive elements breaks accessibility standards.

- **Note:** Using a `<div onClick={}>` to wrap a `<button>` (like `<div onClick={() => {}}><button></button></div>`) is also invalid. This is not semantic, and is still considered nested interactivity.

[Deque Nested Interactive](https://dequeuniversity.com/rules/axe/4.8/nested-interactive)


