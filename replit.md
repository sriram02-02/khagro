# KH AGRO STOCKIST & EXPORTERS PVT. LTD. - Agricultural Export Business Platform

## Overview

KH AGRO STOCKIST & EXPORTERS PVT. LTD. is a full-stack web application for an agricultural export business specializing in rice, pulses, and spices. The platform showcases premium quality agricultural products, company services, and provides enquiry functionality for B2B clients. Built with a modern tech stack, it features a React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom brand colors and shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui for accessibility

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Development**: Vite middleware integration for hot reloading during development
- **Storage**: In-memory storage implementation with interface design for easy database migration

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for database operations
- **Schema**: Shared TypeScript schema definitions between client and server
- **Tables**: Products table with agricultural categories (rice, pulses, spices), detailed items, specifications, and images; Contact submissions table for enquiry data
- **Validation**: Drizzle-zod integration for automatic schema validation from database models

### Project Structure
- **Monorepo**: Single repository with client, server, and shared code
- **Client**: Located in `/client` with React application and components
- **Server**: Located in `/server` with Express routes and business logic  
- **Shared**: Common schema definitions and types in `/shared`
- **Build**: Vite for frontend bundling, esbuild for backend compilation

### Development Setup
- **Hot Reloading**: Vite development server with Express middleware integration
- **TypeScript**: Strict configuration across all packages with path mapping
- **Linting**: ESLint and TypeScript checking for code quality
- **Database**: Drizzle Kit for schema migrations and database management

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon Database PostgreSQL driver for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations with PostgreSQL support
- **drizzle-kit**: CLI tools for database schema management and migrations

### UI and Styling
- **@radix-ui/***: Complete set of accessible, unstyled UI primitives (accordion, dialog, select, etc.)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for creating type-safe component variants
- **lucide-react**: Icon library for consistent iconography

### Form and Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Resolvers for external validation libraries
- **zod**: Schema validation library for type-safe data validation
- **drizzle-zod**: Bridge between Drizzle ORM and Zod for automatic schema generation

### Development and Build Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment

### Additional Libraries
- **wouter**: Lightweight routing library for React applications
- **@tanstack/react-query**: Powerful data synchronization for React
- **date-fns**: Modern JavaScript date utility library
- **cmdk**: Command palette component for enhanced UX