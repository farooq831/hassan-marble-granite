# Images to Replace

Drop your own photo in **with exactly the same file name** (and `.jpg` extension), refresh the page, and it appears automatically.
Best size: **900 × 675 px** for product photos (landscape, 4:3), **1200 × 800 px** for the featured project.
Keep each file under about 300 KB (any free tool such as [squoosh.app](https://squoosh.app) can shrink it).

> **Update:** the Ready Stock section and five product cards (Sunny Grey, Ziarat Grey, Ziarat White, Sunny Grey & White Skirting, Black Marble Patti) now use **your own yard photos**. To add more, save them in `assets/images/yard/` and add an entry to the `YARD` list at the bottom of `js/products.js`.

## 1. Replace these first (closest to your own work)

There are no "Photo coming soon" placeholders left. These six were filled with Pexels stock photos as stand-ins,
but each describes **your** specific work, so your own photos matter most here.

| File | Used for | Notes |
|---|---|---|
| `assets/images/chips-flooring-inlay` | **Featured Project** section (home page) | Save your photo as `chips-flooring-inlay.jpg` (1200 × 800) and **delete `chips-flooring-inlay.webp`**. Then un-comment the first `GALLERY` entry in `js/products.js` so it also shows in the gallery. |
| `products/chips-granite-inlay-flooring` | Product: Chips with Granite Inlays | Can be the same photo as above. |
| `products/chips-marble-floral-flooring` | Product: Chips with Marble Floral Design | |
| `products/violet-marble-slab` | Product: Violet Marble | |
| `products/granite-floor-tiles` | Product: Granite Tiles | |
| `products/marble-skirting` | Product: Skirting | |

For the products, follow "How to replace a stock photo" below.

## 2. Stock photos to replace with your own when you can (recommended)

These are real Pexels photos (see `CREDITS.md`), but they are **not your stone or your work**. Your own photos will build more trust.

| File | Why replace |
|---|---|
| `products/black-granite-slab` | Stock photo shows rough dark stone, not a polished slab. |
| `products/green-marble-slab` | Very pale green, so it may not match what you sell. |
| `products/green-granite-slab`, `products/brown-granite-slab` | Generic textures. |
| `products/marble-inlay-medallion` | Shows a famous cathedral floor (Siena, Italy), so swap it for one of your own inlays. |
| `products/granite-kitchen-countertop`, `products/marble-vanity-top` | Use a kitchen or bathroom you supplied. |
| `images/hero-marble-corridor` | Home page hero. A wide shot of your yard or a finished floor works well (1600 × 900 px). |
| `gallery/*` | Add your project photos to the `GALLERY` list in `js/products.js`. |

### How to replace a stock photo (it has .webp and -480 versions)

1. Save your photo as e.g. `assets/images/products/black-granite-slab.jpg` (overwrite the old one).
2. Open `js/products.js`, find that product, and change `webp: true` to `webp: false`.
   (Otherwise the browser keeps showing the old `.webp` stock photo.)
3. Optionally delete the old `black-granite-slab.webp`, `-480.webp` and `-480.jpg` files.
4. Remove that line from `CREDITS.md`.
