# Prime React

A React application built with Vite for prime number verification and generation.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server (using rolldown-vite for faster builds)
- **TanStack Router** - Type-safe routing
- **TanStack React Query** - Data fetching and caching
- **Zod** - Schema validation
- **Zustand** - State management
- **ESLint** - Code linting

## Project Structure

```
├── App.jsx                 # Main app component
├── main.jsx                # Application entry point
├── index.css               # Global styles
├── api/
│   └── fetchApi.js         # API utilities and number fetching
├── assets/                 # Static assets
├── components/
│   ├── Prime.jsx           # Prime number component
│   └── ui/
│       └── Button.jsx      # Reusable button component
├── hooks/
│   └── usePrimeAlea.jsx    # Custom hook for prime operations
├── pages/
│   └── PrimesPage.jsx      # Primes page component
├── routes/
│   ├── __root.jsx          # Root route layout
│   ├── index.jsx           # Home route
│   └── primes.jsx          # Primes route
├── schemas/
│   └── numberSchema.jsx    # Number validation schemas
├── service/
│   └── verifIsPrime.jsx    # Prime number verification service
└── stores/
    └── usePrimeStore.js    # Zustand store for prime state
```

## Setup

### Prerequisites

- Node.js (v18 or higher)
- pnpm (package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

## Features

- **Prime Number Verification** - Check if a number is prime
- **Random Number Generation** - Generate random numbers with validation
- **Type-Safe Routing** - TanStack Router for navigation
- **Schema Validation** - Zod schemas for data validation
- **State Management** - Zustand for global state

## Development

The project uses:
- **Vite** for fast HMR (Hot Module Replacement)
- **ESLint** for code quality
- **Rolldown-vite** for optimized builds

## Dependencies

### Production
- `react` & `react-dom` - React framework
- `@tanstack/react-router` - Routing
- `@tanstack/react-query` - Data fetching
- `zod` - Validation
- `zustand` - State management

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `eslint` - Linting

## Usage

The application provides functionality to:
1. Generate random numbers (1-50 range)
2. Verify if numbers are prime
3. Manage prime number state across the application

