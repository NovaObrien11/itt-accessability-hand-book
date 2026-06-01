# Reflow (WCAG 1.4.10)

Reflow ensures that users can zoom in on a webpage up to 400% without having to scroll horizontally to read the content. This is a critical requirement under the **Perceivable** principle of WCAG 2.2 (Level AA).

## What is Reflow?

When a webpage is zoomed in, the content should "reflow"—meaning it dynamically wraps and reorganizes itself into a single column so that it fits within the viewport. 

Specifically, the WCAG 1.4.10 criterion states that content must be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:
- **Vertical scrolling content** at a width equivalent to 320 CSS pixels (which corresponds to a 1280px wide screen zoomed to 400%).
- **Horizontal scrolling content** at a height equivalent to 256 CSS pixels.

## Why It Matters

Reflow is essential for:
- **Users with low vision**: Many low-vision users zoom in on web pages to read text. If the page doesn't reflow, they must scroll back and forth horizontally for every single line of text, which is exhausting and makes reading nearly impossible.
- **Mobile users**: Designing for a 320px width naturally ensures that the website works beautifully on smaller mobile devices.
- **Users with motor or cognitive difficulties**: Two-dimensional scrolling requires extra physical coordination and increases cognitive load.

## Technical Implementation

To achieve proper reflow, follow these responsive web design practices:

### 1. Avoid Fixed Widths
Never use fixed-width containers on major layout elements. Use relative units or max-width instead.

**Bad:**
```html
<div style="width: 1200px;">
  <p>This container will force horizontal scrolling at small viewports.</p>
</div>
```

**Good:**
```html
<div style="width: 100%; max-width: 1200px;">
  <p>This container scales down gracefully on smaller screens.</p>
</div>
```

### 2. Use Flexible Layouts (Flexbox and Grid)
Modern CSS layout techniques like Flexbox and Grid make it easy to build layouts that wrap and reflow automatically.

**Good Flexbox wrapping:**
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;
}
```

**Good CSS Grid auto-fit:**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
```

### 3. Responsive Images and Media
Ensure images and other media scale down to fit their containers.

**Good:**
```css
img, video, iframe {
  max-width: 100%;
  height: auto;
}
```

### 4. Handle Tables and Data
Data tables are a common source of horizontal scrolling. While WCAG allows exceptions for content that requires two-dimensional layout (such as tables, maps, diagrams, and games), you should still make tables as responsive as possible.

**Good (Scrollable Container):**
Wrap the table in a container that allows horizontal scrolling *only* for the table, keeping the rest of the page layout vertical.
```html
<div style="overflow-x: auto;" tabindex="0" aria-label="Data Table">
  <table>
    <!-- Table content -->
  </table>
</div>
```

### 5. Prevent Text Clipping
Avoid setting fixed heights on containers that hold text. If the text size increases or the container shrinks, the text will overflow and be clipped if `overflow: hidden` is used.

**Bad:**
```css
.text-box {
  height: 200px;
  overflow: hidden;
}
```

**Good:**
```css
.text-box {
  min-height: 200px;
}
```

## Testing for Reflow

### 1. The 400% Zoom Test
1. Open your website in a desktop browser (Chrome, Firefox, Safari, or Edge).
2. Set your screen resolution or browser window width to 1280px.
3. Zoom in to **400%** (`Ctrl +` or `Cmd +` multiple times).
4. Verify that:
   - No horizontal scrollbar appears for the page as a whole.
   - All text wraps and remains fully readable.
   - No content overlaps, gets clipped, or disappears.
   - All interactive elements (buttons, links, forms) remain fully functional.

### 2. The 320px Viewport Test
1. Open Chrome DevTools (`F12` or `Cmd + Option + I`).
2. Toggle the **Device Toolbar** (`Cmd + Shift + M` or `Ctrl + Shift + M`).
3. Set the viewport width to **320px**.
4. Inspect the page for horizontal scrolling, overlapping text, or cut-off elements.

## Common Pitfalls

- **Sticky headers and footers**: Large sticky headers or footers can take up the entire screen height at 400% zoom (especially when the height is equivalent to 256px). Consider hiding sticky elements or making them non-sticky at small viewports using media queries.
- **Third-party widgets**: Chatbots, feedback buttons, and embedded maps often have fixed dimensions that break reflow.
- **Preformatted text**: `<pre>` tags and code blocks can force horizontal scrolling. Ensure they are contained and scrollable individually, rather than forcing the whole page to scroll.

## References
- [W3C Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [WebAIM: Zoom and Reflow](https://webaim.org/techniques/responsive/)
