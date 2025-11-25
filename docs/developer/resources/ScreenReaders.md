---
id: sr-id
title: Screen Readers
slug: /screen-reader
sidebar_position: 2
description: Guide to testing with JAWS, NVDA, and VoiceOver
---

# Screen Readers

Screen readers are assistive technologies that read aloud content displayed on a computer screen. They're essential tools for testing accessibility, as they reveal how users with visual impairments experience your website or application.

## Why Test with Screen Readers?

- **Real user experience**: Understand how assistive technology users navigate your site
- **Find issues automated tools miss**: Screen readers reveal semantic and structural problems
- **Verify ARIA implementation**: Ensure ARIA attributes work as intended
- **Test dynamic content**: Verify live regions and status updates are announced
- **WCAG compliance**: Many WCAG criteria require screen reader testing

## Main Screen Readers

### NVDA (NonVisual Desktop Access)

**Platform:** Windows  
**Cost:** Free  
**Market Share:** Widely used, especially among developers and testers

**Download:** [NVDA Official Site](https://www.nvaccess.org/download/)

**Key Features:**
- Free and open source
- Regular updates
- Good web support
- Active developer community

**Common Keyboard Shortcuts:**
- `Insert + F7` - Elements list (headings, links, forms, etc.)
- `NVDA + Space` - Toggle speech on/off
- `Insert + Q` - Read current line
- `Insert + B` - Read from cursor to bottom
- `Ctrl + Home` - Go to top of page
- `Ctrl + End` - Go to bottom of page

**Single Letter Navigation Commands (Quick Navigation):**

These commands work when NVDA is in browse mode (default for web pages). Press the letter key to jump to the next instance, or `Shift + letter` to go to the previous instance.

- `H` - Next heading
- `1-6` - Next heading at that level (e.g., `1` for h1, `2` for h2)
- `K` - Next link
- `F` - Next form field
- `B` - Next button
- `L` - Next list
- `T` - Next table
- `G` - Next graphic/image
- `E` - Next edit field (form input)
- `D` - Next landmark
- `R` - Next region
- `C` - Next combo box (dropdown)
- `X` - Next checkbox
- `S` - Next separator
- `M` - Next frame
- `N` - Next non-link text
- `P` - Next paragraph
- `I` - Next list item
- `O` - Next list
- `U` - Next unvisited link
- `V` - Next visited link
- `W` - Next heading at same level

**Note:** Use `Shift + letter` to navigate backwards (e.g., `Shift + H` for previous heading).

### JAWS (Job Access With Speech)

**Platform:** Windows  
**Cost:** Paid (license required)  
**Market Share:** Most popular paid screen reader, especially in enterprise

**Download:** [JAWS Official Site](https://www.freedomscientific.com/products/software/jaws/)

**Key Features:**
- Most comprehensive screen reader
- Excellent documentation
- Strong enterprise support
- Virtual PC cursor mode

**Common Keyboard Shortcuts:**
- `Insert + F7` - Elements list
- `Insert + Down Arrow` - Read all from cursor
- `Insert + Up Arrow` - Read previous line
- `Ctrl + Home` - Go to top
- `Ctrl + End` - Go to bottom

**Single Letter Navigation Commands (Quick Navigation):**

These commands work when JAWS is in virtual cursor mode (default for web pages). Press the letter key to jump to the next instance, or `Shift + letter` to go to the previous instance.

- `H` - Next heading
- `1-6` - Next heading at that level (e.g., `1` for h1, `2` for h2)
- `K` - Next link
- `F` - Next form field
- `B` - Next button
- `L` - Next list
- `T` - Next table
- `G` - Next graphic/image
- `E` - Next edit field (form input)
- `D` - Next landmark
- `R` - Next region
- `C` - Next combo box (dropdown)
- `X` - Next checkbox
- `M` - Next frame
- `N` - Next non-link text
- `P` - Next paragraph
- `I` - Next list item
- `O` - Next list
- `U` - Next unvisited link
- `V` - Next visited link
- `W` - Next heading at same level

**Note:** Use `Shift + letter` to navigate backwards (e.g., `Shift + H` for previous heading).

### VoiceOver (macOS)

**Platform:** macOS (built-in)  
**Cost:** Free (included with macOS)  
**Market Share:** Standard on Mac, also available on iOS

**Activation:** `Cmd + F5` (or System Preferences > Accessibility)

**Key Features:**
- Built into macOS
- Gesture-based navigation on trackpad
- Rotor for quick navigation
- Good web support

**Common Keyboard Shortcuts:**
- `Ctrl + Option + Right Arrow` - Next item
- `Ctrl + Option + Left Arrow` - Previous item
- `Ctrl + Option + U` - Open rotor (headings, links, landmarks, etc.)
- `Ctrl + Option + H` - Next heading
- `Ctrl + Option + L` - Next link
- `Ctrl + Option + F` - Next form control
- `Ctrl + Option + B` - Next button
- `Ctrl + Option + Command + H` - Next heading level
- `Ctrl + Option + Space` - Activate/click
- `Ctrl + Option + A` - Start reading from cursor

**Rotor Navigation:**
The rotor is a powerful VoiceOver feature. Press `Ctrl + Option + U` to open it, then use arrow keys to navigate by:
- Headings
- Links
- Form controls
- Landmarks
- Tables
- Text (by word, line, sentence, paragraph)

### VoiceOver (iOS)

**Platform:** iOS (built-in)  
**Cost:** Free  
**Activation:** Settings > Accessibility > VoiceOver (or triple-click home button)

**Key Features:**
- Built into iOS
- Gesture-based navigation
- Rotor for quick navigation
- Essential for mobile testing

**Quick Reference:**
- **Tap** - Announces item under finger (doesn't activate)
- **Swipe right** - Next item
- **Swipe left** - Previous item
- **Double tap** - Activate focused item
- **Rotate two fingers** - Change rotor navigation mode

For comprehensive mobile testing guidance, see the [Mobile Screen Reader Testing](#mobile-screen-reader-testing) section below.

## Testing Workflow

### 1. Basic Navigation Test

1. **Start screen reader**
2. **Navigate through the page** using keyboard shortcuts
3. **Listen to announcements** - Are they clear and helpful?
4. **Check structure** - Use headings/links list to verify page structure
5. **Test forms** - Navigate form fields, verify labels are announced
6. **Test interactions** - Buttons, links, dropdowns work correctly

### 2. Structure Testing

Use the elements list to verify:
- Headings create logical hierarchy
- Links have descriptive text
- Form fields have labels
- Landmarks are properly defined
- Lists are properly structured

### 3. Dynamic Content Testing

- **Error messages**: Are they announced when they appear?
- **Status updates**: Do live regions work?
- **Form validation**: Are errors announced?
- **AJAX updates**: Is new content announced?

### 4. Keyboard Navigation

- **Tab order**: Logical flow through interactive elements
- **Focus management**: Focus moves correctly after actions
- **Skip links**: Work and are announced
- **Modals**: Focus trapped and announced

## Common Issues Found

### Missing or Poor Labels

**Problem:** "Button" or "Link" without context  
**Solution:** Add descriptive `aria-label` or visible text

### Redundant Announcements

**Problem:** "Button button" or "Link link"  
**Solution:** Remove redundant roles or labels

### Missing Headings

**Problem:** Can't navigate page structure  
**Solution:** Use proper heading hierarchy (h1-h6)

### Poor Link Text

**Problem:** "Click here" or "Read more"  
**Solution:** Use descriptive link text

### Form Labels Not Announced

**Problem:** Form fields announced without labels  
**Solution:** Use `<label>` elements or `aria-labelledby`

### Dynamic Content Not Announced

**Problem:** Status updates not read  
**Solution:** Use `aria-live` regions

## Testing Checklist

- [ ] Page title is announced correctly
- [ ] Headings create logical structure
- [ ] All interactive elements are reachable
- [ ] Form labels are announced with inputs
- [ ] Links have descriptive text
- [ ] Images have meaningful alt text
- [ ] Error messages are announced
- [ ] Status updates are announced
- [ ] Focus moves logically after actions
- [ ] Skip links work and are announced
- [ ] Tables are navigable and understandable
- [ ] Lists are properly announced with counts

## Best Practices

### For Testing

1. **Test with multiple screen readers** - Different screen readers behave differently
2. **Listen carefully** - Don't rush through announcements
3. **Test error states** - Not just the happy path
4. **Test with keyboard only** - Don't use mouse during testing
5. **Test dynamic content** - Forms, modals, AJAX updates

### For Development

1. **Use semantic HTML** - Screen readers work best with native elements
2. **Provide labels** - All interactive elements need accessible names
3. **Use ARIA appropriately** - Enhance, don't replace semantic HTML
4. **Test early and often** - Don't wait until the end
5. **Test with real users** - Screen reader testing is not a substitute for user testing

## Mobile Screen Reader Testing

Mobile screen readers use touch gestures instead of keyboard shortcuts. Understanding these gestures is essential for testing mobile accessibility.

### iOS VoiceOver

**Platform:** iOS (built-in)  
**Cost:** Free  
**Activation:** Settings > Accessibility > VoiceOver (or triple-click home button/side button)

**Key Features:**
- Built into iOS
- Gesture-based navigation
- Rotor for quick navigation
- Essential for mobile accessibility testing

#### Basic Navigation Gestures

**Single Tap:**
- **Tap once** - Announces the item under your finger
- **Does NOT activate** - Just reads what's there
- Use to explore the screen without triggering actions

**Swipe Gestures:**
- **Swipe right** - Move to next item (forward navigation)
- **Swipe left** - Move to previous item (backward navigation)
- **Swipe up** - Scroll down (or change rotor setting)
- **Swipe down** - Scroll up (or change rotor setting)

**Activation:**
- **Double tap** - Activate the focused item (equivalent to clicking)
- **Double tap and hold** - Secondary action (e.g., drag)
- **Two-finger double tap** - Play/pause media

**Multi-finger Gestures:**
- **Two-finger tap** - Pause/resume reading
- **Three-finger swipe right** - Next page
- **Three-finger swipe left** - Previous page
- **Three-finger swipe up** - Scroll down
- **Three-finger swipe down** - Scroll up
- **Three-finger tap** - Speak screen (read entire page)
- **Four-finger tap top** - Go to first element
- **Four-finger tap bottom** - Go to last element

**Rotor (Navigation Mode):**
- **Rotate two fingers** - Change navigation mode (headings, links, form controls, etc.)
- Similar to desktop rotor but gesture-based
- Allows quick navigation by element type

#### Testing Workflow for iOS

1. **Enable VoiceOver:**
   - Settings > Accessibility > VoiceOver > On
   - Or triple-click home/side button (if configured)

2. **Navigate the page:**
   - **Swipe right** to move through elements sequentially
   - **Swipe left** to go back
   - **Tap** to explore what's under your finger

3. **Test interactions:**
   - **Double tap** to activate buttons, links, form controls
   - Verify focus moves logically after activation
   - Test forms by double-tapping inputs, then typing

4. **Use rotor for quick navigation:**
   - Rotate two fingers to switch to headings mode
   - Swipe up/down to navigate by headings
   - Switch to links mode to jump to links
   - Switch to form controls mode for form testing

5. **Test dynamic content:**
   - Verify error messages are announced
   - Check that status updates are read
   - Test modals and popups

### Android TalkBack

**Platform:** Android (built-in)  
**Cost:** Free  
**Activation:** Settings > Accessibility > TalkBack > On

**Key Features:**
- Built into Android
- Gesture-based navigation
- Similar to VoiceOver but with Android-specific gestures
- Essential for Android accessibility testing

#### Basic Navigation Gestures

**Single Tap:**
- **Tap once** - Announces the item under your finger
- **Does NOT activate** - Just reads what's there
- Use to explore the screen

**Swipe Gestures:**
- **Swipe right** - Move to next item (forward navigation)
- **Swipe left** - Move to previous item (backward navigation)
- **Swipe up** - Move to previous item (alternative)
- **Swipe down** - Move to next item (alternative)

**Activation:**
- **Double tap** - Activate the focused item (equivalent to clicking)
- **Double tap and hold** - Long press action
- **Split tap** - Tap with one finger while another finger is on screen (activates item under first finger)

**Multi-finger Gestures:**
- **Two-finger swipe right** - Next page
- **Two-finger swipe left** - Previous page
- **Two-finger swipe up** - Scroll down
- **Two-finger swipe down** - Scroll up
- **Two-finger tap** - Pause/resume TalkBack
- **Three-finger swipe up** - Read from top
- **Three-finger swipe down** - Read from current position
- **Three-finger swipe left/right** - Navigate by headings

**Local Context Menu:**
- **Swipe up then right** - Open local context menu
- Provides quick actions for current element
- Navigate by headings, links, form controls, etc.

#### Testing Workflow for Android

1. **Enable TalkBack:**
   - Settings > Accessibility > TalkBack > On
   - Follow setup wizard if first time

2. **Navigate the page:**
   - **Swipe right** to move through elements sequentially
   - **Swipe left** to go back
   - **Tap** to explore what's under your finger

3. **Test interactions:**
   - **Double tap** to activate buttons, links, form controls
   - Verify focus moves logically after activation
   - Test forms by double-tapping inputs, then typing

4. **Use local context menu:**
   - **Swipe up then right** to open menu
   - Navigate by headings, links, form controls
   - Quick way to jump to specific element types

5. **Test dynamic content:**
   - Verify error messages are announced
   - Check that status updates are read
   - Test modals and popups

## Mobile Testing Best Practices

### General Mobile Testing Tips

1. **Test on real devices** - Emulators don't always behave like real devices
2. **Test both orientations** - Portrait and landscape
3. **Test with different screen sizes** - Small phones, tablets
4. **Test touch targets** - Ensure buttons/links are large enough (minimum 44x44px)
5. **Test zoom** - Content should work at 200% zoom
6. **Test with screen reader only** - Don't look at the screen while testing

### Common Mobile Issues

**Small touch targets:**
- Buttons or links too small to tap easily
- Solution: Minimum 44x44 CSS pixels

**Focus not visible:**
- Can't see what's focused when testing
- Solution: Ensure focus indicators are visible (though screen reader users don't need visual focus)

**Gestures interfering:**
- App gestures conflict with screen reader gestures
- Solution: Provide alternative activation methods

**Dynamic content not announced:**
- Status updates, errors not read
- Solution: Use `aria-live` regions

**Forms difficult to navigate:**
- Can't easily move between form fields
- Solution: Use proper labels and logical tab order

### Mobile Testing Checklist

- [ ] VoiceOver/TalkBack can navigate all content
- [ ] All interactive elements are reachable via swipe
- [ ] Double tap activates buttons and links correctly
- [ ] Forms are navigable and labels are announced
- [ ] Error messages are announced
- [ ] Status updates are announced
- [ ] Modals trap focus correctly
- [ ] Touch targets are at least 44x44px
- [ ] Content works in both portrait and landscape
- [ ] Zoom to 200% doesn't break layout
- [ ] Headings create logical structure
- [ ] Links have descriptive text
- [ ] Images have meaningful alt text

## Resources

### Mobile Screen Reader Guides

- [Apple: VoiceOver for iOS](https://support.apple.com/guide/iphone/iph3e2e415f/ios)
- [Google: TalkBack User Guide](https://support.google.com/accessibility/android/answer/6283677)
- [WebAIM: Mobile Screen Reader Testing](https://webaim.org/articles/mobile/)
- [A11y Project: Mobile Accessibility](https://www.a11yproject.com/posts/mobile-accessibility/)

## Resources

### Getting Started

- [NVDA Download](https://www.nvaccess.org/download/)
- [JAWS Official Site](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver User Guide (macOS)](https://support.apple.com/guide/voiceover/)
- [Screen Reader Setup (PDF)](/docs/screen-reader-setup.pdf)

### Learning Resources

- [WebAIM: Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey9/)
- [Deque: Screen Reader Testing Guide](https://www.deque.com/blog/testing-screen-readers/)
- [A11y Project: Screen Reader Testing](https://www.a11yproject.com/posts/getting-started-aria/)

## Quick Reference: Single Letter Commands

Both NVDA and JAWS share many common single-letter navigation commands. These work in browse/virtual cursor mode (default for web pages).

| Command | Action | Works In |
|---------|--------|----------|
| `H` | Next heading | NVDA, JAWS |
| `1-6` | Next heading at level (1=h1, 2=h2, etc.) | NVDA, JAWS |
| `K` | Next link | NVDA, JAWS |
| `F` | Next form field | NVDA, JAWS |
| `B` | Next button | NVDA, JAWS |
| `L` | Next list | NVDA, JAWS |
| `T` | Next table | NVDA, JAWS |
| `G` | Next graphic/image | NVDA, JAWS |
| `E` | Next edit field | NVDA, JAWS |
| `D` | Next landmark | NVDA, JAWS |
| `R` | Next region | NVDA, JAWS |
| `C` | Next combo box (dropdown) | NVDA, JAWS |
| `X` | Next checkbox | NVDA, JAWS |
| `U` | Next unvisited link | NVDA, JAWS |
| `V` | Next visited link | NVDA, JAWS |

**Navigation tip:** Use `Shift + letter` to navigate backwards (e.g., `Shift + H` for previous heading).

**Testing tip:** These commands are essential for quick navigation during accessibility testing. They allow testers to quickly jump to specific element types to verify structure and labels.

## Resources

### Getting Started

- [NVDA Download](https://www.nvaccess.org/download/)
- [JAWS Official Site](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver User Guide (macOS)](https://support.apple.com/guide/voiceover/)

### Learning Resources

- [WebAIM: Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey9/)
- [Deque: Screen Reader Testing Guide](https://www.deque.com/blog/testing-screen-readers/)
- [A11y Project: Screen Reader Testing](https://www.a11yproject.com/posts/getting-started-aria/)

### Keyboard Shortcut References

- [NVDA Keyboard Shortcuts](https://www.nvaccess.org/files/nvda/documentation/userGuide.html#CommandIndex)
- [JAWS Keyboard Shortcuts](https://www.freedomscientific.com/support/learning-center/jaws/jaws-commands/)
- [VoiceOver Keyboard Shortcuts](https://support.apple.com/guide/voiceover/vo14137/mac)

