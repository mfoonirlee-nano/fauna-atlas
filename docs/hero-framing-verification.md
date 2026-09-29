# Hero framing verification — 2026-09-29

The desktop hero fits the reviewed animal silhouette into a dedicated image panel. `fitHeroSubject` chooses the larger possible subject size while keeping every recorded outer edge at least 24 CSS pixels from the panel edge. A `ResizeObserver` measures that panel, so changes in window size or content height update the fit. Copy and carousel controls occupy a separate grid column.

At widths up to 760px, CSS overrides the fitted image dimensions and uses `object-fit: contain` inside a 24px inset. The image panel precedes copy and controls in separate grid rows. The entire source image remains visible; animals may therefore appear smaller on phones. The same canonical cover supplies the blurred, darkened backdrop. No new image variants, image edits or focal-point changes were made.

Incoming slides fade over an opaque outgoing slide, including both foreground and backdrop. No image scaling or translation occurs at any animation endpoint. Subject metadata loads as a separate chunk to preserve the initial JavaScript budget. While it loads, if the load fails, or without reviewed bounds or `ResizeObserver`, the foreground falls back to `contain` on desktop too.

## Evidence

- `npm run test:carousel` verifies the retained six-image sets and SHA-256 of all 450 canonical covers against their existing reviewed-bound fixtures.
- Geometry tests check all 450 subjects at 320×760, 390×760, 1366×768, 1920×900, 2560×900 and 3840×900, plus widths 761, 900 and 1100 at the relevant layout breakpoints. They require 24px subject clearance and maximal desktop fit within the panel.
- CSS checks connect these calculations to mobile containment, separate image/content rows and opacity-only transitions.
- JSDOM integration tests exercise forward/backward navigation, autoplay, reduced motion, failed decoding, retention of painted image nodes, resize updates, observer cleanup and unreviewed-cover fallback.
- Static image-panel simulations provide representative visual inspection without launching a browser.

The tests reuse the recorded full-subject boundaries; this change does not remeasure every animal. They do not establish that every source image meets all composition requirements. A follow-up check decoded all 450 runtime images and found a 1px width error in the crested-ibis metadata. Correcting its recorded width from 1536 to 1535 preserves the required 24px margin at the 761px and 900px breakpoints. The image bytes are unchanged. Browser-level typography and composed-page appearance have not been visually verified, in accordance with the repository's no-browser verification rule.
