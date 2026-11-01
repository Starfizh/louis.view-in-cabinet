# Louis Ong Website — GitHub Pages starter

This is a reconstructed static website based on the publicly viewable pages at the supplied ChatGPT Site URL. It is **not** the original server source code.

## Included pages
- `/index.html` — English home
- `/about/index.html`
- `/portfolio/index.html`
- `/services/index.html`
- `/contact/index.html`
- `/zh/index.html` — Chinese home
- `style.css`, `editorial.css`, `app.js`

## Notes before publishing
- The Unsplash images are temporary remote image URLs and can be replaced later with approved local images in `images/`.
- The contact form opens WhatsApp with a prepared enquiry. It does not send email or store form data.
- This ZIP is configured for your GitHub Pages project URL:
  `https://starfizh.github.io/louis.view-in-cabinet.github.io/`
Internal HTML links and local CSS/JS paths are prefixed with `/louis.view-in-cabinet.github.io/`. If you rename the repository, update this prefix in all HTML pages.
- Business details and wording were reconstructed from public page content; please review before publishing.
- GitHub Pages serves static HTML/CSS/JS. No server-side processing is included.


## Publish checklist
1. Upload the *contents* of this folder to the root of the repository `louis.view-in-cabinet.github.io` (so `index.html` is at repository root).
2. In repository Settings → Pages, publish from the branch and folder where these files are stored (commonly `main` / `/(root)`).
3. Wait for the Pages deployment action to complete, then refresh the site.
4. Check CSS, navigation links, and all pages on mobile and desktop.
## Typography update

The stylesheet now uses Cormorant Garamond for editorial headings, Manrope for English UI/body text, and Noto Sans SC / Noto Serif SC for Chinese text. These web fonts load from Google Fonts when visitors have internet access; system fallbacks remain defined.
## Visual alignment update

This build refines the bilingual editorial typography and layout to more closely follow the published ChatGPT reference site: Cormorant Garamond headings, Manrope interface/body text, Noto Sans SC and Noto Serif SC for Chinese, a taller desktop hero image, consistent reference-card image ratios, and adjusted letter spacing and whitespace. Google Fonts require an internet connection; system fallbacks are included.
