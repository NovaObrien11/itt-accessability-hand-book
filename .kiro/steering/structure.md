# Project Structure

## Documentation Organization

### Main Sections
- **`/docs/designer/`** - Design-focused accessibility guidelines
- **`/docs/developer/`** - Implementation patterns and code examples  
- **`/docs/laws/`** - Legal compliance and regulatory requirements

### Developer Section Structure
```
/docs/developer/
├── checklist.mdx           # Quick reference checklist
├── howToUse.md            # POUR principles overview
├── UserExpectations.md    # Don't subvert user expectations
├── keyboard-navigation.md # Keyboard accessibility patterns
├── ScreenReader.md        # Screen reader considerations
├── aria/                  # ARIA patterns and usage
├── semantics/             # Semantic HTML guidance
│   └── buttons.md         # Button implementation (nested buttons gotcha)
├── perceivable/           # WCAG Perceivable principle
├── operable/              # WCAG Operable principle  
├── understandable/        # WCAG Understandable principle
├── robust/                # WCAG Robust principle
└── resources/             # Tools and testing resources
```

## Content Patterns

### Gotchas and Pitfalls
- Lead with common mistakes (like nested buttons example)
- Include "Why it matters" explanations
- Provide both bad and good examples
- Link to relevant WCAG criteria

### Checklist Format
- Use HTML checkboxes: `<input type="checkbox" />`
- Include WCAG reference links
- Organize by development phase (Design, Development, Testing)

### Code Examples
- Show both incorrect and correct implementations
- Use semantic HTML as the foundation
- Explain ARIA usage sparingly - "enhance, don't replace"

## Navigation Structure
- Auto-generated sidebars from folder structure
- Three main navigation sections: Designer, Developer, Laws
- Blog section for updates and announcements
- Consistent help/support links in footer