# Portfolio Business Redesign Implementation Roadmap

## Project Scope

Working copy: `C:\Users\Alexander Olomokoro\Documents\Client Work\general\portfolio-website`

Source repo: `https://github.com/xandersavage/portfolio-website`

Original local portfolio folder: `C:\Users\Alexander Olomokoro\Documents\Personal Projects\portfolio-website`

The original local folder is not edited. This redesign turns the cloned portfolio into a freelance web and AI business website while keeping the current dark hero, MagicUI-style motion, cards, gradients, and technical personality.

## Baseline

- Repo cloned into the workspace copy from GitHub on 2026-06-25.
- `src/`, `public/`, package files, and assets verified present.
- `npm.cmd install` completed from the lockfile.
- `npm.cmd run build` passed before redesign changes.
- `npm.cmd run lint` passed before redesign changes with existing hook warnings:
  - `src/components/magicui/animated-grid-pattern.tsx`
  - `src/components/sections/about/AboutTerminal.tsx`
- npm install reported dependency audit issues: 11 vulnerabilities. This is tracked as a post-redesign dependency/security follow-up unless upgrades become required for the implementation.

## Module Checklist

| Module | Status | Acceptance Criteria |
| --- | --- | --- |
| 0 - Workspace Repair + Tracking | Complete | Cloned repo verified, roadmap created, baseline build/lint captured. Browser screenshots were blocked by session policy; see Verification Log. |
| 1 - Foundation + Hero | Complete | Buyer-facing metadata, Open Graph defaults, remote image config, hero offer and CTAs updated. |
| 2 - Business Sections | Complete | Services, process, and trust/proof sections added without abandoning existing visual language. |
| 3 - Case Studies + Project Data | Complete | Rammies Vacation, Fosh Estate, and Threhills Equipments added as featured work; project model supports case-study fields. |
| 4 - Contact + Conversion | Complete | Fake form removed; contact CTA now uses a real mailto inquiry path. |
| 5 - SEO + Launch Walkthrough | Complete | Sitemap, robots, canonical, structured data, Open Graph image, and non-code SEO launch checklist added. |

## Design Decisions

- Keep the current single-page structure for this implementation; service and case-study route strategy is documented for the next iteration.
- Keep MagicUI motion and card language, but make the content buyer-facing.
- Use client-approved optimized screenshots for the featured client case studies.
- Do not simulate contact form submission. Use a mailto project inquiry path until a real form backend is added.

## Change Log

### 2026-06-25

- Cloned `xandersavage/portfolio-website` into the workspace copy.
- Installed dependencies from `package-lock.json`.
- Captured baseline build and lint results.
- Added this implementation roadmap.
- Added buyer-facing SEO metadata, sitemap, robots, generated Open Graph image, and structured data.
- Reworked the hero around websites, CMS platforms, SaaS landing pages, and AI-enabled tools.
- Added services, trust proof, and process sections.
- Added Rammies Vacation, Fosh Estate, and Threhills Equipments as featured client case studies.
- Reworked the project overlay into a case-study reader.
- Removed the fake contact form and replaced it with a real project inquiry mailto path.
- Added `docs/seo-launch-checklist.md`.
- Cleaned lint warnings in the animated grid and terminal observer code.
- Completed a UI polish and performance pass:
  - matched hero CTA sizing,
  - replaced weak trust proof cards with stronger proof,
  - replaced the heavy proof-of-work cards with lightweight static cards,
  - simplified the project modal into a compact case-study dossier,
  - fixed the mobile proof filter tabs,
  - made the discovery call card functional through a prefilled email request,
  - reused the hero button components in the project inquiry section.
- Completed a case-study content and asset pass:
  - inspected the supplied Palma Wallet, Rammies Vacation, Fosh Estate, and Three Hills Equipment project directories,
  - copied approved/public-facing assets into `public/case-studies`,
  - added an anonymized Rammies preview because public screenshot permission is not approved,
  - updated featured project data with live URLs, more accurate stacks, deliverables, process notes, outcomes, permission status, and testimonial fields,
  - added testimonial rendering and lightweight gallery previews to the project modal,
  - added `docs/case-study-assets-needed.md` to track remaining assets and approvals.
- Updated testimonial and repository visibility:
  - marked the supplied testimonial copy as approved for public portfolio use,
  - removed the public GitHub link from Palma Wallet because client project repositories should not be shown,
  - marked Palma Wallet as client-approved public work.
- Optimized and wired final case-study screenshots:
  - compressed supplied desktop and mobile PNG screenshots into WebP assets under `public/case-studies`,
  - removed the temporary screenshot folders from `public`,
  - removed old unused case-study PNG/placeholder assets,
  - updated Rammies Vacation, Fosh Estate, Three Hills Equipment, and Palma Wallet to use optimized screenshots,
  - fixed the project modal gallery so thumbnail clicks and previous/next controls update the main image.
- Completed brand favicon and social preview pass:
  - generated three AI-assisted AO monogram logo concepts and saved the concept board in `public/brand`,
  - implemented the Bracket-style AO mark as a production SVG and PNG social avatar,
  - replaced the default favicon/app icons with the AO brand mark,
  - replaced the dynamic Open Graph image route with a static optimized `public/og-image.jpg` for more reliable WhatsApp/Meta previews,
  - updated metadata icons, Open Graph image, and Twitter image references.
- Completed asset optimization pass:
  - compressed the ChatGPT-generated brand mark, Apple touch image, and Open Graph image before wiring them into metadata,
  - replaced the About profile image with an optimized WebP version,
  - replaced certificate carousel images with optimized WebP versions,
  - removed unused large original PNG/JPEG source files from `public`.

## Verification Log

| Check | Result | Notes |
| --- | --- | --- |
| Baseline build | Passed | Existing lint warnings shown during build. |
| Baseline lint | Passed with warnings | Three pre-existing React hook warnings. |
| Post-change build | Passed | `npm.cmd run build` completed successfully. Routes generated: `/`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`. |
| Post-change lint | Passed | `npm.cmd run lint` completed with no warnings or errors. |
| Hero CTA links | Passed by static check | `#contact` and `#projects` CTAs are present in `Hero.tsx`. |
| Project modal keyboard path | Passed by static check | Project cards are buttons, overlay has `role="dialog"` and `aria-modal="true"`, and Escape closes the overlay. |
| Contact path | Passed by static check | Mailto project inquiry and direct email links are present. |
| UI polish build | Passed | `npm.cmd run build` completed successfully after the proof-card/modal performance pass. Homepage route size is now 30.9 kB. |
| UI polish lint | Passed | `npm.cmd run lint` completed with no warnings or errors after the polish pass. |
| Heavy proof-card effects removed | Passed by static check | No `mousePosition`, `onMouseMove`, `ShineBorder`, `shimmer`, `AnimatePresence`, or `motion` usage remains in `src/components/sections/project`. |
| Discovery call path | Passed by static check | `Request Discovery Call` uses a prefilled `mailto:` with project idea, preferred days/times, timezone, platform, and budget/timeline prompts. |
| Case-study content lint | Passed | `npm.cmd run lint` completed with no warnings or errors after adding local assets, testimonial data, and modal gallery support. |
| Case-study content build | Passed | `npm.cmd run build` completed successfully. Homepage route size is now 32.5 kB. |
| Testimonial visibility lint | Passed | `npm.cmd run lint` completed with no warnings or errors after marking testimonials approved and removing the Palma client GitHub link. |
| Testimonial visibility build | Passed | `npm.cmd run build` completed successfully. Homepage route size is now 32.4 kB. |
| Screenshot optimization lint | Passed | `npm.cmd run lint` completed with no warnings or errors after WebP wiring and gallery controls. |
| Screenshot optimization build | Passed | `npm.cmd run build` completed successfully. Homepage route size is now 32.8 kB. |
| Brand asset lint | Passed | `npm.cmd run lint` completed with no warnings or errors after favicon and social preview metadata update. |
| Brand asset build | Passed | `npm.cmd run build` completed successfully. Static `/icon.png`, `/apple-icon.png`, and social preview assets are available; the dynamic `/opengraph-image` route was removed. |
| Asset optimization lint | Passed | `npm.cmd run lint` completed with no warnings or errors after replacing profile and certificate images with optimized WebP assets. |
| Asset optimization build | Passed | `npm.cmd run build` completed successfully after replacing profile/certification images and wiring the compressed Open Graph JPEG. |
| Desktop screenshot | Complete by supplied assets | User supplied desktop screenshots; optimized WebP versions are wired into case studies. |
| Mobile screenshot | Complete by supplied assets | User supplied mobile screenshots; optimized WebP versions are wired into case studies. |

## Launch SEO Walkthrough

1. Deploy the redesigned site to the production domain.
2. Open Google Search Console and add `https://www.olomukoro.uk/` as a Domain property if DNS access is available, or as a URL-prefix property if that is faster.
3. Verify ownership using the DNS TXT record or the HTML/meta verification option.
4. Submit `https://www.olomukoro.uk/sitemap.xml`.
5. Use URL Inspection for the homepage and request indexing after the production deploy is live.
6. Check that the canonical URL resolves to `https://www.olomukoro.uk/`.
7. Run PageSpeed Insights for mobile and desktop, then prioritize LCP image optimization, unused JavaScript, and accessibility findings.
8. Track Search Console weekly for coverage, queries, impressions, clicks, and pages that Google discovers but does not index.
9. After deploying the optimized screenshot update, request re-indexing for the homepage.

## Next Actions

- Review the local site manually at the dev server URL.
- Review the case-study modal gallery manually and confirm the selected screenshots are the strongest ones.
- Decide whether to add real form handling through Formspree, Resend, or a custom Next.js route handler in a later module.
