

# Keyboard Navigation
Tab order should be logical, focus should be visible, and users shouldn't get trapped.

## Tab Order
- Elements receive focus in **DOM order**, not visual order
- Use `tabindex="0"` to add elements to tab order
- Use `tabindex="-1"` to remove from tab order but allow programmatic focus
- **Never** use positive tabindex values (1, 2, 3...) - they break natural order

## Focus Traps
Modals and dropdowns should trap focus inside them.

```javascript
// Good: Focus stays in modal
const modal = document.querySelector('[role="dialog"]');
const focusableElements = modal.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
});
```

## Skip Links
First focusable element should be a skip link to main content.

```html
<!-- Good: Skip to main content -->
<a href="#main" class="skip-link">Skip to main content</a>
<nav>...</nav>
<main id="main">...</main>
```

## Pitfalls
- **CSS transforms/positioning** can break visual vs DOM order
- **Invisible focused elements** - always style `:focus` states
- **JavaScript hijacking** - don't prevent default Tab behavior unless you're managing focus yourself
