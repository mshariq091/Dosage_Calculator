# Tipping Guide Website Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (Inspired by Utility Tools like Notion/Linear)
This utility-focused application prioritizes clarity and ease of use over visual complexity. The design should be clean, functional, and immediately comprehensible.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Light mode: 220 15% 15% (charcoal) for primary text and elements
- Dark mode: 220 15% 90% (light gray) for primary text
- Background light: 0 0% 98% (near white)
- Background dark: 220 20% 8% (deep charcoal)

**Accent Colors:**
- Success/calculation: 142 76% 36% (green) for tip results
- Borders: 220 13% 85% (light gray) in light mode, 220 13% 25% (dark gray) in dark mode

### Typography
- **Primary Font:** Inter (Google Fonts)
- **Headings:** Font weight 600, sizes ranging from text-lg to text-2xl
- **Body Text:** Font weight 400, text-base and text-sm
- **Numbers/Results:** Font weight 600 for emphasis

### Layout System
**Spacing Units:** Consistently use Tailwind units of 2, 4, 6, and 8
- Padding: p-4, p-6, p-8 for cards and containers
- Margins: m-2, m-4, m-6 for element separation
- Gaps: gap-4, gap-6 for form elements and sections

### Component Library

**Core Components:**
- **Dropdown:** Clean select element with rounded corners (rounded-lg), subtle shadow, proper focus states
- **Input Fields:** Consistent with dropdown styling, number input for bill amounts
- **Calculate Button:** Primary button with subtle hover states, disabled state when no amount entered
- **Result Cards:** Bordered containers showing tip breakdown with green accent color
- **Information Cards:** Simple bordered containers for country-specific tipping information

**Navigation:** Single-page application requiring no complex navigation

**Forms:** Simple form layout with proper field labels, validation states, and clear hierarchy

**Data Display:** 
- Tip calculation results in easy-to-scan format
- Country information in readable card format
- Clear visual separation between information and calculator sections

### Layout Structure
**Single Column Layout:** Center-aligned container (max-width: 500px) with:
1. Main heading
2. Country selection dropdown
3. Dynamic content area that shows:
   - Country-specific information
   - Calculator (USA/Germany only) with bill input and calculate button
   - Results display (when calculated)

**Responsive Considerations:** Mobile-first design with proper touch targets (min 44px) and comfortable spacing on smaller screens.

### Key Interaction Patterns
- Immediate content update when country is selected
- Calculator only appears for USA and Germany
- Real-time validation on bill amount input
- Clear, prominent display of calculated results
- No unnecessary animations - focus on instant feedback

This design prioritizes usability and clarity, ensuring users can quickly understand tipping customs and calculate appropriate tips without distraction.