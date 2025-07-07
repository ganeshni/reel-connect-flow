# Social Media Management Platform - Design System Export

## Color Palette (HSL Values)

### Light Mode
- **Background**: `hsl(240, 10%, 98%)`
- **Foreground**: `hsl(240, 10%, 10%)`
- **Primary**: `hsl(262, 83%, 58%)` - Purple
- **Primary Foreground**: `hsl(0, 0%, 100%)`
- **Secondary**: `hsl(240, 5%, 96%)`
- **Secondary Foreground**: `hsl(240, 6%, 20%)`
- **Accent**: `hsl(340, 82%, 52%)` - Pink
- **Accent Foreground**: `hsl(0, 0%, 100%)`
- **Muted**: `hsl(240, 5%, 96%)`
- **Muted Foreground**: `hsl(240, 4%, 46%)`
- **Border**: `hsl(240, 6%, 90%)`
- **Input**: `hsl(240, 6%, 90%)`
- **Card**: `hsl(0, 0%, 100%)`
- **Card Foreground**: `hsl(240, 10%, 15%)`

### Social Media Brand Colors
- **Instagram Start**: `hsl(262, 83%, 58%)`
- **Instagram Middle**: `hsl(340, 82%, 52%)`
- **Instagram End**: `hsl(35, 91%, 65%)`
- **Facebook**: `hsl(221, 83%, 53%)`
- **YouTube**: `hsl(0, 100%, 50%)`

### Dark Mode
- **Background**: `hsl(222.2, 84%, 4.9%)`
- **Foreground**: `hsl(210, 40%, 98%)`
- **Primary**: `hsl(210, 40%, 98%)`
- **Primary Foreground**: `hsl(222.2, 47.4%, 11.2%)`
- **Secondary**: `hsl(217.2, 32.6%, 17.5%)`
- **Secondary Foreground**: `hsl(210, 40%, 98%)`
- **Accent**: `hsl(217.2, 32.6%, 17.5%)`
- **Accent Foreground**: `hsl(210, 40%, 98%)`

## Typography
- **Font Family**: System font stack (system-ui, -apple-system, etc.)
- **Base Font Size**: 16px
- **Text Sizes**:
  - xs: 0.75rem (12px)
  - sm: 0.875rem (14px)
  - base: 1rem (16px)
  - lg: 1.125rem (18px)
  - xl: 1.25rem (20px)
  - 2xl: 1.5rem (24px)
  - 3xl: 1.875rem (30px)
  - 4xl: 2.25rem (36px)

## Spacing Scale
- 0: 0px
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)

## Border Radius
- **Small**: calc(0.5rem - 4px) = 4px
- **Medium**: calc(0.5rem - 2px) = 6px
- **Large**: 0.5rem = 8px
- **Full**: 9999px (rounded-full)

## Gradients
- **Instagram**: `linear-gradient(135deg, hsl(262, 83%, 58%), hsl(340, 82%, 52%), hsl(35, 91%, 65%))`
- **Hero**: `linear-gradient(135deg, hsl(262, 83%, 58%) 0%, hsl(340, 82%, 52%) 100%)`
- **Card**: `linear-gradient(145deg, hsl(0, 0%, 100%) 0%, hsl(240, 5%, 98%) 100%)`

## Shadows
- **Soft**: `0 2px 20px hsl(262, 83%, 58%, 0.1)`
- **Medium**: `0 8px 40px hsl(262, 83%, 58%, 0.15)`
- **Strong**: `0 20px 60px hsl(262, 83%, 58%, 0.2)`

## Component Specifications

### Button Variants
- **Default**: Primary background with white text
- **Secondary**: Light gray background
- **Outline**: Transparent background with border
- **Ghost**: Transparent background, hover accent
- **Gradient**: Primary to accent gradient
- **Destructive**: Red background for dangerous actions

### Button Sizes
- **Small**: Height 36px, padding 12px
- **Default**: Height 40px, padding 16px
- **Large**: Height 44px, padding 32px
- **Icon**: 40x40px square

### Cards
- **Background**: White (light) / Dark gray (dark)
- **Border**: Subtle gray border
- **Radius**: 8px
- **Padding**: 24px
- **Shadow**: Soft shadow with primary color

### Input Fields
- **Height**: 40px
- **Padding**: 12px horizontal, 8px vertical
- **Border**: 1px solid border color
- **Radius**: 6px
- **Focus**: 2px ring with primary color

## Page Layout Specifications

### Landing Page
- **Hero Section**: Full viewport height with gradient background
- **Navigation**: Fixed header with transparent background
- **Call-to-Action**: Gradient button, large size
- **Features Grid**: 3-column layout on desktop, 1-column on mobile

### Login/Signup Pages
- **Container**: Centered card, max-width 400px
- **Form Fields**: Stacked with 16px spacing
- **Buttons**: Full width, primary variant

### Profile Page
- **Avatar**: 80px circle with border
- **Stats Cards**: Grid layout with metric displays
- **Action Buttons**: Secondary and outline variants

### Settings Page
- **Form Sections**: Grouped with separators
- **Toggle Switches**: Custom styled with primary colors
- **Save Button**: Primary variant, right-aligned

## Usage Instructions for Figma

1. **Create Color Styles**: Add all HSL colors as Figma color styles
2. **Typography Styles**: Create text styles for each font size and weight
3. **Effect Styles**: Add shadows and gradients as effect styles
4. **Component Library**: Build button, input, and card components
5. **Auto Layout**: Use for flexible spacing and responsive design
6. **Variables**: Set up color variables for light/dark mode switching

## Component States
- **Default**: Normal appearance
- **Hover**: Slightly darker/lighter background
- **Active**: Pressed state with darker colors
- **Disabled**: 50% opacity
- **Focus**: 2px ring around element