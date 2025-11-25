---
sidebar_position: 7
description: Consistent design patterns for navigation and wayfinding
---

# Consistency & Wayfinding

Consistent design patterns help users understand and navigate your interface. This is especially critical for users with cognitive disabilities, who rely on predictable patterns to orient themselves and find their way.

## WCAG Requirements

- **3.2.3 Consistent Navigation (Level AA)**: Navigation mechanisms appear in the same relative order across pages
- **3.2.4 Consistent Identification (Level AA)**: Components with the same functionality are identified consistently

## Icon Consistency: Most Important for Navigation and Wayfinding

**Answer: Navigation and wayfinding**

Using icons consistently is **most important for navigation and wayfinding** because:

1. **Spatial memory**: Users build mental maps of your interface based on icon placement
2. **Quick recognition**: Consistent icons allow instant recognition without reading text
3. **Reduced cognitive load**: Users don't have to relearn what icons mean on each page
4. **Orientation**: Icons serve as landmarks that help users understand where they are

### Why Navigation and Wayfinding?

**Navigation** = Moving from one place to another  
**Wayfinding** = Understanding where you are and how to get where you want to go

Icons are visual anchors that help users:
- **Recognize** where they are (wayfinding)
- **Navigate** to familiar locations (navigation)
- **Understand** the interface structure (spatial orientation)

## Icon Consistency Best Practices

### 1. Use the Same Icon for the Same Function

**Bad:**
- Home icon changes from house to star to circle
- Settings icon varies between gear, wrench, and dots
- Search icon switches between magnifying glass and "Q"

**Good:**
- Home is always a house icon
- Settings is always a gear icon
- Search is always a magnifying glass icon

### 2. Maintain Icon Placement

**Bad:**
- Navigation menu moves from left to top to right
- Search icon appears in different locations
- User profile icon changes position

**Good:**
- Navigation menu stays in the same location
- Search icon is consistently placed (usually top-right)
- User profile icon maintains position

### 3. Use Standard, Recognizable Icons

**Best Practice:** Use icons that users already know:
- **Home**: House icon
- **Search**: Magnifying glass
- **Settings**: Gear/cog
- **Menu**: Hamburger (three lines)
- **Close**: X
- **Edit**: Pencil
- **Delete**: Trash can
- **Save**: Floppy disk or checkmark
- **Download**: Down arrow or download symbol
- **Share**: Share/export icon

### 4. Consistent Visual Style

**Bad:**
- Mixing filled and outlined icons
- Different stroke weights
- Inconsistent sizes
- Varying color schemes

**Good:**
- Consistent icon style (all filled or all outlined)
- Same stroke weight throughout
- Standardized sizes
- Consistent color usage

## Beyond Icons: Overall Consistency

### Navigation Consistency

- **Same location**: Navigation menu in same place on every page
- **Same order**: Menu items in same order
- **Same labels**: "Products" not "Items" or "Goods"
- **Same behavior**: Dropdowns work the same way

### Component Consistency

- **Buttons**: Same style for same actions
- **Forms**: Consistent layout and labeling
- **Error messages**: Same format and location
- **Success messages**: Consistent styling

### Visual Consistency

- **Color**: Same colors for same functions (e.g., red for delete, green for save)
- **Typography**: Consistent font sizes and weights
- **Spacing**: Same padding and margins
- **Layout**: Similar page structures

## Why Consistency Matters for Accessibility

### Cognitive Disabilities

- **Reduced cognitive load**: Users don't have to relearn patterns
- **Memory support**: Consistent patterns help users with memory difficulties
- **Predictability**: Reduces anxiety and confusion

### Visual Impairments

- **Recognition**: Consistent icons are easier to recognize
- **Spatial orientation**: Same placement helps with navigation
- **Pattern recognition**: Users can learn and rely on patterns

### Motor Impairments

- **Muscle memory**: Consistent placement allows users to develop muscle memory
- **Efficiency**: Faster navigation when patterns are predictable

## Examples

### Good: Consistent Icon Usage

```html
<!-- Navigation - always uses house icon for home -->
<nav>
  <a href="/home">
    <svg aria-hidden="true"><!-- house icon --></svg>
    <span class="sr-only">Home</span>
  </a>
  <a href="/search">
    <svg aria-hidden="true"><!-- magnifying glass icon --></svg>
    <span class="sr-only">Search</span>
  </a>
</nav>

<!-- Settings - always uses gear icon -->
<button>
  <svg aria-hidden="true"><!-- gear icon --></svg>
  <span class="sr-only">Settings</span>
</button>
```

### Bad: Inconsistent Icon Usage

```html
<!-- Page 1: Uses star for home -->
<a href="/home">
  <svg><!-- star icon --></svg>
</a>

<!-- Page 2: Uses circle for home -->
<a href="/home">
  <svg><!-- circle icon --></svg>
</a>

<!-- Page 3: Uses house for home -->
<a href="/home">
  <svg><!-- house icon --></svg>
</a>
```

## Testing for Consistency

### Visual Audit

1. **Screenshot all pages** and compare icon usage
2. **Create an icon inventory** - document all icons and their uses
3. **Check placement** - are icons in the same location?
4. **Verify style** - are icons visually consistent?

### User Testing

1. **Ask users to find** specific features (e.g., "Find settings")
2. **Observe navigation patterns** - do users get lost?
3. **Test with screen readers** - are icon labels consistent?
4. **Cognitive walkthrough** - can users predict where things are?

## Checklist

- [ ] Same icon used for same function across all pages
- [ ] Icons maintain same position across pages
- [ ] Icon style is consistent (filled vs outlined)
- [ ] Standard, recognizable icons are used
- [ ] Navigation menu is in same location
- [ ] Menu items are in same order
- [ ] Component styles are consistent
- [ ] Color usage is consistent for same functions
- [ ] Layout structure is similar across pages
- [ ] Icons have consistent accessible labels

## Resources

- [WCAG 2.2 - 3.2.3 Consistent Navigation](https://www.w3.org/TR/WCAG22/#consistent-navigation)
- [WCAG 2.2 - 3.2.4 Consistent Identification](https://www.w3.org/TR/WCAG22/#consistent-identification)
- [Nielsen Norman Group: Consistency in UI Design](https://www.nngroup.com/articles/consistency-cues/)
- [WebAIM: Cognitive Disabilities](https://webaim.org/articles/cognitive/)

