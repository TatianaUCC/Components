# Component Examples

This folder contains individual examples of each reusable component for easy testing and understanding.

## Available Examples

### Example 1: Input Component with Validation
**File:** `example1.tsx`

Demonstrates the Input component with real-time validation:
- Name validation (letters only, min 3 chars)
- Error messages
- Disabled button state

**Key Features:**
- Real-time regex validation
- Visual error feedback
- Accessible form controls

---

### Example 2: Plan Selection Cards
**File:** `example2.tsx`

Shows the PlanCard component with selection state:
- Multiple plan options
- Visual selection feedback
- Gradient backgrounds on selection
- Checkmark indicator

**Key Features:**
- Click to select
- State management
- Smooth transitions
- Professional pricing display

---

### Example 3: Step Indicator
**File:** `example3.tsx`

Horizontal step progress indicator:
- Shows current step
- Completed steps with checkmarks
- Progress lines between steps
- Interactive navigation

**Key Features:**
- Responsive design
- Visual progress tracking
- Step labels
- Mobile-friendly

---

### Example 4: Sidebar Stepper
**File:** `example4.tsx`

Vertical sidebar navigation:
- Vertical step layout
- Icon indicators
- Completion status
- Help section at bottom

**Key Features:**
- Sticky positioning
- Visual hierarchy
- Status colors (completed/in-progress/pending)
- Contact support section

---

### Example 5: Payment Method Selection
**File:** `example5.tsx`

Payment method cards:
- Card payment option
- Bank transfer option
- Selection state
- Icons and descriptions

**Key Features:**
- Toggle selection
- Visual feedback
- Icon integration
- Descriptive text

---

## How to Use Examples

1. Navigate to any example file
2. Copy the component usage pattern
3. Adapt to your needs
4. Customize props and styling

## Running Examples

Each example is a standalone page. To view:

```bash
# Start the development server
npm run dev

# Navigate to:
# http://localhost:3000/example_list/example1
# http://localhost:3000/example_list/example2
# etc.
```

## Component Props Reference

### Input
```typescript
interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  maxLength?: number;
  pattern?: string;
  inputMode?: 'text' | 'numeric' | 'email' | 'tel';
  required?: boolean;
}
```

### PlanCard
```typescript
interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  isSelected: boolean;
  onSelect: () => void;
}
```

### StepIndicator
```typescript
interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}
```

### SidebarStep
```typescript
interface SidebarStepProps {
  currentStep: number;
  steps: { number: number; title: string; icon: React.ReactNode }[];
}
```

### PaymentCard
```typescript
interface PaymentCardProps {
  type: 'card' | 'transfer';
  isSelected: boolean;
  onSelect: () => void;
}
```

## Customization Tips

1. **Colors**: Change Tailwind classes (e.g., `indigo-600` to `blue-600`)
2. **Sizes**: Adjust padding, text sizes, and spacing
3. **Icons**: Replace SVG icons with your preferred icon library
4. **Animations**: Modify `transition-all duration-300` for different speeds
5. **Validation**: Update regex patterns in validation functions

## Best Practices

- Always provide error messages for failed validations
- Use `required` prop for mandatory fields
- Implement proper `inputMode` for mobile keyboards
- Keep validation logic separate from UI components
- Use TypeScript for type safety
- Test on mobile devices for responsive behavior
