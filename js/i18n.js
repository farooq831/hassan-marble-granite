/* =====================================================================
   TRANSLATIONS — English (default) and Urdu (RTL)
   ---------------------------------------------------------------------
   In the HTML, any element with  data-i18n="key"  gets its text from
   here. Attributes use  data-i18n-attr="aria-label:key;placeholder:key".
   To change wording, edit the text below (keep the keys the same).
   {product}, {name} etc. are filled in automatically.
   ===================================================================== */
(function () {
  "use strict";

  var STRINGS = {
    en: {
      "skip": "Skip to content",
      "lang.label": "Language",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "nav.label": "Main navigation",
      "nav.home": "Home",
      "nav.products": "Products",
      "nav.services": "Services",
      "nav.gallery": "Gallery",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.whatsapp": "WhatsApp Us",
      "brand.label": "Hassan Marble and Granite, G-13 Islamabad — home",

      "hero.eyebrow": "Based in G-13, Islamabad",
      "hero.title1": "Timeless Stone.",
      "hero.title2": "Crafted for Your Space.",
      "hero.sub": "Marble • Granite • Chips Flooring | G-13, Islamabad",
      "hero.lead": "Quality marble, granite and chips flooring, with custom inlay work — supplied across Islamabad and Rawalpindi.",
      "hero.cta1": "Chat on WhatsApp",
      "hero.cta2": "View Collection",
      "hero.scroll": "Scroll",
      "hero.alt": "Luxurious marble corridor with polished floor and chandeliers",

      "trust.heading": "Why choose Hassan Marble and Granite",
      "trust.1": "Marble & Granite Supplier",
      "trust.1d": "Stone for floors, walls, stairs and tops",
      "trust.2": "Custom Inlay Designs",
      "trust.2d": "Diamonds, borders and floral patterns",
      "trust.3": "Islamabad & Rawalpindi",
      "trust.3d": "Serving both cities",
      "trust.4": "Visit Our Yard in G-13",
      "trust.4d": "Street 589, G-13/2, Islamabad",

      "products.eyebrow": "Our Collection",
      "products.title": "Marble, Granite & Chips Flooring",
      "products.lead": "A selection of the stone we work with. Stock changes often, so please message us to confirm availability and rates.",
      "products.viewAll": "View Full Catalogue",
      "products.empty": "No items in this category yet.",
      "products.note": "Photos are for reference. Natural stone varies in colour and veining from slab to slab.",
      "products.filterLabel": "Filter products by category",
      "filter.all": "All",
      "cat.marble": "Marble",
      "cat.granite": "Granite",
      "cat.chips": "Chips Flooring",
      "cat.onyx": "Onyx",
      "cat.tiles": "Tiles",
      "cat.special": "Counters & Inlay",
      "product.rate": "Ask for rate",
      "product.inquire": "Inquire on WhatsApp",
      "product.view": "View larger image of {product}",
      "product.soon": "Photo soon",

      "services.eyebrow": "What We Do",
      "services.title": "Our Services",
      "services.lead": "From supplying stone to cutting and finishing, we help you get the floor, wall or counter you have in mind.",
      "s1.t": "Marble & Granite Supply",
      "s1.d": "Slabs and tiles for homes and commercial projects.",
      "s2.t": "Chips (Terrazzo) Flooring",
      "s2.d": "Durable chips floors in classic and custom mixes.",
      "s3.t": "Custom Inlay & Floral Designs",
      "s3.d": "Diamonds, borders and hand-set floral patterns in stone.",
      "s4.t": "Kitchen Countertops",
      "s4.d": "Granite and marble tops cut to your kitchen.",
      "s5.t": "Staircases & Steps",
      "s5.d": "Treads, risers and landings in matching stone.",
      "s6.t": "Wall Cladding",
      "s6.d": "Stone for feature walls, facades and entrances.",
      "s7.t": "Bathroom & Vanity Tops",
      "s7.d": "Vanity tops and bathroom stone work.",
      "s8.t": "Cutting, Edging & Polishing",
      "s8.d": "Stone cut to size, with finished edges and polish.",

      "featured.eyebrow": "Featured Project",
      "featured.title": "Chips Flooring with Granite Diamonds & a Marble Flower",
      "featured.text": "A chips (terrazzo) floor set with granite diamond inlays and a hand-set marble flower at its centre — the kind of custom work we enjoy most.",
      "featured.p1": "Chips (terrazzo) base",
      "featured.p2": "Granite diamond inlays",
      "featured.p3": "Hand-set marble flower",
      "featured.cta": "Ask About a Design Like This",
      "featured.alt": "Chips flooring with granite diamond inlays and a marble flower design, by Hassan Marble and Granite",

      "gallery.eyebrow": "Gallery",
      "gallery.title": "Stone in Every Setting",
      "gallery.lead": "Ideas for floors, stairs, kitchens and bathrooms. These are reference photos — visit our yard to see real samples.",
      "gallery.open": "Open image: {caption}",

      "about.eyebrow": "About Us",
      "about.title": "A Stone Supplier Rooted in G-13, Islamabad",
      "about.p1": "Hassan Marble and Granite is a marble and granite supplier based on Street 589, G-13/2, Islamabad. We supply marble, granite and chips flooring, and take on custom inlay work — from simple borders to detailed floral designs.",
      "about.p2": "We serve homes, mosques, offices and commercial spaces across Islamabad and Rawalpindi. Visit our yard to see the stone in person, or send us a message on WhatsApp — we are happy to help you choose.",
      "about.note": "Not to be confused with other businesses of a similar name — we are located in G-13/2, Islamabad.",
      "about.tag1": "Homes",
      "about.tag2": "Mosques",
      "about.tag3": "Offices",
      "about.tag4": "Commercial Spaces",
      "about.alt": "Rows of marble and granite slabs standing in a stone yard",
      "about.stamp": "Islamabad",

      "order.eyebrow": "How to Order",
      "order.title": "Three Simple Steps",
      "o1.t": "Visit or Message Us",
      "o1.d": "Come to our yard in G-13/2, or send your requirements on WhatsApp.",
      "o2.t": "Choose Your Stone & Design",
      "o2.d": "Pick the stone, finish and any inlay or pattern you want.",
      "o3.t": "We Cut, Finish & Deliver",
      "o3.d": "We prepare your order and arrange delivery in Islamabad and Rawalpindi.",

      "contact.eyebrow": "Contact",
      "contact.title": "Visit Our Yard or Message Us",
      "contact.address": "Address",
      "contact.phone": "Phone & WhatsApp",
      "contact.hours": "Business Hours",
      "contact.area": "Service Area",
      "contact.areaValue": "Islamabad & Rawalpindi",
      "contact.email": "Email",
      "contact.follow": "Follow Us",
      "contact.call": "Call Now",
      "contact.wa": "WhatsApp",
      "contact.directions": "Get Directions",
      "contact.mapTitle": "Map showing Hassan Marble and Granite, Street 589, G-13/2, Islamabad",

      "form.title": "Send an Enquiry",
      "form.lead": "Fill this in and WhatsApp will open with your message ready to send.",
      "form.name": "Your name",
      "form.phone": "Your phone",
      "form.product": "Product of interest",
      "form.productAny": "Not sure yet",
      "form.message": "Message",
      "form.messagePh": "Area size, location, design ideas…",
      "form.submit": "Send via WhatsApp",
      "form.error": "Please enter your name and phone number.",
      "form.sent": "WhatsApp has opened in a new tab. If it didn't, please allow pop-ups or message us directly.",

      "footer.tagline": "Marble, granite and chips flooring, with custom inlay work.",
      "footer.links": "Quick Links",
      "footer.visit": "Visit Us",
      "footer.rights": "All rights reserved.",
      "footer.credits": "Photo credits",

      "float.wa": "Chat with us on WhatsApp",
      "float.call": "Call us",
      "backtop": "Back to top",
      "lightbox.label": "Image viewer",
      "lightbox.close": "Close",
      "lightbox.prev": "Previous image",
      "lightbox.next": "Next image",

      "catalogue.eyebrow": "Full Catalogue",
      "catalogue.title": "Our Stone Collection",
      "catalogue.lead": "Browse marble, granite, chips flooring, onyx, tiles and special work. Ask about any item on WhatsApp — we'll confirm availability and the rate.",
      "catalogue.ctaTitle": "Don't see what you need?",
      "catalogue.ctaText": "Message us and tell us what you're looking for.",
      "catalogue.crumbHome": "Home",

      "nf.title": "Page Not Found",
      "nf.text": "The page you're looking for has moved or doesn't exist.",
      "nf.home": "Back to Home",

      /* WhatsApp pre-filled messages */
      "wa.general": "Hello Hassan Marble and Granite, I would like to know more about your marble and granite.",
      "wa.product": "Hello Hassan Marble and Granite, I want to ask about {product}.",
      "wa.featured": "Hello Hassan Marble and Granite, I want to ask about chips flooring with granite diamond inlays and a marble flower design.",
      "wa.form": "Hello Hassan Marble and Granite,\nName: {name}\nPhone: {phone}\nProduct: {product}\nMessage: {message}"
    },

    ur: {
      "skip": "مواد پر جائیں",
      "lang.label": "زبان",
      "menu.open": "مینو کھولیں",
      "menu.close": "مینو بند کریں",
      "nav.label": "مرکزی نیویگیشن",
      "nav.home": "ہوم",
      "nav.products": "مصنوعات",
      "nav.services": "خدمات",
      "nav.gallery": "گیلری",
      "nav.about": "ہمارے بارے میں",
      "nav.contact": "رابطہ",
      "nav.whatsapp": "واٹس ایپ کریں",
      "brand.label": "حسن ماربل اینڈ گرینائٹ، ⁦G-13⁩ اسلام آباد — ہوم",

      "hero.eyebrow": "⁦G-13⁩، اسلام آباد میں قائم",
      "hero.title1": "لازوال پتھر،",
      "hero.title2": "آپ کی جگہ کے لیے تراشا گیا۔",
      "hero.sub": "ماربل • گرینائٹ • چپس فلورنگ | ⁦G-13⁩، اسلام آباد",
      "hero.lead": "معیاری ماربل، گرینائٹ اور چپس فلورنگ، کسٹم اِنلے کام کے ساتھ — اسلام آباد اور راولپنڈی بھر میں۔",
      "hero.cta1": "واٹس ایپ پر بات کریں",
      "hero.cta2": "کلیکشن دیکھیں",
      "hero.scroll": "نیچے دیکھیں",
      "hero.alt": "چمکدار فرش اور فانوسوں والی شاندار ماربل راہداری",

      "trust.heading": "حسن ماربل اینڈ گرینائٹ کا انتخاب کیوں",
      "trust.1": "ماربل اور گرینائٹ سپلائر",
      "trust.1d": "فرش، دیواروں، سیڑھیوں اور ٹاپس کے لیے پتھر",
      "trust.2": "کسٹم اِنلے ڈیزائن",
      "trust.2d": "ڈائمنڈ، بارڈر اور پھول دار نقش",
      "trust.3": "اسلام آباد اور راولپنڈی",
      "trust.3d": "دونوں شہروں میں خدمات",
      "trust.4": "⁦G-13⁩ میں ہمارا یارڈ دیکھیں",
      "trust.4d": "گلی 589، ⁦G-13/2⁩، اسلام آباد",

      "products.eyebrow": "ہماری کلیکشن",
      "products.title": "ماربل، گرینائٹ اور چپس فلورنگ",
      "products.lead": "یہ ان پتھروں کا انتخاب ہے جن کے ساتھ ہم کام کرتے ہیں۔ اسٹاک اکثر بدلتا رہتا ہے، اس لیے دستیابی اور ریٹ کی تصدیق کے لیے ہمیں پیغام بھیجیں۔",
      "products.viewAll": "مکمل کیٹلاگ دیکھیں",
      "products.empty": "اس زمرے میں ابھی کوئی آئٹم موجود نہیں۔",
      "products.note": "تصاویر صرف حوالے کے لیے ہیں۔ قدرتی پتھر کا رنگ اور نقش ہر سلیب میں مختلف ہوتا ہے۔",
      "products.filterLabel": "زمرے کے لحاظ سے مصنوعات دیکھیں",
      "filter.all": "تمام",
      "cat.marble": "ماربل",
      "cat.granite": "گرینائٹ",
      "cat.chips": "چپس فلورنگ",
      "cat.onyx": "اونکس",
      "cat.tiles": "ٹائلز",
      "cat.special": "کاؤنٹر اور اِنلے",
      "product.rate": "ریٹ معلوم کریں",
      "product.inquire": "واٹس ایپ پر معلوم کریں",
      "product.view": "{product} کی بڑی تصویر دیکھیں",
      "product.soon": "تصویر جلد",

      "services.eyebrow": "ہمارا کام",
      "services.title": "ہماری خدمات",
      "services.lead": "پتھر کی فراہمی سے لے کر کٹنگ اور فنشنگ تک، ہم آپ کے ذہن میں موجود فرش، دیوار یا کاؤنٹر کو حقیقت بنانے میں مدد کرتے ہیں۔",
      "s1.t": "ماربل اور گرینائٹ کی فراہمی",
      "s1.d": "گھروں اور کمرشل منصوبوں کے لیے سلیب اور ٹائلز۔",
      "s2.t": "چپس (ٹیرازو) فلورنگ",
      "s2.d": "کلاسک اور حسبِ پسند مکسچر میں پائیدار چپس فرش۔",
      "s3.t": "کسٹم اِنلے اور پھول دار ڈیزائن",
      "s3.d": "پتھر میں ڈائمنڈ، بارڈر اور ہاتھ سے جڑے پھول دار نقش۔",
      "s4.t": "کچن کاؤنٹر ٹاپس",
      "s4.d": "آپ کے کچن کے ناپ کے مطابق گرینائٹ اور ماربل ٹاپس۔",
      "s5.t": "سیڑھیاں اور اسٹیپس",
      "s5.d": "ہم رنگ پتھر میں سیڑھیوں کے اسٹیپ، رائزر اور لینڈنگ۔",
      "s6.t": "وال کلیڈنگ",
      "s6.d": "نمایاں دیواروں، بیرونی حصوں اور داخلی راستوں کے لیے پتھر۔",
      "s7.t": "باتھ روم اور وینٹی ٹاپس",
      "s7.d": "وینٹی ٹاپس اور باتھ روم میں پتھر کا کام۔",
      "s8.t": "کٹنگ، ایجنگ اور پالش",
      "s8.d": "ناپ کے مطابق کٹائی، کناروں کی فنشنگ اور پالش۔",

      "featured.eyebrow": "نمایاں منصوبہ",
      "featured.title": "گرینائٹ ڈائمنڈ اور ماربل پھول کے ساتھ چپس فلورنگ",
      "featured.text": "چپس (ٹیرازو) کا فرش جس میں گرینائٹ کے ڈائمنڈ اِنلے اور درمیان میں ہاتھ سے جڑا ماربل کا پھول ہے — یہی وہ کسٹم کام ہے جو ہمیں سب سے زیادہ پسند ہے۔",
      "featured.p1": "چپس (ٹیرازو) بیس",
      "featured.p2": "گرینائٹ ڈائمنڈ اِنلے",
      "featured.p3": "ہاتھ سے جڑا ماربل کا پھول",
      "featured.cta": "ایسے ڈیزائن کے بارے میں پوچھیں",
      "featured.alt": "گرینائٹ ڈائمنڈ اِنلے اور ماربل پھول کے ڈیزائن والی چپس فلورنگ، حسن ماربل اینڈ گرینائٹ",

      "gallery.eyebrow": "گیلری",
      "gallery.title": "ہر جگہ پتھر کی خوبصورتی",
      "gallery.lead": "فرش، سیڑھیوں، کچن اور باتھ روم کے لیے آئیڈیاز۔ یہ حوالہ جاتی تصاویر ہیں — اصل نمونے دیکھنے کے لیے ہمارے یارڈ تشریف لائیں۔",
      "gallery.open": "تصویر کھولیں: {caption}",

      "about.eyebrow": "ہمارے بارے میں",
      "about.title": "⁦G-13⁩، اسلام آباد میں قائم پتھر سپلائر",
      "about.p1": "حسن ماربل اینڈ گرینائٹ گلی 589، ⁦G-13/2⁩، اسلام آباد میں قائم ماربل اور گرینائٹ کا سپلائر ہے۔ ہم ماربل، گرینائٹ اور چپس فلورنگ فراہم کرتے ہیں اور کسٹم اِنلے کا کام بھی کرتے ہیں — سادہ بارڈر سے لے کر باریک پھول دار ڈیزائن تک۔",
      "about.p2": "ہم اسلام آباد اور راولپنڈی بھر میں گھروں، مساجد، دفاتر اور کمرشل جگہوں کے لیے کام کرتے ہیں۔ پتھر خود دیکھنے کے لیے ہمارے یارڈ تشریف لائیں یا واٹس ایپ پر پیغام بھیجیں — انتخاب میں آپ کی مدد کر کے ہمیں خوشی ہوگی۔",
      "about.note": "ملتے جلتے نام کے دیگر کاروبار سے مختلف — ہم ⁦G-13/2⁩، اسلام آباد میں واقع ہیں۔",
      "about.tag1": "گھر",
      "about.tag2": "مساجد",
      "about.tag3": "دفاتر",
      "about.tag4": "کمرشل جگہیں",
      "about.alt": "اسٹون یارڈ میں قطار میں کھڑے ماربل اور گرینائٹ سلیب",
      "about.stamp": "اسلام آباد",

      "order.eyebrow": "آرڈر کا طریقہ",
      "order.title": "تین آسان مراحل",
      "o1.t": "ہم سے ملیں یا پیغام بھیجیں",
      "o1.d": "⁦G-13/2⁩ میں ہمارے یارڈ آئیں، یا واٹس ایپ پر اپنی ضرورت بتائیں۔",
      "o2.t": "پتھر اور ڈیزائن منتخب کریں",
      "o2.d": "اپنی پسند کا پتھر، فنش اور اِنلے یا ڈیزائن منتخب کریں۔",
      "o3.t": "ہم کاٹتے، فنش کرتے اور پہنچاتے ہیں",
      "o3.d": "ہم آپ کا آرڈر تیار کر کے اسلام آباد اور راولپنڈی میں ترسیل کا انتظام کرتے ہیں۔",

      "contact.eyebrow": "رابطہ",
      "contact.title": "ہمارے یارڈ آئیں یا پیغام بھیجیں",
      "contact.address": "پتہ",
      "contact.phone": "فون اور واٹس ایپ",
      "contact.hours": "اوقاتِ کار",
      "contact.area": "سروس ایریا",
      "contact.areaValue": "اسلام آباد اور راولپنڈی",
      "contact.email": "ای میل",
      "contact.follow": "ہمیں فالو کریں",
      "contact.call": "ابھی کال کریں",
      "contact.wa": "واٹس ایپ",
      "contact.directions": "راستہ دیکھیں",
      "contact.mapTitle": "نقشہ: حسن ماربل اینڈ گرینائٹ، گلی 589، ⁦G-13/2⁩، اسلام آباد",

      "form.title": "انکوائری بھیجیں",
      "form.lead": "یہ فارم پُر کریں، آپ کا پیغام تیار حالت میں واٹس ایپ میں کھل جائے گا۔",
      "form.name": "آپ کا نام",
      "form.phone": "آپ کا فون نمبر",
      "form.product": "مطلوبہ پروڈکٹ",
      "form.productAny": "ابھی طے نہیں",
      "form.message": "پیغام",
      "form.messagePh": "رقبہ، مقام، ڈیزائن کے خیالات…",
      "form.submit": "واٹس ایپ کے ذریعے بھیجیں",
      "form.error": "براہِ کرم اپنا نام اور فون نمبر درج کریں۔",
      "form.sent": "واٹس ایپ نئی ٹیب میں کھل گیا ہے۔ اگر نہیں کھلا تو پاپ اپ کی اجازت دیں یا براہِ راست پیغام بھیجیں۔",

      "footer.tagline": "ماربل، گرینائٹ اور چپس فلورنگ، کسٹم اِنلے کام کے ساتھ۔",
      "footer.links": "فوری لنکس",
      "footer.visit": "ہم سے ملیں",
      "footer.rights": "جملہ حقوق محفوظ ہیں۔",
      "footer.credits": "تصاویر کے حوالہ جات",

      "float.wa": "واٹس ایپ پر ہم سے بات کریں",
      "float.call": "ہمیں کال کریں",
      "backtop": "اوپر جائیں",
      "lightbox.label": "تصویر دیکھیں",
      "lightbox.close": "بند کریں",
      "lightbox.prev": "پچھلی تصویر",
      "lightbox.next": "اگلی تصویر",

      "catalogue.eyebrow": "مکمل کیٹلاگ",
      "catalogue.title": "ہماری پتھروں کی کلیکشن",
      "catalogue.lead": "ماربل، گرینائٹ، چپس فلورنگ، اونکس، ٹائلز اور خصوصی کام دیکھیں۔ کسی بھی آئٹم کے بارے میں واٹس ایپ پر پوچھیں — ہم دستیابی اور ریٹ کی تصدیق کر دیں گے۔",
      "catalogue.ctaTitle": "مطلوبہ چیز نظر نہیں آئی؟",
      "catalogue.ctaText": "ہمیں پیغام بھیجیں اور بتائیں آپ کو کیا چاہیے۔",
      "catalogue.crumbHome": "ہوم",

      "nf.title": "صفحہ نہیں ملا",
      "nf.text": "جو صفحہ آپ تلاش کر رہے ہیں وہ موجود نہیں یا منتقل ہو چکا ہے۔",
      "nf.home": "ہوم پیج پر واپس جائیں",

      "wa.general": "السلام علیکم حسن ماربل اینڈ گرینائٹ، مجھے آپ کے ماربل اور گرینائٹ کے بارے میں معلومات چاہئیں۔",
      "wa.product": "السلام علیکم حسن ماربل اینڈ گرینائٹ، مجھے {product} کے بارے میں معلومات چاہئیں۔",
      "wa.featured": "السلام علیکم حسن ماربل اینڈ گرینائٹ، مجھے گرینائٹ ڈائمنڈ اِنلے اور ماربل پھول والے چپس فرش کے بارے میں معلومات چاہئیں۔",
      "wa.form": "السلام علیکم حسن ماربل اینڈ گرینائٹ،\nنام: {name}\nفون: {phone}\nپروڈکٹ: {product}\nپیغام: {message}"
    }
  };

  var STORAGE_KEY = "hmg-lang";
  var URDU_FONT = "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600&display=swap";

  /* localStorage can throw in private mode — always guard it */
  function savedLang() {
    try { var v = localStorage.getItem(STORAGE_KEY); return v === "ur" ? "ur" : "en"; }
    catch (e) { return "en"; }
  }
  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* Translate a key, replacing {placeholders} from vars */
  function t(key, vars, lang) {
    lang = lang || current;
    var s = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
    if (vars) {
      s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    }
    return s;
  }

  /* Load the Urdu font only when Urdu is used (keeps English fast) */
  function loadUrduFont() {
    if (document.getElementById("urdu-font")) return;
    var link = document.createElement("link");
    link.id = "urdu-font";
    link.rel = "stylesheet";
    link.href = URDU_FONT;
    document.head.appendChild(link);
  }

  /* Apply a language to every [data-i18n] element on the page */
  function apply(lang) {
    current = lang === "ur" ? "ur" : "en";
    var root = document.documentElement;
    root.lang = current;
    root.dir = current === "ur" ? "rtl" : "ltr";
    if (current === "ur") loadUrduFont();

    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = t(els[i].getAttribute("data-i18n"));
    }
    var attrEls = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrEls.length; j++) {
      var pairs = attrEls[j].getAttribute("data-i18n-attr").split(";");
      for (var k = 0; k < pairs.length; k++) {
        var p = pairs[k].split(":");
        if (p.length === 2) attrEls[j].setAttribute(p[0].trim(), t(p[1].trim()));
      }
    }
    var btns = document.querySelectorAll("[data-lang]");
    for (var b = 0; b < btns.length; b++) {
      btns[b].setAttribute("aria-pressed", btns[b].getAttribute("data-lang") === current ? "true" : "false");
    }
    saveLang(current);
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: current } }));
  }

  var current = savedLang();

  window.I18N = {
    strings: STRINGS,
    t: t,
    apply: apply,
    get lang() { return current; }
  };
})();
