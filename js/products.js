/* =====================================================================
   PRODUCTS & GALLERY DATA — edit this file to change the catalogue.
   ---------------------------------------------------------------------
   ⚠ OWNER TO CONFIRM: these are example items. Please confirm which
     ones you actually keep in stock. Delete any you don't sell, and set
     "stockConfirmed: true" on the ones you've checked (for your own
     tracking — it is not shown on the site).

   Each product:
     id        unique, lowercase, no spaces
     category  one of: marble, granite, chips, onyx, tiles, special
     featured  true = also shown on the home page (keep 6–8 featured)
     name      { en, ur }
     desc      { en, ur }  short, honest description
     image     path WITHOUT extension. The site loads image.webp if
               webp is true, and always has image.jpg as a fallback.
     webp      set to false if you only have a .jpg (e.g. your own photo)
     alt       { en, ur }  describes the photo (for Google & screen readers)

   To use your OWN photo: save it as e.g.
     assets/images/products/violet-marble-slab.jpg
   (same filename as listed below, 900×675 px is ideal) and keep webp:false.
   No prices are shown — every card says "Ask for rate".
   ===================================================================== */

window.CATEGORIES = ["marble", "granite", "chips", "onyx", "tiles", "borders", "stairs", "special"];

window.PRODUCTS = [
  /* ---------------- MARBLE ---------------- */
  {
    id: "white-marble", category: "marble", featured: true, stockConfirmed: false,
    name: { en: "White Marble", ur: "سفید ماربل" },
    desc: { en: "Classic white marble with soft grey veining, suited to floors, walls and stairs.",
            ur: "ہلکی سرمئی دھاریوں والا کلاسک سفید ماربل، فرش، دیواروں اور سیڑھیوں کے لیے موزوں۔" },
    image: "assets/images/products/white-marble-slab", webp: true,
    alt: { en: "White marble slab with soft grey veins", ur: "ہلکی سرمئی دھاریوں والا سفید ماربل سلیب" }
  },
  {
    id: "grey-marble", category: "marble", featured: false, stockConfirmed: false,
    name: { en: "Grey Marble", ur: "گرے ماربل" },
    desc: { en: "Calm grey tones with natural veins — a versatile choice for modern interiors.",
            ur: "قدرتی دھاریوں کے ساتھ پُرسکون سرمئی رنگ — جدید اندرونی ڈیزائن کے لیے بہترین انتخاب۔" },
    image: "assets/images/products/grey-marble-slab", webp: true,
    alt: { en: "Grey marble surface with natural veining", ur: "قدرتی دھاریوں والی گرے ماربل کی سطح" }
  },
  {
    id: "black-gold-marble", category: "marble", featured: true, stockConfirmed: false,
    name: { en: "Black & Gold Marble", ur: "بلیک اینڈ گولڈ ماربل" },
    desc: { en: "Deep black stone with golden veining for a bold, elegant statement.",
            ur: "سنہری دھاریوں والا گہرا سیاہ پتھر، شاندار اور نمایاں انداز کے لیے۔" },
    image: "assets/images/products/black-gold-marble-slab", webp: true,
    alt: { en: "Black marble with gold veins, close-up", ur: "سنہری دھاریوں والا سیاہ ماربل، قریبی منظر" }
  },
  {
    id: "green-marble", category: "marble", featured: false, stockConfirmed: false,
    name: { en: "Green Marble", ur: "سبز ماربل" },
    desc: { en: "Green marble for accents, borders and inlay work.",
            ur: "سبز ماربل، نمایاں حصوں، بارڈر اور اِنلے کے کام کے لیے۔" },
    image: "assets/images/products/green-marble-slab", webp: true,
    alt: { en: "Light green marble with darker green veins", ur: "گہری سبز دھاریوں والا ہلکا سبز ماربل" }
  },
  {
    id: "beige-marble", category: "marble", featured: true, stockConfirmed: false,
    name: { en: "Beige Marble", ur: "بیج ماربل" },
    desc: { en: "Warm beige and cream tones that suit living areas and large floors.",
            ur: "گرم بیج اور کریم رنگ، رہائشی حصوں اور بڑے فرش کے لیے موزوں۔" },
    image: "assets/images/products/beige-marble-slab", webp: true,
    alt: { en: "Beige marble with warm brown patterns", ur: "ہلکے براؤن نقش والا بیج ماربل" }
  },
  {
    id: "pink-marble", category: "marble", featured: false, stockConfirmed: false,
    name: { en: "Pink / Cherry Marble", ur: "گلابی / چیری ماربل" },
    desc: { en: "Soft pink to cherry shades, popular for borders and floral inlays.",
            ur: "ہلکے گلابی سے چیری رنگ تک، بارڈر اور پھول دار اِنلے کے لیے مقبول۔" },
    image: "assets/images/products/pink-marble-slab", webp: true,
    alt: { en: "Soft pink marble with fine veins", ur: "باریک دھاریوں والا ہلکا گلابی ماربل" }
  },
  {
    id: "violet-marble", category: "marble", featured: false, stockConfirmed: false,
    name: { en: "Violet Marble", ur: "وائلٹ ماربل" },
    desc: { en: "Violet-toned marble for distinctive accents and inlay details.",
            ur: "بنفشی رنگ کا ماربل، منفرد نمایاں حصوں اور اِنلے کی تفصیل کے لیے۔" },
    image: "assets/images/products/violet-marble-slab", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "White marble with violet and grey veins", ur: "بنفشی اور سرمئی دھاریوں والا سفید ماربل" }
  },
  {
    id: "black-marble", category: "marble", featured: false, stockConfirmed: false,
    name: { en: "Black Marble", ur: "سیاہ ماربل" },
    desc: { en: "Rich black marble with fine white veins for floors, walls and tops.",
            ur: "باریک سفید دھاریوں والا گہرا سیاہ ماربل، فرش، دیواروں اور ٹاپس کے لیے۔" },
    image: "assets/images/products/black-marble-slab", webp: true,
    alt: { en: "Black marble with fine white veins", ur: "باریک سفید دھاریوں والا سیاہ ماربل" }
  },

  /* ---------------- GRANITE ---------------- */
  {
    id: "black-granite", category: "granite", featured: true, stockConfirmed: false,
    name: { en: "Black Granite", ur: "سیاہ گرینائٹ" },
    desc: { en: "Hard-wearing dark granite, a favourite for kitchen tops and steps.",
            ur: "مضبوط اور پائیدار گہرا گرینائٹ، کچن ٹاپس اور سیڑھیوں کے لیے پسندیدہ۔" },
    image: "assets/images/products/black-granite-slab", webp: true,
    alt: { en: "Dark black granite stone texture", ur: "گہرے سیاہ گرینائٹ پتھر کی سطح" }
  },
  {
    id: "grey-granite", category: "granite", featured: false, stockConfirmed: false,
    name: { en: "Grey Granite", ur: "گرے گرینائٹ" },
    desc: { en: "Speckled grey granite for floors, stairs and outdoor areas.",
            ur: "دانے دار سرمئی گرینائٹ، فرش، سیڑھیوں اور بیرونی حصوں کے لیے۔" },
    image: "assets/images/products/grey-granite-slab", webp: true,
    alt: { en: "Speckled black and white grey granite", ur: "سیاہ و سفید دانوں والا گرے گرینائٹ" }
  },
  {
    id: "green-granite", category: "granite", featured: false, stockConfirmed: false,
    name: { en: "Green Granite", ur: "سبز گرینائٹ" },
    desc: { en: "Dark green granite with a natural speckled pattern.",
            ur: "قدرتی دانے دار نقش والا گہرا سبز گرینائٹ۔" },
    image: "assets/images/products/green-granite-slab", webp: true,
    alt: { en: "Dark green speckled granite texture", ur: "گہرے سبز دانے دار گرینائٹ کی سطح" }
  },
  {
    id: "brown-granite", category: "granite", featured: false, stockConfirmed: false,
    name: { en: "Brown / Tan Granite", ur: "براؤن / ٹین گرینائٹ" },
    desc: { en: "Earthy brown and tan granite for warm, practical surfaces.",
            ur: "مٹیالے براؤن اور ٹین رنگ کا گرینائٹ، خوبصورت اور کارآمد سطحوں کے لیے۔" },
    image: "assets/images/products/brown-granite-slab", webp: true,
    alt: { en: "Brown and tan speckled granite", ur: "براؤن اور ٹین دانے دار گرینائٹ" }
  },
  {
    id: "red-granite", category: "granite", featured: false, stockConfirmed: false,
    name: { en: "Red Granite", ur: "سرخ گرینائٹ" },
    desc: { en: "Red granite for borders, steps and distinctive designs.",
            ur: "سرخ گرینائٹ، بارڈر، سیڑھیوں اور منفرد ڈیزائن کے لیے۔" },
    image: "assets/images/products/red-granite-slab", webp: true,
    alt: { en: "Red speckled granite texture", ur: "سرخ دانے دار گرینائٹ کی سطح" }
  },

  /* ---------------- CHIPS (TERRAZZO) FLOORING ---------------- */
  {
    id: "classic-white-chips", category: "chips", featured: true, stockConfirmed: false,
    name: { en: "Classic White Chips", ur: "کلاسک سفید چپس" },
    desc: { en: "Light chips flooring with a clean, bright finish.",
            ur: "صاف اور روشن فنش والی ہلکے رنگ کی چپس فلورنگ۔" },
    image: "assets/images/products/classic-white-chips-flooring", webp: true,
    alt: { en: "Light white chips (terrazzo) floor in sunlight", ur: "دھوپ میں ہلکے سفید چپس (ٹیرازو) کا فرش" }
  },
  {
    id: "black-white-chips", category: "chips", featured: false, stockConfirmed: false,
    name: { en: "Black & White Chips", ur: "بلیک اینڈ وائٹ چپس" },
    desc: { en: "A timeless mix of black and white chips for busy floors.",
            ur: "سیاہ اور سفید چپس کا لازوال امتزاج، زیادہ استعمال والے فرش کے لیے۔" },
    image: "assets/images/products/black-white-chips-flooring", webp: true,
    alt: { en: "Black, white and grey chips flooring close-up", ur: "سیاہ، سفید اور سرمئی چپس فلورنگ کا قریبی منظر" }
  },
  {
    id: "black-chips", category: "chips", featured: false, stockConfirmed: false,
    name: { en: "Black Chips", ur: "بلیک چپس" },
    desc: { en: "Dark chips flooring that hides wear, for busy entrances and corridors.",
            ur: "گہرے رنگ کی چپس فلورنگ جو گھساؤ چھپاتی ہے، مصروف داخلی راستوں اور راہداریوں کے لیے۔" },
    image: "assets/images/products/black-chips-flooring", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Dark grey and black chips (terrazzo) floor", ur: "گہرے سرمئی اور سیاہ چپس (ٹیرازو) کا فرش" }
  },
  {
    id: "red-green-chips", category: "chips", featured: false, stockConfirmed: false,
    name: { en: "Red & Green Chips", ur: "ریڈ اینڈ گرین چپس" },
    desc: { en: "Light base with red and green chips for a warm, colourful floor.",
            ur: "ہلکی بیس پر سرخ اور سبز چپس، گرم اور رنگین فرش کے لیے۔" },
    image: "assets/images/products/red-chips-flooring", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Cream chips floor with red and green stone chips", ur: "سرخ اور سبز پتھر کے دانوں والا کریم چپس فرش" }
  },
  {
    id: "green-chips", category: "chips", featured: false, stockConfirmed: false,
    name: { en: "Green Chips", ur: "گرین چپس" },
    desc: { en: "Green and black chips on a light base, a bold and natural look.",
            ur: "ہلکی بیس پر سبز اور سیاہ چپس، نمایاں اور قدرتی انداز۔" },
    image: "assets/images/products/green-chips-flooring", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Chips floor with large green and black stone pieces", ur: "بڑے سبز اور سیاہ پتھر کے ٹکڑوں والا چپس فرش" }
  },
  {
    id: "zero-chips-orange", category: "chips", featured: false, stockConfirmed: false,
    name: { en: "Zero Chips (Orange)", ur: "زیرو چپس (اورنج)" },
    desc: { en: "Fine zero-size chips in a warm orange tone for a smooth, even finish.",
            ur: "باریک زیرو سائز چپس، گرم اورنج رنگ میں، ہموار اور یکساں فنش کے لیے۔" },
    image: "assets/images/products/zero-chips-orange-flooring", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Fine-grain orange chips finish on stair steps", ur: "سیڑھیوں پر باریک دانے والی اورنج چپس فنش" }
  },
  {
    id: "chips-granite-inlay", category: "chips", featured: false, stockConfirmed: false,
    name: { en: "Chips with Granite Inlays", ur: "گرینائٹ اِنلے کے ساتھ چپس" },
    desc: { en: "Chips flooring set with granite diamonds, borders or patterns.",
            ur: "گرینائٹ کے ڈائمنڈ، بارڈر یا نقش کے ساتھ چپس فلورنگ۔" },
    image: "assets/images/products/chips-granite-inlay-flooring", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Grey and white chips (terrazzo) flooring close-up", ur: "سرمئی اور سفید چپس (ٹیرازو) فلورنگ کا قریبی منظر" }
  },
  {
    id: "chips-marble-floral", category: "chips", featured: false, stockConfirmed: false,
    name: { en: "Chips with Marble Floral Design", ur: "ماربل پھول دار ڈیزائن کے ساتھ چپس" },
    desc: { en: "Chips flooring with a hand-set marble flower or medallion.",
            ur: "ہاتھ سے جڑے ماربل کے پھول یا میڈلین کے ساتھ چپس فلورنگ۔" },
    image: "assets/images/products/chips-marble-floral-flooring", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Polished lobby floor with a marble inlay pattern", ur: "ماربل اِنلے ڈیزائن والا پالش شدہ لابی فرش" }
  },

  /* ---------------- ONYX ---------------- */
  {
    id: "onyx-slab", category: "onyx", featured: true, stockConfirmed: false,
    name: { en: "Onyx Slabs", ur: "اونکس سلیب" },
    desc: { en: "Translucent onyx with dramatic banding, often used for backlit features.",
            ur: "واضح دھاری دار نقش والا نیم شفاف اونکس، عموماً بیک لِٹ ڈیزائن کے لیے استعمال ہوتا ہے۔" },
    image: "assets/images/products/onyx-slab", webp: true,
    alt: { en: "Polished onyx stone with amber and white bands", ur: "عنبری اور سفید دھاریوں والا پالش شدہ اونکس پتھر" }
  },

  /* ---------------- TILES ---------------- */
  {
    id: "marble-tiles", category: "tiles", featured: false, stockConfirmed: false,
    name: { en: "Marble Tiles", ur: "ماربل ٹائلز" },
    desc: { en: "Marble cut to tile sizes for floors and walls.",
            ur: "فرش اور دیواروں کے لیے ٹائل سائز میں کٹا ہوا ماربل۔" },
    image: "assets/images/products/marble-floor-tiles", webp: true,
    alt: { en: "Patterned marble floor tiles in beige, brown and green", ur: "بیج، براؤن اور سبز رنگ کی ڈیزائن دار ماربل ٹائلز" }
  },
  {
    id: "granite-tiles", category: "tiles", featured: false, stockConfirmed: false,
    name: { en: "Granite Tiles", ur: "گرینائٹ ٹائلز" },
    desc: { en: "Granite tiles for durable floors and high-traffic areas.",
            ur: "پائیدار فرش اور زیادہ آمد و رفت والی جگہوں کے لیے گرینائٹ ٹائلز۔" },
    image: "assets/images/products/granite-floor-tiles", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Grey speckled granite surface", ur: "سرمئی دانے دار گرینائٹ کی سطح" }
  },

  /* ---------------- BORDERS, PATTI & SKIRTING ---------------- */
  {
    id: "marble-borders", category: "borders", featured: false, stockConfirmed: false,
    name: { en: "Marble Borders", ur: "ماربل بارڈر" },
    desc: { en: "Marble borders cut to any width and shape: straight bands, corners, curves and frames around rooms.",
            ur: "ہر چوڑائی اور شکل میں کٹے ماربل بارڈر: سیدھی پٹیاں، کونے، گولائیاں اور کمروں کے گرد فریم۔" },
    image: "assets/images/products/marble-border-designs", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Hallway floor framed by contrasting marble border bands", ur: "مختلف رنگ کی ماربل بارڈر پٹیوں سے سجا ہال کا فرش" }
  },
  {
    id: "marble-patti-black-white", category: "borders", featured: false, stockConfirmed: false,
    name: { en: "Marble Patti (Black & White)", ur: "ماربل پٹی (بلیک اینڈ وائٹ)" },
    desc: { en: "Black and white marble strips (patti) for borders, lines and contrast details.",
            ur: "بارڈر، لائنوں اور کنٹراسٹ ڈیزائن کے لیے سیاہ اور سفید ماربل کی پٹیاں۔" },
    image: "assets/images/products/marble-patti-black-white", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Black marble beside white marble strips", ur: "سفید ماربل پٹیوں کے ساتھ سیاہ ماربل" }
  },
  {
    id: "skirting", category: "borders", featured: false, stockConfirmed: false,
    name: { en: "Marble Skirting", ur: "ماربل اسکرٹنگ" },
    desc: { en: "Matching stone skirting to finish floors neatly.",
            ur: "فرش کو صاف ستھری فنشنگ دینے کے لیے ہم رنگ پتھر کی اسکرٹنگ۔" },
    image: "assets/images/products/marble-skirting", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Marble stairs with matching marble skirting along the walls", ur: "دیواروں کے ساتھ ماربل اسکرٹنگ والی ماربل سیڑھیاں" }
  },
  {
    id: "sunny-grey-skirting", category: "borders", featured: false, stockConfirmed: false,
    name: { en: "Sunny Grey Skirting", ur: "سنی گرے اسکرٹنگ" },
    desc: { en: "Sunny Grey granite skirting to match grey granite floors and stairs.",
            ur: "گرے گرینائٹ فرش اور سیڑھیوں سے میل کھاتی سنی گرے گرینائٹ اسکرٹنگ۔" },
    image: "assets/images/products/sunny-grey-skirting", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Light grey speckled granite surface", ur: "ہلکے سرمئی دانے دار گرینائٹ کی سطح" }
  },
  {
    id: "granite-skirting", category: "borders", featured: false, stockConfirmed: false,
    name: { en: "Granite Skirting", ur: "گرینائٹ اسکرٹنگ" },
    desc: { en: "Hard-wearing granite skirting in black, grey and other granite colours.",
            ur: "سیاہ، سرمئی اور دیگر رنگوں میں مضبوط گرینائٹ اسکرٹنگ۔" },
    image: "assets/images/products/granite-skirting", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Grey and black speckled granite surface", ur: "سرمئی اور سیاہ دانے دار گرینائٹ کی سطح" }
  },

  /* ---------------- STAIRS ---------------- */
  {
    id: "white-marble-stairs", category: "stairs", featured: false, stockConfirmed: false,
    name: { en: "White Marble Stairs", ur: "سفید ماربل سیڑھیاں" },
    desc: { en: "White marble treads and risers for bright, elegant staircases.",
            ur: "روشن اور خوبصورت سیڑھیوں کے لیے سفید ماربل کے اسٹیپ اور رائزر۔" },
    image: "assets/images/products/white-marble-stairs", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "White marble stairs beside a marble balustrade", ur: "ماربل جنگلے کے ساتھ سفید ماربل سیڑھیاں" }
  },
  {
    id: "granite-stairs", category: "stairs", featured: false, stockConfirmed: false,
    name: { en: "Granite Stairs", ur: "گرینائٹ سیڑھیاں" },
    desc: { en: "Granite steps for indoor and outdoor stairs that see heavy use.",
            ur: "زیادہ استعمال ہونے والی اندرونی اور بیرونی سیڑھیوں کے لیے گرینائٹ اسٹیپ۔" },
    image: "assets/images/products/granite-stairs", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Grey granite staircase beside a glass railing", ur: "شیشے کی ریلنگ کے ساتھ گرے گرینائٹ سیڑھیاں" }
  },
  {
    id: "sunny-grey-stairs", category: "stairs", featured: false, stockConfirmed: false,
    name: { en: "Sunny Grey Stairs", ur: "سنی گرے سیڑھیاں" },
    desc: { en: "Sunny Grey granite steps, a popular light grey choice for stairs.",
            ur: "سنی گرے گرینائٹ اسٹیپ، سیڑھیوں کے لیے مقبول ہلکا سرمئی انتخاب۔" },
    image: "assets/images/products/sunny-grey-stairs", webp: true, /* stock reference photo (Pexels) — replace with your own */
    alt: { en: "Light grey granite steps", ur: "ہلکے سرمئی گرینائٹ اسٹیپ" }
  },
  {
    id: "stair-step-tiles", category: "stairs", featured: false, stockConfirmed: false,
    name: { en: "Chips Stairs", ur: "چپس سیڑھیاں" },
    desc: { en: "Treads and risers in marble, granite or chips.",
            ur: "ماربل، گرینائٹ یا چپس میں سیڑھیوں کے اسٹیپ اور رائزر۔" },
    image: "assets/images/products/stair-step-tiles", webp: true,
    alt: { en: "Stone steps with a speckled chips finish", ur: "دانے دار چپس فنش والی پتھر کی سیڑھیاں" }
  },

  /* ---------------- COUNTERS & SPECIAL WORK ---------------- */
  {
    id: "kitchen-countertops", category: "special", featured: true, stockConfirmed: false,
    name: { en: "Kitchen Countertops", ur: "کچن کاؤنٹر ٹاپس" },
    desc: { en: "Granite and marble tops cut to fit your kitchen.",
            ur: "آپ کے کچن کے ناپ کے مطابق کٹے ہوئے گرینائٹ اور ماربل ٹاپس۔" },
    image: "assets/images/products/granite-kitchen-countertop", webp: true,
    alt: { en: "Kitchen with granite countertops and dark cabinets", ur: "گرینائٹ کاؤنٹر ٹاپس اور گہرے رنگ کی کیبنٹس والا کچن" }
  },
  {
    id: "vanity-tops", category: "special", featured: false, stockConfirmed: false,
    name: { en: "Vanity Tops", ur: "وینٹی ٹاپس" },
    desc: { en: "Stone vanity tops for bathrooms and washrooms.",
            ur: "باتھ روم اور واش روم کے لیے پتھر کے وینٹی ٹاپس۔" },
    image: "assets/images/products/marble-vanity-top", webp: true,
    alt: { en: "Bathroom with marble walls and a white vanity", ur: "ماربل دیواروں اور سفید وینٹی والا باتھ روم" }
  },
  {
    id: "inlay-medallions", category: "special", featured: true, stockConfirmed: false,
    name: { en: "Inlay Medallions", ur: "اِنلے میڈلین" },
    desc: { en: "Custom stone medallions and floral inlays for floors.",
            ur: "فرش کے لیے حسبِ پسند پتھر کے میڈلین اور پھول دار اِنلے۔" },
    image: "assets/images/products/marble-inlay-medallion", webp: true,
    alt: { en: "Marble floor with a floral inlay medallion", ur: "پھول دار اِنلے میڈلین والا ماربل فرش" }
  }
];

/* =====================================================================
   GALLERY — masonry grid on the home page.
   thumb = small image (shown in grid), full = large image (lightbox),
   both WITHOUT extension. w/h = thumbnail size in pixels.
   These are reference / inspiration photos (see CREDITS.md). Add your
   own project photos at the top of the list as you take them.
   ===================================================================== */
window.GALLERY = [
  /* Your own featured project photo — uncomment once
     assets/images/chips-flooring-inlay.jpg is your real photo:
  { thumb: "assets/images/chips-flooring-inlay", full: "assets/images/chips-flooring-inlay", webp: false, w: 1200, h: 800,
    caption: { en: "Chips flooring with granite diamonds and a marble flower — our work", ur: "گرینائٹ ڈائمنڈ اور ماربل پھول کے ساتھ چپس فلورنگ — ہمارا کام" } },
  */
  { thumb: "assets/images/gallery/marble-granite-slabs-yard-640", full: "assets/images/gallery/marble-granite-slabs-yard", webp: true, w: 640, h: 427,
    caption: { en: "Marble and granite slabs in a stone yard", ur: "اسٹون یارڈ میں ماربل اور گرینائٹ سلیب" } },
  { thumb: "assets/images/gallery/marble-arched-corridor-640", full: "assets/images/gallery/marble-arched-corridor", webp: true, w: 640, h: 853,
    caption: { en: "Marble corridor with arches", ur: "محرابوں والی ماربل راہداری" } },
  { thumb: "assets/images/gallery/granite-kitchen-island-640", full: "assets/images/gallery/granite-kitchen-island", webp: true, w: 640, h: 427,
    caption: { en: "Granite kitchen island", ur: "گرینائٹ کچن آئی لینڈ" } },
  { thumb: "assets/images/gallery/terrazzo-chips-floor-closeup-640", full: "assets/images/gallery/terrazzo-chips-floor-closeup", webp: true, w: 640, h: 960,
    caption: { en: "Chips (terrazzo) floor close-up", ur: "چپس (ٹیرازو) فرش کا قریبی منظر" } },
  { thumb: "assets/images/gallery/marble-staircase-gold-railing-640", full: "assets/images/gallery/marble-staircase-gold-railing", webp: true, w: 640, h: 955,
    caption: { en: "Marble staircase with gold railing", ur: "سنہری ریلنگ کے ساتھ ماربل کی سیڑھیاں" } },
  { thumb: "assets/images/products/marble-inlay-medallion", full: "assets/images/products/marble-inlay-medallion-1200", webp: true, w: 900, h: 675,
    caption: { en: "Marble floral inlay medallion", ur: "ماربل کا پھول دار اِنلے میڈلین" } },
  { thumb: "assets/images/gallery/mosque-marble-interior-640", full: "assets/images/gallery/mosque-marble-interior", webp: true, w: 640, h: 800,
    caption: { en: "Marble interior of a historic mosque", ur: "ایک تاریخی مسجد کا ماربل سے آراستہ اندرونی حصہ" } },
  { thumb: "assets/images/gallery/marble-dining-room-stairs-640", full: "assets/images/gallery/marble-dining-room-stairs", webp: true, w: 640, h: 427,
    caption: { en: "Marble flooring in a dining area", ur: "ڈائننگ ایریا میں ماربل کا فرش" } },
  { thumb: "assets/images/gallery/polished-marble-hallway-640", full: "assets/images/gallery/polished-marble-hallway", webp: true, w: 640, h: 960,
    caption: { en: "Polished marble hallway", ur: "چمکدار ماربل ہال وے" } },
  { thumb: "assets/images/gallery/stone-gold-veins-closeup-640", full: "assets/images/gallery/stone-gold-veins-closeup", webp: true, w: 640, h: 427,
    caption: { en: "Natural stone with gold veins", ur: "سنہری دھاریوں والا قدرتی پتھر" } },
  { thumb: "assets/images/gallery/marble-bathroom-blue-vanity-640", full: "assets/images/gallery/marble-bathroom-blue-vanity", webp: true, w: 640, h: 960,
    caption: { en: "Marble bathroom with vanity", ur: "وینٹی کے ساتھ ماربل باتھ روم" } },
  { thumb: "assets/images/gallery/marble-floor-hallway-640", full: "assets/images/gallery/marble-floor-hallway", webp: true, w: 640, h: 853,
    caption: { en: "Marble flooring in a modern hallway", ur: "جدید ہال وے میں ماربل فلورنگ" } }
];
