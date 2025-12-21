# Requirements Document

## Introduction

本文档定义了 PPE（个人防护装备）B2B 电商网站首页重构的需求。目标是创建一个专业、现代、具有工业风格的首页，专注于 B2B 客户转化，包含 8 个核心区块：Hero Section、信任背书条、品类导航、行业解决方案、热销推荐、工厂实力展示、客户案例和底部线索捕获。同时重构 Header 导航，新增 About 页面。

## Glossary

- **PPE**: Personal Protective Equipment（个人防护装备）
- **Hero Section**: 首屏视觉冲击区域，包含主标题和行动按钮
- **Trust Bar**: 信任背书条，展示认证标志和合作伙伴
- **Bento Grid**: 便当盒布局，一种不规则网格布局方式
- **CTA**: Call To Action（行动号召按钮）
- **Lead Magnet**: 线索捕获区域，用于收集潜在客户信息
- **OEM/ODM**: Original Equipment Manufacturer / Original Design Manufacturer（代工/设计制造）
- **Storefront**: 前端商城应用
- **Shadcn UI**: 基于 Radix UI 的 React 组件库

## Requirements

### Requirement 1: Header 导航重构

**User Story:** As a website visitor, I want a clear navigation menu, so that I can easily access different sections of the website.

#### Acceptance Criteria

1. WHEN the Header component renders, THE Storefront SHALL display a left-side navigation menu containing three items: Home, Product, and About.
2. WHEN a user clicks the Home menu item, THE Storefront SHALL navigate to the homepage.
3. WHEN a user clicks the Product menu item, THE Storefront SHALL navigate to the existing product listing page.
4. WHEN a user clicks the About menu item, THE Storefront SHALL navigate to the About page.
5. WHEN the Header component renders, THE Storefront SHALL preserve the existing right-side content including search, quote, account, and cart buttons.

### Requirement 2: About 页面

**User Story:** As a potential B2B customer, I want to view company information, so that I can understand the business before making purchasing decisions.

#### Acceptance Criteria

1. WHEN a user navigates to the About page, THE Storefront SHALL display a company introduction section with placeholder content.
2. WHEN the About page renders, THE Storefront SHALL apply consistent styling with the rest of the website using the defined CSS variables.

### Requirement 3: CSS 设计系统

**User Story:** As a developer, I want a consistent design system with CSS variables, so that I can maintain visual consistency across the website.

#### Acceptance Criteria

1. WHEN the global styles load, THE Storefront SHALL define CSS variables for background colors including light gray (#F5F5F5) for page background and white (#FFFFFF) for card backgrounds.
2. WHEN the global styles load, THE Storefront SHALL define CSS variables for the accent color (#FF8F00).
3. WHEN the global styles load, THE Storefront SHALL define CSS variables for primary text color (dark gray) and secondary text color (light gray).
4. WHEN the global styles load, THE Storefront SHALL import and apply Montserrat font for headings.

### Requirement 4: Hero Section（第一屏）

**User Story:** As a website visitor, I want to see an impactful hero section, so that I immediately understand the company's value proposition.

#### Acceptance Criteria

1. WHEN the homepage loads, THE Storefront SHALL display a full-screen hero section with a high-definition background image.
2. WHEN the hero section renders, THE Storefront SHALL display the H1 heading "Professional PPE Manufacturer for Extreme Environments".
3. WHEN the hero section renders, THE Storefront SHALL display two CTA buttons side by side: a primary "View Catalog" button and a secondary outlined "Request A Quote" button.
4. WHEN a user clicks the "View Catalog" button, THE Storefront SHALL navigate to the product catalog page.
5. WHEN a user clicks the "Request A Quote" button, THE Storefront SHALL trigger the quote request flow.
6. WHEN the hero section renders, THE Storefront SHALL apply dark industrial styling with yellow/orange accent colors.

### Requirement 5: Trust Bar（第二屏 - 信任背书条）

**User Story:** As a B2B buyer, I want to see certifications and partner logos, so that I can trust the company's credibility.

#### Acceptance Criteria

1. WHEN the trust bar section renders, THE Storefront SHALL display certification badges including CE, ANSI, ISO9001, and EN388.
2. WHEN the trust bar section renders, THE Storefront SHALL display partner/client logos in a horizontal layout.
3. WHEN the trust bar is visible, THE Storefront SHALL animate the logos with infinite seamless horizontal scrolling using CSS animation.

### Requirement 6: Category Grid（第三屏 - 品类导航）

**User Story:** As a buyer, I want to quickly navigate to product categories, so that I can find relevant products efficiently.

#### Acceptance Criteria

1. WHEN the category grid section renders, THE Storefront SHALL display categories in a Bento Grid layout with one large cell for Safety Gloves, two medium cells for Safety Shoes and Workwear, and smaller cells for Eye Protection and Helmets.
2. WHEN a user hovers over a category card, THE Storefront SHALL slightly scale up the image and display a semi-transparent overlay with subcategory information.
3. WHEN a user clicks a category card, THE Storefront SHALL navigate to the corresponding category page.

### Requirement 7: Industry Solutions（第四屏 - 行业解决方案）

**User Story:** As an industry-specific buyer, I want to see solutions tailored to my industry, so that I can find appropriate products for my work environment.

#### Acceptance Criteria

1. WHEN the industry solutions section renders, THE Storefront SHALL display the heading "Tailored Protection for Every Industry".
2. WHEN the industry solutions section renders, THE Storefront SHALL display switchable tabs or carousel cards for Construction, Oil & Gas, and Chemical industries.
3. WHEN a user selects an industry tab, THE Storefront SHALL display recommended products specific to that industry.

### Requirement 8: Featured Products（第五屏 - 热销推荐）

**User Story:** As a buyer, I want to see popular products with key specifications, so that I can make quick purchasing decisions.

#### Acceptance Criteria

1. WHEN the featured products section renders, THE Storefront SHALL display products in a carousel layout.
2. WHEN a product card renders, THE Storefront SHALL display a label indicating "Best Seller" or "New Arrival" in the top-left corner.
3. WHEN a product card renders, THE Storefront SHALL display key specification icons and values (e.g., EN388 rating) directly on the card.
4. WHEN a product card renders, THE Storefront SHALL display an "Inquire Now" button instead of "Buy Now".

### Requirement 9: Factory Showcase（第六屏 - 工厂实力）

**User Story:** As a B2B buyer, I want to see factory capabilities, so that I can verify the supplier is a legitimate manufacturer.

#### Acceptance Criteria

1. WHEN the factory showcase section renders, THE Storefront SHALL display factory images on the left and descriptive text on the right.
2. WHEN the factory showcase section renders, THE Storefront SHALL display customization capabilities including logo printing and packaging customization.
3. WHEN the factory showcase section renders, THE Storefront SHALL display production capacity information (e.g., 500,000 pairs monthly).
4. WHEN the factory showcase section renders, THE Storefront SHALL display lead time information for stock items (3 days) and custom orders (20 days).

### Requirement 10: Testimonials/Case Studies（第七屏 - 客户案例）

**User Story:** As a potential customer, I want to see real project examples, so that I can trust the company's track record.

#### Acceptance Criteria

1. WHEN the testimonials section renders, THE Storefront SHALL display project gallery with real project images and descriptions.
2. WHEN a case study card renders, THE Storefront SHALL display project details including quantity supplied and project location.

### Requirement 11: Footer CTA（第八屏 - 底部线索捕获）

**User Story:** As a marketing team member, I want to capture visitor leads, so that I can follow up with potential customers.

#### Acceptance Criteria

1. WHEN the footer CTA section renders, THE Storefront SHALL display a dark-colored full-width banner with the heading "Ready to equip your workforce?" or similar.
2. WHEN the footer CTA section renders, THE Storefront SHALL display an email input field and submit button for catalog download requests.
3. WHEN a user submits their email, THE Storefront SHALL store the email for follow-up purposes.
4. WHEN the footer section renders, THE Storefront SHALL display contact information including WhatsApp number, complete company address, and email.

### Requirement 12: 图片占位符

**User Story:** As a developer, I want placeholder images for all sections, so that I can develop the layout before final assets are ready.

#### Acceptance Criteria

1. WHEN any image component renders, THE Storefront SHALL use the placeholder image located at /account-block.jpg until final images are provided.
