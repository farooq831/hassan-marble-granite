/* =====================================================================
   SITE CONFIG — Hassan Marble and Granite (G-13, Islamabad)
   ---------------------------------------------------------------------
   This is the ONE place for business details. Everything on the site
   (phone links, WhatsApp links, map, footer, structured data) reads
   from here. Edit a value, save, refresh — done.

   Values marked  >>> PLACEHOLDER <<<  are not provided yet.
   Leave them as an empty string "" and the matching part of the site
   stays hidden automatically. Fill them in when you have real data.
   ===================================================================== */
window.SITE_CONFIG = {
  businessName: "Hassan Marble and Granite",
  shortName: "Hassan Marble & Granite",

  /* Phone shown on the site, and the international form used in links */
  phone: "0311 5081044",
  phoneIntl: "+92 311 5081044",
  telLink: "+923115081044",          // used in tel: links (no spaces)
  whatsappNumber: "923115081044",    // used in wa.me links (digits only)

  /* Owner and second number (shown in Contact and the footer) */
  ownerName: { en: "Yasir Hussain", ur: "یاسر حسین" },
  phone2: "0333 1579858",
  phone2Intl: "+92 333 1579858",
  tel2Link: "+923331579858",

  address: {
    en: "Street 589, G-13/2, Islamabad, 44000, Pakistan",
    ur: "گلی 589، ⁦G-13/2⁩، اسلام آباد، 44000، پاکستان",
    street: "Street 589, G-13/2",
    city: "Islamabad",
    postalCode: "44000",
    region: "Islamabad Capital Territory",
    country: "PK"
  },

  areaServed: ["Islamabad", "Rawalpindi"],

  mapEmbedUrl: "https://www.google.com/maps?q=Street+589,+G-13/2,+Islamabad,+Pakistan&output=embed",
  mapLinkUrl: "https://www.google.com/maps?q=Street+589,+G-13/2,+Islamabad,+Pakistan",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Street+589+G-13/2+Islamabad+Pakistan",

  /* >>> PLACEHOLDER <<<  Business hours. Example:
       hours: { en: "Mon–Sat: 9:00 AM – 7:00 PM", ur: "پیر تا ہفتہ: صبح 9 تا شام 7" },
       hoursSchema: ["Mo-Sa 09:00-19:00"],
     Leave empty to hide hours everywhere. */
  hours: { en: "", ur: "" },
  hoursSchema: [],

  /* >>> PLACEHOLDER <<<  e.g. "info@example.com" — empty = hidden */
  email: "",

  /* >>> PLACEHOLDER <<<  full URLs, e.g. "https://www.facebook.com/yourpage" — empty = hidden */
  facebookUrl: "",
  instagramUrl: "",

  /* Your live site address, with a trailing slash.
     After publishing on GitHub Pages, change to e.g.
     "https://yourusername.github.io/hassan-marble-granite/"
     (also update the canonical / og:url tags and sitemap.xml — see README) */
  siteBaseUrl: "https://farooq831.github.io/hassan-marble-granite/"
};
