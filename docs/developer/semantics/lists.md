

---
sidebar_position: 4
---

# Lists
Use semantic lists for grouped content - screen readers announce item counts and navigation.

## When to Use Lists
If you're styling content to look like a list, make it an actual list.

```html
<!-- Bad: Fake list -->
<div>
  <div>• Item 1</div>
  <div>• Item 2</div>
  <div>• Item 3</div>
</div>

<!-- Good: Real list -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Navigation Lists
Use lists for navigation - screen readers can jump between items.

```html
<!-- Good: Navigation as list -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

## Ordered vs Unordered
Use `<ol>` when sequence matters, `<ul>` when it doesn't.

```html
<!-- Good: Steps in order -->
<ol>
  <li>Preheat oven to 350°F</li>
  <li>Mix ingredients</li>
  <li>Bake for 25 minutes</li>
</ol>

<!-- Good: Items without order -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ul>
```

## Nested Lists
Nest lists properly for hierarchical content.

```html
<!-- Good: Proper nesting -->
<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```

## Pitfalls
- **CSS list-style: none without role**: If you remove bullets, consider if it's still semantically a list
- **Fake lists with divs**: Screen readers can't navigate or announce counts
- **Lists for layout only**: Don't use lists just for CSS styling if content isn't actually grouped items

