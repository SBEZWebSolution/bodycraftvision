BODY CRAFT — OFFICIAL LOGO SLOT
==============================

The authentic Body Craft (Rahim Yar Khan) logo could not be retrieved
automatically, and it was NOT recreated or reinterpreted — the site currently
renders a neutral typographic wordmark placeholder instead.

TO INSTALL THE REAL LOGO
------------------------
1. Save the official file here, keeping the exact name:

     /public/assets/body-craft-logo.svg      (preferred)
     or /public/assets/body-craft-logo.png   (transparent PNG also fine)

2. Open  src/components/BrandMark.tsx  and set:

     const LOGO_SRC = "/assets/body-craft-logo.svg";

   The wordmark placeholder disappears and the real logo is used in the
   navigation, the loading animation and the footer, at its original
   proportions with no filters or effects applied.

3. Optional: set the real brand color in src/styles.css by replacing
   --accent and --accent-soft. The current accent is a restrained warm bronze,
   not an invented brand color.

PHOTOGRAPHY
-----------
Replace the files in /public/images/gym/ with authentic Body Craft photos:

  hero.jpg          (wide, ~1920x1200)  — full-screen hero
  interior-01.jpg   (portrait)          — gallery / intro
  interior-02.jpg   (landscape)         — gallery
  equipment.jpg     (landscape)         — training section
  training.jpg      (portrait)          — gallery / "The Work"
  detail.jpg        (portrait)          — texture / detail

Keep the filenames and every section updates automatically
(paths live only in src/lib/site.ts).
