---
sidebar_position: 2

---
# Links
Use links for all navigation—never use scripting or buttons to navigate users.

:::danger Bad Example
```
<div onClick={() => navigate('/products-page')}>
    Products Page
</div>
```
:::


:::success Good Example
```
<a href={'/products-page'}>
Products Page
</a>
```
:::

## Keyboard Accessibility

- Links should always be usable by keyboard (Tab/Shift+Tab, Enter).
- Ensure focus is visible for all links.

## Descriptive Link Text

- Use descriptive text for links—**avoid “click here” or “read more.”**
- Example: `<a href="/pricing">View our pricing plans</a>`

## Opens in a New Tab

- If a link opens in a new tab, inform the user (e.g., “(opens in new tab)”).
- If using `target="_blank"`, add `rel="noopener noreferrer"` for security.

## Don’t Nest

- `<a>` tags should never be nested inside another `<a>` or `<button>`.
- You can visually nest links using CSS, but keep the HTML structure flat and semantic.



## References

- [WCAG 2.1: Link Purpose (In Context) - 2.4.4](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [W3C: Links and Hypertext](https://www.w3.org/WAI/tutorials/page-structure/links/)
- [MDN: `<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [Deque: Best Practices for Links](https://www.deque.com/blog/give-links-meaningful-purpose/)
