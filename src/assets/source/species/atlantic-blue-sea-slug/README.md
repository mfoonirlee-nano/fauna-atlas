# Atlantic Blue Sea Slug image set

Codex's built-in image generation produced these six original project images on 2026-08-29 for the complete Fauna Atlas Atlantic Blue Sea Slug profile. The set covers an adult ocean-surface portrait, upside-down countershading, feeding on a small *Physalia*, a cerata and cnidosac-region close-up, free egg strings, and a shelled veliger larva.

The images are representative AI natural-history reconstructions. They do not document a named animal, exact locality, measured body length, counted ceratal groups, observed feeding event, traced nematocyst transfer, measured egg string, known embryo count, controlled incubation, identified larva or tracked planktonic route.

- Species: Atlantic Blue Sea Slug, *Glaucus atlanticus*
- Product Chinese name: 大西洋海神海蛞蝓
- Search aliases: Blue Dragon, Blue Glaucus, Sea Swallow, Blue Sea Dragon, Blue Angel
- Generation tool: Codex built-in image generation; frame 01 received two precise lateral-anatomy edits, and frame 05 used final frame 01 as the input for one precise egg-string edit
- Generation record: 12 attempts total; the final asset chain uses 8 output steps: frame 01 base plus two edits, frame 02 base, frame 03 base, frame 04 final base, frame 05 final edit and frame 06 base; four exploratory outputs were not committed
- Generation date: 2026-08-29
- Source format: opaque sRGB PNG, 1536 × 1024
- Source compression: TinyPNG did not process the set because its API returned HTTP 429 for the exhausted monthly quota on 2026-08-29; local ImageMagick palette-quantized all six PNGs to at most 256 colors with Riemersma dithering
- Runtime format: opaque sRGB WebP, 1536 × 1024, converted with `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

## Shared morphology and evidence boundary

Adult frames 01–05 show one shell-free, flattened blue sea slug at the air–sea interface. The final cover shows a blunt head, long tapering metapodium, blue upward-facing ventral surface, three conspicuous pairs of pedunculate ceratal groups and one small sessile posterior group per side. Frame 02 turns the silver dorsal surface toward the underwater camera and keeps the blue margins close to the surface film. Frames 03–05 cover feeding, ceratal detail and free egg strings near an adult form; only frame 05 reuses final frame 01.

Final frames 01 and 05 make three conspicuous pedunculate groups and the small fourth sessile posterior group readable on each side. Modern descriptions of *Glaucus atlanticus* resolve the same four bilateral group positions. Frame 02's angle and surface reflection can obscure the posterior group, while frame 03 does not make it readable as a separate unit. Generated pixels cannot provide a specimen-level ceratal count or replace diagnosis from morphology and molecular evidence.

Only frame 04 makes cerata from one connected base readable as one row. The adult-scale frames render the cerata as radiating clusters, so their silhouettes cannot demonstrate the uniseriate diagnostic character. Prompt constraints record generation targets rather than measurements from the accepted pixels.

Frame 01 presents one generalized subtropical ocean-surface portrait. It does not identify a locality, prove a three-centimetre body length or establish the animal's orientation over time. Frame 02 illustrates the usual countershading interpretation through orientation and color. A still reconstruction cannot measure buoyancy, show the swallowed air inside the stomach, test camouflage performance or quantify predation risk.

Frame 03 reconstructs one slug feeding at the colony edge of one small *Physalia*. The picture supports the profile's feeding theme without establishing wild diet proportions, prey-handling sequence, nematocyst transfer, toxin dose or sting strength. Frame 04 uses dark ceratal tips to represent the terminal cnidosac region. It cannot show tissue histology, the identity or condition of stored nematocysts, discharge, prey source or toxicity.

Frame 05 places a modest number of short dotted strings beneath and behind the final corrected adult form as a visual shorthand for free egg strings in open water. It does not reconstruct the genital opening, a single release moment, scale, string length, embryo dimensions, embryos per string, release rate, attachment, development time or incubation temperature. Frame 06 gives a concept-level veliger reconstruction based on general shelled gastropod larval form. It does not establish exact age, size, shell shape at hatching, velum proportions, hatch timing, feeding duration, survival, metamorphosis or species identity from larval appearance alone.

## Files and themes

| Frame | Editable source | Runtime asset | Theme |
| --- | --- | --- | --- |
| 01 | `01-ocean-surface-adult-portrait-source.png` | `public/images/species/atlantic-blue-sea-slug/01-ocean-surface-adult-portrait.webp` | Adult form with three large pedunculate groups and one small posterior sessile group per side; cover and featured card |
| 02 | `02-upside-down-countershading-source.png` | `public/images/species/atlantic-blue-sea-slug/02-upside-down-countershading.webp` | Upside-down adult with silver dorsal surface toward the underwater camera |
| 03 | `03-physalia-feeding-source.png` | `public/images/species/atlantic-blue-sea-slug/03-physalia-feeding.webp` | One adult feeding at the colony edge of a small *Physalia* |
| 04 | `04-cerata-cnidosac-closeup-source.png` | `public/images/species/atlantic-blue-sea-slug/04-cerata-cnidosac-closeup.webp` | One ceratal row with translucent tissue and dark terminal cnidosac regions |
| 05 | `05-free-egg-strings-source.png` | `public/images/species/atlantic-blue-sea-slug/05-free-egg-strings.webp` | A modest number of free egg strings near the final four-group adult form |
| 06 | `06-veliger-larva-source.png` | `public/images/species/atlantic-blue-sea-slug/06-veliger-larva.webp` | Concept-level shelled veliger with a bilobed ciliated velum |

## Final prompts

### 01 · Adult at the ocean surface

The final source uses the base generation prompt followed by two precise-object edits. The first edit corrects the three prominent lateral fan bases. The second adds the small fourth sessile posterior group on each side while preserving the accepted animal, surface and layout.

#### Base generation prompt

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Atlantic Blue Sea Slug species-detail cover and featured editorial card, exact 3:2 horizontal landscape, original project asset
Primary request: a natural-history portrait of exactly one complete adult Atlantic Blue Sea Slug, Glaucus atlanticus, floating at a calm subtropical open-ocean surface
Scene/backdrop: clean open blue water with restrained surface ripples and no coast, seabed, reef, aquarium wall or named locality
Subject: one approximately 3 cm shell-free animal in its natural upside-down orientation, blue ventral surface facing the sky and camera; elongated flattened body, blunt head, long tapering metapodium and three conspicuous bilateral fan-like ceratal clusters; each fan has a distinct connected base and one row of long finger-shaped silver-blue cerata with dark cobalt tips; no prominent vertebrate eyes
Style/medium: photorealistic underwater wildlife macro photography, restrained natural-history reconstruction, living marine tissue rather than glass or CGI
Composition/framing: exact 1536 by 1024 horizontal 3:2 frame; place the complete animal right of center and keep the head, metapodium, all conspicuous fan bases and cerata inside frame; preserve broad calm negative space on the left for interface copy
Lighting/mood: clear surface daylight, calm field observation
Color palette: ocean blue, silver blue, cobalt tips and restrained white surface highlights
Materials/textures: soft flattened body tissue, translucent finger-like cerata, water-surface ripples and fine marine particles
Constraints: exactly one complete animal; blue ventral side up; three conspicuous paired fan bases; single-row cerata; no text, label, arrow, scale bar, logo, watermark, border, people or other animals; opaque sRGB
Avoid: external shell, fish fins, fish tail, octopus arms, obvious eyes, dragon head, wings, feathers, coral branches, neon glow, fantasy particles, duplicated body parts, cropped anatomy, beach, boat, seabed, CGI or illustration
```

#### First precise lateral-anatomy edit

```text
Precise object edit only. Keep the existing 1536 by 1024 horizontal composition, calm subtropical ocean surface, animal position, scale, elongated flattened body, blunt head, long tapering metapodium, blue ventral coloration, silver center stripe, lighting, focus, water texture and all left-side negative space unchanged. Edit only the lateral anatomy. Change it to exactly three distinct conspicuous paired fan bases, with three clearly separated fan bases on the left and three matching fan bases on the right. Connect every base naturally to the same body and keep one row of long finger-shaped cerata on each fan. Do not alter any other pixel-level feature. Do not add, remove, split, fuse or duplicate the body, head or metapodium. Do not create a shell, fins, eyes, tentacles, solid wings, feathers, coral branches, text, labels or diagram marks. Preserve the existing photorealistic living tissue and image everywhere else.
```

The first edit made three prominent lateral pairs readable and produced an intermediate frame 01 state. That state does not render the small posterior fourth group as a separate unit, and its radial clusters do not confirm a single-row arrangement. An early frame 05 attempt inherited this morphology; the team discarded that output and did not keep it as a source or runtime asset.

#### Final posterior-group edit

```text
Edit this existing natural-history image with one precise anatomical correction only. Preserve the animal's body, head, long tapering tail, all three existing large paired lateral ceratal group bases, water, lighting, scale, colors, camera angle, and right-side composition pixel-faithfully. Add exactly one additional SMALL posterior ceratal group on EACH side of the body, positioned just behind the third existing large pair and immediately before the smooth tapering tail. Each new posterior group must be sessile, without a long lateral stalk, and contain only a short single row of 3–5 slender tapered silver-blue cerata with dark cobalt tips. The final Glaucus atlanticus must show four bilateral group positions per side: the existing three conspicuous pedunculate groups plus the new tiny fourth sessile posterior group. Do not add extra large wings, do not alter or duplicate the animal, do not add text, labels, arrows, shell, fins, tentacles, glow, or new objects.
```

The final edit makes the three large pedunculate groups and the small fourth sessile group readable on both sides of frame 01. The image does not support a specimen-level count of individual cerata.

### 02 · Upside-down countershading

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Atlantic Blue Sea Slug orientation and countershading gallery image 2 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: an underwater natural-history view looking upward at exactly one complete Glaucus atlanticus floating upside down beneath the air–sea interface
Scene/backdrop: calm subtropical open ocean viewed from below, broad blue water, a bright rippled surface and a restrained surface reflection; no shore, bottom, reef or aquarium
Subject: one shell-free elongated slug directly beneath the surface film; silver dorsal surface faces down toward the camera, blue margins and ventral edge face up toward the sky; full blunt head, flattened body, tapering metapodium and conspicuous single-row finger-like cerata remain inside the frame
Style/medium: photorealistic underwater wildlife macro photography, museum natural-history reconstruction, plausible surface optics
Composition/framing: exact 1536 by 1024 horizontal frame; place the full animal across the central-right area with broad open blue water around it; retain its surface reflection without letting glare hide the main body
Lighting/mood: diffuse daylight through the rippled surface, calm observation
Color palette: silver white, muted blue, cobalt ceratal tips and deep open-water blue
Materials/textures: living soft tissue, translucent cerata, surface meniscus and natural water reflection
Constraints: exactly one full animal in the natural upside-down posture; silver dorsal surface toward the underwater camera; no external flotation bladder; no text, labels, arrows, logo, watermark, border, diver or equipment; opaque sRGB
Avoid: blue ventral surface facing the camera, seabed, active deep diving, flapping wings, fish anatomy, shell, cartoon face, fantasy glow, CGI or illustration
```

The oblique view and surface reflection may obscure a small posterior ceratal group. The image therefore does not resolve the number of groups on a living specimen.

### 03 · Feeding on *Physalia*

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Atlantic Blue Sea Slug feeding ecology gallery image 3 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: a restrained natural-history reconstruction of exactly one Glaucus atlanticus feeding on exactly one small Physalia colony at the open-ocean surface
Scene/backdrop: calm blue subtropical water at the air–sea interface; the Physalia float rests at the surface and a limited number of natural zooids and tentacles remain below it
Subject/action: one complete elongated slug approaches the colony edge from below in its upside-down posture, blue ventral surface toward the sky; its mouth contacts the underside colony edge while anterior cerata brace and manipulate the prey; preserve a credible size relationship and keep both organisms anatomically separate
Style/medium: photorealistic wildlife macro photography, restrained scientific natural-history reconstruction
Composition/framing: exact 1536 by 1024 horizontal frame; keep the complete Physalia float and complete slug inside the central crop-safe area; leave enough water around the contact point to read the behavior
Lighting/mood: soft natural surface daylight, observational tension without spectacle
Color palette: blue-gray water, translucent silver-blue slug, cobalt ceratal tips and restrained violet on the Physalia crest
Materials/textures: soft slug tissue, finger-like cerata, translucent gas float, delicate zooids and rippled water
Constraints: exactly one slug and one small Physalia; mouth at the colony edge; cerata brace the prey; no blood, wound, text, arrow, scale bar, logo, watermark, border, diver or equipment; opaque sRGB
Avoid: hero battle, giant prey, tentacles binding the slug, visible venom, glowing toxin, nematocyst diagram, fangs, swallowing the whole float, gore, CGI or illustration
```

### 04 · Cerata and terminal cnidosac regions

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Atlantic Blue Sea Slug cerata detail gallery image 4 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: an extreme natural-history macro view of 6–10 intact Glaucus atlanticus cerata arranged in one row from one connected lateral base
Scene/backdrop: open blue surface water with the rest of the animal falling out of focus behind the selected ceratal row; no dissection surface, laboratory or diagram
Subject: 6–10 long finger-shaped cerata rise from one connected living base in one clear row; each ceras has translucent blue-silver tissue and a dark opaque terminal region representing the cnidosac area; preserve soft tissue, fine internal texture and natural variation
Style/medium: photorealistic scientific macro photography, shallow depth of field, living tissue rather than a histology plate
Composition/framing: exact 1536 by 1024 horizontal frame; the selected cerata fill the center and remain sharp from connected bases to dark tips; keep the blurred body context readable behind them
Lighting/mood: restrained transmitted surface light, clinical clarity without a laboratory look
Color palette: blue silver, dark cobalt tips and deep ocean blue
Materials/textures: translucent soft tissue, opaque terminal regions, moist skin and suspended particles
Constraints: one connected ceratal base; 6–10 cerata in one row; intact tips with no discharge; no text, label, arrow, scale bar, logo, watermark or border; opaque sRGB
Avoid: cutaway, histology section, isolated floating spikes, nematocyst discharge, glowing venom, needle tips, teeth, crystal, shell, feather or coral texture, CGI or illustration
```

### 05 · Free egg strings

Frame 05 uses final corrected frame 01 as its image input. The precise edit preserves all four bilateral group positions while adding free egg strings in the surrounding water. The team discarded an earlier three-pair frame 05 output because it lacked the small fourth posterior group.

#### Precise egg-string edit

```text
Precise object edit only. Preserve this FINAL corrected Atlantic Blue Sea Slug image pixel-faithfully: same 1536 by 1024 horizontal composition, same one animal, head, long tapering tail, blue upward-facing ventral surface, silver center stripe, three conspicuous paired pedunculate ceratal groups PLUS the small fourth sessile posterior ceratal group on each side, water surface, lighting, focus, scale, and left-side negative space. Add only a modest number of separate short, hair-thin, translucent gelatinous egg strings in the open water beneath and behind the animal. Each string contains one line of minute ivory embryos. Keep every string short, fine, separate, and suspended or slowly sinking; keep them much smaller than the roughly 3 cm adult. Do not change, cover, remove, merge, duplicate, or add any ceratal group or any other animal anatomy. Do not imply a directly observed release instant. Do not create radial rays from the body, a spiral ribbon, broad lace band, tangled rope, attached nest, large bead-like eggs, developed blue juveniles, a second adult, seabed, substrate, text, labels, arrows, or diagram marks. Preserve the original image everywhere outside the added egg strings.
```

The accepted image shows a modest number of separate short dotted strings beneath and behind the adult form. It keeps the three large pedunculate groups and the small fourth sessile posterior group readable on each side. Treat the strings as an illustration of free egg strings nearby, not a reconstruction of their release position, number at one instant or measured length.

### 06 · Shelled veliger larva

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Atlantic Blue Sea Slug early-life gallery image 6 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: a scientific plankton macro portrait of exactly one Glaucus atlanticus veliger larva suspended in open blue water
Scene/backdrop: clean dark-blue pelagic water with sparse marine snow and no surface, seafloor, aquarium wall, dish or laboratory equipment
Subject: one coherent tiny veliger with a transparent coiled larval shell, translucent head-foot and two broad rounded ciliated velum lobes; show delicate living tissue and a small internal visceral mass without adult blue coloration or adult cerata
Style/medium: photorealistic scientific plankton macro photography, restrained museum natural-history reconstruction
Composition/framing: exact 1536 by 1024 horizontal frame; place the complete larva near the center with shell, head-foot and both velum lobes inside frame; retain broad dark-blue water around it
Lighting/mood: soft transmitted light, calm plankton observation
Color palette: transparent pearl gray, restrained warm internal tissue and deep Atlantic blue
Materials/textures: thin transparent larval shell, translucent living tissue, fine cilia and suspended particles
Constraints: exactly one larva; one coiled larval shell; two rounded ciliated velum lobes; no adult cerata; no text, label, arrow, scale bar, logo, watermark, border, net, jar or pipette; opaque sRGB output
Avoid: miniature blue adult, adult fan-like cerata, shell-free adult body, fish fins, insect larva, multiple larvae, cartoon face, fantasy glow, glass ornament, CGI or illustration
```

The accepted image uses a fully coiled transparent shell and two large velum lobes. It offers a concept-level veliger scene based on general larval form, not a reconstruction of the hatching instant or a species-level identification plate.

## Static verification

Static inspection confirms that all 12 files decode as 1536 × 1024 opaque sRGB images. The six source PNGs contain 243–253 palette colors, and all 12 source and runtime files have distinct SHA-256 hashes. Final frame 05 hashes to `622f3ec7d9a95c39d4890afb3dc179400a1d4f7b637bbd86a984b8ef24067bed` for the source PNG and `1fe2421bf4d8a26e2a7bc253baee5826a19ce454e35b4b89308b9c01b342b7a2` for the runtime WebP. TinyPNG did not compress the sources: its API returned HTTP 429 for the exhausted monthly quota on 2026-08-29. ImageMagick palette-quantized the source PNGs to at most 256 colors with Riemersma dithering, and the repository conversion settings `cwebp -q 82 -m 6 -mt` produced the runtime WebPs without changing orientation, dimensions or crop.
