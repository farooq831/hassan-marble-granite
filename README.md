# Hassan Marble and Tiles — Website

Static website for **Hassan Marble and Tiles**, Street 589, G-13/2, Islamabad.
It uses plain HTML, CSS and JavaScript, with no frameworks, no build step and no server code.
It works by opening `index.html` directly or on any free static host such as GitHub Pages.

- **English + Urdu** (right-to-left), and the visitor's choice is remembered
- WhatsApp enquiry buttons on every product, plus a contact form that opens WhatsApp
- Product filter, gallery with lightbox (keyboard arrows, Esc, swipe on phones)
- SEO: meta tags, Open Graph, JSON-LD LocalBusiness data, sitemap, robots.txt

---

## Folder overview

```
Showroom_web/
├─ index.html          Home page (all sections)
├─ products.html       Full catalogue
├─ 404.html            "Page not found" page
├─ css/main.css        All styling (colours are variables at the top)
├─ js/config.js        ← Business details: phone, address, hours, social links, site URL
├─ js/products.js      ← Products and gallery photos
├─ js/i18n.js          ← All English and Urdu text
├─ js/main.js          Site behaviour (no need to edit)
├─ assets/             Logo, icons and images
├─ CREDITS.md          Where every photo came from
├─ IMAGES_TO_REPLACE.md  Which photos to swap for your own
├─ robots.txt, sitemap.xml, site.webmanifest, favicon files, .nojekyll
```

## Preview on your computer

Double-click `index.html`. Everything works except the map, which needs internet.
For an exact preview, run a small local server in this folder:

```
python -m http.server 8000
```

Then open <http://localhost:8000>.

---

## Deploy to GitHub Pages (free, no domain or hosting needed)

1. **Create a new public repository** on GitHub, for example `hassan-marble-tiles`
   (github.com → **+** → *New repository* → Public → *Create repository*). Don't add a README there.

2. **Upload the site.** Open a terminal **inside the `Showroom_web` folder** and run:

   ```
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin <repo-url>
   git push -u origin main
   ```

   Replace `<repo-url>` with the address GitHub shows, e.g. `https://github.com/USERNAME/hassan-marble-tiles.git`.

3. **Turn on Pages:** on GitHub open **Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder: `/ (root)` → Save**.

4. **Wait 1–2 minutes.** The site goes live at
   `https://USERNAME.github.io/REPO/` (for example `https://faizan.github.io/hassan-marble-tiles/`).

5. **Put your real address into the site.** Replace every `https://USERNAME.github.io/REPO/` with your live address (keep the trailing `/`):
   - `js/config.js` → `siteBaseUrl`
   - `index.html` → `canonical`, `hreflang`, `og:url`, `og:image`, `twitter:image` (near the top)
   - `products.html` → `canonical`, `og:url`, `og:image`, `twitter:image`
   - `sitemap.xml` (both `<loc>` lines) and `robots.txt` (the `Sitemap:` line)

   Tip: use your editor's *Find and Replace in Files* for `https://USERNAME.github.io/REPO/`.
   Then push again:

   ```
   git add .
   git commit -m "Set live site address"
   git push
   ```

6. **Add the link to Google.** In your **Google Business Profile** → *Edit profile* → *Contact* → **Website**, paste the live link.
   Optional: add the site in [Google Search Console](https://search.google.com/search-console) and submit `sitemap.xml`.

---

## Editing the site later

After any change, save the files and run `git add .`, `git commit -m "Describe change"` and `git push`.
The live site updates in a minute or two.

### Business details (phone, hours, email, Facebook, Instagram)
Open **`js/config.js`**. Fields marked `>>> PLACEHOLDER <<<` are empty on purpose, and **anything left empty stays hidden** on the site.
For example, to show business hours:

```js
hours: { en: "Mon–Sat: 9:00 AM – 7:00 PM", ur: "پیر تا ہفتہ: صبح 9 تا شام 7" },
hoursSchema: ["Mo-Sa 09:00-19:00"],
```

The phone and WhatsApp links, map, footer and Google structured data all read from this file.

### Products
Open **`js/products.js`**. Each product is one `{ ... }` block with an English and Urdu name, a description and an image.
- **Remove** a product: delete its whole block, including the trailing comma.
- **Add** a product: copy a block, give it a new `id`, and change the text and image.
- **Show on the home page:** set `featured: true` (6–8 featured items looks best).
- Categories: `marble`, `granite`, `chips`, `onyx`, `tiles`, `special`.
- ⚠ Please confirm which items you actually stock. They are examples until you do.
- No prices are shown. Every card says "Ask for rate" and links to WhatsApp.

### Photos
See **`IMAGES_TO_REPLACE.md`**. Save your photo with the same file name and it replaces the old one.
For gallery photos, add an entry to the `GALLERY` list at the bottom of `js/products.js`.

### Text (English and Urdu)
Open **`js/i18n.js`**. Every sentence on the site is there twice: once under `en`, once under `ur`.
Change the words between the quotes; don't change the key names on the left.

### Colours and fonts
At the top of **`css/main.css`** (`:root { ... }`) you can change the palette:
charcoal `#14120F`, ivory `#F3EEE4`, gold `#C8A25E`, deep gold `#7A5C25`, warm grey `#A9A294`.

---

## Adding a custom domain later (e.g. hassanmarble.pk)

1. Buy the domain from any registrar (e.g. PKNIC for `.pk`, or Namecheap/GoDaddy for `.com`).
2. GitHub → repository → **Settings → Pages → Custom domain**, type the domain, Save.
   GitHub adds a `CNAME` file to the repo.
3. At your registrar, add DNS records:
   - For `www.yourdomain.com`: a **CNAME** record pointing to `USERNAME.github.io`
   - For the bare domain: **A** records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Wait for DNS (up to 24 h), then tick **Enforce HTTPS** in Settings → Pages.
5. Repeat step 5 of the deployment above with the new address.

The site uses relative paths only, so nothing else needs to change.

---

## Notes
- Another, unrelated business named "Hassan Marbles" is at T Chowk, Islamabad. This site always mentions
  **G-13, Islamabad** next to the name to keep the two apart.
- The site contains no reviews, ratings, prices, awards or founding years, because none were provided. Add real ones only.
- Photo credits: see `CREDITS.md` (Pexels License, free for commercial use).
