---
sidebar_position: 2
---

# SVG Icons
Make SVGs accessible with proper labels and roles.

## Decorative Icons
Icons that don't convey meaning should be hidden from screen readers.

```typescript
// Good: Decorative icon
const DecoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg aria-hidden="true" {...props}>
    <path d="..." />
  </svg>
);

// Usage with text
<button>
  <DecoIcon />
  Save Document
</button>
```

## Meaningful Icons
Icons that convey information need accessible labels.

```typescript
// Good: Meaningful icon
interface IconProps extends React.SVGProps<SVGSVGElement> {
  'aria-label': string;
}

const MeaningfulIcon: React.FC<IconProps> = ({ 'aria-label': ariaLabel, ...props }) => (
  <svg role="img" aria-label={ariaLabel} {...props}>
    <path d="..." />
  </svg>
);

// Usage: Icon-only button
<button>
  <MeaningfulIcon aria-label="Close dialog" />
</button>
```

## Extend SVG Props
Keep all native SVG functionality available.

```typescript
// Good: Extends native SVG
interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: 'small' | 'medium' | 'large';
}

const CustomIcon: React.FC<CustomIconProps> = ({ size = 'medium', ...props }) => (
  <svg 
    width={size === 'small' ? 16 : size === 'large' ? 32 : 24}
    height={size === 'small' ? 16 : size === 'large' ? 32 : 24}
    {...props}
  >
    <path d="..." />
  </svg>
);
```

## Pitfalls
- **Missing aria-hidden on decorative icons**: Screen readers announce meaningless content
- **No labels on meaningful icons**: Users don't know what the icon represents
- **Not extending SVG props**: Breaks native functionality like event handlers