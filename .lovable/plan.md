

# Aerotrend Aviation Management System – Implementation Plan

## Overview
A full-stack aviation maintenance management application inspired by the Aerotrend platform, with Supabase-powered authentication, database, and role-based access.

---

## Phase 1: Layout & Navigation
- **Top header bar** with Aerotrend branding/logo, search bar, date/time display, and user avatar with dropdown (admin menu, logout)
- **Navigation bar** (blue/purple gradient) with:
  - **Configuration** dropdown menu containing: Aircraft Setup, Component List Setup, Service List Setup
  - **Dashboard** link
- **Footer** with copyright text
- Responsive layout with sidebar collapse on mobile

## Phase 2: Authentication
- **Login page** with email/password sign-in using Supabase Auth
- **Sign-up page** for new users
- Protected routes – redirect to login if not authenticated
- User roles table (admin, user) for future role-based access control

## Phase 3: Database Schema
- **aircraft** table – stores all aircraft setup data (model, MSN, registration ID, dates, hours, cycles, engines, status)
- **aircraft_apu** table – APU details linked to aircraft
- **aircraft_landing_gear** table – landing gear details (left main, right main, nose) linked to aircraft with a "position" field
- **components** table – component list with manufacturer, part numbers, classification, pricing
- **services** table – service list with task details, manhours, pricing, intervals
- **Dropdown reference tables** for: aircraft models, APU manufacturers/models, landing gear manufacturers/models, component manufacturers, component classifications, received statuses
- Row-Level Security on all tables

## Phase 4: Dashboard Page
- Aircraft summary table showing: Aircraft Model, MSN, National Reg ID, No. of Engines, Flight Hours, Flight Cycles
- Search/filter functionality
- Pagination
- Action buttons per row: View (eye icon) and Settings (gear icon)
- Checkbox selection column

## Phase 5: Aircraft Setup Form (Configuration)
- Multi-section form with collapsible/tabbed sections:
  - **Section A**: Aircraft Setup – model, MSN (with re-enter validation), registration ID (with re-enter validation), dates, hours, cycles, engines, status
  - **Section B**: APU Details – manufacturer, model, serial no (re-enter), part number (re-enter), last shop visit, hours, cycles
  - **Section C**: Main Landing Gear Left – manufacturer, model, serial/part no (re-enter), shop visit, hours, cycles
  - **Section D**: Main Landing Gear Right – same fields
  - **Section E**: Nose Landing Gear – same fields
- All mandatory field validation, re-enter field matching validation
- Submit and Cancel buttons
- Data saved to Supabase

## Phase 6: Component List Setup Form (Configuration)
- Form with manufacturer, component name (re-enter), part no (re-enter), CMM no (re-enter), classification, classification date, class linkage, compatible aircraft models (multi-select), estimated price, quotation price
- Validation and submit/cancel
- Data saved to Supabase

## Phase 7: Service List Setup Form (Configuration)
- Form with aircraft model, task, MPD/AMM task IDs, task card ref, description (max 999 chars), assigned component, zones (multi-select), estimated manhours, estimated price, quotation price, interval threshold/repeat hours
- Validation and submit/cancel
- Data saved to Supabase

## Design Style
- Clean, professional look matching the Aerotrend reference: white background, blue/purple accent navigation bar, subtle shadows on cards, data tables with clean borders
- Sample/placeholder data for all dropdown fields (e.g., B737-900, A320, etc.)

