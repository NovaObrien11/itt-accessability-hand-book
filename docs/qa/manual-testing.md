---
sidebar_position: 3
---

# Manual Testing

## Essential Manual Tests

### Keyboard Navigation
1. **Tab order** - Logical flow through interactive elements
2. **Focus indicators** - Visible focus on all interactive elements  
3. **Keyboard shortcuts** - Skip links, menu navigation
4. **Escape routes** - Can users get out of modals/menus?

### Screen Reader Testing
1. **Page structure** - Headings create logical outline
2. **Landmarks** - Navigation, main, complementary regions
3. **Form labels** - All inputs have proper labels
4. **Link context** - Links make sense out of context
5. **Image descriptions** - Alt text provides meaningful information

For comprehensive form label and instruction testing, see the **[Form Label Testing Guide](/docs/qa/form-label-testing)**.

### Zoom and Reflow
1. **200% zoom** - Content remains usable
2. **400% zoom** - No horizontal scrolling (WCAG 2.1)
3. **Mobile viewport** - Content reflows properly

### Color Contrast Testing
1. **Text contrast** - Body text 4.5:1, large text 3:1
2. **UI components** - Buttons, forms, icons have 3:1 contrast
3. **Interactive states** - Hover and focus states meet contrast requirements
4. **Graphical objects** - Charts, graphs, meaningful icons have 3:1 contrast

For comprehensive color contrast testing workflows and tools, see the **[Color Contrast Testing Guide](/docs/qa/color-contrast-testing)**.

## Screen Reader Testing Guide

For comprehensive screen reader testing guidance, including mobile testing with VoiceOver and TalkBack, see the **[Screen Readers Guide](/docs/developer/resources/ScreenReaders)**.

### Quick Reference

**macOS VoiceOver:**
- `Cmd + F5` - Start/stop VoiceOver
- `Ctrl + Option + →` - Navigate forward
- `Ctrl + Option + ←` - Navigate backward
- `Ctrl + Option + U` - Open rotor (headings, links, etc.)

**Windows NVDA:**
- `Ctrl + Alt + N` - Start NVDA
- `H` - Next heading
- `K` - Next link
- `F` - Next form field
- `Insert + F7` - Elements list

**Windows JAWS:**
- `Insert + F7` - Elements list
- `H` - Next heading
- `K` - Next link
- `F` - Next form field

### Testing Checklist
- [ ] Page title announced
- [ ] Headings create logical structure
- [ ] All interactive elements reachable
- [ ] Form labels read correctly
- [ ] Error messages announced
- [ ] Status updates announced
- [ ] Images have meaningful descriptions

## Common Manual Testing Gotchas
- **Testing only happy path** - Try error states, edge cases
- **Using mouse during keyboard testing** - Defeats the purpose
- **Rushing through screen reader** - Listen to full announcements
- **Testing only desktop** - Mobile accessibility is different