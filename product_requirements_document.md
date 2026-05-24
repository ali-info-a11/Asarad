# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: Asa Rad Software Agency Corporate Website (Redesign & Redevelopment)
**Document Version:** 1.0.0-Enterprise  
**Date:** May 24, 2026  
**Target Audience:** Product Designers, UI/UX Architects, Frontend Engineers, SEO Specialists, Motion Designers, Canva AI, Gemini Pro Systems  

---

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Product Vision](#2-product-vision)
3. [Brand Positioning](#3-brand-positioning)
4. [Business Goals](#4-business-goals)
5. [User Personas](#5-user-personas)
6. [Target Audience](#6-target-audience)
7. [Market Positioning](#7-market-positioning)
8. [Competitor Analysis](#8-competitor-analysis)
9. [Complete Website Architecture](#9-complete-website-architecture)
10. [Multi-page Sitemap](#10-multi-page-sitemap)
11. [Navigation Structure](#11-navigation-structure)
12. [Homepage UX Structure](#12-homepage-ux-structure)
13. [Detailed Section-by-Section Breakdown](#13-detailed-section-by-section-breakdown)
14. [Service Pages Structure](#14-service-pages-structure)
15. [Portfolio System](#15-portfolio-system)
16. [Blog & SEO Strategy](#16-blog--seo-strategy)
17. [Lead Generation Funnels](#17-lead-generation-funnels)
18. [Conversion Optimization Strategy](#18-conversion-optimization-strategy)
19. [UI Design System](#19-ui-design-system)
20. [Typography System](#20-typography-system)
21. [Color Palette](#21-color-palette)
22. [Motion Design Guidelines](#22-motion-design-guidelines)
23. [Animation System](#23-animation-system)
24. [Three.js Scene Concepts](#24-threejs-scene-concepts)
25. [Interactive Experience Design](#25-interactive-experience-design)
26. [Mobile Experience Strategy](#26-mobile-experience-strategy)
27. [Accessibility Requirements](#27-accessibility-requirements)
28. [Technical SEO Requirements](#28-technical-seo-requirements)
29. [Core Web Vitals Optimization](#29-core-web-vitals-optimization)
30. [CMS Architecture](#30-cms-architecture)
31. [API & Backend Structure](#31-api--backend-structure)
32. [Frontend Architecture](#32-frontend-architecture)
33. [Recommended Tech Stack](#33-recommended-tech-stack)
34. [React Architecture](#34-react-architecture)
35. [Next.js Architecture](#35-nextjs-architecture)
36. [TailwindCSS Structure](#36-tailwindcss-structure)
37. [Three.js Integration Strategy](#37-threejs-integration-strategy)
38. [Performance Optimization Strategy](#38-performance-optimization-strategy)
39. [Security Requirements](#39-security-requirements)
40. [Cloudflare & CDN Recommendations](#40-cloudflare--cdn-recommendations)
41. [Deployment Architecture](#41-deployment-architecture)
42. [Scalability Considerations](#42-scalability-considerations)
43. [Content Strategy](#43-content-strategy)
44. [Brand Voice & Messaging](#44-brand-voice--messaging)
45. [CTA Strategy](#45-cta-strategy)
46. [Trust Building Elements](#46-trust-building-elements)
47. [Social Proof System](#47-social-proof-system)
48. [International SEO Strategy](#48-international-seo-strategy)
49. [Structured Data / Schema Strategy](#49-structured-data--schema-strategy)
50. [AI Integration Opportunities](#50-ai-integration-opportunities)
51. [Automation Opportunities](#51-automation-opportunities)
52. [Future Expansion Possibilities](#52-future-expansion-possibilities)
53. [Suggested UI Inspirations](#53-suggested-ui-inspirations)
54. [Suggested Motion Inspirations](#54-suggested-motion-inspirations)
55. [Suggested Interaction Patterns](#55-suggested-interaction-patterns)
56. [Final Design Direction](#56-final-design-direction)
57. [Final Development Roadmap](#57-final-development-roadmap)

---

## 1. Executive Summary
This document establishes the strategic, aesthetic, and technical specifications for the corporate website of **Asa Rad Software Agency** (legally registered as *Asa Pardazesh Hooshmand Rad* in Mashhad, Iran since 2016). The agency operates across national boundaries with active customer touchpoints in Tehran and Oman, delivering custom enterprise software, advanced mobile application engineering, conversion-rate optimized web platforms, and automated technical SEO setups.

The new website will replace the current online footprint with a luxury dark UI featuring high-end immersive motion, Three.js shaders, and interactive mechanics designed to maximize lead capture. It is engineered to satisfy the rigorous technical requirements of international search engine crawlers (Google, Bing), AI-based Answer Engines (AEO), and modern web performance audits.

---

## 2. Product Vision
To build a cinematic digital ecosystem that operates at the nexus of high art and advanced computer science. The website must immediately position Asa Rad not merely as a service vendor, but as an elite engineering partner capable of designing and scaling robust digital products. 

```
┌────────────────────────────────────────────────────────┐
│                   THE VISUAL TRIAD                     │
├───────────────────┬───────────────────┬────────────────┤
│ Apple Minimalism  │  Vercel Motion    │   Linear UI    │
│  - Premium Spacing│  - Fast Feedback  │  - Glassmorphic│
│  - High Contrast  │  - Clean Shadows  │  - Subtlety    │
│  - Refined Fonts  │  - Snappy State   │  - Light Glows │
└───────────────────┴───────────────────┴────────────────┘
```

The design will merge immersive visual storytelling (using WebGL and custom canvas environments) with rigid, pixel-perfect structural layouts to deliver credibility, speed, and high-margin B2B conversions.

---

## 3. Brand Positioning
Asa Rad occupies the high-end custom development space. It refuses the low-cost, template-based paradigm of generic agencies, positioning itself as:
*   **Highly Technical:** Leading in modern JS frameworks (React, Next.js), technical SEO, and AI automation workflows.
*   **Transparent & Clear:** Backed by processes that yield high conversion returns (clients generating over €1M+ in sales).
*   **International:** Tailored for domestic enterprise and Middle Eastern (Oman, UAE) business clients looking to scale internationally.

---

## 4. Business Goals
1. **Increase Lead Inflow:** Elevate inbound qualified B2B project inquiries by 45% within the first two quarters post-launch.
2. **Increase Contract Size:** Shift the median client budget upward by positioning Asa Rad as an enterprise-level architect.
3. **Showcase Engineering Depth:** Eliminate client doubts regarding technical capabilities through WebGL components, performance scores, and highly structured case studies.
4. **Talent Acquisition:** Attract top-tier developers and designers globally by conveying a sophisticated, high-tech internal engineering culture.

---

## 5. User Personas

### Persona A: The Global Enterprise Tech Executive (Director of Product / CTO)
*   **Demographics:** Aged 35–50, based in Tehran, Muscat, or Dubai.
*   **Pain Points:** Existing legacy systems are slow, lack proper mobile UI/UX, or suffer from poor SEO and high bounce rates.
*   **Needs:** A developer partner that writes pristine, maintainable TypeScript code, understands modern headless CMS integrations, and respects project timelines.
*   **Decision Trigger:** Technical documentation, architectural diagrams, fast page loads, and smooth WebGL interfaces showing mathematical precision.

### Persona B: The High-Growth E-Commerce Owner (Managing Director / CEO)
*   **Demographics:** Aged 28–45, scaling a digital storefront with high transactional volume.
*   **Pain Points:** Magento/WordPress performance bottlenecks, low conversion rates on checkout screens, and declining organic visibility.
*   **Needs:** Custom headless WooCommerce development, extreme load speed (LCP < 1.2s), and clean visual brand assets.
*   **Decision Trigger:** Verification of €1M+ sales benchmarks, clear service ROI descriptions, and instant contact options (WhatsApp, Telegram).

---

## 6. Target Audience
The core market segments are categorized as follows:
*   **Mid-to-Large Scale Enterprises:** Companies seeking custom ERP/CRM integrations, internal business automation engines, and cloud migration.
*   **High-Volume Commerce Brands:** Merchants requiring bespoke WooCommerce architectures, payment gateway pipelines, and optimized purchase funnels.
*   **Startup Teams (Series A/B funded):** Product owners needing rapid MVP development built on scalable Next.js + React Native stacks.
*   **Agencies Seeking Partners:** Foreign agencies requiring specialized "white-label" technical development services.

---

## 7. Market Positioning
Asa Rad operates in the premium quadrant:

```
                  Premium Pricing
                        ▲
                        │      [ASA RAD]
                        │      Bespoke WebGL,
                        │      Next.js, Enterprise SEO
                        │
Low Customization ◄─────┼─────► High Customization
                        │
                        │      Boutique Agencies
                        │      & Template Shops
                        ▼
                  Budget Pricing
```

This positioning is defended by delivering high-performing, secure infrastructure that directly contributes to top-line revenue growth, decoupling Asa Rad from price wars in the local market.

---

## 8. Competitor Analysis
*   **Local Competitors (Typical Web Shops):** Rely on generic WordPress templates, low-security host configurations, and lack custom interactive WebGL systems.
*   **Regional Competitors (Dubai/Oman Agencies):** High pricing but often outsource execution to junior devs, leading to sluggish execution and poor technical SEO.
*   **Global Leaders (Awwwards Winners):** Immersive, high-performance sites. Asa Rad matches their aesthetic standards (Lenis smooth scrolling, WebGL hero, high-performance RSC configurations) but offers highly cost-efficient execution.

---

## 9. Complete Website Architecture

The frontend is a decoupled architecture built on Next.js 15+, fetching content dynamically via GraphQL/REST from a Headless CMS, deployed over a global edge network.

```
+------------------------------------------------────────────────------+
|                       CLIENT WEB BROWSER                             |
|  +--------------------+  +----------------------+  +--------------+  |
|  | Next.js App Router |  | Framer Motion & GSAP |  | WebGL/Three  |  |
|  +--------------------+  +----------------------+  +--------------+  |
+--------------------------------───┬──────────────────────────────────+
                                    │ (Dynamic Routing / SSR / ISR)
                                    ▼
+--------------------------------────────────────────────────────------+
|                        CLOUDFLARE EDGE CDN                           |
|  +--------------------------------+  +----------------------------+  |
|  |   Brotli/WebP Image Optimizer  |  | Edge Page Cache / WAF Rules|  |
|  +--------------------------------+  +----------------------------+  |
+--------------------------------───┬──────────────────────────────────+
                                    │ (Secure GraphQL Requests)
                                    ▼
+--------------------------------────────────────────────────────------+
|                           BACKEND LAYER                              |
|  +---------------------------+    +-------------------------------+  |
|  | Headless CMS (Strapi/Sane) |    | Node.js / Express microservice|  |
|  +───────────────────────────+    +───────────────────────────────+  |
|  +────────────────────────────────────────────────────────────────+  |
|  | Database (PostgreSQL) / CRM (HubSpot/Local Lead DB)            |  |
|  +────────────────────────────────────────────────────────────────+  |
+----------------------------------------------------------------------+
```

---

## 10. Multi-page Sitemap
The website will expose localized routing prefixes (`/fa` and `/en`) mapped to the following hierarchy:

*   `/` (Homepage - Immersive WebGL experience)
*   `/services` (Core Services Directory)
    *   `/services/web-development` (Custom React/Next.js platforms)
    *   `/services/mobile-apps` (Bespoke iOS & Android development)
    *   `/services/technical-seo` (Advanced enterprise search strategy)
    *   `/services/ai-automation` (ERP, CRM integrations, and workflows)
*   `/portfolio` (Interactive Case Study Matrix)
    *   `/portfolio/[case-study-slug]` (Deep architectural case studies)
*   `/blog` (Technical Content Hub)
    *   `/blog/[category]` (Silo taxonomy pages)
    *   `/blog/[article-slug]` (High-value engineering content)
*   `/about` (Company vision, registered entities, and team)
*   `/contact` (Interactive project planner and lead gateway)

---

## 11. Navigation Structure
*   **Header (Desktop):** Semi-transparent glassmorphic banner (`backdrop-filter: blur(24px)`) fixed to view top.
    *   Left: Animated SVG logo (Vector path transition on hover).
    *   Center: Semantic nav items (`Services` with hover megamenu, `Portfolio`, `Blog`, `About`).
    *   Right: Primary Call-to-Action button (`Let's Build` with micro-gradient glow), language toggle (En/Fa).
*   **Megamenu (Hover Trigger):** Grid layout showcasing specialized services with iconography, micro-descriptions, and an highlighted active case study.
*   **Command Menu (`Cmd + K` / `Ctrl + K`):** Global interactive keyboard shortcut overlay. Provides rapid navigation, theme toggles, search across blog posts, and direct contact options.

---

## 12. Homepage UX Structure
The homepage runs on a dynamic visual scrolling narrative:

1.  **Fold 1 (Hero):** 3D WebGL Web Canvas + Core USP Header + Primary CTA.
2.  **Fold 2 (Client Logos):** Infinite horizontal scroll loop (grayscale logos turning into brand colors on hover).
3.  **Fold 3 (Metric Showcase):** Big-text numbers counting up to key achievements (e.g., "€1M+ generated client sales").
4.  **Fold 4 (Interactive Service Carousel):** Hover-triggered card deck detailing services (Next.js, Technical SEO, AI Automation).
5.  **Fold 5 (Featured Works Matrix):** Large-scale interactive grid containing selected client case studies.
6.  **Fold 6 (Interactive Calculator):** Direct engagement widget to configure custom project parameters.
7.  **Fold 7 (Footer):** Detailed links, legal details (Asa Pardazesh Hooshmand Rad), contact portals, and trust elements.

---

## 13. Detailed Section-by-Section Breakdown

### Homepage Section 1: Hero Scene
*   **Visual Design:** An immersive dark canvas covering 100vh. A dynamic, mouse-reactive 3D particle array occupies the right half of the viewport. Faded radial mesh gradients illuminate the text layouts from behind.
*   **Copywriting Hierarchy:**
    *   *Kicker (H2):* Next-Gen Engineering Partner
    *   *Headline (H1):* We Architect Scalable Digital Infrastructure
    *   *Paragraph:* Asa Rad builds ultra-fast Next.js platforms, native mobile applications, and technical SEO architectures optimized for search engine bots and AI answer engines.
*   **UI Elements:** Floating scroll indicator, Dual glassmorphic buttons (`Start Project`, `Explore Architecture`).

### Homepage Section 2: Trust Banner
*   **Visual Design:** A subtle 80px high track. Grayscale logos of clients crawl horizontally via a CSS translate animation loop.
*   **Aesthetic Details:** Left and right edges have gradient masks to blend seamlessly into the dark background.

### Homepage Section 3: Value Metrics
*   **Visual Design:** A three-column grid layout utilizing high-contrast typography.
*   **Metrics:**
    *   Column 1: `€1M+` (Sales generated for client ecosystems)
    *   Column 2: `99.9%` (Cloud deployment uptime SLAs)
    *   Column 3: `95+` (Average Lighthouse Performance score targets)

---

## 14. Service Pages Structure
Every individual service page is organized as an educational sales funnel:

| Section Name | Visual Representation | Purpose |
| :--- | :--- | :--- |
| **Hero & Architecture** | 3D wireframe schematic of the tech stack | Establishes immediate technical credibility |
| **Problem Definition** | Split grid with high-contrast text | Exposes specific business bottlenecks (e.g., slow load times) |
| **Our Solution Suite** | Expandable interactive accordion list | Details exact service deliverables and APIs |
| **Live Case Study** | Large card showing metrics and source links | Demonstrates historical success of the technology |
| **FAQ & Schema** | Clean text drop-down list | Answers pricing, hosting, and timeline questions |

---

## 15. Portfolio System
The Portfolio uses a custom filtering matrix to sort client case studies:

```
[ All Projects ]  [ Web Platforms ]  [ Mobile Apps ]  [ Enterprise Systems ]
=============================================================================
+-----------------------------------+   +-----------------------------------+
| Case Study A: E-Commerce Scale    |   | Case Study B: ERP Dashboard       |
| Tech: Next.js, Headless WooCommerce|   | Tech: React, Node.js, Cloudflare  |
| Performance Gain: +142% LCP speed |   | Efficiency Gain: -35% manual work |
+-----------------------------------+   +-----------------------------------+
```

Each detail page contains:
*   **The Blueprint:** System architecture diagram (built with SVG and SVG-path animations).
*   **The Challenge:** Narrative of the obstacles faced.
*   **The Execution:** Concrete explanation of libraries, optimizations, and technical workflows.
*   **The Results:** Verified analytics dashboard screenshot showing performance scores.

---

## 16. Blog & SEO Strategy
*   **Siloing Structure:** Content categorized into strict technical silos: `/blog/nextjs-react/`, `/blog/technical-seo/`, `/blog/ai-automation/`.
*   **Internal Linking Schema:** Every deep article must link to its respective parent category page and a primary service conversion page.
*   **GEO & AEO Optimizations:** Articles must include detailed definitions, structural code templates, and answer blocks designed to be digested by LLM web parsers (such as Gemini, Perplexity, OpenAI Search).
*   **Key Topics:**
    *   "Configuring Next.js App Router Middleware for Dynamic Persian-English Routing"
    *   "Why White-Label WooCommerce Beats Standard Template Layouts in Core Web Vitals"

---

## 17. Lead Generation Funnels
The site utilizes a multi-step project planner instead of generic forms.

*   **Step 1:** Select Core Focus (e.g., "Web App Development", "SEO Strategy").
*   **Step 2:** Select Budget Scale ($10K - $25K, $25K - $50K, $50K+).
*   **Step 3:** Project Timeline and Contact Information.
*   **UX Experience:** Fluid slider indicators, dynamic state tracking, custom step animations via Framer Motion, and instant CRM API transmission.

---

## 18. Conversion Optimization Strategy
*   **Exit-Intent Overlay:** A glassmorphic pop-up offering a free technical website audit triggers if cursor movements suggest intent to exit the page.
*   **Sticky CTAs:** Mobile views show a persistent, thumb-accessible CTA button on long-form content.
*   **Contextual CTAs:** CTA banners are dynamically injected inside blog articles based on the parent category tag (e.g., NextJS article injects a React consulting CTA).

---

## 19. UI Design System
The design relies on "Dark Luxury" styles with deep layering.

*   **Border Radii:** Rounded corners configured at `8px` (Small), `12px` (Medium), and `24px` (Large) to create structured card elements.
*   **Glassmorphism Specs:**
    *   Background: `rgba(10, 10, 12, 0.65)`
    *   Borders: `1px solid rgba(255, 255, 255, 0.08)`
    *   Backdrop Filter: `blur(20px)`
*   **Box Shadows:** Drop shadows utilizing custom CSS variables for multi-layered overlays:
    ```css
    --shadow-premium: 0 4px 30px rgba(0, 0, 0, 0.4), 
                      inset 0 1px 1px rgba(255, 255, 255, 0.05);
    ```

---

## 20. Typography System
To display clean typography scales, we configure Google Fonts pairings:
*   **Latin Font Families:**
    *   Display/Headings: `Outfit` (sans-serif)
    *   Body Text: `Inter` (sans-serif)
*   **Persian Font Families:**
    *   Primary: `IRANSansXV` / `Estedad` (variable fonts)

### Size Hierarchy (Tailwind Mapping):
*   `H1` Display: `text-5xl md:text-7xl font-semibold tracking-tight`
*   `H2` Section Heading: `text-3xl md:text-5xl font-medium tracking-tight`
*   `H3` Card Title: `text-xl md:text-2xl font-medium`
*   `Body-Large`: `text-lg font-light leading-relaxed`
*   `Body-Normal`: `text-base font-light leading-relaxed`

---

## 21. Color Palette
The color structure is optimized for high contrast on OLED screens:

| Palette Name | Color Value (HEX) | Use Case |
| :--- | :--- | :--- |
| **Deep Obsidian (Base)** | `#050507` | Base background |
| **Vercel Dark (Surface)**| `#0A0A0C` | Cards, components |
| **Pure White**           | `#FFFFFF` | Primary headers |
| **Slate Gray**           | `#9CA3AF` | Supporting text |
| **Neon Teal (Accent)**   | `#00F2FE` | Interactions, glows |
| **Tech Purple (Accent)** | `#7F00FF` | Supporting gradients |

---

## 22. Motion Design Guidelines
*   **Physics Engine:** Frame transitions must align with physical properties of momentum and drag. Avoid simple linear easing curves.
*   **Lenis Integration:** Apply smooth inertial scrolling globally (`lerp: 0.1`, `wheelMultiplier: 1`).
*   **GSAP ScrollTrigger:** Scroll-triggered elements should scale up slightly (from `0.97` to `1.0`) while fading in, mapping exactly to scroll velocity.
*   **Frame Budgeting:** Motion scripts must not trigger Layout Thrashing (write optimizations via `requestAnimationFrame`).

---

## 23. Animation System
Below is a Framer Motion configuration example for page transition sequences:

```typescript
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 15,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier curve
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    filter: "blur(6px)",
    transition: {
      duration: 0.4,
      ease: [0.7, 0, 0.84, 0],
    },
  },
};
```

---

## 24. Three.js Scene Concepts
The hero header uses an interactive WebGL scene rendered via React Three Fiber.

### Concept: The Quantum Network Mesh
An array of 20,000 instanced vertices representing data nodes. The vertices float slowly inside a 3D field and alter their colors based on mouse coordinates.

### Fragment Shader Specifications:
```glsl
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if (distanceToCenter > 0.5) discard;
    
    // Custom gradient glow calculation
    float intensity = 1.0 - (distanceToCenter * 2.0);
    vec3 color = vec3(0.0, 0.95, 0.99) * intensity; // Neon Teal Base
    
    // Mouse proximity lighting modifier
    float proximity = 1.0 - clamp(length(vPosition.xy - uMouse), 0.0, 1.0);
    color += vec3(0.5, 0.0, 1.0) * proximity * intensity; // Purplish glow
    
    gl_FragColor = vec4(color, intensity);
}
```

---

## 25. Interactive Experience Design
*   **3D Hover Cards:** Services are rendered as card meshes that tilt according to mouse positions.
*   **Mouse-Reactive Gradients:** Radial gradients (`background: radial-gradient(...)`) tracking the mouse position across cards to draw subtle neon borders.
*   **SVG Path Animations:** Interactive connectors in the architecture blueprints morph and light up as the user scrolls past relevant technology modules.

---

## 26. Mobile Experience Strategy
*   **Three.js Fallback System:** Check the device capabilities and screen size. If a mobile browser is detected, WebGL rendering is disabled, replacing the 3D scene with an animated CSS/SVG mesh.
*   **Touch Optimizations:** Buttons and clickable blocks must meet target size requirements of at least `48x48px` to ensure proper usability.
*   **Layout Swaps:** Megamenu hover arrays convert into full-screen sliding drawers on mobile viewports.

---

## 27. Accessibility Requirements
*   **WCAG Compliance:** Implement a minimum color contrast ratio of `4.5:1` for all copy.
*   **Keyboard Navigation:** Nav links, sliders, and form components must offer visible focus states (`:focus-visible`).
*   **Screen Reader Labels:** Add descriptive `aria-label` declarations to all non-text buttons (such as social media link icons).
*   **Reduced Motion Option:** CSS media queries must listen to operating system preferences:
    ```css
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
    }
    ```

---

## 28. Technical SEO Requirements
*   **Semantic Structures:** Use a single, descriptive `<h1>` title block on every page. Mark sections with `<header>`, `<main>`, `<article>`, and `<footer>` containers.
*   **Dynamic Metadata Generation:** Configure Next.js Metadata API structures to build distinct tags for social platforms and search indexing engines.
*   **XML Sitemaps:** System must generate index files matching localized directory maps.
*   **Robot Navigation Rules:** Use a structured `robots.txt` configuration:
    ```
    User-agent: *
    Allow: /
    Disallow: /api/
    Sitemap: https://asaradco.com/sitemap.xml
    ```

---

## 29. Core Web Vitals Optimization
To guarantee top performance scores, developers must hit the following benchmarks:

```
┌────────────────────────────────────────────────────────┐
│               CORE WEB VITALS TARGETS                  │
├───────────────────────────────────┬────────────────────┤
│ Metric                            │ Target Threshold   │
├───────────────────────────────────┼────────────────────┤
│ Largest Contentful Paint (LCP)    │ < 1.2s             │
│ First Input Delay (FID)           │ < 50ms             │
│ Cumulative Layout Shift (CLS)     │ < 0.05             │
│ Time to First Byte (TTFB)         │ < 150ms            │
└───────────────────────────────────┴────────────────────┘
```

Implement asset preloading rules for system fonts (`Outfit`, `Inter`) and load all secondary assets asynchronously.

---

## 30. CMS Architecture
The website uses a Headless CMS (Strapi or Sanity) configured with localized fields:

```
+--------------------------------------------------------------+
|                        CMS SCHEMAS                           |
+--------------------------------------------------------------+
|  1. Portfolio Collection                                     |
|     - Title (fa / en)                                        |
|     - Architecture Diagram (SVG Media File)                  |
|     - Technology Tags (Reference array)                      |
|     - Metrics (Sales scale, Speed gains)                     |
|                                                              |
|  2. Blog Collection                                          |
|     - Title (fa / en)                                        |
|     - Canonical URL override                                 |
|     - Category (Next.js, Technical SEO, AI Automation)       |
|     - RichText Content (Dynamic blocks for code snippets)    |
+--------------------------------------------------------------+
```

---

## 31. API & Backend Structure
*   **Lead Intake API Router:** `/api/leads`
    *   Validates input values using Zod rules.
    *   Triggers Telegram/WhatsApp bot notifications to the account managers (Mahsa Mollaee).
    *   Inserts lead documents into PostgreSQL DB and syncs data to CRM portals.
*   **Dynamic Optimization API Router:** `/api/perf`
    *   Monitors production uptime stats and feeds metrics straight to the homepage values panel.

---

## 32. Frontend Architecture
We adopt the Next.js App Router paradigm.

```
src/
├── app/                  # App Router Layouts and Pages
│   ├── [locale]/         # Localized paths ('en' or 'fa')
│   │   ├── layout.tsx    # Context, Lenis & Theme providers
│   │   └── page.tsx      # Homepage component
│   └── api/              # API endpoints
├── components/           # UI Components
│   ├── ui/               # Base design elements (Buttons, Inputs)
│   ├── three/            # WebGL, Canvas and Shaders
│   └── blocks/           # Complex sections (Hero, Calculator)
├── hooks/                # Custom React Hooks (useLenis, etc.)
└── styles/               # Global CSS and Tailwind variables
```

---

## 33. Recommended Tech Stack
*   **Framework:** React 19 + Next.js 15+ (App Router)
*   **Language:** TypeScript
*   **Styling:** TailwindCSS v4
*   **Animations:** GSAP (ScrollTrigger) & Framer Motion
*   **WebGL:** Three.js + React Three Fiber (R3F) + Drei
*   **Scroller:** Lenis Scroll
*   **Validation:** Zod
*   **Deployment:** Vercel Pro
*   **DNS & Security:** Cloudflare Enterprise tier

---

## 34. React Architecture
*   **Component Splitting:** Extract state logic into leaf elements to limit unnecessary component re-renders.
*   **Memoization Rules:** Wrap compute-heavy processes in `useMemo` and `useCallback` hooks inside WebGL configurations.
*   **State Separation:** Maintain layout options inside React Context providers and isolate dynamic client forms in their own localized components.

---

## 35. Next.js Architecture
*   **Rendering Choice:**
    *   Static routes (Blog posts, portfolio items) build as Static Site Generation (SSG) assets.
    *   Form targets and custom estimators use Server-Side Rendering (SSR).
*   **Localization Route Manager:** Next.js middleware scans cookies or incoming headers to select directories:
    ```typescript
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';
     
    export function middleware(request: NextRequest) {
      const pathname = request.nextUrl.pathname;
      const pathnameIsMissingLocale = ['/en', '/fa'].every(
        (locale) => !pathname.startsWith(locale) && pathname !== locale
      );
     
      if (pathnameIsMissingLocale) {
        // Fallback to Persian (fa) or dynamically detect headers
        return NextResponse.redirect(
          new URL(`/fa${pathname}`, request.url)
        );
      }
    }
    ```

---

## 36. TailwindCSS Structure
The `tailwind.config.ts` extends themes using custom variables:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        obsidian: '#050507',
        surface: '#0A0A0C',
        tealGlow: '#00F2FE',
        techPurple: '#7F00FF'
      },
      fontFamily: {
        display: ['Outfit', 'var(--font-estedad)', 'sans-serif'],
        body: ['Inter', 'var(--font-iransans)', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      }
    }
  }
};
export default config;
```

---

## 37. Three.js Integration Strategy
To maintain stable rendering speeds:
*   Configure all point meshes under a single `<instancedMesh>` tag to lower CPU draw calls.
*   Route dynamic interactions (like mouse proximity glow) to execute directly in the GPU Fragment Shader instead of standard React state hooks.
*   Apply conditional imports to dynamically load the WebGL modules:
    ```typescript
    import dynamic from 'next/dynamic';
    const NetworkCanvas = dynamic(() => import('@/components/three/NetworkCanvas'), {
      ssr: false,
      loading: () => <div className="canvas-fallback" />
    });
    ```

---

## 38. Performance Optimization Strategy
*   **Image Compression:** Convert raw image assets into `.webp` format and serve them using `next/image` with predefined dimensions.
*   **Tree Shaking:** Select module imports carefully to prevent unused code blocks from bloating the main bundle files (e.g. `import { gsap } from 'gsap/dist/gsap'`).
*   **Dynamic Preloading:** Preload next-in-line routes as mouse cursors hover over nav elements, reducing transitions to sub-100ms speeds.

---

## 39. Security Requirements
*   **Content Security Policy (CSP):** Apply strict CSP headers to block unauthorized cross-site scripting vulnerabilities.
*   **CSRF Prevention:** Verify validity tokens on lead capture endpoints.
*   **Sanitization Rules:** Sanitize inputs on form values to prevent injection scripts.

---

## 40. Cloudflare & CDN Recommendations
*   **Web Application Firewall (WAF):** Set up rules to block malicious web scraping systems and automated form-spamming bots.
*   **Edge Caching:** Configure page caching rules to serve static assets directly from nearby edge data centers.
*   **Minification Rules:** Enable auto-minification settings for javascript files and stylesheets.

---

## 41. Deployment Architecture
*   **Vercel Edge Platform:** Host code repository structures across global Vercel systems.
*   **Multi-Region Strategy:** Deploy databases in locations that minimize latency for both domestic users and global clients.
*   **Preview Environments:** Implement isolated testing build setups for active git branch pull-requests.

---

## 42. Scalability Considerations
*   **Decoupled CMS Core:** Storing files inside separate CMS nodes allows administrators to edit blog posts without needing to run new frontend code deployments.
*   **Incremental Static Regeneration (ISR):** Set dynamic update cycles (`revalidate: 3600`) to let static routes refresh content components automatically in the background.

---

## 43. Content Strategy
Develop deep, analytical case studies detailing real technical execution metrics. Avoid generic promotional claims, focusing instead on showing actual developer tools, architectural designs, and tangible business gains. Write specialized content addressing the direct technical pain points of CTOs and Product Directors.

---

## 44. Brand Voice & Messaging
Maintain a mature, tech-focused, and authoritative corporate persona. Use clear, descriptive terminology rather than vague marketing jargon.

*   *Do Not Write:* "We build amazing website templates for all businesses."
*   *Write:* "We design and deploy fast Next.js architectures and custom WooCommerce systems that optimize search visibility and increase conversions."

---

## 45. CTA Strategy
*   **Primary Action Hook:** "Schedule Tech Consultation" - Direct access to schedule meetings using calendars.
*   **Secondary Action Hook:** "Request Platform Audit" - Offers high-value insights, converting skeptical visitors.
*   **Design Treatment:** High-contrast buttons with floating pointer effects and micro-gradients.

---

## 46. Trust Building Elements
*   **Live Status Indicator:** Green glow element showing "All Systems Operational - Deploying Next.js platforms."
*   **Real Uptime Displays:** Live API graphs plotting average response and latency times across networks.
*   **SSL Certification:** Highlight secure badge logos in contact portals.

---

## 47. Social Proof System
*   **Metric-Driven Cases:** Showcase client successes using concrete data dashboards (e.g. "+180% organic impressions").
*   **Developer Quotes:** Testimonial blocks from client CTOs confirming clean codebase integrations.
*   **Client Logos:** Clean grayscale carousels showing companies that run on Asa Rad code architectures.

---

## 48. International SEO Strategy
*   **Directory Routing Paths:** Target `/en` for international audiences and `/fa` for domestic visitors.
*   **Header Tag Setup:** Configure dynamic Hreflang maps to guide indexing crawlers:
    ```html
    <link rel="alternate" hreflang="en" href="https://asaradco.com/en" />
    <link rel="alternate" hreflang="fa" href="https://asaradco.com/fa" />
    ```
*   **Database Localization:** Load page contents from matching localization files in the CMS nodes.

---

## 49. Structured Data / Schema Strategy
We inject JSON-LD schema configurations to improve rich search engine results:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Asa Rad",
  "legalName": "Asa Pardazesh Hooshmand Rad",
  "url": "https://asaradco.com",
  "logo": "https://asaradco.com/assets/logo.png",
  "sameAs": [
    "https://github.com/asaradco"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mashhad",
    "addressCountry": "IR"
  },
  "serviceArea": ["IR", "OM", "AE"]
}
```

---

## 50. AI Integration Opportunities
*   **Conversational Assistant:** Implement an AI-powered helper inside the contact portal trained on Asa Rad's exact service catalog.
*   **Lead Analyzer System:** Use Gemini APIs to evaluate incoming project briefs and score lead quality prior to forwarding notifications to sales agents.

---

## 51. Automation Opportunities
*   **Deployment Pipeline:** Build GitHub Actions to automatically run lint tests and compile builds on pull-requests.
*   **Automatic Lead Sync:** Link contact entry portals directly to team channel bots (Telegram/WhatsApp) for instantaneous follow-ups.

---

## 52. Future Expansion Possibilities
*   **Asa Rad Dev Academy:** A technical learning platform to recruit top regional developers.
*   **Interactive Design Playground:** A playground section highlighting custom WebGL prototypes to draw Awwwards visual praise.

---

## 53. Suggested UI Inspirations
*   **Apple.com:** Focus on spacing proportions and high-end typographic scales.
*   **Vercel.com:** Study clean card layouts, glassmorphic styles, and system status indicators.
*   **Linear.app:** Observe glow paths, dark obsidian backgrounds, and clean keyboard interfaces.

---

## 54. Suggested Motion Inspirations
*   **Stripe.com:** Look at smooth, physics-based dropdown transitions and megamenu structures.
*   **Framer.com:** Observe responsive card entries and hover card tilt transformations.

---

## 55. Suggested Interaction Patterns
*   **Toggle Elements:** Use fluid sliding indicators that glide across option states.
*   **Scroll-Linked Reveals:** Utilize GSAP scroll transitions to reveal details sequentially.

---

## 56. Final Design Direction
The interface will follow a "Dark Cinematic Luxury" theme. Deep obsidian colors provide high-contrast backdrops for white typography, highlighted by neon teal borders and subtle purple glows.

---

## 57. Final Development Roadmap

```
+--------------------------------------------------------------------------+
|                        DEVELOPMENT ROADMAP                               |
+--------------------------------------------------------------------------+
| Phase 1: Planning & Setup (Weeks 1-2)                                    |
|   - Setup Next.js App Router, Tailwind variables, and global middleware  |
|                                                                          |
| Phase 2: Design & Prototyping (Weeks 3-5)                                |
|   - Design Figma UI layouts and code custom WebGL shaders in sandbox     |
|                                                                          |
| Phase 3: Core Implementation (Weeks 6-10)                                |
|   - Build components, hook up the Headless CMS, and code calculators     |
|                                                                          |
| Phase 4: SEO & QA Polish (Weeks 11-12)                                   |
|   - Conduct schema audits, test accessibility, and review performance    |
|                                                                          |
| Phase 5: Launch & Monitor (Week 13+)                                     |
|   - Route DNS through Cloudflare WAF, deploy, and review analytics       |
+--------------------------------------------------------------------------+
```
