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
├── App.tsx                 # Main app component
├── main.tsx                 # Application entry point
├── index.css                # Global styles
├── api/
│   └── fetchApi.ts          # API utilities and number fetching
├── components/
│   ├── layout/              # Layout components
│   │   ├── AppLayout.tsx
│   │   └── AppSidebar.tsx
│   ├── ThemeToggle.tsx      # Theme toggle component
│   └── ui/                  # UI components
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Input.jsx
│       ├── Alert.jsx
│       ├── Badge.jsx
│       ├── NumberDisplay.jsx
│       └── StatsCard.jsx
├── hooks/
│   ├── usePrimeAlea.tsx     # Custom hook for prime operations
│   └── useTheme.tsx         # Theme hook
├── routes/
│   ├── __root.tsx           # Root route layout
│   ├── index.tsx            # Home route
│   └── primes.tsx           # Primes route
├── schemas/
│   └── numberSchema.ts      # Number validation schemas
├── service/
│   └── verifIsPrime.ts      # Prime number verification service
└── stores/
    └── usePrimeStore.ts     # Zustand store for prime state
```

## Setup

### Prerequisites

- Node.js (v18 or higher)
- pnpm (package manager)

### Installation

```bash

pnpm install

pnpm dev


pnpm build


pnpm preview

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

