---
sidebar_position: 3
---

# Component Patterns
Keep it simple - extend native elements instead of reinventing them.

## The Golden Rule
If it looks like a native element, it should behave like one.

```typescript
// Good: Extends native input
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, error, ...props }) => (
  <div>
    <label htmlFor={props.id}>{label}</label>
    <input {...props} aria-invalid={!!error} />
    {error && <p role="alert">{error}</p>}
  </div>
);
```

## Composition Over Custom Props
Use children and composition instead of custom prop APIs.

```typescript
// Bad: Custom prop API
<CustomCard 
  title="Card Title"
  content="Card content"
  buttonText="Click me"
  onButtonClick={() => {}}
/>

// Good: Composition
<Card>
  <CardHeader>Card Title</CardHeader>
  <CardContent>Card content</CardContent>
  <CardActions>
    <button onClick={() => {}}>Click me</button>
  </CardActions>
</Card>
```

## Polymorphic Components
Let components render as different elements when needed.

```typescript
// Good: Polymorphic component
interface BoxProps<T extends React.ElementType = 'div'> {
  as?: T;
  children: React.ReactNode;
}

const Box = <T extends React.ElementType = 'div'>({ 
  as, 
  children, 
  ...props 
}: BoxProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxProps>) => {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
};

// Usage: Same component, different semantics
<Box as="section">Section content</Box>
<Box as="article">Article content</Box>
```

## Pitfalls
- **Custom prop names**: Use `onClick` not `onPress`, `disabled` not `isDisabled`
- **Reinventing native behavior**: Don't create `onEnterPress` when `onKeyDown` exists
- **Complex prop APIs**: Simple composition is usually better than many props