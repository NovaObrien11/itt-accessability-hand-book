---
sidebar_position: 2
description: Comprehensive guide to testing color contrast for WCAG 2.2 compliance
---

# Testing Color Contrast Accessibility

Color contrast requirements ensure content is perceivable to users with visual impairments, including low contrast vision and color blindness. WCAG 2.2 requires minimum contrast ratios for text, user interface components, and graphical objects.

## What Needs Testing

Starting with WCAG 2.1, contrast requirements expanded beyond text to include:

- **Text and images of text** (WCAG 1.4.3)
- **User interface components** including default, hover, and focus states (WCAG 1.4.11)
- **Graphical objects** such as icons, charts, and graphs (WCAG 1.4.11)

## Tools for Testing

### 1. Automated Browser Extensions

**Deque browser extension (axe DevTools)** - Built-in color contrast algorithm

- Run automated scans to identify potential contrast issues
- Copy issue descriptions directly into bug tracking tickets
- Filter results by "Violations" (definite issues) and "Needs review" (manual verification required)
- Use the highlight feature to visually inspect flagged elements

**Important:** Not every automated finding is a guaranteed violation. Complex cases like gradients, background images, and overlapping CSS layers require manual verification.

### 2. Manual Contrast Analyzer

**Deque Color Contrast Analyzer** - Online tool for comparing two color values

- Access via "Learn more" link in browser extension or use directly
- Paste hex color values from automated test results
- Shows pass/fail status for:
  - **Small text**: 4.5:1 ratio required (Level AA)
  - **Large text**: 3:1 ratio required (Level AA)
    - Large text = 24px (18pt) or larger regular weight
    - Large text = 19px (14pt) or larger bold weight
- Displays results for both Level AA and Level AAA standards
- Use sliders to experiment with color combinations and suggest fixes

### 3. Chrome Eyedropper Tool

**Location:** Chrome DevTools → Elements tab → Styles panel

**How to use:**
1. Open DevTools (F12)
2. Select an element with a color in CSS
3. Click the color swatch in the Styles panel
4. Cursor becomes an eyedropper
5. Hover over foreground or background colors to sample
6. Copy hex code and paste into Color Contrast Analyzer

**Best for:**
- Complex backgrounds (gradients, images)
- Testing multiple color combinations
- Sampling colors from images of text

## Testing Workflow

### Step 1: Automated Scan

1. Run browser extension automated test
2. Filter by "Violations" - report these as bugs
3. Filter by "Needs review" - verify manually

### Step 2: Manual Verification

For "Needs review" items:

1. Click highlight button in browser extension to inspect element
2. If simple case (single text color vs single background):
   - Copy color values from issue description
   - Paste into Color Contrast Analyzer
   - Verify pass/fail status
3. If complex case (gradients, images, overlapping layers):
   - Use Chrome eyedropper to sample multiple color combinations
   - Test the most suspicious (lowest contrast) combinations first
   - If any combination fails, the entire element fails

### Step 3: Report Findings

- Include hex color values in bug reports
- Specify which WCAG criterion is violated (1.4.3 or 1.4.11)
- For complex cases, document which color combinations were tested
- Suggest alternative color values if possible

## Testing Text Contrast

### Requirements

- **Body text**: 4.5:1 contrast ratio (WCAG 1.4.3)
- **Large text**: 3:1 contrast ratio (WCAG 1.4.3)

### Process

1. Run automated scan
2. For flagged text, verify in Color Contrast Analyzer
3. For images of text, use eyedropper to sample colors
   - Sample from solid color areas, not transition zones
   - Test multiple samples if text color varies

## Testing UI Components

### Requirements

User interface components must have **3:1 contrast ratio** (WCAG 1.4.11)

**Applies to:**
- Buttons
- Form inputs
- Menu items
- Icons
- Any interactive element

### What to Test

Compare:
- Component background color vs. page background color
- Component border color vs. page background color
- Component outline vs. page background color

**Note:** Browser extensions may not test UI components automatically - manual testing is required.

### Process

1. Identify UI component
2. Use eyedropper to sample component background/border
3. Sample adjacent background color
4. Test in Color Contrast Analyzer
5. Verify 3:1 ratio minimum

## Testing Hover and Focus States

### Requirements

Each state must independently meet **3:1 contrast ratio** (WCAG 1.4.11)

**Important:** States don't need to contrast with each other. Each state must contrast with the background when active.

### Process

Test each state separately:

1. **Default state**: Test component as it appears normally
2. **Hover state**: 
   - Open DevTools → Elements tab
   - In Styles panel, click `:hov` button
   - Select `:hover` state
   - Browser freezes component in hover state
   - Test contrast of hover colors
3. **Focus state**:
   - In Styles panel, select `:focus` state
   - Browser freezes component in focus state
   - Test contrast of focus indicator

**Alternative:** Turn on hover/focus states, then rerun automated browser extension tests.

### What to Test

- Hover background vs. page background
- Hover border vs. page background
- Focus outline vs. page background
- Focus background vs. page background

## Testing Graphical Objects

### Requirements

Graphical objects that convey meaning must have **3:1 contrast ratio** (WCAG 1.4.11)

**Applies to:**
- Icons that convey information
- Charts and graphs
- Infographics
- Status indicators

**Exception:** Purely decorative or redundant graphical objects don't need to meet contrast requirements.

### Process

1. Identify graphical object
2. Determine if it conveys meaning (not decorative)
3. Use eyedropper to sample object color
4. Sample background color
5. Test in Color Contrast Analyzer
6. Verify 3:1 ratio minimum

### Examples

**Must test:**
- Menu icons (hamburger, search, settings)
- Status icons (error, warning, success)
- Chart elements (bars, lines, data points)
- Navigation icons

**Don't need to test:**
- Decorative icons (hidden with `aria-hidden="true"`)
- Icons with redundant text labels
- Purely aesthetic graphics

## Complex Background Cases

### Gradients

1. Sample multiple points along the gradient
2. Test the lowest contrast combination
3. If any point fails, the element fails

### Background Images

1. Sample foreground text/icon color
2. Sample multiple background colors from the image
3. Test the most suspicious combinations
4. Focus on areas where text/icon appears

### Overlapping CSS Layers

1. Inspect element in DevTools
2. Identify all layers affecting color
3. Sample final rendered colors (what user sees)
4. Test those combinations

## Exceptions

These elements don't require contrast testing:

- **Purely decorative** images or text
- **Redundant** content (icon with text label)
- **Disabled form elements** (greyed out by browser)
- **Logos and logotypes**
- **Graphical objects** where low contrast is essential to the information (e.g., heat maps, medical imaging)

## Testing Checklist

- [ ] Run automated browser extension scan
- [ ] Report all "Violations" as bugs
- [ ] Manually verify all "Needs review" items
- [ ] Test all body text (4.5:1 ratio)
- [ ] Test all large text (3:1 ratio)
- [ ] Test all UI components (3:1 ratio)
- [ ] Test default state of UI components
- [ ] Test hover state of UI components
- [ ] Test focus state of UI components
- [ ] Test meaningful graphical objects (3:1 ratio)
- [ ] Use eyedropper for complex backgrounds
- [ ] Document color values in bug reports
- [ ] Verify exceptions are truly decorative/redundant

## Common Pitfalls

- **Assuming automated tools catch everything** - UI components and states often need manual testing
- **Only testing default state** - Hover and focus states must be tested separately
- **Missing complex backgrounds** - Gradients and images require multiple samples
- **Not testing the worst case** - Always test the lowest contrast combination
- **Forgetting graphical objects** - Icons and charts need contrast too

## Resources

- [Deque Color Contrast Analyzer](https://www.deque.com/color-contrast-checker/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG 2.2 - 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum)
- [WCAG 2.2 - 1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast)
- [axe DevTools Browser Extension](https://www.deque.com/axe/devtools/)

