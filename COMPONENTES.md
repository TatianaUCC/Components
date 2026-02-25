# Multi-Step Form Project - Next.js

A modern, fully functional multi-step registration form built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Quick Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## ✨ Features

- ✅ 4-step registration form with real-time validation
- ✅ Mobile-first responsive design
- ✅ Modern UI with gradient backgrounds and smooth animations
- ✅ Reusable component architecture
- ✅ TypeScript for type safety
- ✅ Real validation with regex patterns
- ✅ Success screen with animation
- ✅ Professional color scheme (#4F46E5 indigo)

## 📁 Project Structure

```
proyecto-diseno/
├── components/           # Reusable components
│   ├── Input.tsx        # Input with validation
│   ├── Button.tsx       # Primary/Secondary button
│   ├── Select.tsx       # Dropdown select
│   ├── StepIndicator.tsx    # Horizontal step progress
│   ├── SidebarStep.tsx      # Vertical sidebar stepper
│   ├── PlanCard.tsx         # Subscription plan card
│   ├── PaymentCard.tsx      # Payment method card
│   ├── Step1BasicDetails.tsx
│   ├── Step2CompanyDetails.tsx
│   ├── Step3SubscriptionPlan.tsx
│   ├── Step4PaymentDetails.tsx
│   ├── SuccessScreen.tsx
│   └── Grid.tsx         # Main parent component
│
├── example_list/        # Individual component examples
│   ├── example1.tsx     # Input validation example
│   ├── example2.tsx     # Plan card selection
│   ├── example3.tsx     # Step indicator
│   ├── example4.tsx     # Sidebar stepper
│   └── example5.tsx     # Payment method selection
│
└── app/
    └── page.tsx         # Main page
```

## 🎨 Design System

### Colors
- Primary: `#4F46E5` (indigo-600)
- Gradient: `from-indigo-600 to-blue-500`
- Success: `#22C55E` (green-500)
- Background: `#F3F4F6` (gray-100)

### Components
- Border radius: `rounded-2xl`
- Shadows: `shadow-lg`, `shadow-2xl`
- Transitions: `transition-all duration-300`
- Focus rings: `focus:ring-2 focus:ring-indigo-500`

## 📋 Form Steps

### Step 1: Basic Details
- Full Name (letters only, min 3 chars)
- Document Number (numbers only, max 10 digits)
- Phone (exactly 10 digits)
- Email (valid email format)
- Birth Date (cannot be future)

### Step 2: Company Details
- Company Name (letters only)
- NIT (numbers only, max 12 digits)
- Company Type (select: SAS, LTDA, SA, Natural)
- Employee Count (numbers only, max 4 digits)
- Address (required)

### Step 3: Subscription Plan
- Plan selection (Basic $29, Professional $79, Enterprise $199)
- Payment method (Card or Transfer)
- Card details (if card selected):
  - Card name (letters only)
  - Card number (exactly 16 digits, formatted 4-4-4-4)
  - Expiry date (MM/YY format)
  - CVV (exactly 3 digits)

### Step 4: Payment Details
- Shipping address
- City (letters only)
- State (letters only)
- Postal code (exactly 5 digits)
- Order summary with tax calculation

## 🔧 Validation Rules

All validations are real-time using regex patterns:

```typescript
// Name validation
/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/

// Numbers only
/^\d+$/

// Email validation
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone (10 digits)
/^\d{10}$/

// Card number (16 digits)
/^\d{16}$/
```

## 📱 Responsive Breakpoints

- Mobile: `grid-cols-1` (default)
- Tablet: `md:grid-cols-2` (768px+)
- Desktop: `lg:grid-cols-3` (1024px+)

## 🧩 Reusable Components

### Input Component
```tsx
<Input
  label="Full Name"
  name="fullName"
  value={value}
  onChange={handleChange}
  error={error}
  required
/>
```

### Button Component
```tsx
<Button onClick={handleClick} disabled={!isValid}>
  Next
</Button>
```

### PlanCard Component
```tsx
<PlanCard
  title="Professional"
  price="79"
  features={['Feature 1', 'Feature 2']}
  isSelected={selected}
  onSelect={handleSelect}
/>
```

## 🎯 Key Features

1. **Real-time Validation**: All inputs validate on change
2. **Disabled States**: Buttons disabled until form is valid
3. **Error Messages**: Clear error messages below inputs
4. **Visual Feedback**: Colors change based on state
5. **Smooth Animations**: Transitions on all interactions
6. **Success Screen**: Animated confirmation with order number

## 🛠️ Technologies

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Mobile-first design

## 📖 Examples

Check the `example_list/` folder for individual component examples:
- `example1.tsx`: Input validation
- `example2.tsx`: Plan card selection
- `example3.tsx`: Step indicator
- `example4.tsx`: Sidebar stepper
- `example5.tsx`: Payment method selection

## 🎓 For Academic Presentation

This project demonstrates:
- Component-based architecture
- State management with useState
- Form validation patterns
- Responsive design principles
- TypeScript type safety
- Modern UI/UX practices
- Reusable component design

## 📝 Notes

- All text shown to users is in Spanish
- All code and comments are in English
- Components are designed to be copy-paste ready
- Validation is production-ready
- Mobile-first approach throughout
