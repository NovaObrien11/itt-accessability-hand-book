---
sidebar_position: 1
description: WCAG 2.2 AA requirements for users with photosensitive epilepsy
---

# Epilepsy & Photosensitivity

Photosensitive epilepsy affects approximately 3% of people with epilepsy. Flashing or rapidly changing visual content can trigger seizures. Following WCAG 2.2 AA guidelines protects these users.

## Why This Matters

Flashing content can cause seizures in people with photosensitive epilepsy. This is a serious safety issue, not just a usability concern. The WCAG 2.2 AA standard includes specific requirements to prevent seizure triggers.

## WCAG 2.2 AA Requirements

### 2.3.1 Three Flashes (Level A)

**Requirement:** Web pages do not contain anything that flashes more than three times in any one second period.

**What counts as a flash:**
- Any visual change that alternates between light and dark
- Rapid color changes (especially red)
- Strobing effects
- Auto-playing animations that flash
- Video content with rapid flashing scenes

**Threshold:** Content that flashes more than 3 times per second violates this criterion.

:::danger Violation Example
```html
<div class="strobe-light">
  <style>
    @keyframes flash {
      0%, 100% { background: white; }
      50% { background: black; }
    }
    .strobe-light {
      animation: flash 0.2s infinite;
    }
  </style>
</div>
```
This flashes 5 times per second, violating 2.3.1.
:::

:::tip Compliant Example
```html
<div class="subtle-pulse">
  <style>
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    .subtle-pulse {
      animation: pulse 2s infinite;
    }
  </style>
</div>
```
This pulses slowly (0.5 times per second), well below the threshold.
:::

## Design Guidelines

### Animation & Motion

- **Avoid rapid flashing:** Keep animation speeds below 3 flashes per second
- **Use smooth transitions:** Prefer fade effects over abrupt color changes
- **Provide controls:** Allow users to pause, stop, or hide animations
- **Respect prefers-reduced-motion:** Honor the `prefers-reduced-motion` media query

### Video Content

- **Review video content:** Check for rapid flashing scenes before publishing
- **Provide warnings:** If flashing content is necessary, warn users before playback
- **Offer alternatives:** Provide a non-flashing version when possible

### Interactive Elements

- **Hover states:** Use subtle color changes, not rapid flashing
- **Loading indicators:** Use smooth animations, not strobing effects
- **Notifications:** Avoid flashing alerts; use color changes with sufficient contrast

## Implementation Checklist

- [ ] No content flashes more than 3 times per second
- [ ] All animations respect `prefers-reduced-motion` media query
- [ ] Video content reviewed for flashing scenes
- [ ] Interactive states use smooth transitions, not rapid flashing
- [ ] Loading indicators use non-flashing animations
- [ ] Auto-playing content can be paused or stopped

## Testing

### Manual Testing

1. **Visual inspection:** Watch for any rapid flashing or strobing effects
2. **Animation speed:** Count flashes per second in any animated content
3. **Video review:** Check video content for rapid flashing scenes
4. **Browser tools:** Use browser DevTools to slow down animations for inspection

### Automated Testing

- **axe-core:** Detects some flashing content violations
- **WAVE:** Flags potential flashing content
- **Manual review required:** Automated tools may miss subtle flashing patterns

## Code Example: Respecting prefers-reduced-motion

```html
<style>
  @keyframes slide {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  .slide-in {
    animation: slide 0.5s ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .slide-in {
      animation: none;
    }
  }
</style>
```

## Related WCAG Criteria

- **2.2.2 Pause, Stop, Hide (Level A):** Users must be able to pause, stop, or hide moving, blinking, or auto-updating content
- **2.3.2 Three Flashes or Below Threshold (Level AAA):** More restrictive threshold for AAA compliance

## Resources

- [WCAG 2.2 - 2.3.1 Three Flashes](https://www.w3.org/TR/WCAG22/#three-flashes)
- [W3C: Understanding Three Flashes](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html)
- [Photosensitive Epilepsy Society](https://www.epilepsy.org.uk/info/photosensitive-epilepsy)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

