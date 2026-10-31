# Promatrix Technologies — Founder Portfolio

This repository contains the single-page founder portfolio for Shreshtha Khurana and Promatrix Technologies. The experience is presented as a scroll-driven field notebook: each chapter is a full-screen scene, animated into view with GSAP and Lenis, and supported by company and venture identity assets.

This document is an engineering handoff for the existing project. It describes the decisions, conventions, and production dependencies that future maintainers need to understand before changing the site.

## Current stack

- React 19
- Vite 8
- Tailwind CSS 4 through PostCSS
- GSAP and `@gsap/react` for animation and ScrollTrigger orchestration
- Lenis for smooth scrolling
- `react-icons` for interface icons

The application is a client-rendered Vite site. There is no server-side rendering layer in this repository.

## Local development

Requirements:

- Node.js with npm
- Access to the repository dependencies
- A running consultation backend if the booking modal is being tested end to end

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Available scripts:

```bash
npm run dev       # Start Vite development server
npm run lint      # Run ESLint across the repository
npm run build     # Create the production bundle in dist/
npm run preview   # Serve the production bundle locally
```

On Windows PowerShell where script execution blocks `npm.ps1`, use `npm.cmd` instead, for example `npm.cmd run build`.

## Application structure

```text
src/
├── App.jsx                         Application composition and scene order
├── main.jsx                        React entry point
├── index.css                       Theme variables, typography, and global styles
├── assets/                         Chapter backgrounds, mobile images, and venture logos
├── animations/                     GSAP/Lenis setup and motion orchestration
├── components/
│   ├── common/                     Shared background, loading, tracking, and booking UI
│   └── sections/                   The eight narrative chapters
├── config/                         Content data used by the chapter components
├── library/                        GSAP setup and plugin registration
└── utils/                          Animation lifecycle helpers

public/
├── favicon_io/                     Favicon, Apple touch icon, and web manifest assets
├── icons.svg                       Shared SVG symbols
├── robots.txt                      Crawler rules
└── sitemap.xml                     Sitemap placeholder pending the production domain
```

The top-level [App.jsx](./src/App.jsx) controls the scene sequence. Each chapter is rendered inside a `.scene` wrapper so [createScrollScene.js](./src/animations/createScrollScene.js) can pin the main container and transition between chapters.

## Content ownership

Narrative and venture content is kept separate from layout code where practical:

- [firstConfig.js](./src/config/firstConfig.js) contains the foundational philosophy cards.
- [thirdConfig.js](./src/config/thirdConfig.js) contains the core disciplines and capability cards.
- [fifthConfig.js](./src/config/fifthConfig.js) contains the principles shown in the later chapter.
- [companyConfig.js](./src/config/companyConfig.js) contains the venture registry and imported logo assets.

When changing wording, prefer the configuration files when the content is data-driven. Change section components when the structure, semantic hierarchy, or interaction itself is changing.

## Animation and scrolling model

The application creates a shared animation context in [App.jsx](./src/App.jsx):

1. Lenis is initialized by [smoothScroll.js](./src/animations/smoothScroll.js).
2. GSAP ScrollTrigger is updated from the Lenis scroll callback.
3. [createScrollScene.js](./src/animations/createScrollScene.js) finds `.scene` elements, pins the main container, and animates chapter transitions.
4. [createMultiItemScroll.js](./src/animations/createMultiItemScroll.js) handles sections with `.multi-item-scene` and `[data-item-index]` elements.
5. Motion presets are defined in [presets.js](./src/animations/motion/presets.js) and selected through `data-motion` attributes.

If a new animated element is added, make sure it uses an existing motion preset or add a deliberate preset rather than relying on an unknown value. Animation cleanup is important because React Strict Mode mounts effects more than once during development.

## Consultation booking integration

The floating booking action is rendered by [ConsultWidget.jsx](./src/components/common/ConsultWidget.jsx), with the modal and API calls implemented in [ConsultModal.jsx](./src/components/common/ConsultModal.jsx).

The modal expects these backend routes:

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/services` | Load consultation services |
| GET | `/api/consultations/slots?date=YYYY-MM-DD&serviceId=...` | Load available slots |
| POST | `/api/consultations` | Create a consultation booking |

The request body for a booking contains `fullName`, `email`, `phone`, `serviceId`, `date`, `time`, and `notes`.

Before production, [App.jsx](./src/App.jsx) must use the deployed backend URL or a same-origin proxy. A hard-coded `http://localhost:5000` URL will point visitors to their own computer and will not work in production. The frontend should receive this value from a deployment environment variable such as `VITE_API_BASE_URL`.

The backend must also support the deployed frontend origin through CORS and must enforce server-side validation, slot availability, duplicate-booking protection, timezone rules, and rate limiting. Client-side validation in the modal is only a usability aid.

## Static assets and favicon setup

The current favicon set lives in [public/favicon_io](./public/favicon_io). The references are registered in [index.html](./index.html):

- `favicon.ico`
- 16×16 and 32×32 PNG favicons
- Apple touch icon
- 192×192 and 512×512 manifest icons
- `site.webmanifest`

Files in `public/` are copied to the root of the production output without bundling. Keep their URLs root-relative and update the manifest paths if the directory structure changes.

Chapter imagery and venture logos under `src/assets/` are imported by React and fingerprinted by Vite during the build.

## SEO and social identity

[index.html](./index.html) contains the title, description, Open Graph metadata, and JSON-LD for the founder, Promatrix Technologies, and the website. The supplied online profiles are represented in JSON-LD `sameAs` data and as visible links in [Eight.jsx](./src/components/sections/Eight.jsx).

The production domain has not been supplied in this repository. Before launch:

1. Add the absolute canonical URL and `og:url` to [index.html](./index.html).
2. Replace the placeholder state in [sitemap.xml](./public/sitemap.xml) with the live site URL and last-modified date.
3. Add the live sitemap URL to [robots.txt](./public/robots.txt).
4. Set the absolute production URL for `og:image` and `twitter:image` in [index.html](./index.html); the current preview image is in [public/og-image.jpg](./public/og-image.jpg).

## Deployment checklist

- Set the production API base URL and verify the consultation backend.
- Configure CORS for the final frontend origin.
- Run `npm run lint` and `npm run build` in the deployment environment.
- Deploy the contents of `dist/` using the host’s SPA fallback configuration so `/` resolves to `index.html`.
- Confirm that the favicon, manifest, robots, and sitemap URLs return HTTP 200.
- Test the booking flow on a production-like domain, including validation errors and an already-booked slot.
- Test the animated scene flow on current desktop and mobile browsers, including reduced-motion preferences.
- Replace the domain-dependent SEO placeholders before submitting the site to search engines.

## Known maintenance concerns

- [createScrollScene.js](./src/animations/createScrollScene.js) currently enables GSAP `ScrollTrigger` markers. These are useful while tuning scroll timing but should be disabled before a public release.
- The desktop hero uses a remotely hosted Pexels video. Confirm the source remains available and permitted for production use, or move the approved asset to a controlled CDN.
- The initial loading screen waits for all document images and fonts. Large assets can therefore delay first interaction; keep an eye on mobile performance when adding imagery.
- The site currently uses one long narrative route rather than multiple crawlable pages. New sections should preserve a meaningful heading hierarchy and accessible labels.

## Change discipline

Keep changes focused on the existing experience and its content. Preserve the visual language, narrative order, motion lifecycle, and API contract unless a product decision explicitly changes them. When making a substantial animation or backend-contract change, update this README and run the full lint/build checks before handoff.
