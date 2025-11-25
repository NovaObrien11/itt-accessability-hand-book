---
sidebar_position: 4
description: Comprehensive guide to testing form labels, group labels, and instructions for accessibility
---

# Testing Form Labels and Instructions

All form inputs require programmatically associated labels. This guide covers how to test labels, group labels, and instructions to ensure they work correctly with screen readers and meet WCAG requirements.

## Testing Workflow

### Step 1: Automated Testing

Start with automated accessibility tools to catch obvious issues:

- **axe DevTools** - Identifies missing labels
- **WAVE** - Highlights unlabeled form fields
- **Lighthouse** - Flags form accessibility issues

**What automated tools catch:**
- Missing `label` elements
- Missing `aria-label` or `aria-labelledby` attributes
- Unassociated labels (label `for` doesn't match input `id`)

**What automated tools miss:**
- Label accuracy (does the label match the input?)
- Group labels for related inputs
- Instructions that aren't programmatically associated
- Visibility issues (disappearing labels)
- Color contrast problems

### Step 2: Manual Verification

After automated testing, verify manually with screen readers.

## Testing Individual Labels

### Label Accuracy

**Test:** Tab through all form inputs with a screen reader turned on.

**What to verify:**
- Each label accurately describes its input
- Labels are announced before the input type
- Labels make sense out of context

**Example screen reader output:**
```
"Email address, edit"
"Password, edit, protected"
"Phone number, edit"
```

**Common issues:**
- Label says "Email" but input is for "Phone number"
- Label is too generic ("Input", "Field")
- Label doesn't match the input's purpose

### Label Visibility

**Requirement:** Form labels must be visually adjacent to their corresponding form controls, but can be visually hidden as long as they are programmatically associated (e.g., using `sr-only` classes or `aria-label`).

**What to test:**
- Labels are programmatically associated with inputs (via `for`/`id`, implicit label, or `aria-label`/`aria-labelledby`)
- If visible, labels remain visible when user focuses on input
- If visible, labels remain visible when user types in input
- Visually hidden labels are still announced by screen readers

**Acceptable approaches:**
- **Visible labels** - Standard labels that are always visible
- **Visually hidden labels** - Labels hidden with CSS (e.g., `sr-only` class) but programmatically associated
- **aria-label** - When no visible label exists, `aria-label` provides the accessible name
- **Custom floating labels** - Labels that move but remain visible (must meet contrast requirements)

**Common failures:**
- **Placeholder text as only label** - Placeholders disappear when typing and may not be announced consistently
- **Missing programmatic association** - Label exists visually but isn't connected to input
- **Floating labels that disappear** - Labels that fade out completely when input has value

**Why placeholders fail:**
- Placeholder text disappears when user starts typing
- Users can't verify they're typing in the correct field
- Screen reader users may not hear placeholder text consistently

**Example of acceptable visually hidden label:**
```html
<!-- Visually hidden but programmatically associated -->
<label for="search" class="sr-only">Search</label>
<input type="search" id="search" name="search">

<!-- CSS for sr-only class -->
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
```

## Testing Group Labels

### When Group Labels Are Required

Group labels are needed when:
- Related inputs don't make complete sense on their own
- Multiple inputs form a single logical unit

**Common examples:**
- Radio button groups ("Yes" and "No" need the question)
- Checkbox groups (multiple related options)
- Related text inputs (phone number parts, date parts, SSN parts)

### Radio Button Groups

**Test:** Tab to the first radio button in a group.

**Expected screen reader output:**
```
"Do you like hot chocolate? Grouping. Yes, radio button, one of two."
```

**What to verify:**
- Group label is announced (the question)
- Individual button label is announced
- Total number of options is announced

**Test in reverse:** Shift+Tab to the last radio button in the group.

**Expected screen reader output:**
```
"Do you like hot chocolate? Grouping. No, radio button, one of two."
```

**Implementation:**
```html
<fieldset>
  <legend>Do you like hot chocolate?</legend>
  <input type="radio" id="yes" name="hot-chocolate" value="yes">
  <label for="yes">Yes</label>
  <input type="radio" id="no" name="hot-chocolate" value="no">
  <label for="no">No</label>
</fieldset>
```

### Related Text Inputs

**Example:** Phone number split into three fields

**Test:** Tab through each field.

**Expected screen reader output:**
```
"Phone number, grouping. Area code, edit"
"Phone number, grouping. Exchange, edit"
"Phone number, grouping. Number, edit"
```

**Implementation:**
```html
<fieldset>
  <legend>Phone Number</legend>
  <label for="area-code">Area Code</label>
  <input type="tel" id="area-code" name="area-code" maxlength="3">
  <label for="exchange">Exchange</label>
  <input type="tel" id="exchange" name="exchange" maxlength="3">
  <label for="number">Number</label>
  <input type="tel" id="number" name="number" maxlength="4">
</fieldset>
```

### Table or Grid Headers as Labels

Some forms use table/grid structures where row or column headers act as labels.

**Test:** Tab to each input in the grid.

**What to verify:**
- All relevant column headers are announced
- All relevant row headers are announced
- Headers provide sufficient context

**Example:** A matrix of checkboxes with row and column headers

**Expected screen reader output:**
```
"Row: Monday, Column: Morning, checkbox, unchecked"
```

## Testing Label Color Contrast

**Requirement:** Labels must meet color contrast guidelines (WCAG 1.4.3).

- **Body text labels**: 4.5:1 contrast ratio
- **Large text labels**: 3:1 contrast ratio

**What to test:**
- Label text color vs. background color
- Placeholder text color vs. background color (if used)
- Custom floating label text color vs. background color

**Common issues:**
- Low contrast labels (light gray on white)
- Default placeholder gray is too light (fails contrast)
- Labels fade to low contrast when input is focused

**Testing:**
1. Use automated tools to flag potential issues
2. Manually verify with color contrast checker
3. Test with background images or gradients (may need eyedropper tool)

For detailed color contrast testing, see the [Color Contrast Testing Guide](/docs/qa/color-contrast-testing).

## Testing Icons as Labels

**When icons are acceptable:**
- Icon has a text alternative for screen reader users
- Icon is universally understood (e.g., search magnifying glass)
- Icon is supplemented with text (recommended but not required)

**Test:** Tab to input with icon-only label.

**Expected screen reader output:**
```
"Search, edit"
```

**Implementation:**
```html
<!-- Icon with visually hidden label -->
<label for="search" class="visually-hidden">Search</label>
<input type="search" id="search" aria-label="Search">
<span class="icon-search" aria-hidden="true"></span>
```

**Usability consideration:**
Not all icons are universally understood. Consider supplementing with text for better usability, even if not required for accessibility.

**Special case:** Icon serves as visual label for both button and input

If an icon visually labels both a search button and search input, the input still needs its own programmatic label (can be visually hidden with `aria-label`).

## Testing Instructions

### Programmatically Associated Instructions

**Requirement:** Instructions must be programmatically associated with their inputs.

**Test:** Tab to input with instructions.

**Expected screen reader output:**
```
"Issue number, edit, Do not include dashes or spaces"
```

**What to verify:**
- Label is announced first
- Instructions are announced immediately after
- Instructions are clear and helpful

**If instructions aren't associated:**
Screen reader will only announce the label, missing critical formatting requirements.

**Implementation:**
```html
<label for="issue-number">Issue number</label>
<input 
  type="text" 
  id="issue-number" 
  aria-describedby="issue-instructions"
>
<p id="issue-instructions">Do not include dashes or spaces</p>
```

### When Instructions Are Needed

Provide instructions for:
- Format requirements (date format, phone format)
- Special rules (password requirements, character limits)
- Examples (email format, username rules)
- Context (what the field is for)

## Testing Checklist

### Automated Testing
- [ ] Run automated accessibility tool
- [ ] Review all "missing label" violations
- [ ] Fix all definite violations

### Manual Label Testing
- [ ] Tab through all form inputs with screen reader
- [ ] Verify each label accurately describes its input
- [ ] Verify labels are announced before input type
- [ ] Verify labels make sense out of context

### Visible Labels
- [ ] All labels are visible on screen
- [ ] Labels remain visible when input is focused
- [ ] Labels remain visible when user types
- [ ] No placeholder text used as only label

### Group Labels
- [ ] Radio button groups have group labels
- [ ] Checkbox groups have group labels (if needed)
- [ ] Related text inputs have group labels
- [ ] Group label is announced with individual labels
- [ ] Test forward navigation (Tab)
- [ ] Test reverse navigation (Shift+Tab)

### Color Contrast
- [ ] Label text meets contrast requirements (4.5:1 for body text)
- [ ] Placeholder text meets contrast (if used)
- [ ] Custom floating labels meet contrast
- [ ] Tested with color contrast checker

### Icons as Labels
- [ ] Icons have text alternatives
- [ ] Screen reader announces text alternative
- [ ] Icon is universally understood or has text supplement

### Instructions
- [ ] Instructions are programmatically associated (`aria-describedby`)
- [ ] Screen reader announces instructions with input
- [ ] Instructions are clear and helpful
- [ ] Instructions appear for fields with special requirements

## Common Issues

### Missing Labels
**Problem:** Input has no label  
**Solution:** Add `<label>` element or `aria-label` attribute

### Placeholder as Label
**Problem:** Only placeholder text, no visible label  
**Solution:** Add visible label that persists

### Inaccurate Labels
**Problem:** Label doesn't match input purpose  
**Solution:** Update label text to accurately describe input

### Missing Group Labels
**Problem:** Radio buttons "Yes" and "No" without question  
**Solution:** Add `<fieldset>` and `<legend>` for group

### Instructions Not Associated
**Problem:** Instructions exist but aren't announced  
**Solution:** Use `aria-describedby` to link instructions to input

### Low Contrast Labels
**Problem:** Label text too light to read  
**Solution:** Increase contrast ratio to meet WCAG requirements

### Hidden Labels
**Problem:** Labels exist but aren't visible  
**Solution:** Make labels visible or ensure they're truly decorative

## Resources

- [WCAG 2.2 - 3.3.2 Labels or Instructions](https://www.w3.org/TR/WCAG22/#labels-or-instructions)
- [WCAG 2.2 - 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value)
- [MDN: HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
- [Forms Implementation Guide](/docs/developer/semantics/Forms)

