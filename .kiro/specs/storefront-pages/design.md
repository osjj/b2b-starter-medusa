# Design Document: Storefront Pages

## Overview

本设计文档描述了storefront项目中三个静态页面（关于我们、成功案例、新闻资讯）的技术实现方案。这些页面将参考demo项目的结构和内容，使用storefront现有的PPE主题色系统和占位图片。

## Architecture

### 技术栈
- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS + 自定义PPE主题变量
- **图片**: Next.js Image组件 + 占位图片
- **图标**: Lucide React（需要安装）

### 目录结构
```
storefront/src/app/[countryCode]/(main)/
├── about/
│   └── page.tsx          # 关于我们页面（更新）
├── cases/
│   └── page.tsx          # 成功案例页面（新建）
└── news/
    └── page.tsx          # 新闻资讯页面（新建）
```

## Components and Interfaces

### About Page Components

```typescript
// 页面结构
interface AboutPageProps {
  // 服务端组件，无props
}

// 核心价值项
interface ValueItem {
  icon: React.ComponentType
  title: string
  description: string
}

// 统计数据项
interface StatItem {
  value: string
  label: string
}

// 发展历程项
interface HistoryItem {
  year: string
  title: string
  description: string
}
```

### Cases Page Components

```typescript
// 案例数据结构
interface CaseItem {
  id: string
  title: string
  company: string
  industry: string
  location: string
  date: string
  image: string
  description: string
  products: string[]
  results: string[]
}
```

### News Page Components

```typescript
// 新闻数据结构
interface NewsItem {
  id: string
  title: string
  category: string
  date: string
  image: string
  excerpt: string
}

// 分类筛选
type NewsCategory = '全部' | '公司动态' | '行业资讯' | '产品资讯' | '技术知识'
```

## Data Models

### 静态数据

由于这些是静态展示页面，数据将直接在页面组件中定义：

1. **About Page Data**
   - 核心价值观数组（4项）
   - 统计数据数组（4项）
   - 发展历程数组（5项）

2. **Cases Page Data**
   - 案例数组（6项）
   - 统计数据数组（4项）

3. **News Page Data**
   - 新闻文章数组（8项）
   - 分类数组（5项）

### 图片资源

使用storefront/public目录下的现有图片：
- `/account-block.jpg` - 通用背景图
- `/hero-image.jpg` - Hero区域背景
- `/login-banner-bg.png` - 备用背景

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Case card completeness
*For any* case item in the cases array, the rendered case card should contain all required fields: image, industry tag, date, title, company name, location, description, products list, and results list.
**Validates: Requirements 2.4**

### Property 2: News category filter correctness
*For any* selected category (other than "全部"), all displayed news items should have a category field that matches the selected category.
**Validates: Requirements 3.3**

### Property 3: News card completeness
*For any* news item in the news array, the rendered news card should contain all required fields: image, category tag, date, title, excerpt, and read more link.
**Validates: Requirements 3.5**

## Error Handling

### 图片加载失败
- 使用Next.js Image组件的placeholder属性
- 设置fallback背景色

### 客户端状态错误
- News页面的分类筛选使用useState，默认值为"全部"
- 确保筛选逻辑不会导致空数组渲染问题

## Testing Strategy

### 单元测试
- 测试新闻分类筛选逻辑
- 测试数据结构完整性

### 属性测试
使用fast-check库进行属性测试：

1. **Case Card Property Test**
   - 生成随机案例数据
   - 验证所有必需字段存在

2. **News Filter Property Test**
   - 生成随机分类选择
   - 验证筛选结果正确性

3. **News Card Property Test**
   - 生成随机新闻数据
   - 验证所有必需字段存在

### 测试框架
- Jest + React Testing Library
- fast-check（属性测试）

### 测试标注格式
每个属性测试必须使用以下格式标注：
```typescript
// **Feature: storefront-pages, Property {number}: {property_text}**
```
