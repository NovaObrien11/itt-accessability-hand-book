# Technology Stack

## Framework
- **Docusaurus 3.8.0** - Static site generator for documentation
- **React 19** - Component framework
- **TypeScript 5.6.2** - Type safety and better developer experience
- **MDX** - Markdown with JSX components for interactive content

## Development Environment
- **Node.js 18+** required
- **Yarn** package manager (preferred over npm)
- **macOS/Linux** development environment

## Common Commands

### Development
```bash
yarn start          # Start local development server (http://localhost:3000)
yarn build          # Build static site for production
yarn serve          # Serve built site locally
yarn clear          # Clear Docusaurus cache
```

### Content Management
```bash
yarn write-translations    # Generate translation files
yarn write-heading-ids     # Auto-generate heading IDs
yarn typecheck            # Run TypeScript type checking
```

### Deployment
```bash
yarn deploy                           # Deploy to GitHub Pages
GIT_USER=<username> yarn deploy      # Deploy with specific Git user
USE_SSH=true yarn deploy             # Deploy using SSH
```

## File Structure Conventions
- Documentation lives in `/docs` with auto-generated sidebars
- Static assets in `/static` directory
- Custom CSS in `/src/css/custom.css`
- Configuration in `docusaurus.config.ts`
- Sidebar configuration in `sidebars.ts`

## Content Guidelines
- Use `.mdx` for interactive content with React components
- Use `.md` for standard markdown content
- Include frontmatter with `sidebar_position` and `slug` when needed
- Reference WCAG guidelines with proper links in format: `[WCAG 2.2 - Title](https://www.w3.org/TR/WCAG22/#anchor)`