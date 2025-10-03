---
sidebar_position: 2
---

# Automated Testing

## Testing Pyramid for Accessibility

### Unit Tests
Test individual components for accessibility:
```javascript
// Jest + @testing-library/jest-dom
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Button has no accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Integration Tests
Test component interactions:
```javascript
// Cypress accessibility testing
cy.injectAxe();
cy.checkA11y();

// Test keyboard navigation
cy.get('[data-testid="menu-button"]').focus();
cy.get('body').type('{enter}');
cy.get('[role="menu"]').should('be.visible');
```

### CI/CD Integration
```yaml
# GitHub Actions example
- name: Accessibility Tests
  run: |
    npm run test:a11y
    npm run lighthouse:ci
```

## Tools for Automation

### axe-core
- **@axe-core/cli** - Command line testing
- **@axe-core/playwright** - Playwright integration
- **cypress-axe** - Cypress integration

### Pa11y
```bash
# Test single page
pa11y https://example.com

# Test multiple pages
pa11y-ci --sitemap https://example.com/sitemap.xml
```

### Lighthouse CI
```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }],
      },
    },
  },
};
```

## What Automated Testing Misses
- Context and user experience
- Complex user flows
- Screen reader announcement quality
- Cognitive load and confusion
- Real-world usage patterns