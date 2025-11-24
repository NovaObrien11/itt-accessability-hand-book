---
sidebar_position: 2
description: WCAG 2.2 AA requirements for users with dyslexia
---

# Dyslexia

Dyslexia affects reading, writing, and spelling abilities. Approximately 10-15% of the population has dyslexia. Following WCAG 2.2 AA guidelines makes content more readable for users with dyslexia.

## Why This Matters

People with dyslexia may experience:
- Difficulty decoding text
- Slower reading speed
- Challenges with word recognition
- Visual stress from certain fonts and layouts
- Difficulty tracking lines of text

WCAG 2.2 AA criteria address these challenges through typography, spacing, and content structure requirements.

## WCAG 2.2 AA Requirements

### 1.4.3 Contrast (Minimum) (Level AA)

**Requirement:** Text must have a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.

**Why it helps:** Low contrast makes text harder to decode for users with dyslexia.

**Implementation:**
- Body text: Minimum 4.5:1 contrast ratio
- Large text (18pt+ regular, 14pt+ bold): Minimum 3:1 contrast ratio
- Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 1.4.4 Resize Text (Level AA)

**Requirement:** Text can be resized up to 200% without loss of content or functionality.

**Why it helps:** Larger text is easier to read for users with dyslexia.

**Implementation:**
- Use relative units (em, rem, %) instead of fixed pixels
- Avoid `overflow: hidden` on text containers
- Test at 200% zoom level

### 1.4.10 Reflow (Level AA)

**Requirement:** Content can be presented without loss of information or functionality at a width of 320 CSS pixels.

**Why it helps:** Prevents horizontal scrolling and allows text to reflow at larger sizes.

**Implementation:**
- Avoid fixed-width containers
- Use responsive design principles
- Test at 400% zoom (equivalent to 1280px width)

### 1.4.12 Text Spacing (Level AA)

**Requirement:** No loss of content or functionality when users adjust:
- Line height to at least 1.5 times the font size
- Paragraph spacing to at least 2 times the font size
- Letter spacing to at least 0.12 times the font size
- Word spacing to at least 0.16 times the font size

**Why it helps:** Increased spacing improves readability for users with dyslexia.

**Implementation:**
```css
p {
  line-height: 1.5;
  letter-spacing: 0.12em;
  word-spacing: 0.16em;
  margin-bottom: 2em;
}
```

### 2.4.6 Headings and Labels (Level AA)

**Requirement:** Headings and labels describe topic or purpose.

**Why it helps:** Clear structure helps users with dyslexia navigate and understand content.

**Implementation:**
- Use descriptive headings that summarize content
- Label form fields clearly
- Avoid generic labels like "Click here"

### 3.1.3 Unusual Words (Level AAA)

**Note:** This is Level AAA, but helpful for dyslexia.

**Requirement:** Provide definitions for unusual words, phrases, or idioms.

**Why it helps:** Reduces cognitive load when encountering unfamiliar terms.

## Design Guidelines

### Typography

- **Font choice:** Use sans-serif fonts (Arial, Verdana, Open Sans)
- **Font size:** Minimum 12pt (16px) for body text
- **Line height:** 1.5 to 1.6 times font size
- **Line length:** 60-70 characters per line
- **Avoid:** Italics, all caps, justified text, decorative fonts

### Spacing

- **Letter spacing:** Slightly increased (0.12em)
- **Word spacing:** Adequate spacing between words
- **Paragraph spacing:** Clear separation between paragraphs
- **White space:** Generous margins and padding

### Color & Contrast

- **High contrast:** Ensure 4.5:1 minimum for body text
- **Background:** Avoid pure white; use off-white or cream
- **Text color:** Dark gray (#333) often better than pure black
- **Avoid:** Red text on green background (colorblind issue)

### Content Structure

- **Short paragraphs:** Break up long blocks of text
- **Bullet points:** Use lists for key information
- **Headings:** Clear hierarchy (h1, h2, h3)
- **Plain language:** Avoid jargon and complex sentences

## Implementation Checklist

- [ ] Text contrast meets 4.5:1 for body text, 3:1 for large text
- [ ] Text can be resized to 200% without horizontal scrolling
- [ ] Content reflows at 320px width
- [ ] Text spacing can be adjusted (line height, letter spacing, word spacing)
- [ ] Headings are descriptive and form a logical hierarchy
- [ ] Font size is at least 16px for body text
- [ ] Line height is 1.5-1.6 times font size
- [ ] Sans-serif font is used
- [ ] Paragraphs are kept short
- [ ] Plain language is used throughout

## Code Example: Dyslexia-Friendly Typography

```css
body {
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #fafafa;
  letter-spacing: 0.05em;
  word-spacing: 0.1em;
}

p {
  max-width: 65ch;
  margin-bottom: 1.5em;
}

h1, h2, h3 {
  font-weight: 600;
  line-height: 1.4;
  margin-top: 1.5em;
  margin-bottom: 0.75em;
}

@media (prefers-reduced-motion: no-preference) {
  body {
    letter-spacing: 0.12em;
    word-spacing: 0.16em;
  }
}
```

## Testing

### Manual Testing

1. **Resize test:** Zoom to 200% and verify no horizontal scrolling
2. **Contrast test:** Use WebAIM Contrast Checker on all text
3. **Spacing test:** Adjust text spacing using browser extensions
4. **Readability test:** Read content aloud to check flow

### Automated Testing

- **axe-core:** Checks contrast ratios
- **WAVE:** Identifies contrast and structure issues
- **Lighthouse:** Includes accessibility audit with contrast checks

## Related WCAG Criteria

- **1.4.8 Visual Presentation (Level AAA):** More comprehensive typography requirements
- **3.1.4 Abbreviations (Level AAA):** Expand abbreviations on first use
- **3.1.5 Reading Level (Level AAA):** Content written at lower secondary education level

## Resources

- [WCAG 2.2 - Text Spacing](https://www.w3.org/TR/WCAG22/#text-spacing)
- [W3C: Understanding Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [British Dyslexia Association: Style Guide](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide)
- [Dyslexia Friendly Text](https://www.dyslexia.com/about-dyslexia/understanding-dyslexia/guide-for-classroom-teachers/dyslexia-friendly-text/)
- [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/)

