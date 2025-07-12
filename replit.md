# AquaGrid - AI-Powered Irrigation System

## Overview

This is a full-stack web application for AquaGrid, an AI-powered irrigation system designed to help farmers optimize water usage and improve crop yields. The application serves as a marketing landing page and product showcase, featuring a modern design with interactive sections highlighting the benefits of smart irrigation technology.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot module replacement via Vite integration

## Key Components

### Frontend Structure
- **Landing Page**: Single-page application with multiple sections
  - Header with navigation and contact options
  - Hero section with main value proposition
  - Solution showcase with feature highlights
  - Impact statistics and benefits
  - Customer testimonials
  - Call-to-action section with special offers
  - Footer with company information

### Backend Structure
- **Server Setup**: Express server with middleware for JSON parsing and logging
- **Route Handler**: Centralized route registration system
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Development Tools**: Vite integration for development mode

### Shared Components
- **Database Schema**: Drizzle schema definitions shared between client and server
- **Type Safety**: Zod validation schemas for runtime type checking
- **Path Aliases**: Configured TypeScript paths for clean imports

## Data Flow

### Current Implementation
- **Static Content**: All content is currently static and hardcoded in React components
- **Mock Storage**: Uses in-memory storage for development/testing
- **No Authentication**: Currently no user authentication system implemented

### Intended Data Flow
- **Database Operations**: Drizzle ORM configured for PostgreSQL operations
- **API Routes**: Express routes prefixed with `/api` for backend operations
- **Query Management**: TanStack Query handles client-server data synchronization

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

### Development Tools
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

### Database and Backend
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider
- **Connect PG Simple**: PostgreSQL session store

### Contact Integration
- **WhatsApp**: Direct integration for customer communication
- **Calendly**: Planned integration for demo scheduling (currently placeholder)

## Deployment Strategy

### Build Process
- **Client Build**: Vite builds the React application to `dist/public`
- **Server Build**: ESBuild bundles the Express server to `dist/index.js`
- **Production Mode**: Single executable server serves both API and static files

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development**: Vite dev server with HMR for client, tsx for server
- **Production**: Node.js serves bundled application

### Replit Compatibility
- **Development Banner**: Integrated Replit development banner
- **Error Overlay**: Runtime error modal for development
- **Cartographer**: Replit-specific tooling integration

The application is designed to be easily deployable on Replit with minimal configuration, requiring only the DATABASE_URL environment variable to be set for full functionality.