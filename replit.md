# SKST Chit Funds - Replit Development Guide

## Overview

SKST Chit Funds is a comprehensive web application for managing chit fund operations. The platform serves multiple user roles (Super Admin, Admin, User, and Support) with role-specific dashboards and functionality. The application facilitates chit fund enrollment, auction management, payment processing, and financial analytics for a community-based savings and investment system.

This is a modern single-page application built with React and TypeScript, featuring a full suite of chit fund management tools including multi-chit enrollment, auction tracking, payment processing, KYC management, and analytics.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### October 15, 2025
- **Color Scheme Update**: Restored the original professional color palette
  - Primary color changed from bright blue `hsl(210 100% 50%)` to professional blue `hsl(215 85% 35%)`
  - Secondary color changed from teal `hsl(173 80% 40%)` to gold/yellow `hsl(45 90% 55%)`
  - Updated gradients and all color tokens across light and dark themes
  - Improved visual consistency and professional appearance throughout the application

- **AI Chatbot Redesign**: Enhanced the AI assistant interface with modern design
  - Redesigned floating trigger button with sparkle icon and gradient background
  - Added gradient header with professional blue color scheme
  - Improved message bubbles with rounded corners and better spacing
  - Enhanced loading state with "Thinking..." indicator
  - Added border accent to chat card for better visual hierarchy
  - Updated input field with rounded design and improved focus states

### October 10, 2025
- **Multi-Step Onboarding System**: Implemented comprehensive 6-step account registration flow
  - Step 1: Personal Information (Title, Name, Email, Mobile, DOB, Gender, PAN, Occupation, Income)
  - Step 2: Address Details (Current and Permanent addresses with same-as-current option)
  - Step 3: Chit Plan Selection (4 plan tiers: Starter, Growth, Premium, Elite)
  - Step 4: Document Upload (PAN, Aadhar, Address Proof, Income Proof with security features)
  - Step 5: Referral Code (Optional referral program integration)
  - Step 6: Review & Submit (Complete data review with terms acceptance)
  - Added step progress indicator and draft save functionality
  - Route: `/account/onboarding`

- **Enhanced User Dashboard Pages**: Created new enhanced versions of core user pages
  - Enhanced Dashboard (`/user/enhanced-dashboard`): Comprehensive overview with stats cards, active chit funds, payment reminders, analytics charts, quick actions, and financial health score
  - Enhanced Payment Calendar (`/user/enhanced-calendar`): Monthly calendar view with payment tracking, trends chart, and multi-filter options
  - Enhanced Transaction History (`/user/enhanced-transactions`): Advanced filtering, search, payment trends, multiple export formats (PDF/CSV), and detailed transaction table
  - Enhanced Chit Auctions (`/user/enhanced-auctions`): Live auction management, bidding interface, table/grid view toggle, winner alerts, and comprehensive auction history

- **Routing Updates**: Connected all new onboarding and enhanced pages to App.tsx routing system
- **Index Page Update**: Updated "Get Started" CTA to redirect to new onboarding flow

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server (runs on port 5000)
- **React Router** for client-side routing with role-based navigation
- Uses **React SWC plugin** for fast refresh during development

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **next-themes** for light/dark theme support
- Custom design system defined in CSS variables (HSL color format)
- Responsive design with mobile-first approach

**State Management & Data Fetching**
- **TanStack Query (React Query)** v5 for server state management and caching
- React Context API for theme management
- **react-hook-form** with **@hookform/resolvers** for form state and validation
- Local state management using React hooks

**Key Design Patterns**
- Component composition with Radix UI primitives
- Utility-first CSS with Tailwind
- Path aliases (`@/*`) for clean imports
- Separation of concerns with dedicated page components for each role

### Routing Structure

The application uses a hierarchical routing system organized by user roles:

**Public Routes**
- `/` - Landing page
- `/login` - Multi-role login portal (User/Admin/Super Admin tabs)
- `/register` - User registration
- `/calculator` - Chit fund ROI calculator
- `/support` - FAQ and support information
- `/about` - Company information
- `/terms` - Terms and conditions

**User Dashboard Routes** (`/user/*`)
- `/user/dashboard` - User overview and statistics
- `/user/transactions` - Transaction history
- `/user/my-chits` - Active chit fund subscriptions
- `/user/auctions` - Auction participation and bidding
- `/user/kyc` - KYC document management
- `/user/referrals` - Referral program
- `/user/payout-calculator` - Return estimation tool
- `/user/payments` - Payment management
- `/user/ledger` - Account ledger
- `/user/analytics` - Investment analytics and graphs
- `/user/refunds` - Refund requests
- `/user/ai-assistant` - AI-powered help
- `/user/feedback` - Feedback submission
- `/user/notifications` - User notifications
- `/user/downloads` - Document downloads
- `/user/help` - Help center

**Admin Dashboard Routes** (`/admin/*`)
- `/admin/dashboard` - Admin overview
- `/admin/user-management` - User CRUD operations
- `/admin/add-user` - New user creation
- `/admin/payment-update` - Payment status updates
- `/admin/field-tracking` - Field agent tracking
- `/admin/branch-performance` - Branch analytics
- `/admin/activity-log` - System activity logs
- `/admin/role-management` - Permission management
- `/admin/notifications` - Admin notifications
- `/admin/downloads` - Report downloads
- `/admin/help` - Admin help center

**Super Admin Routes** (`/sadmin/*`)
- `/sadmin/dashboard` - Super admin overview
- `/sadmin/branch-management` - Branch listing
- `/sadmin/add-branch` - New branch creation
- `/sadmin/branch-overview` - Branch analytics
- `/sadmin/compliance-reports` - Regulatory compliance
- `/sadmin/ai-insights` - AI-powered insights
- `/sadmin/settings` - System settings

**Support Portal Routes** (`/support/*`)
- `/support/login` - Support team login
- `/support/dashboard` - Support dashboard
- `/support/tickets` - Ticket management system

### Styling Architecture

**Design System**
- Custom CSS variables for colors in HSL format
- Primary color: `hsl(215 85% 35%)` (professional blue)
- Secondary color: `hsl(45 90% 55%)` (gold/yellow accent)
- Additional semantic colors: success (green), warning (orange), destructive (red)
- Light/dark theme support with `.dark` class selector
- Gradient combinations for hero sections and UI accents

**Component Styling Approach**
- Tailwind utility classes for layout and spacing
- CVA (class-variance-authority) for variant-based component styling
- Custom gradients defined as CSS classes (e.g., `gradient-hero`)
- Shadow utilities (shadow-sm, shadow-medium, shadow-large)
- Responsive breakpoints: mobile < 768px, desktop >= 768px

### Planned Feature Modules

Based on attached requirements, the application is designed to support these modules across all user roles:

**Advanced Chit Management**
- Multi-chit enrollment with combined dashboard views
- Automated monthly auction scheduling
- Chit lifecycle tracking (Enrollment → Collection → Auction → Payout → Close)
- Auto payout calculator with dynamic ROI estimation

**Finance & Payment**
- Payment gateway integration (Razorpay/Stripe placeholder)
- Ledger and accounting module with debit/credit tracking
- Investment analytics with graphs and AI-powered bid predictions

**User Management & Compliance**
- Role-based access control (Super Admin, Admin, User, Support)
- KYC document verification
- Branch-wise user management
- Activity logging and audit trails

**Analytics & Reporting**
- Real-time dashboards for each role
- Branch performance metrics
- Compliance reporting
- AI-powered insights and recommendations

### Code Quality & Linting

**TypeScript Configuration**
- Strict mode disabled for flexibility (`strict: false`)
- Unused variables and parameters allowed
- No implicit any allowed in some contexts
- Path aliases configured for cleaner imports

**ESLint Setup**
- TypeScript ESLint with recommended rules
- React Hooks plugin for hook usage validation
- React Refresh plugin for fast refresh support
- Unused variables rule disabled for development flexibility

## External Dependencies

### UI & Styling Libraries
- **@radix-ui/* packages** (v1.x) - Accessible UI primitives for components
- **lucide-react** (v0.462.0) - Icon library
- **tailwindcss** (v3.x) - Utility-first CSS framework
- **class-variance-authority** (v0.7.1) - Variant-based styling utility
- **clsx** & **tailwind-merge** - Class name utilities

### Form & Validation
- **react-hook-form** (v7.x) - Form state management
- **@hookform/resolvers** (v3.10.0) - Validation resolvers
- **zod** (expected) - Schema validation (implied by resolver usage)

### Data & State Management
- **@tanstack/react-query** (v5.83.0) - Server state management and caching

### UI Enhancement Libraries
- **date-fns** (v3.6.0) - Date manipulation and formatting
- **react-day-picker** (v8.10.1) - Date picker component
- **embla-carousel-react** (v8.6.0) - Carousel/slider functionality
- **cmdk** (v1.1.1) - Command menu component
- **input-otp** (v1.4.2) - OTP input component
- **vaul** (drawer primitive)
- **recharts** (charting library, imported in chart.tsx)
- **sonner** - Toast notification system

### Theme Management
- **next-themes** (v0.3.0) - Theme switching functionality

### Development Tools
- **@vitejs/plugin-react-swc** - Fast refresh with SWC
- **lovable-tagger** - Component tagging for Lovable platform integration
- **autoprefixer** & **postcss** - CSS processing

### Notes on Database
- No database or ORM dependencies are currently installed
- The application appears to be using mock/static data
- Future implementation may require adding database connectivity (e.g., Drizzle ORM with PostgreSQL, Supabase, or similar)

### Deployment Platform
- Configured for **Lovable.dev** platform integration
- GitHub integration for version control
- Supports Codespaces and local development