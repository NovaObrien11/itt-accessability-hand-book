---
sidebar_position: 10
description: Making iframes accessible with proper title attributes
---

# Iframes

Iframes (inline frames) embed content from another page into your page. When implemented correctly, iframes typically don't cause significant accessibility issues, but they do require proper labeling.

## WCAG Requirements

- **4.1.2 Name, Role, Value (Level A)**: All user interface components must have accessible names
- **2.4.1 Bypass Blocks (Level A)**: Users must be able to skip repetitive content

## The Title Attribute

### Why Iframes Need Titles

Screen readers need to identify what content is embedded in an iframe. The `title` attribute provides this information.

### What Makes a Good Iframe Title?

The title should clearly describe the purpose or content of the embedded page. Good titles are:
- **Descriptive**: Explain what the iframe contains
- **Concise**: Brief but informative
- **Specific**: Not generic like "iframe" or "embedded content"

### Examples of Good Iframe Titles

```html
<iframe 
  src="/checkout" 
  title="Shopping cart checkout process"
></iframe>

<iframe 
  src="/login" 
  title="Login authentication page"
></iframe>

<iframe 
  src="/payment-form" 
  title="Payment form"
></iframe>

<iframe 
  src="https://example.com/widget" 
  title="Product comparison widget"
></iframe>
```

## Matching Page Title and Iframe Title

### The Screen Reader Behavior

Screen readers may announce either:
- The `title` attribute on the iframe element, or
- The page title (`<title>`) of the source page being embedded

This inconsistency can confuse users if the two titles don't match.

### Best Practice: Keep Titles Consistent

To avoid confusion, ensure the iframe `title` attribute matches the page title of the embedded page.

**Example:**

**Embedded page (`checkout.html`):**
```html
<html>
  <head>
    <title>Shopping cart checkout process</title>
  </head>
  <body>
    <!-- Checkout form content -->
  </body>
</html>
```

**Main page with iframe:**
```html
<iframe 
  src="/checkout.html" 
  title="Shopping cart checkout process"
></iframe>
```

Both titles match, so screen readers will announce consistent information regardless of which title they use.

### When Titles Don't Match

**Problem:**
```html
<!-- Embedded page title -->
<title>Checkout</title>

<!-- Iframe title attribute -->
<iframe src="/checkout" title="Shopping cart checkout process"></iframe>
```

**Issue:** Screen reader might announce "Checkout" or "Shopping cart checkout process" inconsistently, causing confusion.

**Solution:** Make them match:
```html
<!-- Embedded page title -->
<title>Shopping cart checkout process</title>

<!-- Iframe title attribute -->
<iframe src="/checkout" title="Shopping cart checkout process"></iframe>
```

## Common Use Cases

### Embedded Forms

```html
<iframe 
  src="/contact-form" 
  title="Contact form"
></iframe>
```

### Third-Party Widgets

```html
<iframe 
  src="https://widget.example.com" 
  title="Weather forecast widget"
></iframe>
```

### Payment Processing

```html
<iframe 
  src="/payment" 
  title="Secure payment processing"
></iframe>
```

### Video Embeds

For video embeds, use the video player's built-in accessibility features. The iframe title should describe the video content:

```html
<iframe 
  src="https://www.youtube.com/embed/video-id" 
  title="Introduction to web accessibility tutorial"
></iframe>
```

## Implementation Checklist

- [ ] Every iframe has a `title` attribute
- [ ] Title describes the purpose or content of the iframe
- [ ] Title is concise and specific
- [ ] Embedded page has a proper `<title>` element
- [ ] Iframe `title` attribute matches the embedded page `<title>` when possible
- [ ] Title makes sense out of context

## Common Mistakes

:::danger Bad Examples

**Missing title:**
```html
<iframe src="/checkout"></iframe>
```

**Generic title:**
```html
<iframe src="/checkout" title="iframe"></iframe>
```

**Mismatched titles:**
```html
<!-- Page title: "Checkout" -->
<!-- Iframe title: "Shopping cart" -->
<iframe src="/checkout" title="Shopping cart"></iframe>
```
:::

:::tip Good Examples

**Descriptive, matching titles:**
```html
<!-- Embedded page -->
<title>Shopping cart checkout process</title>

<!-- Iframe -->
<iframe 
  src="/checkout" 
  title="Shopping cart checkout process"
></iframe>
```
:::

## Testing

### Screen Reader Testing

1. Navigate to the page with the iframe
2. Listen to how the iframe is announced
3. Verify the announcement is clear and descriptive
4. Check if the announcement matches the embedded page title

### Manual Testing

1. Inspect the iframe element
2. Verify `title` attribute is present
3. Check the embedded page has a `<title>` element
4. Ensure titles match or are at least consistent in meaning

## Resources

- [WCAG 2.2 - 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value)
- [MDN: iframe element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
- [WebAIM: iframes](https://webaim.org/techniques/frames/)

