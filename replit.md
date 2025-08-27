# Overview

This is a comprehensive Smart Judiciary Platform (منصة القضاء الذكي) built specifically for Yemen's legal system. The application provides a full-stack solution for case management, legal document handling, law database access, AI-powered legal assistance, subscription management, and integration with Yemeni government e-services.

The platform serves multiple user types including lawyers, legal secretaries (الأمين الشرعي), law and Sharia students/trainees, general public, and administrators through a sophisticated role-based system. Each user type has a dedicated interface tailored to their specific needs and workflows.

Key features include case tracking, document templates, legal research capabilities, court directories, AI assistant for legal guidance, subscription plans with feature-based access control, and public directory for finding legal professionals across Yemen.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client is built using **React with TypeScript** and follows a component-based architecture:

- **UI Framework**: React with Vite for fast development and building
- **Styling**: TailwindCSS with shadcn/ui component library for consistent design
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: Built-in Arabic language support with RTL layout

The frontend follows a modular structure with role-based pages:
- **Lawyers & Clients**: Dashboard, case management, legal database, document templates, AI assistant
- **Legal Secretaries (الأمين الشرعي)**: Specialized Sharia secretary interface with inheritance calculations, marriage contracts, religious consultations
- **Students/Trainees**: Educational interface with courses, practice opportunities, academic progress tracking
- **Administrators**: Comprehensive admin dashboard for subscription plans, user management, government services integration
- **Public/Guests**: Browse interface for finding lawyers and legal secretaries across Yemen

## Backend Architecture

The server uses **Express.js with TypeScript** in a RESTful API pattern:

- **Runtime**: Node.js with ESM modules
- **Framework**: Express.js for HTTP server and routing
- **Authentication**: Replit-based OIDC authentication with session management
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between client and server

The backend implements role-based access control and provides endpoints for all major functionality including case management, document handling, legal database access, and AI integration.

## Data Storage Solutions

**Primary Database**: PostgreSQL via Neon serverless database
- **ORM**: Drizzle ORM with TypeScript support
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Schema**: Comprehensive database design including:
  - Core entities: users, cases, documents, laws, courts, AI conversations
  - Subscription system: subscription plans, user subscriptions, features
  - Government services: service definitions, service requests, integration endpoints
  - Professional services: Sharia services, professional reviews, ratings
  - Educational content: courses, practice opportunities, student progress
- **Migrations**: Drizzle Kit for database schema management

The database schema supports complex relationships and role-based access control with sophisticated subscription and feature management.

## Authentication and Authorization

**Authentication Provider**: Replit OIDC integration
- **Session Management**: Server-side sessions stored in PostgreSQL
- **Authorization**: Role-based access control (lawyer, legal_secretary, client, trainee, admin)
- **Security**: HTTP-only cookies with secure session handling

The system enforces different permission levels based on user roles, ensuring appropriate access to sensitive legal information.

## External Dependencies

**AI Integration**: OpenAI GPT-4 integration for legal assistance
- **Model**: GPT-4o for Arabic legal advice and case analysis
- **Features**: Legal question answering, case analysis, document generation assistance
- **Language**: Specialized prompts for Yemeni law in Arabic

**Development Tools**:
- **Replit Integration**: Development environment optimizations and deployment support
- **Component Library**: Radix UI primitives via shadcn/ui for accessible components
- **Fonts**: Google Fonts (Cairo) for Arabic typography support

**Database Hosting**: Neon PostgreSQL serverless database for scalable data storage

The architecture prioritizes type safety, maintainability, and scalability while providing a rich user experience for legal professionals working with Arabic content and Yemeni legal requirements.