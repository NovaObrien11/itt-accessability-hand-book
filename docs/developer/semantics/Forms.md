---
sidebar_position: 2
---

# Forms
Use proper labels, group related fields, and make errors clear.

## Labels
Every input needs a label - no exceptions.

**Label visibility:** Form labels must be visually adjacent to their corresponding form controls, but can be visually hidden as long as they are programmatically associated (e.g., using `sr-only` classes or `aria-label`). The key requirement is that the label is programmatically associated with the input, not that it's always visible.

```html
<!-- Good: Explicit label -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>

<!-- Good: Implicit label -->
<label>
  Email Address
  <input type="email" name="email" required>
</label>

<!-- Good: Visually hidden but programmatically associated -->
<label for="search" class="sr-only">Search</label>
<input type="search" id="search" name="search" aria-label="Search">

<!-- Good: Icon with visually hidden label -->
<label for="search-icon" class="sr-only">Search</label>
<input type="search" id="search-icon" name="search">
<span class="icon-search" aria-hidden="true"></span>

<!-- Bad: Placeholder as label -->
<input type="email" placeholder="Email Address" name="email">
```

## Required Fields
Mark required fields clearly for both visual and screen reader users.

```html
<!-- Good: Multiple indicators -->
<label for="name">
  Full Name <span aria-label="required">*</span>
</label>
<input type="text" id="name" name="name" required aria-describedby="name-error">
```

## Error Messages
Link errors to their inputs and make them discoverable.

```html
<!-- Good: Connected error -->
<label for="password">Password</label>
<input type="password" id="password" aria-describedby="password-error" aria-invalid="true">
<div id="password-error" role="alert">Password must be at least 8 characters</div>
```

## Fieldsets
Group related inputs, especially radio buttons and checkboxes.

```html
<!-- Good: Grouped options -->
<fieldset>
  <legend>Preferred Contact Method</legend>
  <input type="radio" id="email" name="contact" value="email">
  <label for="email">Email</label>
  <input type="radio" id="phone" name="contact" value="phone">
  <label for="phone">Phone</label>
</fieldset>
```

## Testing Form Labels

After implementing forms, test with screen readers to verify:
- Labels are announced correctly
- Group labels work for radio buttons and related inputs
- Instructions are programmatically associated
- Labels remain visible at all times

For comprehensive testing guidance, see the [Form Label Testing Guide](/docs/qa/form-label-testing).

## Pitfalls
- **aria-label vs label**: Use `<label>` for visible text, `aria-label` only when no visible label exists
- **Multiple labels**: One input, one label - don't use both `<label>` and `aria-label`
- **Generic error messages**: "Invalid input" tells users nothing useful
- **Placeholder as label**: Placeholders disappear when typing - always use visible labels
- **Missing group labels**: Radio buttons need both individual and group labels