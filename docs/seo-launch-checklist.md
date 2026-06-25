# SEO Launch Checklist

## Before Deploy

- Confirm the production domain is the final canonical domain: `https://www.olomukoro.uk/`.
- Confirm homepage metadata describes the service offer, not only the portfolio.
- Confirm `robots.txt` is available at `/robots.txt`.
- Confirm `sitemap.xml` is available at `/sitemap.xml`.
- Confirm the homepage has a generated Open Graph image.
- Confirm the homepage has structured data for the freelance service.
- Replace anonymized client preview images with approved real screenshots when each client gives permission.
- Confirm final screenshot assets for the approved case studies.

## Google Search Console Setup

1. Go to Google Search Console.
2. Add `olomukoro.uk` as a Domain property if you can edit DNS.
3. If DNS access is slower, add `https://www.olomukoro.uk/` as a URL-prefix property.
4. Verify ownership using the DNS TXT record, HTML file, or meta tag option.
5. Open Sitemaps and submit `https://www.olomukoro.uk/sitemap.xml`.
6. Use URL Inspection for `https://www.olomukoro.uk/`.
7. Request indexing after the redesigned site is live.

## What To Monitor Weekly

- Search queries that show impressions but low clicks.
- Pages discovered but not indexed.
- Mobile usability issues.
- Core Web Vitals and Page Experience.
- Branded queries like `Alexander Olomukoro`, `Olomukoro web developer`, and `olomukoro portfolio`.
- Service queries that may become content opportunities, such as `CMS website developer`, `SaaS landing page developer`, and `AI workflow prototype developer`.

## Content SEO Next Steps

- Add dedicated service pages when ready:
  - `/services/cms-websites`
  - `/services/saas-landing-pages`
  - `/services/ai-workflow-prototypes`
- Add dedicated case-study pages after screenshots are approved:
  - `/work/rammies-vacation`
  - `/work/fosh-estate`
  - `/work/threhills-equipments`
- Publish short case-study writeups on LinkedIn and link back to the site.
- Turn each client story into a before/problem/solution/outcome post.

## Local Verification Commands

```bash
npm.cmd run build
npm.cmd run lint
```

After local checks pass, deploy and run PageSpeed Insights for mobile and desktop.
