# Implementation Plan

## PPE Homepage Redesign - 任务列表

- [x] 1. 设置 CSS 设计系统和字体


  - [x] 1.1 更新 globals.css 添加 CSS 变量（背景色、强调色、文字颜色）


    - 添加 :root 变量定义
    - 背景色：--bg-page (#F5F5F5), --bg-card (#FFFFFF), --bg-dark (#1A1A1A)
    - 强调色：--accent-primary (#FF8F00)
    - 文字色：--text-primary, --text-secondary, --text-muted
    - _Requirements: 3.1, 3.2, 3.3_
  - [x] 1.2 更新 tailwind.config.js 扩展主题配置


    - 添加 Montserrat 字体配置
    - 添加自定义颜色映射到 CSS 变量
    - 添加无限滚动动画 keyframes
    - _Requirements: 3.4, 5.3_

- [x] 2. 重构 Header 导航组件


  - [x] 2.1 更新 NavigationHeader 组件添加左侧菜单


    - 添加 Home、Product、About 三个菜单项
    - 保持右侧现有功能（搜索、报价、账户、购物车）
    - 使用 LocalizedClientLink 实现导航
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  - [ ]* 2.2 编写 NavigationHeader 单元测试
    - 测试菜单项渲染
    - 测试导航链接正确性
    - _Requirements: 1.1, 1.5_

- [x] 3. 创建 About 页面


  - [x] 3.1 创建 About 页面路由和组件


    - 创建 storefront/src/app/[countryCode]/(main)/about/page.tsx
    - 添加公司简介占位内容
    - 应用设计系统样式
    - _Requirements: 2.1, 2.2_

- [x] 4. 创建 HeroSection 组件（第一屏）


  - [x] 4.1 实现 HeroSection 组件


    - 全屏背景图片布局
    - H1 标题 "Professional PPE Manufacturer for Extreme Environments"
    - 双 CTA 按钮（View Catalog + Request A Quote）
    - 暗黑工业风 + 橙色强调色样式
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_
  - [ ]* 4.2 编写 HeroSection 单元测试
    - 测试标题文本渲染
    - 测试 CTA 按钮渲染和链接
    - _Requirements: 4.2, 4.3_

- [x] 5. 创建 TrustBar 组件（第二屏）


  - [x] 5.1 实现 TrustBar 组件


    - 认证标志展示（CE, ANSI, ISO9001, EN388）
    - 合作伙伴 Logo 展示
    - CSS 无限滚动动画
    - _Requirements: 5.1, 5.2, 5.3_

- [x] 6. 创建 CategoryGrid 组件（第三屏）


  - [x] 6.1 实现 CategoryGrid 组件


    - Bento Grid 布局（1大+2中+2小）
    - Safety Gloves 大格、Safety Shoes/Workwear 中格、Eye Protection/Helmets 小格
    - Hover 效果（图片放大 + 半透明蒙版 + 子分类信息）
    - _Requirements: 6.1, 6.2, 6.3_
  - [ ]* 6.2 编写 CategoryGrid 单元测试
    - 测试所有分类项渲染
    - 测试布局结构
    - _Requirements: 6.1_

- [x] 7. 创建 IndustrySolutions 组件（第四屏）


  - [x] 7.1 实现 IndustrySolutions 组件


    - 标题 "Tailored Protection for Every Industry"
    - 选项卡切换（Construction, Oil & Gas, Chemical）
    - 每个行业的推荐产品展示
    - _Requirements: 7.1, 7.2, 7.3_

- [x] 8. 创建 FeaturedProducts B2B 组件（第五屏）


  - [x] 8.1 实现 FeaturedProductsB2B 组件


    - 轮播布局
    - 产品卡片（标签、规格参数、Inquire Now 按钮）
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  - [ ]* 8.2 编写属性测试 - Product Card Label Position
    - **Property 1: Product Card Label Position**
    - **Validates: Requirements 8.2**
  - [ ]* 8.3 编写属性测试 - Product Card Specifications Display
    - **Property 2: Product Card Specifications Display**
    - **Validates: Requirements 8.3**
  - [ ]* 8.4 编写属性测试 - Product Card Button Text
    - **Property 3: Product Card Button Text**
    - **Validates: Requirements 8.4**

- [x] 9. 创建 FactoryShowcase 组件（第六屏）


  - [x] 9.1 实现 FactoryShowcase 组件


    - 左图右文布局
    - 定制能力展示（Logo 印制、包装定制）
    - 产能信息（500,000 双/月）
    - 交期信息（现货 3 天、定制 20 天）
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 10. 创建 Testimonials 组件（第七屏）


  - [x] 10.1 实现 Testimonials 组件


    - 项目案例展示
    - 案例卡片（图片、数量、位置、年份）
    - _Requirements: 10.1, 10.2_
  - [ ]* 10.2 编写属性测试 - Case Study Card Content
    - **Property 4: Case Study Card Content**
    - **Validates: Requirements 10.2**

- [x] 11. 创建 FooterCTA 组件（第八屏）


  - [x] 11.1 实现 FooterCTA 组件


    - 深色全宽通栏
    - 标题 "Ready to equip your workforce?"
    - 邮箱输入表单
    - 联系信息（WhatsApp、地址、Email）
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

- [x] 12. 整合首页



  - [x] 12.1 更新首页组件整合所有区块

    - 更新 storefront/src/app/[countryCode]/(main)/page.tsx
    - 按顺序整合 8 个区块组件
    - 应用页面背景色
    - _Requirements: 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1_
  - [ ]* 12.2 编写属性测试 - Placeholder Image Usage
    - **Property 5: Placeholder Image Usage**
    - **Validates: Requirements 12.1**

- [x] 13. 创建首页配置文件


  - [x] 13.1 创建 homepage.ts 配置文件


    - 创建 storefront/src/lib/config/homepage.ts
    - 定义所有静态数据（认证、分类、行业、工厂信息、联系方式）
    - 使用占位图片路径
    - _Requirements: 12.1_

- [x] 14. Checkpoint - 确保所有测试通过


  - Ensure all tests pass, ask the user if questions arise.
