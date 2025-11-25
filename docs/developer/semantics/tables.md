---
sidebar_position: 3
description: How to make accessible HTML tables
---

# Tables

Tables are for displaying tabular data—**not for layout**. Use semantic HTML to ensure tables are accessible to everyone, including screen reader users.

## Table Structure

### Basic Elements

**`<table>`** - The container for all table content. Required for all tables.

**`<tr>`** - Table row. Contains `<th>` (header cells) or `<td>` (data cells). Every cell must be inside a `<tr>`.

**`<th>`** - Table header cell. Used for headers, not data. Must have `scope` attribute (`scope="col"` or `scope="row"`).

**`<td>`** - Table data cell. Used for actual data content.

**`<caption>`** - Table caption. Describes the table's purpose. Required for accessibility (WCAG 1.3.1).

**`<thead>`** - Table header section. Contains column headers (typically the first `<tr>` with `<th scope="col">` elements).

**`<tbody>`** - Table body section. Contains the main data rows.

**`<tfoot>`** - Table footer section. Contains summary rows (totals, averages, etc.).

### Complete Structure Example

```html
<table>
  <caption>Monthly Sales Data</caption>  <!-- Required: describes table purpose -->
  <thead>                                 <!-- Column headers -->
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Profit</th>
    </tr>
  </thead>
  <tbody>                                 <!-- Data rows -->
    <tr>
      <th scope="row">January</th>       <!-- Row header -->
      <td>$10,000</td>                    <!-- Data cell -->
      <td>$2,000</td>                     <!-- Data cell -->
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$12,000</td>
      <td>$2,500</td>
    </tr>
  </tbody>
  <tfoot>                                 <!-- Summary row (optional) -->
    <tr>
      <th scope="row">Total</th>
      <td>$22,000</td>
      <td>$4,500</td>
    </tr>
  </tfoot>
</table>
```

## Headers and Scope

### Column Headers (`<th scope="col">`)

Use `<th scope="col">` for headers that apply to an entire column of data.

**When to use:**
- Headers in the first row (typically in `<thead>`)
- Headers that label all cells in a column below them

**Example:**
```html
<thead>
  <tr>
    <th scope="col">Product</th>  <!-- Applies to all cells in this column -->
    <th scope="col">Price</th>     <!-- Applies to all cells in this column -->
    <th scope="col">Stock</th>     <!-- Applies to all cells in this column -->
  </tr>
</thead>
```

**Screen reader announcement:** When navigating to a data cell, screen readers will announce the column header (e.g., "Product, Widget, row 2, column 1").

### Row Headers (`<th scope="row">`)

Use `<th scope="row">` for headers that apply to an entire row of data.

**When to use:**
- Headers in the first column of each row
- Headers that label all cells in a row to their right

**Example:**
```html
<tbody>
  <tr>
    <th scope="row">January</th>  <!-- Applies to all cells in this row -->
    <td>$10,000</td>
    <td>$2,000</td>
  </tr>
</tbody>
```

**Screen reader announcement:** When navigating to a data cell, screen readers will announce the row header (e.g., "January, $10,000, row 1, column 2").

### Both Column and Row Headers

When a table has both column headers and row headers, use both `scope="col"` and `scope="row"` appropriately.

**Example:**
```html
<table>
  <caption>Monthly Sales by Region</caption>
  <thead>
    <tr>
      <th></th>                    <!-- Empty corner cell -->
      <th scope="col">North</th>   <!-- Column header -->
      <th scope="col">South</th>   <!-- Column header -->
      <th scope="col">East</th>   <!-- Column header -->
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Q1</th>     <!-- Row header -->
      <td>$50,000</td>
      <td>$45,000</td>
      <td>$55,000</td>
    </tr>
    <tr>
      <th scope="row">Q2</th>     <!-- Row header -->
      <td>$60,000</td>
      <td>$55,000</td>
      <td>$65,000</td>
    </tr>
  </tbody>
</table>
```

**Screen reader announcement:** For the cell "$50,000", screen readers will announce both headers: "Q1, North, $50,000" or "North, Q1, $50,000".

### Why Scope Matters

The `scope` attribute explicitly tells assistive technology which cells a header applies to:
- **`scope="col"`** - Header applies to all cells in the column
- **`scope="row"`** - Header applies to all cells in the row
- **No scope** - Screen readers may not correctly associate headers with data cells

**WCAG Requirement:** WCAG 2.2 requires that table headers are programmatically associated with their data cells. Using `scope` is the simplest and most reliable way to meet this requirement.

## Don’t Use for Layout

- Never use tables for layout—use CSS for positioning and alignment.

## Keyboard Accessibility

- Table content should be accessible by keyboard.
- Don’t put interactive controls (like buttons, links) in tables without ensuring they’re keyboard navigable and have a visible focus.

## Complex Tables

### Multiple Levels of Headers

For tables with multiple levels of headers (e.g., grouped columns or rows), you have two options:

**Option 1: Use `scope` (simpler, preferred)**
- Use `scope="colgroup"` for headers that span multiple columns
- Use `scope="rowgroup"` for headers that span multiple rows

**Option 2: Use `headers` attribute (for very complex tables)**
- Use `id` on header cells
- Use `headers` attribute on data cells to reference header `id`s
- More complex but necessary for some table structures

### Example: Grouped Column Headers

```html
<table>
  <caption>Sales by Region and Quarter</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="colgroup" colspan="2">Q1</th>      <!-- Groups two columns -->
      <th scope="colgroup" colspan="2">Q2</th>       <!-- Groups two columns -->
    </tr>
    <tr>
      <th></th>                                        <!-- Empty cell for row header column -->
      <th scope="col">Revenue</th>                     <!-- Sub-column header -->
      <th scope="col">Profit</th>                      <!-- Sub-column header -->
      <th scope="col">Revenue</th>                     <!-- Sub-column header -->
      <th scope="col">Profit</th>                      <!-- Sub-column header -->
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">North</th>
      <td>$50,000</td>
      <td>$10,000</td>
      <td>$60,000</td>
      <td>$12,000</td>
    </tr>
  </tbody>
</table>
```

### Using `headers` Attribute (Advanced)

For very complex tables where `scope` isn't sufficient:

```html
<table>
  <thead>
    <tr>
      <th id="region">Region</th>
      <th id="q1-rev">Q1 Revenue</th>
      <th id="q1-prof">Q1 Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="north">North</th>
      <td headers="region north q1-rev">$50,000</td>
      <td headers="region north q1-prof">$10,000</td>
    </tr>
  </tbody>
</table>
```

**Note:** The `headers` attribute is more complex and error-prone. Use `scope` whenever possible.

## Good vs Bad Examples

### Good Example: Simple Table with Column Headers

:::success Good Example
```html
<table>
  <caption>Monthly Sales Data</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>      <!-- Column header -->
      <th scope="col">Revenue</th>     <!-- Column header -->
      <th scope="col">Profit</th>      <!-- Column header -->
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>                <!-- Data cell -->
      <td>$10,000</td>                <!-- Data cell -->
      <td>$2,000</td>                 <!-- Data cell -->
    </tr>
    <tr>
      <td>February</td>
      <td>$12,000</td>
      <td>$2,500</td>
    </tr>
  </tbody>
</table>
```
:::

### Good Example: Table with Row Headers

:::success Good Example
```html
<table>
  <caption>Product Inventory</caption>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Widget A</th>   <!-- Row header -->
      <td>$10.00</td>
      <td>50</td>
    </tr>
    <tr>
      <th scope="row">Widget B</th>   <!-- Row header -->
      <td>$15.00</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```
:::

### Bad Example: Missing Headers and Structure

:::danger Bad Example
```html
<table>
  <tr>
    <div>January</div>                <!-- Wrong: divs can't be in table rows -->
    <div>$10,000</div>
    <div>$2,000</div>
  </tr>
  <!-- Problems:
       - No <th> headers
       - No scope attributes
       - No <caption>
       - Using divs instead of td/th
       - No thead/tbody structure
  -->
</table>
```
:::

### Bad Example: Headers Without Scope

:::danger Bad Example
```html
<table>
  <caption>Sales Data</caption>
  <thead>
    <tr>
      <th>Month</th>                   <!-- Missing scope="col" -->
      <th>Revenue</th>                 <!-- Missing scope="col" -->
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>
<!-- Problem: Headers exist but aren't programmatically associated with data cells -->
```
:::


## WCAG Requirements

### WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (Level A)**: Table headers must be programmatically associated with data cells (use `scope` or `headers`).
- **1.3.2 Meaningful Sequence (Level A)**: Table structure must be logical and meaningful.
- **4.1.2 Name, Role, Value (Level A)**: Table cells must have programmatically determinable names (via headers).

### How to Meet WCAG Requirements

1. **Always use `<th>` for headers** - Never use `<td>` styled to look like headers
2. **Always include `scope` attribute** - Use `scope="col"` or `scope="row"` on every `<th>`
3. **Always include `<caption>`** - Describes the table's purpose
4. **Use semantic structure** - Use `<thead>`, `<tbody>`, `<tfoot>` appropriately
5. **Test with screen readers** - Verify headers are announced correctly

## Pitfalls

### Common Mistakes

- **Missing `scope` attributes** - Headers exist but aren't associated with data cells
- **Using `<td>` for headers** - Styled `<td>` elements don't work as headers for screen readers
- **Missing `<caption>`** - Tables without captions lack context for screen reader users
- **Merged cells without proper structure** - `rowspan`/`colspan` can confuse assistive tech if not properly structured
- **Empty cells without explanation** - Use `aria-label` or text like "N/A" instead of empty cells
- **Tables for layout** - Never use tables for page layout (use CSS Grid or Flexbox)
- **Complex interactive UI in tables** - Forms, buttons, and complex controls in tables can be difficult to navigate

### Best Practices

- **Keep tables simple** - Simple, linear tables are most accessible
- **Use `scope` over `headers`** - `scope` is simpler and less error-prone
- **Test with screen readers** - Navigate tables with NVDA, JAWS, or VoiceOver
- **Provide summaries** - Use `<caption>` to explain what the table shows
- **Avoid empty cells** - Fill with meaningful data or use `aria-label="Not applicable"`

## References

- [W3C: Tables Concepts](https://www.w3.org/WAI/tutorials/tables/)
- [WCAG 2.1: Table Accessibility](https://www.w3.org/WAI/WCAG21/Techniques/html/H51)
- [MDN: `<table>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
