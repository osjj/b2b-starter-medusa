# Implementation Plan

## 1. Backend: Simple Quote Module

- [x] 1.1 Create the simple-quote module structure
  - Create `backend/src/modules/simple-quote/index.ts` with module registration
  - Create `backend/src/modules/simple-quote/models/simple-quote.ts` with entity definition
  - Create `backend/src/modules/simple-quote/models/index.ts` for model exports
  - Create `backend/src/modules/simple-quote/service.ts` extending MedusaService
  - _Requirements: 1.1, 1.5_

- [x] 1.2 Create database migration for simple_quote table
  - Generate migration file in `backend/src/modules/simple-quote/migrations/`
  - Define columns: id, name, email, contact_info, company_name, remark, file_url, cart_items, created_at, updated_at
  - _Requirements: 1.1_

- [x] 1.3 Register the module in medusa-config.ts
  - Add SIMPLE_QUOTE_MODULE to modules configuration
  - _Requirements: 1.1_

- [ ]* 1.4 Write property test for quote creation field storage
  - **Property 1: Quote creation stores all provided fields correctly**
  - **Validates: Requirements 1.1, 1.5**

## 2. Backend: Store API Route

- [x] 2.1 Create Store API route for simple quotes
  - Create `backend/src/api/store/simple-quotes/route.ts` with POST handler
  - Create `backend/src/api/store/simple-quotes/validators.ts` with Zod schema
  - Create `backend/src/api/store/simple-quotes/middlewares.ts` for multipart handling
  - _Requirements: 1.1, 1.6, 2.1_

- [x] 2.2 Configure middleware for multipart/form-data and file upload
  - Add multipart body parser middleware
  - Configure file storage (local or cloud)
  - Update `backend/src/api/store/middlewares.ts` to include simple-quotes routes
  - _Requirements: 2.1, 2.2, 2.3_

- [ ]* 2.3 Write property test for required field validation
  - **Property 2: Required field validation rejects incomplete requests**
  - **Validates: Requirements 1.2, 1.3, 1.4**

- [ ]* 2.4 Write property test for file upload handling
  - **Property 3: File upload processing and URL storage**
  - **Validates: Requirements 2.1, 2.2, 2.3**

## 3. Backend: Admin API Routes

- [x] 3.1 Create Admin API routes for simple quotes
  - Create `backend/src/api/admin/simple-quotes/route.ts` with GET handler for list
  - Create `backend/src/api/admin/simple-quotes/[id]/route.ts` with GET handler for detail
  - Create `backend/src/api/admin/simple-quotes/validators.ts` with query params schema
  - Create `backend/src/api/admin/simple-quotes/query-config.ts` for field configuration
  - Create `backend/src/api/admin/simple-quotes/middlewares.ts`
  - _Requirements: 6.3, 7.1, 7.2_

- [x] 3.2 Register admin middlewares
  - Update `backend/src/api/admin/middlewares.ts` to include simple-quotes routes
  - _Requirements: 6.3_

## 4. Checkpoint

- [ ] 4. Checkpoint - Ensure all backend tests pass
  - Ensure all tests pass, ask the user if questions arise.

## 5. Backend: Admin UI

- [x] 5.1 Create admin hooks for simple quotes API
  - Create `backend/src/admin/hooks/api/simple-quotes.tsx` with useSimpleQuotes and useSimpleQuote hooks
  - _Requirements: 6.3, 7.1_

- [x] 5.2 Create Simple Quotes list page
  - Create `backend/src/admin/routes/simple-quotes/page.tsx` with table component
  - Create table columns configuration (name, email, company_name, created_at)
  - Add navigation to detail page on row click
  - _Requirements: 6.2, 6.3, 6.4_

- [x] 5.3 Create Simple Quote detail page
  - Create `backend/src/admin/routes/simple-quotes/[id]/page.tsx`
  - Display customer info: name, email, contact_info, company_name, remark
  - Display cart items list with product names, variants, quantities
  - Display file download link if file_url exists
  - _Requirements: 7.1, 7.2, 7.3_

- [x] 5.4 Hide native Quotes menu item
  - Configure admin to hide the native "Quotes" sidebar menu
  - _Requirements: 6.1_

## 6. Storefront: Quote Form Modal

- [x] 6.1 Create Quote Form Modal component
  - Create `storefront/src/modules/quotes/components/quote-form-modal/index.tsx`
  - Implement form fields: Name, Email, WhatsApp/WeChat, Company Name, Remark, File Upload
  - Add client-side validation for required fields
  - Implement form submission to POST /store/simple-quotes
  - Handle success: clear cart, close modal, show confirmation
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 6.2 Create API client function for simple quote submission
  - Create `storefront/src/lib/data/simple-quotes.ts` with submitSimpleQuote function
  - Handle multipart/form-data for file upload
  - _Requirements: 5.3_

- [ ]* 6.3 Write property test for form validation
  - **Property 4: Form validation prevents submission without required fields**
  - **Validates: Requirements 5.2**

- [ ]* 6.4 Write property test for form submission data structure
  - **Property 5: Form submission sends correct data structure**
  - **Validates: Requirements 5.3**

## 7. Storefront: Cart Drawer Modifications

- [x] 7.1 Modify Cart Drawer component
  - Update `storefront/src/modules/cart/components/cart-drawer/index.tsx`
  - Remove "View Cart" button
  - Remove "Secure Checkout" button
  - Add "Request Quote" button
  - Integrate Quote Form Modal opening on button click
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

## 8. Storefront: Product Page Modifications

- [x] 8.1 Update Product Price component
  - Modify `storefront/src/modules/products/components/product-price/index.tsx`
  - Add "Reference Price" label adjacent to the price
  - _Requirements: 3.2_

- [x] 8.2 Update Product Variants Table component
  - Modify `storefront/src/modules/products/components/product-variants-table/index.tsx`
  - Change "Add to cart" button text to "Add to Quote"
  - _Requirements: 3.1_

## 9. Final Checkpoint

- [ ] 9. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
