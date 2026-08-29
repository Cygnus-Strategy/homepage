# AGENTS.md - Cygnus Strategy Homepage

## Project Overview

Static marketing website for Cygnus Strategy, a boutique consultancy providing fractional CTO, CPO, CISO, and COO leadership to growth-stage technology companies.

## Structure

```
.
├── index.html      # Single-page site (all content)
├── styles.css      # All styles (CSS custom properties, no preprocessor)
├── logo-white.svg  # Header/footer logo
├── profile.png     # Founder photo (about section)
└── logos/           # Client/company logos
```

No build step, no JavaScript framework, no package manager. Just static files served directly.

## Conventions

### Copy Style

- **Team voice**: Always use "we/our", never first-person "I/my"
- **No em-dashes**: They read as AI-generated. Use commas, periods, or colons instead
- **No hallucinations**: Every claim must be backed by existing page content or the founder's resume. Do not invent projects, metrics, or capabilities
- **Proof points must be real**: The hero metrics and results section contain verified numbers. Do not fabricate statistics

### Site Sections (in order)

1. **Hero** - Headline, subtitle, CTA, proof metrics
2. **About** - Founder intro, team positioning
3. **Results** - Case studies with real metrics
4. **Services** - Two columns: "Product & Technology" / "Infrastructure & Security"
5. **Testimonials** - Direct quotes (do not edit quote text)
6. **Trust** - Confidentiality and compliance
7. **CTA** - Final call to action
8. **Footer** - Brand tagline, contact links, location

### CSS

- Custom properties defined in `:root` (colors, fonts, spacing)
- Three font families: Space Grotesk (headings), Atkinson Hyperlegible (body), JetBrains Mono (metrics)
- Scroll-reveal animations via IntersectionObserver in inline `<script>`
- Responsive breakpoints at 768px and 480px

## Local Development

Open `index.html` directly or serve with:

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765

## Key URLs

- **Scheduling link**: https://cygnus.vip (used for all CTAs)
- **LinkedIn**: https://linkedin.com/in/jroemer
