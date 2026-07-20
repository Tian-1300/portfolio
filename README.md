# Tian Tian — Portfolio

A single-page portfolio site built with **plain HTML, CSS, and vanilla JavaScript**, styled with the
[Tailwind CSS Play CDN](https://tailwindcss.com/docs/installation/play-cdn) — no build step, no bundler,
no framework.

## Structure

```
index.html              All page markup and content (single page, sections identified by id)
assets/css/styles.css   Custom CSS: color variables (light/dark), ambient background glow, scroll-reveal transitions
assets/js/main.js       Mobile nav toggle, IntersectionObserver scroll-reveal, contact form validation
assets/images/          Site images (avatar photo)
Tian-Tian-CV.pdf        Downloadable CV
vercel.json             Tells Vercel to deploy this as a static site (no framework build)
```

## Running locally

No install step is required. Just serve the folder with any static file server, for example:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Sections

- `#hero-section` — intro, photo, social links
- `#about-section` — bio, location, CV download
- `#experience` — work & leadership timeline
- `#education` — academic history
- `#projects-section` — projects & publications (real work samples with summaries and tags)
- `#skills` — word-cloud of skills
- `#contact-section` — validated contact form (`#contact-form`) with name/email/message fields

## Deploy

Deployed as a static site on [Vercel](https://vercel.com). Since there is no build step, Vercel serves
the files in this repository directly.
