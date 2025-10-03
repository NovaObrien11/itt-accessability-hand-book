---
sidebar_position: 2
---

# Forms
Use proper labels, group related fields, and make errors clear.

## Labels
Every input needs a label - no exceptions.

```html
<!-- Good: Explicit label -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>

<!-- Good: Implicit label -->
<label>
  Email Address
  <input type="email" name="email" required>
</label>

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

## Pitfalls
- **aria-label vs label**: Use `<label>` for visible text, `aria-label` only when no visible label exists
- **Multiple labels**: One input, one label - don't use both `<label>` and `aria-label`
- **Generic error messages**: "Invalid input" tells users nothing useful