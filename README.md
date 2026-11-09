# KNR ENTERPRISES
### Industrial & Commercial B2B Digital Supply Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.1-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.5-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

---

## 📌 Project Overview

**KNR Enterprises** is a premier B2B digital commerce and inventory management platform designed for a regional industrial and commercial supply business located in **Chevella, Ranga Reddy District, Telangana**.

The platform enables commercial contractors, municipal authorities, and institutional buyers to discover products, check availability, and submit consolidated quotation enquiries directly via **WhatsApp Click-to-Chat**. Simultaneously, it equips business management with an authenticated administration dashboard to manage product specifications, upload media, adjust stock quantities, and audit physical inventory movements.

---

## 🏢 Business Identity & Credentials

All business information reflected across the application is strictly derived from verified corporate records:

- **Trade Name:** KNR ENTERPRISES
- **Operating Location:** H.No: 1-77/6, Near HP Petrol Pump, Mdl & Vill Chevella, Ranga Reddy, Telangana — 501503
- **Designated Management:** K. Narendar Reddy (`+91 8886175855`) & G. Siva (`+91 9640195798`)
- **Official Email:** [knrenterprises679@gmail.com](mailto:knrenterprises679@gmail.com)
- **GSTIN:** `36CUHPK5939D1ZG`
- **Core Product Lines:** Bleaching Powder, Lime Powder, Malathion, Street Lights, Delta Fogging Machines, Commercial Dust Bins, Green Ground Mats, and Sanitization Tools.

---

## 🚀 Key Features

### 🌐 Public B2B Showcase
- **Industrial Premium Aesthetic:** Designed with a clean, high-contrast palette (Deep Navy `#101B32`, Accent Orange `#FF8A24`, and Crisp Surfaces).
- **Interactive Catalogue:** Instant client-side search and category filtering across chemical, municipal, and sanitation lines.
- **Privacy-First Stock Status:** Employs a secure database projection showing general availability status (*In Stock*, *Limited Stock*, *Available on Order*) without exposing sensitive internal physical counts.
- **WhatsApp Enquiry Cart:** Persistent multi-product cart that formats structured quotation requests with customer details and launches WhatsApp natively.

### 🔐 Authenticated Administration Portal (`/admin/*`)
- **Secure Supabase Authentication:** Protected routes with server-side cookie verification and middleware route guards.
- **Product Lifecycle CRUD:** Full control over product specifications, quality grades, standard packaging units, and active listing statuses.
- **Auditable Inventory Movements:** Atomic stock adjustment interface logging previous quantity, new quantity, delta, timestamp, and adjustment reason.
- **Media Management:** Direct image uploads to Supabase Storage with automatic Next.js image optimization.

---

## 🛠️ Technology Stack

| Domain | Technology / Library | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js App Router](https://nextjs.org/) | `16.4.5` | React Server Components, server actions, and routing |
| **UI Library** | [React](https://react.dev/) | `19.3.1` | Declarative UI rendering |
| **Type System**| [TypeScript](https://www.typescriptlang.org/) | `6.0.3` | Compile-time type safety across the entire application |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `4.3.5` | Utility-first CSS engine with `@theme` token configuration |
| **Animations** | [Motion](https://motion.dev/) | `14.11.1` | Hardware-accelerated UI transitions and micro-interactions |
| **Icons** | [Lucide React](https://lucide.dev/) | `1.70.0` | Accessible, tree-shakeable SVG icons |
| **Class Utilities**| `clsx` & `tailwind-merge` | `2.1.1` / `3.7.0` | Conflict-free dynamic className generation |
| **Database** | [Supabase PostgreSQL](https://supabase.com/) | `15+` | Relational database with Row Level Security (RLS) |
| **Auth & Media**| Supabase Auth & Storage | Latest | Cookie-based session management and S3-compatible image hosting |

---

## 📂 Project Directory Structure

```text
D:\KNR Enterprises\
│
├── public\                          # Static public web assets
│   ├── favicon.ico
│   ├── images\                      # Raster images (hero, products, general)
│   ├── logo\                        # Brand logo vector graphics
│   └── icons\                       # UI icons and symbols
│
├── src\
│   ├── app\                         # Next.js App Router (pages and layouts)
│   │   ├── globals.css              # Global styles & Tailwind v4 theme definitions
│   │   ├── layout.tsx               # Root HTML structure and SEO metadata
│   │   ├── page.tsx                 # Homepage landing view
│   │   ├── about\                   # Corporate profile and verification
│   │   ├── products\                # Catalogue grid & dynamic [slug] detail pages
│   │   ├── contact\                 # Location coordinates and direct contact forms
│   │   └── admin\                   # Authenticated administrative portal
│   │       ├── login\               # Admin login screen
│   │       ├── dashboard\           # Operational overview & stock alerts
│   │       ├── products\            # Product CRUD and media management
│   │       ├── inventory\           # Physical stock adjustments and audit history
│   │       └── settings\            # Business contact configuration
│   │
│   ├── components\                  # Reusable UI component library
│   │   ├── layout\                  # Header, Footer, Mobile Drawer, Cart Trigger
│   │   ├── home\                    # Landing page view sections
│   │   ├── products\                # Product cards, grids, search and filter controls
│   │   ├── enquiry\                 # Cart drawer, item rows, WhatsApp compiler modal
│   │   ├── admin\                   # Admin navigation, stat cards, adjustment forms
│   │   └── ui\                      # Atomic components: buttons, modals, badges, inputs
│   │
│   ├── lib\                         # Core utilities, schemas, and API clients
│   │   ├── utils\                   # Helper utilities (e.g., cn class merger)
│   │   ├── validations\             # Input validation schemas (Zod)
│   │   └── supabase\                # Supabase browser, server, and admin clients
│   │
│   ├── hooks\                       # Custom React hooks (useCart, useDebounce)
│   ├── types\                       # TypeScript interfaces and entity types
│   └── config\                      # Centralized site and business settings
│
├── docs\                            # Comprehensive architecture documentation
│   ├── PRD.md                       # Product Requirements Document
│   └── TRD.md                       # Technical Requirements Document
│
├── .env.example                     # Environment variable template
├── .gitignore                       # Git ignore definitions
├── package.json                     # Node.js project manifest
├── tsconfig.json                    # TypeScript compiler configuration
├── next.config.ts                   # Next.js runtime configuration
└── README.md                        # Master onboarding documentation
```

---

## ⚡ Quick Start Guide

### Prerequisites
- **Node.js:** `v20.0.0` or higher (verified on `v24.13.0`)
- **npm:** `v10.0.0` or higher (verified on `v11.6.2`)
- **Git**

### 1. Clone & Enter Directory
```bash
git clone https://github.com/hamid220-kamal/KNR-Enterprises.git
cd "D:\KNR Enterprises"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to create your local development configuration:
```bash
cp .env.example .env.local
```
Update the keys inside `.env.local` with your valid Supabase project credentials.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables Setup

Ensure `.env.local` contains valid configurations:

```env
# Supabase Database & Auth (Planned for Phase 3)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Application Settings
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=918886175855
```

> [!WARNING]
> Never commit `.env.local` or disclose `SUPABASE_SERVICE_ROLE_KEY`. The service-role key has unrestricted administrative privileges and bypasses Row Level Security.

---

## 🗄️ Database & Backend Setup (Supabase)

When integrating Supabase in **Phase 3**, follow these configuration steps:

1. **Create Supabase Project:**
   - Create a project on [Supabase Cloud](https://supabase.com/) in the **Mumbai (`ap-south-1`)** region.
2. **Execute Database Migrations:**
   - Execute the schema DDL provided in [`docs/TRD.md`](file:///D:/KNR%20Enterprises/docs/TRD.md#L182-L245) inside the Supabase SQL Editor.
   - This creates tables: `admin_users`, `products`, `inventory_movements`, and `site_settings`.
3. **Apply Row Level Security (RLS) Policies:**
   - Run the RLS policy script from [`docs/TRD.md`](file:///D:/KNR%20Enterprises/docs/TRD.md#L274-L318) to ensure anonymous users can only access the public sanitized view.
4. **Provision Storage Bucket:**
   - Create a public bucket named `product-images`.
   - Apply public read and admin-only upload policies.
5. **Register Initial Administrator:**
   - Create an admin user via Supabase Auth.
   - Insert their `auth_user_id` and email into `public.admin_users`.

---

## 💬 WhatsApp Integration Architecture

The customer enquiry pipeline does not rely on third-party webhook servers or proprietary APIs:

1. The customer selects items, quantities, and packaging units into the **Enquiry Cart**.
2. The customer provides their name, contact number, and delivery location.
3. The system serializes the payload using `encodeURIComponent`:
   ```text
   https://wa.me/918886175855?text=*ENQUIRY%20FOR%20KNR%20ENTERPRISES*...
   ```
4. Clicking **Send Enquiry via WhatsApp** directly launches WhatsApp (Mobile App or WhatsApp Web).
5. All final commercial agreements, transport arrangements, and billing are finalized directly with KNR Enterprises management.

---

## 🧪 Verification & Quality Control Commands

Run the following commands to ensure code quality before pushing changes:

| Action | Command | Purpose |
| :--- | :--- | :--- |
| **Run Dev Server** | `npm run dev` | Launch Next.js local development server with Turbopack |
| **Lint Codebase** | `npm run lint` | Execute ESLint flat config validation |
| **Type Check** | `npx tsc --noEmit` | Validate strict TypeScript types across all files |
| **Production Build**| `npm run build` | Compile optimized production bundles |
| **Start Production**| `npm run start` | Serve production build locally |

---

## 🚢 Deployment Instructions (Vercel)

1. Push your changes to the `main` branch on GitHub.
2. Link the repository to your [Vercel](https://vercel.com/) dashboard.
3. In Vercel Project Settings, add the production environment variables from `.env.example`.
4. Deploy using default Next.js build settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Connect your custom domain and verify SSL provisioning.

---

## 🔒 Security Architecture Highlights

- **Row Level Security (RLS):** All Supabase tables have RLS enabled. Anonymous access to internal stock numbers or movement logs is completely denied.
- **Sanitized Public View:** Public product queries interface exclusively with `public_products_view`, which returns categorical availability flags instead of numeric stock quantities.
- **HttpOnly Cookies:** Authentication tokens are stored in encrypted, HttpOnly, SameSite cookies managed via `@supabase/ssr`.
- **Atomic Stock Procedures:** Stock adjustments use PostgreSQL stored procedures with row-level locks (`FOR UPDATE`) to prevent race conditions during updates.

---

## 📖 Architectural Documentation Links

For comprehensive functional and engineering specifications, consult the project documentation:

- 📄 [**Product Requirements Document (docs/PRD.md)**](file:///D:/KNR%20Enterprises/docs/PRD.md)  
  *Detailed user personas, business objectives, 18 functional requirements, UI/UX tokens, and operational workflows.*
- 🛠️ [**Technical Requirements Document (docs/TRD.md)**](file:///D:/KNR%20Enterprises/docs/TRD.md)  
  *System architecture, PostgreSQL schema, RLS policies, stored procedures, Next.js routing, and deployment guides.*

---

## 🗺️ Implementation Roadmap

```text
[x] Step 1: Project Initialization, Next.js 16 Setup, & Directory Architecture
[x] Step 2: Comprehensive Documentation (PRD, TRD, README) & Git Configuration
[ ] Step 3: Industrial Design System, Color Tokens, Global Navigation & Footer
[ ] Step 4: Public Homepage, Brand Showcase, & Location Card
[ ] Step 5: Product Catalogue Grid, Search & Category Filter Architecture
[ ] Step 6: Enquiry Cart Drawer & WhatsApp Serialization Protocol
[ ] Step 7: Supabase PostgreSQL Schema, RLS Policies, & Client Setup
[ ] Step 8: Supabase Auth, Middleware Route Guards, & Admin Login
[ ] Step 9: Admin Dashboard Overview & Real-Time Stock Alert Metrics
[ ] Step 10: Product CRUD Operations & Supabase Storage Media Management
[ ] Step 11: Inventory Adjustment Interface & Immutable Audit Movement History
[ ] Step 12: Production Hardening, SEO Structured Data, & Deployment Verification
```

---

## 📞 Support & Inquiries

For technical questions or operational matters regarding this platform, contact:

- **Management:** K. Narendar Reddy (`8886175855`) / G. Siva (`9640195798`)
- **Email:** [knrenterprises679@gmail.com](mailto:knrenterprises679@gmail.com)
- **Headquarters:** Chevella, Ranga Reddy District, Telangana 501503
