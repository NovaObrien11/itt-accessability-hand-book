# Accessible Color and Contrast

## Accessible Colors
- If you **can’t distinguish color contrast when viewed in grayscale**, your color palette probably fails accessibility. Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or test with a grayscale filter.
- **Bar graphs, charts, and data visualizations:** Color alone isn’t enough. People with color blindness won’t see the difference. Use high-contrast, color-blind-safe palettes, and **supplement with patterns or textures**—not just shades. ([Accessible Data Viz by Tableau](https://www.tableau.com/about/blog/2016/2/7-tips-designing-accessible-data-visualizations-50419))
- Relying on brand colors? Accessibility comes first. If your palette fails, either update it or add alternative cues (icons, textures). 

## Text Contrast
- **Body text and essential UI elements:** Must have a contrast ratio of at least **4.5:1** against the background. ([WCAG 2.1 §1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))
- **Large text** (18pt+ regular, 14pt+ bold): Minimum ratio **3:1**.
- **Exceptions:** 
  - Incidental text (like disabled or hidden elements)  
  - Decorative text  
  - Graphics and logos

## Focus & Pressed States
- **Focus indicators must be visible**—don’t rely on browser defaults. Outlines, strong color contrasts, or thick borders all work.
- **Pressed and hover states:** Every interactive element (buttons, links, etc.) needs clear visual feedback on hover, focus, and active (pressed). ([WCAG 2.1 §2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html))
- **Contrast ratio for focus states:** At least **3:1** against adjacent colors. ([WCAG 2.1 §1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))
- If your focus state isn't immediately noticeable, you’re doing it wrong. Your product should be useable in a sunlit parking lot and by people with low vision.

## References
- [WCAG 2.1 Quick Reference: Color and Contrast](https://www.w3.org/WAI/WCAG21/quickref/#use-of-color)
- [WebAIM: Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
- [Color Blindness Accessibility](https://www.color-blindness.com/accessibility/)
- [Tableau: 7 Tips for Accessible Data Visualizations](https://www.tableau.com/about/blog/2016/2/7-tips-designing-accessible-data-visualizations-50419)
- [MDN: Accessibility - Color and Contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
