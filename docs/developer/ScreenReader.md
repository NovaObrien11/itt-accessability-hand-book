# Screen Reader Testing
Test with actual screen readers, not just automated tools.

## Quick Testing
- **macOS**: VoiceOver (Cmd + F5)
- **Windows**: NVDA (free) or JAWS
- **Mobile**: VoiceOver (iOS) or TalkBack (Android)

## Common Issues
- **Missing labels**: Buttons, form inputs, images without proper labels
- **Redundant announcements**: "Button button" or "Link link"
- **Dynamic content**: Changes that aren't announced to screen readers

## ARIA Live Regions
Use for content that changes without user interaction.

```html
<!-- Good: Status updates -->
<div aria-live="polite" id="status"></div>
<script>
  document.getElementById('status').textContent = 'Form saved successfully';
</script>

<!-- Good: Urgent alerts -->
<div aria-live="assertive" role="alert" id="error"></div>
```

## Testing Checklist
- Navigate using only Tab/Shift+Tab
- Navigate using arrow keys in lists/menus
- Verify all content is announced
- Check that dynamic changes are announced
- Ensure focus moves logically after actions

## Pitfalls
- **Over-using ARIA**: Screen readers work best with semantic HTML
- **aria-hidden on focusable elements**: Hides content but element still receives focus
- **Empty live regions**: Don't announce, even when updated later