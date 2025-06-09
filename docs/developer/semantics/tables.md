---
sidebar_position: 3
description: How to make accessible HTML tables
---

# Tables

Tables are for displaying tabular data—**not for layout**. Use semantic HTML to ensure tables are accessible to everyone, including screen reader users.

## Basics

- Use `<table>`, `<thead>`, `<tbody>`, and `<tfoot>` as needed to organize data.
- Use `<th>` for headers, `<td>` for data cells.
- Always include a `<caption>` to describe the table’s purpose.

## Headers and Scope

- Use `<th scope="col">` for column headers and `<th scope="row">` for row headers.
- Scope helps assistive technology interpret the structure and meaning of the data.

## Don’t Use for Layout

- Never use tables for layout—use CSS for positioning and alignment.

## Keyboard Accessibility

- Table content should be accessible by keyboard.
- Don’t put interactive controls (like buttons, links) in tables without ensuring they’re keyboard navigable and have a visible focus.

## Complex Tables

- For tables with multiple levels of headers, use the `scope` or `headers` attributes to associate data cells with the correct header cells.

## Good vs Bad Examples

:::success Good Example
```html
<table>
  <caption>Monthly Sales Data</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$10,000</td>
      <td>$2,000</td>
    </tr>
    <!-- more rows -->
  </tbody>
</table>
:::

:::danger Bad Example

```html
<table>
  <tr>
    <div>January</div>
    <div>$10,000</div>
    <div>$2,000</div>
  </tr>
  <!-- No headers, no caption, bad for accessibility -->
</table>
```
:::


## Pitfalls

- Don’t use merged cells (`rowspan` or `colspan`) unless absolutely necessary—these can confuse assistive tech.
- Avoid putting complex interactive UI (forms, buttons) in tables unless it’s the best structure.
- Avoid empty table cells; provide meaningful data or use `aria-hidden="true"` for presentational-only cells.

## References

- [W3C: Tables Concepts](https://www.w3.org/WAI/tutorials/tables/)
- [WCAG 2.1: Table Accessibility](https://www.w3.org/WAI/WCAG21/Techniques/html/H51)
- [MDN: `<table>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
