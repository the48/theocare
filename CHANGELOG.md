# Changelog

All notable changes to the THEO-CARE website will be documented in this file.

## [1.1.0] - 2025-12-27

### Added
- New dedicated "Book an Appointment" page with appointment booking form
- Back navigation button on appointment booking page
- New "Contact" page to consolidate contact information and clinic hours
- Multi-page routing system for better navigation
- Form validation and state management for appointment bookings

### Changed
- Refactored main App component to use page-based routing
- Reorganized navigation menu to support new page structure
- Extracted homepage content into separate HomePage component
- Contact section moved from homepage to dedicated Contact page

### Removed
- "Learn More" button from hero section
- Contact information from homepage (moved to Contact page)

### Technical Details
- Created new page components: HomePage, BookAppointmentPage, ContactPage
- Implemented client-side routing with page state management
- Added form inputs for Name, Email, Phone, and Date
- Mobile-responsive design maintained across all pages

---

## [1.0.0] - 2025-12-27

### Added
- Initial responsive healthcare website for THEO-CARE
- Mobile-first design with Tailwind CSS
- Crimson Pro typography throughout
- Header with fixed navigation
- Hero section with call-to-action buttons
- About section showcasing clinic philosophy
- Services section highlighting three service offerings
- Approach section detailing treatment methods
- Contact section with location, clinic hours, and contact details
- Footer with clinic information
- Mobile hamburger menu with large tap targets
- Smooth scrolling navigation
- Responsive grid layouts for all screen sizes
- Brand color scheme (EFE4CF background, 18776C text/accent)
