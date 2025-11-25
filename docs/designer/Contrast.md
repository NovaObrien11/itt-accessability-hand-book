---
sidebar_position: 4
description: Color contrast requirements for text, UI components, and data visualizations
---

# Accessible Color and Contrast

Color contrast ensures content is perceivable to users with low vision and color blindness. WCAG 2.2 Level AA requires specific contrast ratios for different types of content.

## Quick Reference

| Content Type | Minimum Contrast | WCAG Criteria |
|--------------|------------------|---------------|
| **Body text** | 4.5:1 | 1.4.3 Contrast (Minimum) |
| **Large text** (18pt+ regular, 14pt+ bold) | 3:1 | 1.4.3 Contrast (Minimum) |
| **UI components** (buttons, icons, form controls) | 3:1 | 1.4.11 Non-text Contrast |
| **Focus indicators** | 3:1 | 1.4.11 Non-text Contrast |
| **Graphical objects** (charts, graphs) | 3:1 | 1.4.11 Non-text Contrast |

## Text Contrast

### Body Text (WCAG 1.4.3 - Level AA)

**Requirement:** Normal text must have a contrast ratio of at least **4.5:1** against the background.

**Applies to:**
- Paragraph text
- Body copy
- Form labels
- Navigation links
- Button text
- Any text smaller than 18pt (or 14pt bold)

### Large Text (WCAG 1.4.3 - Level AA)

**Requirement:** Large text must have a contrast ratio of at least **3:1** against the background.

**What counts as "large text":**
- 18pt (24px) or larger in regular weight
- 14pt (18.5px) or larger in bold weight

**Applies to:**
- Headings (if large enough)
- Display text
- Large call-to-action text

### Exceptions

These don't need to meet contrast requirements:
- **Incidental text**: Disabled or hidden elements
- **Decorative text**: Text that's purely decorative
- **Logos**: Brand names and logos
- **Text in images**: If the image itself conveys the information

## Non-Text Contrast (UI Components)

### Buttons, Icons, and Form Controls (WCAG 1.4.11 - Level AA)

**Requirement:** All meaningful non-text content must have a contrast ratio of at least **3:1** against adjacent colors.

**Applies to:**
- **Button borders and backgrounds**: Must contrast with adjacent colors
- **Icons**: Meaningful icons (not decorative) need 3:1 contrast
- **Form controls**: Input borders, checkboxes, radio buttons
- **Graphical objects**: Icons, charts, graphs, infographics
- **Focus indicators**: Focus outlines must have 3:1 contrast
- **State indicators**: Selected, active, or error states

### Examples

**Buttons:**
- Button border: 3:1 contrast with background
- Button background: 3:1 contrast with page background
- Button text: 4.5:1 contrast with button background

**Icons:**
- Meaningful icons (like status indicators): 3:1 contrast
- Decorative icons: Can be hidden with `aria-hidden="true"`

**Form Controls:**
- Input borders: 3:1 contrast
- Checkbox/radio borders: 3:1 contrast
- Selected states: 3:1 contrast

## Data Visualizations (Charts & Graphs)

### Bar Graphs, Charts, and Data Viz (WCAG 1.4.11 - Level AA)

**Requirement:** Graphical objects that convey information must have **3:1 contrast**, and color cannot be the only means of conveying information.

**Key Principles:**
1. **Color + Pattern/Texture**: Use patterns, textures, or shapes in addition to color
2. **High Contrast**: Ensure 3:1 contrast between different data series
3. **Color-Blind Safe**: Test with color blindness simulators
4. **Text Labels**: Always include text labels, not just color coding

**Best Practices:**
- Use different patterns (stripes, dots, diagonal lines) for different bars
- Add text labels directly on or near data points
- Use high-contrast color palettes
- Provide a legend with both color and pattern/shape indicators
- Test in grayscale to ensure distinction

**Example:**
```html
<!-- Bar chart with accessible colors and patterns -->
<div class="chart">
  <div class="bar" style="background: repeating-linear-gradient(
    45deg,
    #0066CC,
    #0066CC 10px,
    #004499 10px,
    #004499 20px
  );">
    <span class="label">Q1 Sales</span>
  </div>
  <div class="bar" style="background: repeating-linear-gradient(
    135deg,
    #CC6600,
    #CC6600 10px,
    #994400 10px,
    #994400 20px
  );">
    <span class="label">Q2 Sales</span>
  </div>
</div>
```

## Focus & Interactive States

### Focus Indicators (WCAG 1.4.11 & 2.4.7 - Level AA)

**Requirement:** Focus indicators must be visible and have at least **3:1 contrast** against adjacent colors.

**Implementation:**
- Never remove focus outlines without providing alternatives
- Use outlines, borders, or background color changes
- Ensure focus indicators are at least 2px thick
- Test in bright sunlight conditions

**Examples:**
```css
button:focus {
  outline: 3px solid #0066CC;
  outline-offset: 2px;
}

a:focus {
  background-color: #FFFF00;
  color: #000000;
}
```

### Hover and Active States

**Requirement:** Interactive elements need clear visual feedback.

**Best Practices:**
- Hover states should be clearly visible
- Active/pressed states should be distinct
- All states should maintain minimum contrast ratios
- Use multiple visual cues (color + shape + position changes)

## Color Blindness Considerations

**Most common form:** The most common form of color blindness is difficulty distinguishing between red and green. This affects approximately 8% of men and 0.5% of women. When designing interfaces, avoid relying solely on red and green to convey information, as these colors may appear similar or indistinguishable to users with this condition.

### Testing for Color Blindness

1. **Grayscale test**: If colors are indistinguishable in grayscale, they'll fail for color-blind users
2. **Color blindness simulators**: Use tools to preview how designs look
3. **Multiple indicators**: Never rely on color alone

### Accessible Color Palettes

- Use tools like [ColorBrewer](https://colorbrewer2.org/) for color-blind safe palettes
- Test with [Coblis Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- Ensure sufficient contrast between all color pairs

## Testing Tools

- **[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)** - Quick contrast ratio checks
- **[Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)** - Desktop app for detailed testing
- **[Deque Color Contrast Analyzer](https://www.deque.com/color-contrast-checker/)** - Online tool for manual color comparison
- **Browser DevTools** - Most browsers have built-in contrast checking
- **axe DevTools** - Automated contrast checking
- **Chrome Eyedropper** - Built into DevTools for sampling colors from complex backgrounds

For detailed testing workflows and step-by-step instructions, see our [Color Contrast Testing Guide](/docs/qa/color-contrast-testing).

## Checklist

- [ ] All body text has 4.5:1 contrast ratio
- [ ] All large text has 3:1 contrast ratio
- [ ] Button borders and backgrounds have 3:1 contrast
- [ ] Icons have 3:1 contrast (or are decorative and hidden)
- [ ] Form controls have 3:1 contrast
- [ ] Focus indicators have 3:1 contrast and are clearly visible
- [ ] Charts and graphs use patterns/textures in addition to color
- [ ] Color is never the only means of conveying information
- [ ] Designs tested in grayscale
- [ ] Color blindness simulators used for testing

## Resources

- [WCAG 2.2 - 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum)
- [WCAG 2.2 - 1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- [WebAIM: Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
- [Color Blindness Accessibility](https://www.color-blindness.com/accessibility/)
- [Tableau: 7 Tips for Accessible Data Visualizations](https://www.tableau.com/about/blog/2016/2/7-tips-designing-accessible-data-visualizations-50419)
- [MDN: Accessibility - Color and Contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [ColorBrewer](https://colorbrewer2.org/) - Color-blind safe palettes
