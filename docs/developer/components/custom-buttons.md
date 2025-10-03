---
sidebar_position: 1
---

# Custom Buttons
Extend native button behavior, don't replace it.

## Extend Native Props
Keep all native button functionality by extending the base element.

```typescript
// Good: Extends native button
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = 'primary', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`btn btn-${variant}`}
        {...props}
      >
        {loading ? 'Loading...' : children}
      </button>
    );
  }
);
```

## Forward Refs
Use `forwardRef` so parent components can access the underlying element.

```typescript
// Good: Ref forwarding
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <button ref={ref} {...props} />;
});

// Usage: Parent can focus the button
const parent = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const focusButton = () => {
    buttonRef.current?.focus();
  };
  
  return <Button ref={buttonRef}>Click me</Button>;
};
```

## Don't Over-Engineer
Avoid custom props that duplicate native functionality.

```typescript
// Bad: Reinventing native props
interface BadButtonProps {
  clickHandler: () => void;
  isDisabled: boolean;
  buttonText: string;
}

// Good: Use native props
interface GoodButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
```

## Pitfalls
- **Not extending native props**: Breaks expected button behavior
- **Custom event handlers**: Use `onClick`, not `onPress` or `clickHandler`
- **Missing forwardRef**: Parent components can't manage focus or access the element