
---
sidebar_position: 6
description: Writing clear, descriptive link text for accessibility
---

# Link Text

Link text is the clickable text in a hyperlink that directs users to another page or resource. Good link text is clear, descriptive, and makes sense out of context.

## WCAG Requirement

**2.4.4 Link Purpose (In Context) (Level A)**: The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context.

## Why Good Link Text Matters

Screen reader users often navigate by jumping from link to link, reading only the link text. If link text is generic or unclear, users can't understand where links will take them.

**Example of screen reader navigation:**
- "Link: Click here"
- "Link: Click here"
- "Link: Read more"
- "Link: Read more"

This is useless. Users can't tell which link goes where.

## The Golden Rule

**Link text must convey its purpose without relying on nearby text.**

Screen reader users often:
- Navigate by jumping from link to link
- Use a "links list" that shows all links on a page
- Read links without surrounding context

**WCAG Requirement:** The purpose of each link must be determinable from the link text alone, or from the link text together with its programmatically determined link context. Links cannot rely on visual context or nearby text that isn't programmatically associated.

## Links Must Stand Alone

### The Problem: Relying on Nearby Text

When links rely on surrounding text for meaning, screen reader users who navigate by links list lose that context. The link text itself must be self-contained and descriptive.

### Example 1: Generic Link with Context

:::danger Bad Example: Link Relies on Nearby Text

```html
<p>Our company was founded in 2020. <a href="/about">Click here</a> to learn more about our history.</p>
<p>We offer three pricing tiers. <a href="/pricing">Click here</a> to see our plans.</p>
```

**What screen reader users hear in links list:**
- "Link: Click here"
- "Link: Click here"

**Problem:** Both links say the same thing. Users can't tell which link goes where because the context ("our history" vs "our plans") is in the surrounding text, not in the link itself.
:::

:::tip Good Example: Link Contains All Information

```html
<p>Our company was founded in 2020. <a href="/about">Learn about our company history</a>.</p>
<p>We offer three pricing tiers. <a href="/pricing">View our pricing plans</a>.</p>
```

**What screen reader users hear in links list:**
- "Link: Learn about our company history"
- "Link: View our pricing plans"

**Solution:** Each link text is self-contained and describes its destination. No surrounding context needed.
:::

### Example 2: "Read More" Links

:::danger Bad Example: Multiple "Read More" Links

```html
<article>
  <h2>Web Accessibility Basics</h2>
  <p>Accessibility is crucial for inclusive design...</p>
  <a href="/blog/accessibility-basics">Read more</a>
</article>

<article>
  <h2>ARIA Best Practices</h2>
  <p>ARIA can enhance accessibility when used correctly...</p>
  <a href="/blog/aria-practices">Read more</a>
</article>
```

**What screen reader users hear in links list:**
- "Link: Read more"
- "Link: Read more"

**Problem:** Both links are identical. Users can't distinguish which article each "Read more" refers to.
:::

:::tip Good Example: Descriptive Link Text

```html
<article>
  <h2>Web Accessibility Basics</h2>
  <p>Accessibility is crucial for inclusive design...</p>
  <a href="/blog/accessibility-basics">Read more about web accessibility basics</a>
</article>

<article>
  <h2>ARIA Best Practices</h2>
  <p>ARIA can enhance accessibility when used correctly...</p>
  <a href="/blog/aria-practices">Read more about ARIA best practices</a>
</article>
```

**What screen reader users hear in links list:**
- "Link: Read more about web accessibility basics"
- "Link: Read more about ARIA best practices"

**Solution:** Each link text includes the article topic, making them unique and understandable without context.
:::

### Example 3: "Here" Links

:::danger Bad Example: Link is Just "Here"

```html
<p>Our accessibility policy is available <a href="/policy">here</a>.</p>
<p>You can download the report <a href="/report.pdf">here</a>.</p>
```

**What screen reader users hear in links list:**
- "Link: here"
- "Link: here"

**Problem:** The word "here" provides no information. Users can't tell what "here" refers to.
:::

:::tip Good Example: Link Contains the Description

```html
<p><a href="/policy">View our accessibility policy</a>.</p>
<p><a href="/report.pdf">Download the annual report (PDF)</a>.</p>
```

**What screen reader users hear in links list:**
- "Link: View our accessibility policy"
- "Link: Download the annual report (PDF)"

**Solution:** The link text itself describes what it links to. No need for "here" or surrounding context.
:::

### Example 4: Links in Lists or Cards

:::danger Bad Example: Generic Links in Cards

```html
<div class="card">
  <h3>Product A</h3>
  <p>Description of product A...</p>
  <a href="/products/a">Learn more</a>
</div>

<div class="card">
  <h3>Product B</h3>
  <p>Description of product B...</p>
  <a href="/products/b">Learn more</a>
</div>
```

**What screen reader users hear in links list:**
- "Link: Learn more"
- "Link: Learn more"

**Problem:** Even though the cards have headings, screen reader users navigating by links list won't hear those headings. The links are indistinguishable.
:::

:::tip Good Example: Links Include Product Name

```html
<div class="card">
  <h3>Product A</h3>
  <p>Description of product A...</p>
  <a href="/products/a">Learn more about Product A</a>
</div>

<div class="card">
  <h3>Product B</h3>
  <p>Description of product B...</p>
  <a href="/products/b">Learn more about Product B</a>
</div>
```

**What screen reader users hear in links list:**
- "Link: Learn more about Product A"
- "Link: Learn more about Product B"

**Solution:** Each link text includes the product name, making them unique and understandable without the card context.
:::

## Bad Link Text Examples

:::danger Bad Examples

**Generic phrases:**
- "Click here"
- "Read more"
- "Learn more"
- "Here"
- "More info"
- "See details"

**Why they fail:**
- Don't describe the destination
- All sound the same in a links list
- Require surrounding context to understand

**Example:**
```html
<p>Our company was founded in 2020. <a href="/about">Click here</a> to learn more.</p>
<p>We offer three pricing tiers. <a href="/pricing">Click here</a> to see options.</p>
```

In a links list, both appear as "Link: Click here" - impossible to distinguish.
:::

## Good Link Text Examples

:::tip Good Examples

**Descriptive and specific:**
- "View our pricing plans"
- "Read the full article about accessibility"
- "Download the accessibility checklist (PDF)"
- "Contact our support team"
- "Learn about our company history"

**Why they work:**
- Describe the destination or action
- Make sense in a links list
- Don't require surrounding context

**Example:**
```html
<p>Our company was founded in 2020. <a href="/about">Learn about our company history</a>.</p>
<p>We offer three pricing tiers. <a href="/pricing">View our pricing plans</a>.</p>
```

In a links list:
- "Link: Learn about our company history"
- "Link: View our pricing plans"

Clear and distinguishable!
:::

## Best Practices

### 1. Be Specific and Descriptive

**Bad:**
```html
<a href="/blog/post-1">Read more</a>
```

**Good:**
```html
<a href="/blog/post-1">Read the full article about web accessibility</a>
```

### 2. Include the Action or Destination

**Bad:**
```html
<a href="/downloads/guide.pdf">Guide</a>
```

**Good:**
```html
<a href="/downloads/guide.pdf">Download the accessibility guide (PDF)</a>
```

### 3. Make Each Link Unique

**Bad:**
```html
<a href="/products">Learn more</a>
<a href="/services">Learn more</a>
<a href="/about">Learn more</a>
```

**Good:**
```html
<a href="/products">Learn more about our products</a>
<a href="/services">Learn more about our services</a>
<a href="/about">Learn more about our company</a>
```

### 4. Indicate File Types and External Links

**Good:**
```html
<a href="/report.pdf">Download the annual report (PDF)</a>
<a href="https://example.com" target="_blank">Visit Example.com (opens in new tab)</a>
```

### 5. Use the Full Description, Not Just "Here"

**Bad:**
```html
<p>Our accessibility policy is available <a href="/policy">here</a>.</p>
```

**Good:**
```html
<p><a href="/policy">View our accessibility policy</a>.</p>
```

Or if you must keep "here":
```html
<p>Our <a href="/policy">accessibility policy</a> is available here.</p>
```

## Special Cases

### Links That Open in New Tabs

Always indicate when a link opens in a new tab or window:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Example.com (opens in new tab)
</a>
```

### Download Links

Indicate file type and that it's a download:

```html
<a href="/document.pdf" download>Download the guide (PDF, 2MB)</a>
```

### Email Links

Make it clear it's an email:

```html
<a href="mailto:support@example.com">Email our support team</a>
```

### Phone Links

Make it clear it's a phone number:

```html
<a href="tel:+1234567890">Call us at (123) 456-7890</a>
```

## Testing Link Text

### Screen Reader Test

1. Use a screen reader (VoiceOver, NVDA, JAWS)
2. Navigate using "Links List" or "Links" command
3. Listen to all links read aloud
4. Can you tell where each link goes without context?

### Links List Test

Most screen readers have a links list feature:
- **VoiceOver**: Ctrl+Option+U (then select Links)
- **NVDA**: Insert+F7 (Elements List, then Links)
- **JAWS**: Insert+F7 (Links List)

If multiple links say the same thing, they fail.

## Common Mistakes

### 1. Using URLs as Link Text

**Bad:**
```html
<a href="/products">https://example.com/products</a>
```

**Good:**
```html
<a href="/products">View our products</a>
```

### 2. Using Only Icons

**Bad:**
```html
<a href="/settings">
  <svg aria-hidden="true">...</svg>
</a>
```

**Good:**
```html
<a href="/settings">
  <svg aria-hidden="true">...</svg>
  <span class="sr-only">Account settings</span>
</a>
```

Or:
```html
<a href="/settings" aria-label="Account settings">
  <svg aria-hidden="true">...</svg>
</a>
```

### 3. Duplicate Link Text for Different Destinations

**Bad:**
```html
<a href="/blog/post-1">Read article</a>
<a href="/blog/post-2">Read article</a>
```

**Good:**
```html
<a href="/blog/post-1">Read article: Web Accessibility Basics</a>
<a href="/blog/post-2">Read article: ARIA Best Practices</a>
```

## Checklist

- [ ] Link text describes the destination or action
- [ ] Link text makes sense when read out of context
- [ ] No generic phrases like "click here" or "read more"
- [ ] Each link on a page has unique text
- [ ] File types are indicated (PDF, DOCX, etc.)
- [ ] External links are marked (opens in new tab)
- [ ] Links are tested with screen reader links list
- [ ] Icon-only links have accessible labels

## Resources

- [WCAG 2.2 - 2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context)
- [W3C: Links and Hypertext](https://www.w3.org/WAI/tutorials/page-structure/links/)
- [WebAIM: Links and Hypertext](https://webaim.org/techniques/hypertext/)
- [Deque: Best Practices for Links](https://www.deque.com/blog/give-links-meaningful-purpose/)