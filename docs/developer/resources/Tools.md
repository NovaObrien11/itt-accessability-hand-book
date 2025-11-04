---
id: tools-id
title: Tools
slug: /tools
sidebar_position: 4

---

## Development Tools

### ESLint Accessibility Plugin

Enable `eslint-plugin-jsx-a11y` to catch accessibility issues during development.

**Installation:**
```bash
npm install --save-dev eslint-plugin-jsx-a11y
```

**ESLint Configuration:**
Add to your `.eslintrc` or `eslint.config.js`:
```json
{
  "extends": ["plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}
```

**Common Rules:**
- Enforces `alt` text on images
- Warns about missing ARIA labels
- Checks keyboard navigation patterns
- Validates interactive element accessibility

**Resources:**
- [eslint-plugin-jsx-a11y Documentation](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Available Rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules)

## Browser Testing Tools

- [axe Browser Extensions (Deque)](https://www.deque.com/axe/browser-extensions/)
- [axe VS Code Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)
- [ANDI: Free Accessibility Testing Tool](https://www.ssa.gov/accessibility/andi/help/install.html)
