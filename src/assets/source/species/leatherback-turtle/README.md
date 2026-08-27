# Leatherback turtle image set

These six source PNGs were generated with Codex's built-in image generation tool as original project imagery for the *Dermochelys coriacea* profile. They are representative editorial reconstructions, not records of named turtles, tracked dives, migrations, nests, hatchling emergences or conservation surveys.

- Generated: 2026-08-27
- Source format after TinyPNG compression: 1536 × 1024, 8-bit sRGB indexed PNG, fully opaque
- Runtime format: 1536 × 1024, 8-bit sRGB WebP without alpha
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`
- Research boundary: [`docs/research/leatherback-turtle-profile.md`](../../../../../docs/research/leatherback-turtle-profile.md)

## Frames

| Frame | Source file | Intended use |
| --- | --- | --- |
| 01 | `01-open-ocean-ridged-swim-source.png` | One complete adult in open water, right-weighted cover composition with left-side copy space |
| 02 | `02-seven-ridges-clawless-flippers-source.png` | Near-dorsal identification view showing seven ridges and four clawless flippers |
| 03 | `03-jellyfish-foraging-source.png` | One adult grasping one intact lion's mane jellyfish without teeth, plastic or gore |
| 04 | `04-deep-transit-dive-source.png` | One adult descending through an empty water column during an uncommon deep transit dive |
| 05 | `05-night-nest-digging-source.png` | One short-tailed female digging a deep egg chamber at night, with no exposed eggs |
| 06 | `06-striped-hatchlings-dark-beach-source.png` | Exactly three separated striped hatchlings moving toward a natural sea horizon |

## Evidence and depiction boundaries

- Adult leatherbacks have continuous dark leathery skin over a flexible carapace with small dermal bones, not the exposed hard scutes of other sea turtles.
- The dorsal carapace has seven longitudinal ridges. Frame 02 uses the clearest near-dorsal view for counting them; oblique views retain the same anatomy while outer ridges partly overlap in perspective.
- Adults have two proportionally long front flippers and two smaller rear paddles. All four are clawless. Final edits on frames 01, 03 and 05 separated limbs that overlapped in the first generated versions.
- The pale irregular spotting and small pink crown patch follow NOAA and U.S. Fish & Wildlife Service identification guidance. The patch is not a light source or tracking mark.
- The jaw has two pointed upper cusps and a central notch. Backward oral papillae are not a row of teeth. Frame 03 contains no visible teeth.
- The 1,250-m dive is a study record from 13 tracked adults. In the same study, 99.6% of 26,146 dives were shallower than 300 m. Frame 04 is an uncommon transit dive, not the normal daily depth.
- Nesting females have short tails. Frame 05 represents one digging moment, shows no eggs or hatchlings, and does not identify a real beach.
- Hatchlings are dark with pale ridge stripes and pale flipper margins. Frame 06 shows exactly three individuals, not a documented nest output or survival count.

Primary visual references and numeric boundaries are documented in the research profile, with direct links to NOAA Fisheries, The Reptile Database, Houghton et al. 2008 and other primary or governmental sources.

## Shared prompt constraints

The following constraints were restated in every relevant generation or edit pass.

```text
Scientific subject: Leatherback Turtle, Dermochelys coriacea, not another turtle. Continuous dark blue-black rubbery leathery skin with fine irregular pale speckles; a subtle natural pink crown patch; exactly seven longitudinal dorsal ridges converging toward a blunt posterior; no external hard shell scutes. Exactly two extremely long tapered front flippers and exactly two smaller paddle-shaped rear flippers, all clawless; one head and one short tail. Correct broad barrel-shaped proportions.

No green, brown or plated hard shell; no hawksbill beak, loggerhead head, tortoise feet, teeth, claws, fish tail, dorsal fin, gills, blowhole, extra or fused limbs, duplicate head or cropped body.

Original photorealistic natural-history editorial wildlife photography for Fauna Atlas, restrained museum-publication quality, exact horizontal 3:2 landscape, 1536×1024 intent, realistic skin and environmental texture, no alpha. No text, labels, arrows, numbers, maps, logo, signature, border or watermark; no fantasy, illustration, CGI, oversaturation or stock-photo gloss. Representative generated reconstruction, not a real tracked animal, named beach, dive record, nest or survey.
```

## Final prompt records

### 01 · Open-ocean ridged swim cover

Base generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas species-profile cover and featured card, exact horizontal 3:2 landscape, 1536x1024 intent
Primary request: exactly one anatomically accurate adult Leatherback Turtle, Dermochelys coriacea, swimming through clear open-ocean blue water toward the left foreground
Scene/backdrop: quiet pelagic blue water, subtle suspended particles and soft surface sun shafts; no reef, seafloor, land, boat or identifiable site
Subject: exactly one complete adult leatherback, full body and all four flippers inside frame; continuous dark blue-black rubbery leathery skin with fine irregular pale speckles; exactly seven longitudinal dorsal ridges, all clearly visible and countable, converging toward a blunt rear point; subtle natural pink crown patch; exactly two extremely long tapered front flippers and exactly two shorter paddle-shaped rear flippers, all clawless; correct barrel-shaped proportions; no external hard scutes
Style/medium: original photorealistic natural-history editorial underwater wildlife photography, restrained museum-publication quality, realistic skin texture, not CGI or illustration
Composition/framing: turtle entirely within the right 58 percent, focal point x 0.72 y 0.56, facing slightly left and down; preserve the entire left 42 percent as calm low-contrast blue negative space for interface copy; no object crossing the negative space
Lighting/mood: natural underwater daylight, quiet, scientific, restrained color
Constraints: exactly one turtle, one head, two eyes, four flippers and one short tail; anatomically complete; no text, labels, logo, signature, border or watermark
Avoid: hard shell scutes, green or brown plated shell, six or eight ridges, claws, teeth, fish tail, dorsal fin, gills, blowhole, extra or fused limbs, duplicate head, cropped body, jellyfish, other animals, diver, tracking tag, fantasy glow, oversaturation, stock-photo gloss
```

The final source used two targeted anatomy edits:

```text
Correct only the rear-flipper anatomy. Replace the ambiguous forked shape at the rear with exactly two clearly separate, smaller paddle-shaped hind flippers, one emerging naturally from each side of the rear body, with a very short central tail between them. Both hind flippers must be individually readable and clawless. Preserve the canvas, composition, head, two front flippers, seven-ridged dark speckled leathery carapace, right-side placement, left blue negative space, lighting, water texture and color.

Add the missing far-side hind flipper only. Behind and slightly below the visible small rear paddle, reveal a second separate small paddle-shaped hind flipper attached naturally to the opposite side of the rear body. The two hind flippers must have distinct silhouettes and a short central tail between them, so the animal visibly has exactly four total flippers. Preserve everything else pixel-close.
```

### 02 · Seven ridges and clawless flippers

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Leatherback Turtle profile gallery frame 02, anatomical identification, exact horizontal 3:2 landscape, 1536x1024 intent
Primary request: exactly one complete adult Leatherback Turtle, Dermochelys coriacea, photographed underwater from a slightly elevated near-dorsal three-quarter angle so its diagnostic anatomy is unambiguous
Scene/backdrop: clean quiet mid-blue ocean water with gentle natural light and sparse particles, no seafloor or other objects
Subject: dark blue-black continuous rubbery leathery skin with fine irregular pale spotting and a small natural pink crown patch; the entire dorsal carapace visible; EXACTLY SEVEN AND ONLY SEVEN raised longitudinal ridges running from the front shoulder region to the blunt tapered posterior, separated clearly and individually countable from left edge to right edge; no external hard scutes; exactly two extremely long tapered front flippers and exactly two smaller paddle-shaped hind flippers, all four clearly separate, fully visible and clawless; short central tail; correct broad barrel-shaped proportions
Style/medium: original photorealistic natural-history editorial underwater wildlife photography, museum-publication accuracy, realistic skin and water, not illustration or CGI
Composition/framing: entire turtle fully inside frame, centered around x 0.60 y 0.50, no cropped head, tail or flipper; near-overhead angle prioritizes countable seven ridges and four-limb silhouette
Lighting/mood: soft diffuse underwater daylight, restrained color, calm scientific observation
Constraints: exactly one turtle, exactly seven dorsal ridges, exactly four flippers, no claws, one head, one short tail; no text, labels, arrows, logo, signature, border or watermark
Avoid: six or eight ridges, hard shell plates or scutes, overlapping scales, green or brown shell, teeth, extra or fused limbs, fish tail, dorsal fin, gills, blowhole, cropped anatomy, other animals, diver, tag, fantasy glow, oversaturation, stock-photo gloss
```

### 03 · Jellyfish foraging

Base generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Leatherback Turtle profile gallery frame 03, gelatinous-prey feeding, exact horizontal 3:2 landscape, 1536x1024 intent
Primary request: exactly one adult Leatherback Turtle, Dermochelys coriacea, approaching and beginning to grasp exactly one Lion's Mane Jellyfish in open blue water
Scene/backdrop: uncluttered pelagic blue water with subtle particles and natural depth, no seafloor, reef, land, boat or identifiable site
Subject: one complete adult leatherback with dark blue-black continuous leathery skin, fine irregular pale speckles, exactly seven longitudinal dorsal ridges, subtle pink crown patch, exactly two very long tapered clawless front flippers and exactly two smaller clawless rear paddles; full body and all four flippers visible. Natural side three-quarter head view shows a smooth upper jaw with two pointed tooth-like cusps and one central notch, no individual teeth. Exactly one intact translucent lion's mane jellyfish with one bell and natural trailing tentacles; turtle gently contacts the bell edge without gore
Style/medium: original photorealistic natural-history editorial underwater wildlife photography, restrained museum-publication realism, not CGI or illustration
Composition/framing: interaction centered around x 0.62 y 0.52, both complete turtle and entire jellyfish bell inside frame, readable separation between four turtle flippers; documentary observation rather than dramatic attack
Lighting/mood: soft filtered ocean daylight, restrained blues and amber-red jellyfish, calm scientific tone
Constraints: exactly one turtle and exactly one jellyfish; no plastic, fishing line, blood, torn tentacles, text, labels, logo, signature, border or watermark
Avoid: visible rows of teeth, open screaming mouth, hard shell scutes, green or brown plated shell, six or eight ridges, claws, extra limbs, fish tail, dorsal fin, gills, blowhole, second turtle, extra jellyfish, fish school, diver, tag, fantasy glow, oversaturation, stock-photo gloss
```

The final source used two targeted anatomy edits:

```text
Reveal the missing far-side long front flipper only. Add one separate, long tapered clawless front flipper attached naturally at the far shoulder behind the carapace, angled gently upward and back into open water, with a distinct silhouette. Preserve the one turtle, one intact jellyfish, head and jaw contact, no teeth, dark speckled skin, seven dorsal ridges, body position, background, lighting and color.

Add the missing far-side small hind flipper only. At the rear of the turtle, behind and slightly above the existing lower rear paddle, reveal a second separate small paddle-shaped hind flipper attached naturally to the opposite side of the posterior body. Give both rear flippers distinct silhouettes with the short central tail between them. Preserve everything else pixel-close.
```

### 04 · Deep transit dive

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Leatherback Turtle profile gallery frame 04, uncommon deep transit dive, exact horizontal 3:2 landscape, 1536x1024 intent
Primary request: exactly one complete adult Leatherback Turtle, Dermochelys coriacea, descending diagonally head-first into a vast darkening blue water column during an uncommon deep transit dive
Scene/backdrop: distant sunlit ocean surface high above, strong realistic blue depth gradient, sparse suspended particles, no seafloor visible and no other object
Subject: full anatomically accurate leatherback around x 0.61 y 0.61; dark blue-black continuous leathery skin with fine pale speckles; exactly seven longitudinal dorsal ridges, no external hard scutes; subtle pink crown patch; exactly two very long tapered clawless front flippers and exactly two smaller separate clawless rear paddles, all four visible; short central tail; natural steep descending posture
Style/medium: original photorealistic natural-history editorial underwater wildlife photography, restrained museum-publication realism, not CGI or illustration
Composition/framing: wide sense of scale, turtle fully inside frame with head, tail and all four flippers visible; body angled from upper left toward lower right; bright surface occupies only upper zone, deep empty water below
Lighting/mood: natural fading light, quiet, immense and scientifically grounded, no fantasy darkness
Constraints: exactly one turtle, exactly seven ridges, exactly four flippers, no claws, no text, numbers, labels, gauge, arrows, logo, signature, border or watermark
Avoid: seafloor, reef, submarine, whale, fish, diver, tracking tag, bubble trail, hard shell scutes, six or eight ridges, extra or fused limb, fish tail, dorsal fin, gills, blowhole, bioluminescent fantasy, oversaturation, stock-photo gloss
```

### 05 · Night nest digging

Base generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Leatherback Turtle profile gallery frame 05, nocturnal nesting, exact horizontal 3:2 landscape, 1536x1024 intent
Primary request: exactly one complete large short-tailed adult female Leatherback Turtle, Dermochelys coriacea, on a dark undeveloped tropical sandy beach at night, using both smaller rear flippers to dig a deep egg chamber
Scene/backdrop: generic natural beach with low dark ocean horizon, moonlit wet and dry sand, indistinct dune vegetation far behind; no identifiable real nesting site, building, road or artificial light
Subject: one broad-bodied female in low side-rear three-quarter view around x 0.63 y 0.58; complete head, shell, short female tail and exactly four clawless flippers visible; two very long front flippers planted naturally for support, two smaller rear paddles working at one deep narrow chamber; dark blue-black continuous leathery skin dusted with sand, fine pale speckles, subtle pink crown patch, exactly seven longitudinal dorsal ridges and no hard scutes; one broad body pit and realistic sweeping crawl tracks
Style/medium: original photorealistic natural-history editorial wildlife photography, respectful long-lens low-light documentation, restrained museum-publication quality, not a real named beach
Composition/framing: full turtle inside frame, one coherent digging moment, sea distant, no obstruction or crop
Lighting/mood: soft cool moonlight and faint starlight, believable natural low-light exposure, quiet and non-invasive, not day-for-night
Constraints: exactly one turtle, exactly seven ridges, exactly four flippers, no claws; no visible eggs, hatchlings, person, hand, flash, flashlight, vehicle, sign, fence, text, logo, signature, border or watermark
Avoid: long male tail, hard shell scutes, plated shell, six or eight ridges, digging with only front flippers, exposed eggs, extra or fused limbs, upright tortoise pose, anthropomorphic tears, melodrama, bright floodlight, fantasy glow, oversaturation, stock-photo gloss
```

The final source used one targeted anatomy edit:

```text
Reveal the missing far-side long front flipper only. Add one separate long tapered clawless front flipper attached naturally at the turtle's far shoulder, visible beyond the left-front side of the carapace and resting on the sand, with a distinct complete silhouette. The female must visibly have exactly four total flippers: the unchanged near long front flipper, this added far front flipper, and the unchanged two smaller rear paddles at the egg chamber. Preserve everything else pixel-close.
```

### 06 · Striped hatchlings on a dark beach

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Leatherback Turtle profile gallery frame 06, hatchling sea-orientation, exact horizontal 3:2 landscape, 1536x1024 intent
Primary request: exactly three newly emerged Leatherback Turtle hatchlings, Dermochelys coriacea, crawling independently across dark damp sand toward a low natural ocean horizon at night
Scene/backdrop: generic undeveloped tropical beach, low wave line ahead, dark dune silhouette behind, faint moon and sky glow reflected on water; no identifiable site, building, road or artificial light
Subjects: EXACTLY THREE palm-sized leatherback hatchlings, separated with no overlap, each complete and individually readable; each hatchling has deep black skin, EXACTLY SEVEN pale longitudinal ridge stripes on its small flexible carapace, pale margins on all flippers, exactly two long front flippers and exactly two smaller rear flippers, all clawless, one head and one short tail; all three oriented naturally toward the ocean
Style/medium: original photorealistic natural-history editorial wildlife photography, restrained museum-publication accuracy, realistic wet sand grains and hatchling skin, not cute or staged
Composition/framing: one hatchling in sharp right foreground and two smaller hatchlings spaced across the middle distance around x 0.55 y 0.62; all three full bodies and all flippers inside frame; uninterrupted route to sea; low-angle but elevated enough to count pale ridge stripes and four flippers
Lighting/mood: natural blue moonlit pre-dawn ambient light, sea horizon is the brightest orientation cue, calm and non-invasive
Constraints: exactly three hatchlings and no other animal; each has exactly seven pale ridge stripes and exactly four clawless flippers; no adult turtle, egg, shell pile, person, hand, flashlight, white light, city lights, vehicle, text, sign, logo, signature, border or watermark
Avoid: two or four hatchlings, dozens of hatchlings, overlapping bodies, hard plated shells, green or brown scutes, six or eight stripes, missing or extra limbs, handling, crowd, bucket, cage, rope pen, predator, cartoon faces, fantasy glow, oversaturation, stock-photo gloss
```

## Static visual acceptance

- Frame 01 contains one complete adult, clear left negative space, seven-ridged flexible carapace and four separately readable flippers.
- Frame 02 contains one complete adult in a near-dorsal view. Seven ridges are countable and two front plus two rear flippers are visible without claws.
- Frame 03 contains one turtle and one jellyfish. The animal has four flippers, no visible teeth, no plastic and no gore.
- Frame 04 contains one complete descending turtle, four flippers, open water and a distant surface. It has no seafloor, gauge, equipment or bubble trail.
- Frame 05 contains one short-tailed female and one digging stage. Two front and two rear flippers are readable; no egg, hatchling, person or artificial light is present.
- Frame 06 contains exactly three separated hatchlings. Each has seven pale ridge stripes, pale flipper margins and four limbs; there is no adult, person, white light, text or watermark.
- All six frames are original, text-free, logo-free and watermark-free. No frame contains hard external scutes, claws, fish tails, dorsal fins, gills or blowholes.

## File validation

- Source files: six one-to-one `*-source.png` files, all 1536 × 1024, 8-bit sRGB indexed PNG and `opaque=True`.
- Runtime files: generated from these exact sources with `npm run convert:webp -- <six paths>` after PNG compression.
- Pairing rule: remove `-source.png` from the source basename and append `.webp` in `public/images/species/leatherback-turtle/`.
