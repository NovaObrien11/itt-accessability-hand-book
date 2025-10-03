---
sidebar_position: 3
---

# Skip Links
Let keyboard users bypass repetitive navigation.

## Basic Implementation
First focusable element should skip to main content.

```html
<!-- Good: Skip link -->
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <nav>
    <!-- Navigation items -->
  </nav>
  <main id="main">
    <!-- Main content -->
  </main>
</body>
```

## CSS Pattern
Hide visually but show on focus.

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

## Multiple Skip Links
For complex layouts, provide multiple skip options.

```html
<!-- Good: Multiple skip options -->
<a href="#nav" class="skip-link">Skip to navigation</a>
<a href="#main" class="skip-link">Skip to main content</a>
<a href="#footer" class="skip-link">Skip to footer</a>
```

## Focus Management
Ensure the target element can receive focus.

```javascript
// Good: Ensure target is focusable
document.getElementById('main').setAttribute('tabindex', '-1');
document.getElementById('main').focus();
```

## Pitfalls
- **Invisible skip links**: Must be visible when focused
- **Broken anchors**: Target element must exist and be focusable
- **Missing skip links**: Every page with navigation needs them