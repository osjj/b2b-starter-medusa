# Requirements Document

## Introduction

The Simple Quote system is a custom, lightweight quote request feature for a MedusaJS v2 B2B e-commerce platform. It enables guest users to submit quote requests containing their contact information and current cart items without requiring authentication. The system operates independently from the native MedusaJS Quote Module, providing a streamlined workflow for collecting and managing quote inquiries through the admin dashboard.

## Glossary

- **Simple_Quote_Module**: A custom MedusaJS v2 module that handles storage and retrieval of quote requests
- **Quote_Request**: A submission containing customer contact information and cart items for pricing inquiry
- **Cart_Items**: JSON representation of products the customer wants quoted, including variant IDs, quantities, and product details
- **Store_API**: Public-facing API endpoints accessible without authentication
- **Admin_UI**: The Medusa Admin dashboard extension for managing quote requests
- **Quote_Form_Modal**: A centered dialog component for collecting customer information during quote submission

## Requirements

### Requirement 1

**User Story:** As a guest user, I want to submit a quote request with my contact information and cart items, so that I can receive pricing without creating an account.

#### Acceptance Criteria

1. WHEN a guest user submits a quote request via POST /store/simple-quotes THEN the Simple_Quote_Module SHALL create a new quote record with the provided name, email, contact_info, and cart_items
2. WHEN a quote request is submitted without a name field THEN the Store_API SHALL reject the request with a 400 status code
3. WHEN a quote request is submitted without an email field THEN the Store_API SHALL reject the request with a 400 status code
4. WHEN a quote request is submitted without a contact_info field THEN the Store_API SHALL reject the request with a 400 status code
5. WHEN a quote request includes optional fields (company_name, remark, file_url) THEN the Simple_Quote_Module SHALL store these fields with the quote record
6. WHEN a quote request is successfully created THEN the Store_API SHALL return the created quote record with a 201 status code

### Requirement 2

**User Story:** As a guest user, I want to upload a file (logo/Excel) with my quote request, so that I can provide additional context for my inquiry.

#### Acceptance Criteria

1. WHEN a user submits a quote request with multipart/form-data containing a file THEN the Store_API SHALL accept and process the file upload
2. WHEN a file is uploaded successfully THEN the Simple_Quote_Module SHALL store the file URL reference in the quote record
3. WHEN a quote request is submitted without a file THEN the Store_API SHALL process the request normally with file_url as null

### Requirement 3

**User Story:** As a storefront visitor, I want to see "Add to Quote" instead of "Add to Cart" on product pages, so that I understand the quote-based purchasing flow.

#### Acceptance Criteria

1. WHEN a user views a product page THEN the Storefront SHALL display "Add to Quote" as the primary action button text
2. WHEN a user views a product page THEN the Storefront SHALL display a "Reference Price" label adjacent to the product price

### Requirement 4

**User Story:** As a storefront visitor, I want to request a quote from the cart drawer, so that I can easily submit my selected items for pricing.

#### Acceptance Criteria

1. WHEN a user opens the cart drawer THEN the Storefront SHALL hide the "View Cart" button
2. WHEN a user opens the cart drawer THEN the Storefront SHALL hide the "Secure Checkout" button
3. WHEN a user opens the cart drawer THEN the Storefront SHALL display a single "Request Quote" button
4. WHEN a user clicks the "Request Quote" button THEN the Storefront SHALL open the Quote_Form_Modal in a centered position

### Requirement 5

**User Story:** As a storefront visitor, I want to fill out a quote form in a modal, so that I can provide my contact details along with my cart items.

#### Acceptance Criteria

1. WHEN the Quote_Form_Modal opens THEN the Storefront SHALL display input fields for Name (required), Email (required), WhatsApp/WeChat (required), Company Name (optional), Remark (textarea, optional), and File Upload (optional)
2. WHEN a user attempts to submit the form without filling required fields THEN the Quote_Form_Modal SHALL display validation errors and prevent submission
3. WHEN a user submits a valid form THEN the Storefront SHALL send the form data and current cart contents to POST /store/simple-quotes
4. WHEN the quote submission succeeds THEN the Storefront SHALL clear the cart and close the modal
5. WHEN the quote submission succeeds THEN the Storefront SHALL display a success confirmation message

### Requirement 6

**User Story:** As an admin user, I want to view all quote requests in a dedicated admin section, so that I can manage incoming inquiries.

#### Acceptance Criteria

1. WHEN an admin navigates to the Admin_UI THEN the system SHALL hide the native "Quotes" sidebar menu item
2. WHEN an admin navigates to the Admin_UI THEN the system SHALL display a "New Quotes" menu item in the sidebar
3. WHEN an admin clicks "New Quotes" THEN the Admin_UI SHALL display a table listing all quote requests with columns for name, email, company_name, and created_at
4. WHEN an admin clicks a row in the quotes table THEN the Admin_UI SHALL navigate to a detail view showing customer information and requested cart items

### Requirement 7

**User Story:** As an admin user, I want to view the details of a specific quote request, so that I can review the customer's inquiry and respond appropriately.

#### Acceptance Criteria

1. WHEN an admin views a quote detail page THEN the Admin_UI SHALL display the customer's name, email, contact_info, company_name, and remark
2. WHEN an admin views a quote detail page THEN the Admin_UI SHALL display the list of cart items with product names, variants, and quantities
3. WHEN a quote includes a file_url THEN the Admin_UI SHALL display a link to download or view the uploaded file
