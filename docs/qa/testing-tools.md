---
sidebar_position: 1
---

# Testing Tools
Automated tools catch obvious issues, manual testing catches the rest.

## Browser Extensions
- **axe DevTools** - Best automated testing, integrates with dev tools
- **WAVE** - Visual overlay of accessibility issues
- **Lighthouse** - Built into Chrome, includes accessibility audit

## Manual Testing Checklist
1. **Tab through everything** - Can you reach all interactive elements?
2. **Use only keyboard** - Mouse/trackpad off, navigate with Tab, Enter, Space, arrows
3. **Zoom to 200%** - Does content still work and make sense?
4. **Turn on screen reader** - Does everything get announced properly?

## Quick Automated Checks
```javascript
// Run axe-core in console
axe.run().then(results => {
  console.log(results.violations);
});
```

## Screen Reader Testing
- **macOS**: VoiceOver (Cmd + F5)
- **Windows**: NVDA (free download)
- **Test mobile too**: VoiceOver on iOS, TalkBack on Android

## Color/Contrast Tools
- **WebAIM Contrast Checker** - Quick ratio checks
- **Colour Contrast Analyser** - Desktop app for detailed testing
- **Browser dev tools** - Most have built-in contrast checking

## Pitfalls
- **Only testing with automated tools** - They miss context and user experience issues
- **Testing only with mouse** - Keyboard-only users have different experiences
- **Assuming tools catch everything** - Manual testing is still essential