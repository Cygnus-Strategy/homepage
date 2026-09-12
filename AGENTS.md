# AGENTS.md - Cygnus Strategy Homepage

## Project Overview

Static marketing website for Cygnus Strategy, a boutique consultancy providing fractional CTO, CPO, CISO, and COO leadership to growth-stage technology companies.

## Structure

```text
.
├── index.html      # Single-page site (all content)
├── styles.css      # All styles (CSS custom properties, no preprocessor)
├── site.js         # Progressive enhancement only (see below)
├── og.png          # Open Graph / social card image (1200x630)
├── robots.txt      # Points at sitemap.xml
├── sitemap.xml     # Single URL
├── profile.webp    # Founder photo used by the page (61KB)
├── profile.jpg     # Fallback for the above
├── profile.png     # Original 5.4MB source, unreferenced; kept, see build.sh
├── logo-black.svg  # Header/footer logo (inverted via CSS in the footer)
└── logos/          # Brand assets, incl. logos/Favicons/ used by the page
```

No build step for the page itself, no framework, no package manager. `build.sh` only assembles `dist/` for deployment.

## Conventions

### Copy Style

- **Team voice**: Always use "we/our", never first-person "I/my"
- **No em-dashes**: They read as AI-generated. Use commas, periods, or colons instead
- **No hallucinations**: Every claim must be backed by existing page content or the founder's resume. Do not invent projects, metrics, or capabilities
- **Proof points must be real**: The results figures are verified numbers. Do not fabricate statistics
- **This is a consultancy page, not a profile or portfolio.** No degrees, certifications, personal projects, intro videos, or links to personal sites. Credentials belong in a resume, not here
- **Do not over-use the "X, not Y" antithesis.** It was cut from eight instances to two deliberately. Two remain because they carry the positioning; adding more makes the page read as machine-written
- **No defensive self-justification.** Do not explain why the page's own claims should be believed ("each number is attached to a named engagement rather than an industry average"). State the thing plainly and stop

### The stack (hero)

The six layers are the page's central device. They describe **capability areas the consultancy can own**, not case studies of past projects.

Each layer follows one shape:

1. Open with the problem as the reader would recognise it in their own company
2. One sentence on what we do about it
3. A `We take on` scope line listing what an engagement at that layer covers

Keep implementation details, client names, and project histories out of the layers. Hard numbers live in the Results section.

### Site Sections (in order)

1. **Hero** - Headline, subtitle, CTA, then the trust line naming prior companies
2. **The stack** - Six expandable layers (see above)
3. **Results** - Case studies with verified figures
4. **Engagements** - Three ways to work together
5. **Who We Are** - Consultancy positioning
6. **Testimonials** - Direct quotes (do not edit quote text)
7. **Before You Ask** - Objection handling
8. **Confidentiality + CTA**
9. **Footer**

### CSS

- Custom properties defined in `:root` (colors, fonts, spacing)
- Two font families: Archivo (display/headings) and Source Serif 4 (body). No monospace; figures use Archivo with tabular numerals
- Palette: stone ground, ink text, verdigris accent. All pairs verified at WCAG AA
- Results cards use CSS subgrid so the three bands align across a row; keep the `@supports` guard
- One orchestrated motion moment: the stack assembling on load. Everything else is user-triggered
- Responsive breakpoints at 860px, 780px (nav collapse), 720px, and 520px

### JavaScript

`site.js` is progressive enhancement only. With JS disabled the page must stay fully readable: every stack layer renders open, and the mobile menu is not needed because the nav is not hidden. Do not move content behind JS.

## Local Development

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765

## Key URLs

- **Scheduling link**: https://cygnus.vip (used for all CTAs)
- **Email**: win@cygnusstrategy.com
- **LinkedIn**: https://linkedin.com/in/jroemer

Do not publish a phone number.
