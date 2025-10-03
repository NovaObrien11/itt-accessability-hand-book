---
sidebar_position: 4
---

# Bug Reporting

## Accessibility Bug Classification

### Critical (P0)
- Complete keyboard traps
- Missing form labels on required fields
- Images with no alt text conveying important information
- Color as only means of conveying information

### High (P1) 
- Poor focus indicators
- Insufficient color contrast (below 4.5:1)
- Missing skip links
- Improper heading structure

### Medium (P2)
- Missing ARIA labels on complex widgets
- Non-descriptive link text
- Missing form field descriptions
- Poor error messaging

### Low (P3)
- Redundant ARIA labels
- Minor contrast issues (above 3:1 but below 4.5:1)
- Missing landmark roles

## Bug Report Template

```markdown
## Accessibility Issue: [Brief Description]

**WCAG Criteria:** [e.g., 2.1.1 Keyboard, 1.4.3 Contrast]
**Severity:** [Critical/High/Medium/Low]
**User Impact:** [Who is affected and how]

### Steps to Reproduce
1. 
2. 
3. 

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### Testing Environment
- **Browser:** [Chrome 120, Safari 17, etc.]
- **Screen Reader:** [VoiceOver, NVDA, etc.]
- **Device:** [Desktop, iPhone, etc.]

### Evidence
- [ ] Screenshot attached
- [ ] Screen recording attached
- [ ] axe-core violation details attached

### Suggested Fix
[If known]
```

## Testing Evidence

### Screenshots
- Show focus indicators (or lack thereof)
- Highlight contrast issues
- Document zoom/reflow problems

### Screen Recordings
- Demonstrate keyboard navigation issues
- Show screen reader behavior
- Capture user flow problems

### Tool Output
```javascript
// Include axe-core violation details
{
  "id": "color-contrast",
  "impact": "serious",
  "tags": ["wcag2aa", "wcag143"],
  "description": "Elements must have sufficient color contrast",
  "help": "https://dequeuniversity.com/rules/axe/4.7/color-contrast",
  "nodes": [...]
}
```

## Working with Developers

### Good Bug Reports
- Include WCAG reference
- Explain user impact
- Provide testing steps
- Suggest solutions when possible

### Avoid
- "This isn't accessible" (too vague)
- Only automated tool output (missing context)
- Assuming developers know accessibility standards