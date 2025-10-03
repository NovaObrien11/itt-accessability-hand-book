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

### Zoom and Reflow
1. **200% zoom** - Content remains usable
2. **400% zoom** - No horizontal scrolling (WCAG 2.1)
3. **Mobile viewport** - Content reflows properly

## Screen Reader Testing Guide

### macOS VoiceOver
```
Cmd + F5          Start/stop VoiceOver
Ctrl + Option + → Navigate forward
Ctrl + Option + ← Navigate backward
Ctrl + Option + U Open rotor (headings, links, etc.)
```

### Windows NVDA
```
Ctrl + Alt + N    Start NVDA
H                 Next heading
K                 Next link
F                 Next form field
Insert + F7       Elements list
```

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