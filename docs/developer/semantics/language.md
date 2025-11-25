---
sidebar_position: 9
description: Using lang attribute to specify page and content language
---

# Language Attributes

Use the `lang` attribute to specify the language of content. This helps screen readers pronounce words correctly and allows browsers to apply language-specific features.

## WCAG Requirements

- **3.1.1 Language of Page (Level A)**: The default human language of each web page must be programmatically determined.
- **3.1.2 Language of Parts (Level AA)**: The human language of each passage or phrase in the content can be programmatically determined.

## The Answer: Which Languages Need to Be Marked?

**Both languages need to be explicitly designated:**

1. **The main language** (English) must be set on the `<html>` element
2. **Any parts in a different language** (French) must be marked on those specific elements

## Implementation

### Main Page Language (Required - Level A)

Set the default language on the `<html>` element:

```html
<html lang="en">
```

This tells assistive technologies that the page is primarily in English.

### Language Changes (Required - Level AA)

Mark any content in a different language:

```html
<html lang="en">
  <head>
    <title>Welcome to Our Site</title>
  </head>
  <body>
    <p>This page is mostly in English.</p>
    <p lang="fr">Mais cette phrase est en français.</p>
    <p>And we're back to English.</p>
  </body>
</html>
```

## Common Use Cases

### Phrases or Quotes

```html
<p>She said <span lang="es">"¡Hola!"</span> when she arrived.</p>
```

### Proper Names

Proper names don't need language changes, but foreign phrases do:

```html
<p>Visit <span lang="fr">Place de la Concorde</span> in Paris.</p>
```

### Entire Sections

```html
<html lang="en">
  <body>
    <section>
      <h2>English Content</h2>
      <p>This section is in English.</p>
    </section>
    
    <section lang="fr">
      <h2>Contenu en français</h2>
      <p>Cette section est en français.</p>
    </section>
  </body>
</html>
```

## Language Codes

Use ISO 639-1 language codes:

- `en` - English
- `fr` - French
- `es` - Spanish
- `de` - German
- `zh` - Chinese
- `ja` - Japanese
- `ar` - Arabic

For regional variants, use ISO 639-1 with ISO 3166-1 country codes:

- `en-US` - English (United States)
- `en-GB` - English (United Kingdom)
- `fr-CA` - French (Canada)
- `zh-CN` - Chinese (Simplified, China)
- `zh-TW` - Chinese (Traditional, Taiwan)

## Why This Matters

Without proper language attributes:

- **Screen readers** may mispronounce words
- **Translation tools** may not work correctly
- **Browsers** can't apply language-specific features (spell check, hyphenation)
- **Search engines** may not index content correctly

## Common Mistakes

:::danger Wrong
```html
<html>
  <body>
    <p>This is English.</p>
    <p>Mais cette phrase est en français.</p>
  </body>
</html>
```
No language specified at all.
:::

:::danger Wrong
```html
<html lang="en">
  <body>
    <p>This is English.</p>
    <p>Mais cette phrase est en français.</p>
  </body>
</html>
```
Main language set, but French phrase not marked.
:::

:::tip Correct
```html
<html lang="en">
  <body>
    <p>This is English.</p>
    <p lang="fr">Mais cette phrase est en français.</p>
  </body>
</html>
```
Both languages properly marked.
:::

## Testing

### Manual Testing

1. **Check HTML source**: Verify `<html lang="...">` is present
2. **Screen reader test**: Listen to pronunciation of foreign words
3. **Browser tools**: Use browser DevTools to inspect language attributes

### Automated Testing

- **axe-core**: Detects missing `lang` attribute on `<html>` element
- **WAVE**: Flags missing language declarations
- **Lighthouse**: Includes language attribute in accessibility audit

## Checklist

- [ ] `<html>` element has a `lang` attribute (Level A requirement)
- [ ] All content in languages other than the default is marked with `lang` (Level AA requirement)
- [ ] Language codes use correct ISO 639-1 format
- [ ] Regional variants use correct format (e.g., `en-US`, `fr-CA`)
- [ ] Screen reader pronunciation is correct for foreign words

## Resources

- [WCAG 2.2 - 3.1.1 Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page)
- [WCAG 2.2 - 3.1.2 Language of Parts](https://www.w3.org/TR/WCAG22/#language-of-parts)
- [MDN: HTML lang attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [ISO 639-1 Language Codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

