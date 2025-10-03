
# Inputs
Use the right input type and connect labels, errors, and descriptions properly.

## Input Types
Use specific input types - they provide better mobile keyboards and validation.

```html
<!-- Good: Specific types -->
<input type="email" name="email">     <!-- @ key on mobile -->
<input type="tel" name="phone">       <!-- Number pad on mobile -->
<input type="url" name="website">     <!-- .com key on mobile -->
<input type="number" name="age">      <!-- Number input with spinners -->
<input type="date" name="birthday">   <!-- Date picker -->

<!-- Bad: Generic text for everything -->
<input type="text" name="email">
<input type="text" name="phone">
```

## Connecting Related Content
Link inputs to their labels, errors, and help text.

```html
<!-- Good: Everything connected -->
<label for="password">Password</label>
<input 
  type="password" 
  id="password" 
  aria-describedby="password-help password-error"
  aria-invalid="true"
>
<p id="password-help">Must be at least 8 characters</p>
<p id="password-error" role="alert">Password is too short</p>
```

## Required vs Optional
Mark required fields clearly, or mark optional ones if most are required.

```html
<!-- Good: Clear requirement -->
<label for="name">
  Full Name <span aria-label="required">*</span>
</label>
<input type="text" id="name" required>

<!-- Good: When most are required -->
<label for="nickname">Nickname <span>(optional)</span></label>
<input type="text" id="nickname">
```

## Pitfalls
- **Missing labels**: Every input needs a label, no exceptions
- **Placeholder as label**: Placeholders disappear when typing
- **Generic input types**: Use specific types for better UX and validation