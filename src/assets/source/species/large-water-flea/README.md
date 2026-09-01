# Large Water Flea image set

Codex's built-in image generation tool created these six original project images on 2026-09-01 for the complete Fauna Atlas _Daphnia magna_ profile. They show a shallow-pond portrait, lateral morphology, algal suspension feeding, a parthenogenetic brood, a dark ephippium, and a generalized ecotoxicology test setup. They do not document named animals, sites, specimens, field observations, laboratory clones, experiments, chemicals, protocols, or results.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/large-water-flea/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress -- src/assets/source/species/large-water-flea/*.png` with TinyPNG
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成科学情景重建`

| No. | Source file                                | Runtime file                         | Accepted observation                                                                                                                                           |
| --- | ------------------------------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | `01-shallow-pond-portrait-source.png`      | `01-shallow-pond-portrait.webp`      | One complete translucent adult female swims in green-brown shallow-pond water; the left side retains dark open-water negative space                            |
| 02  | `02-lateral-morphology-source.png`         | `02-lateral-morphology.webp`         | One complete lateral adult shows the compound eye, branched swimming antennae, transparent carapace, internal limbs, curved gut, brood chamber, and tail spine |
| 03  | `03-filter-feeding-algae-source.png`       | `03-filter-feeding-algae.webp`       | One complete adult appears among separate green algal cells, with cells concentrated beside the ventral filtering limbs and a green-brown gut                  |
| 04  | `04-parthenogenetic-brood-source.png`      | `04-parthenogenetic-brood.webp`      | One complete adult carries a compact group of separate rounded embryos inside one dorsal brood chamber                                                         |
| 05  | `05-dark-ephippium-source.png`             | `05-dark-ephippium.webp`             | One complete adult carries one attached dark saddle-shaped ephippium with two subdued internal oval silhouettes                                                |
| 06  | `06-ecotoxicology-test-vessels-source.png` | `06-ecotoxicology-test-vessels.webp` | Clear glass test vessels, a wide-bore glass pipette, a partial gloved hand, a water bath, and one readable daphnid reconstruct a generalized laboratory setup  |

## Static verification

Codex inspected the compressed source PNGs and runtime WebPs at original resolution on 2026-09-01. ImageMagick decoded all 12 files at 1536 × 1024 in sRGB and reported each file as opaque and single-frame. Source and runtime inspection confirmed the complete adult and left-side negative space in frame 01, the full lateral silhouette in frame 02, the separated algal cells in frame 03, the enclosed brood in frame 04, the attached dark ephippium in frame 05, and the clear test vessels without visible animal harm in frame 06. All 12 files have distinct SHA-256 hashes.

## Evidence boundaries

- AI-generated external form cannot identify _Daphnia magna_. Species determination requires diagnostic morphology, taxonomic literature, locality context, and specimen examination.
- Frames 01 and 02 show a representative adult female form. They do not establish sex, age, body length, geographic origin, clone identity, or diagnostic setal counts.
- Frame 01 reconstructs a generalized shallow temperate pond. It does not identify a site, population, water chemistry, season, abundance, or habitat preference.
- Frame 03 explains the general suspension-feeding mechanism. It does not measure clearance rate, particle-size selection, food quality, ingestion rate, or field diet.
- Frame 04 shows embryos inside a dorsal brood chamber. It does not establish a fixed clutch size, embryo age, development time, clone identity, temperature response, or reproductive rate.
- Frame 05 shows the position and form of a dark ephippium. It does not prove egg number, sexual origin, dormancy duration, hatching cues, season, population, or survival rate.
- Frame 06 reconstructs a laboratory test setting. It does not document an OECD-compliant study, chemical identity, concentration, exposure duration, immobilisation, reproduction endpoint, EC50, NOEC, result, or animal count.
- No frame establishes distribution, abundance, population trend, ecological effect size, toxicological sensitivity, or regulatory status.

## Shared morphology anchor

The prompts requested one translucent oval-bodied branchiopod enclosed by a thin uncalcified carapace, with one prominent compound eye, a pointed head or rostrum, one paired set of branched second antennae, leaf-like thoracic limbs, a curved gut, a dorsal brood chamber, a tucked postabdomen, and one posterior tail spine. Full-body frames kept the animal, antenna branches, and tail spine inside the canvas. The prompts excluded insects, mosquito larvae, copepods, fairy shrimp, brine shrimp, krill, fish larvae, external walking legs, extra eyes, duplicate tail spines, text, labels, logos, and watermarks. These instructions support visual continuity; they cannot turn generated anatomy into a voucher or diagnostic plate.

## Final prompts

### 01 · Shallow-pond portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Daphnia magna cover image 1 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original natural-history photomicrograph of exactly one complete adult female Daphnia magna swimming in the open water of a generalized shallow temperate freshwater pond.
Scene/backdrop: Soft green-brown pond water with suspended unicellular algae and distant out-of-focus aquatic plant stems. No identifiable site, aquarium equipment, laboratory vessel or other animal.
Subject: One magnified translucent water flea in clean lateral three-quarter view. Show one coherent oval body enclosed by a transparent uncalcified carapace, one prominent dark compound eye, a small pointed head, exactly one paired set of large branched second antennae used for swimming, subtle leaf-like thoracic limbs inside the carapace, a dorsal brood chamber without countable eggs, and one straight posterior tail spine. Keep the entire animal, both antenna branches and tail spine inside frame. It must read as a tiny planktonic branchiopod, not an insect, shrimp or fish larva.
Style/medium: Original photorealistic professional freshwater microscopy and natural-history photography, restrained museum-publication color, credible translucency and fine setae, no illustration or CGI look.
Composition/framing: Exact landscape 3:2. Place the complete animal center-right around x=0.66 y=0.52, facing left, with broad calm darker open-water negative space on the left for responsive page typography.
Lighting/mood: Soft transmitted daylight through pond water, quiet observational mood, gentle rim light revealing the transparent carapace.
Evidence boundary: Generalized AI scientific reconstruction, not a voucher, locality record, size measurement, laboratory clone or diagnostic image.
Constraints: Exactly one complete Daphnia and no other animal; one body, one prominent compound eye, one paired set of branched swimming antennae, one tail spine; no cropped anatomy; no text, labels, arrows, scale bar, ruler, logo, signature, border or watermark.
Avoid: insect segmentation, six walking legs outside the shell, mosquito larva, fairy shrimp, brine shrimp, copepod, krill, fish larva, lobster, shellfish shell, multiple eyes, giant-monster scale, bubbles hiding anatomy, human hand, beaker, microscope hardware, neon colors, fantasy glow, CGI, illustration, painting, oversaturation.
```

### 02 · Lateral morphology

```text
Use case: scientific-educational
Asset type: Fauna Atlas Daphnia magna lateral morphology gallery image 2 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original high-resolution transmitted-light photomicrograph of exactly one complete adult female Daphnia magna in a clean lateral orientation for a museum natural-history profile.
Scene/backdrop: Deep muted blue-gray freshwater microscope field with a few faint suspended particles; no slide edge, ruler, label, specimen pin, other animal or laboratory hardware.
Subject and anatomy: One coherent translucent oval water flea enclosed by a thin uncalcified bivalved carapace. Show one prominent black compound eye near the head, a small pointed rostrum, one paired set of large branched second antennae extending forward and upward, five pairs of delicate leaf-like thoracic limbs visible within the ventral carapace, a curved digestive tract visible through the body, a clear dorsal brood chamber with no countable embryos, a postabdomen tucked inside the shell, and one posterior tail spine. Keep the whole carapace, antenna branches and tail spine inside generous margins. Preserve credible millimetre-scale plankton anatomy without adding labels.
Style/medium: Photorealistic scientific microscopy with restrained color, fine setae, translucent tissue and optical depth; museum reference quality, not an illustration, diagram, cutout or CGI render.
Composition/framing: Exact landscape 3:2. Center the full specimen around x=0.52 y=0.51 in strict lateral view, head left and tail spine right, with each major silhouette feature readable.
Lighting/mood: Even transmitted illumination with gentle edge contrast and no dramatic glow.
Evidence boundary: Representative generated morphology cannot identify a specimen to species, confirm sex or age, count diagnostic setae, or provide a body-length measurement.
Constraints: Exactly one complete daphnid; one body, one prominent compound eye, one paired set of branched swimming antennae, one tail spine; no other animal; no cropped anatomy; no text, numbers, labels, arrows, scale bar, ruler, logo, signature, border or watermark.
Avoid: insect, mosquito larva, copepod, fairy shrimp, brine shrimp, krill, fish larva, external walking legs, many eyes, two tail spines, shell ornament, egg cluster, dissection, x-ray, neon color, fantasy glow, CGI, vector illustration, painting, oversaturation.
```

### 03 · Filtering unicellular algae

```text
Use case: scientific-educational
Asset type: Fauna Atlas Daphnia magna filter-feeding gallery image 3 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original photomicrographic natural-history reconstruction of exactly one complete adult female Daphnia magna suspension-feeding on unicellular green algae in freshwater.
Scene/backdrop: Clear muted pond water filled with sparse individual green algal cells and fine organic particles, with no plant leaf, sediment, laboratory vessel or second animal.
Subject and action: One coherent translucent Daphnia magna in lateral view, with one prominent dark compound eye, one paired set of branched swimming antennae, a thin oval carapace and one tail spine. Through the ventral carapace, five paired leaf-like thoracic limbs beat in an orderly fan. Show suspended algal cells concentrated along a subtle natural particle path toward the ventral filtering limbs and food groove, then into a faint green-brown gut. Convey water movement through particle distribution and slight motion blur on the internal limbs, without arrows, lines, labels or magical streams. Keep the entire animal and all appendages inside frame.
Style/medium: Photorealistic high-speed freshwater microscopy, sober scientific-publication color, credible translucency, fine setae and shallow optical depth; no infographic or CGI look.
Composition/framing: Exact landscape 3:2. Place the full animal around x=0.56 y=0.52, head left, leaving open water around the filtering zone so individual particles remain readable.
Lighting/mood: Soft transmitted side light, clean and analytical without clinical sterility.
Evidence boundary: The image demonstrates the general Daphnia filtering mechanism and does not measure clearance rate, particle-size preference, food quality, ingestion rate or field diet proportion.
Constraints: Exactly one complete daphnid and no other animal; one body, one prominent compound eye, one paired set of branched antennae, one tail spine; separate green algal cells, no dense bloom; no text, labels, arrows, scale bar, ruler, logo, signature, border or watermark.
Avoid: mouth biting a plant, baleen, net, external insect legs, mosquito larva, copepod, brine shrimp, krill, fish larva, two animals, predator, fecal cloud, glowing arrows, neon stream, pollution, beaker, experiment result, CGI, diagram, illustration, painting or oversaturation.
```

### 04 · Parthenogenetic brood

```text
Use case: scientific-educational
Asset type: Fauna Atlas Daphnia magna parthenogenetic brood gallery image 4 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original transmitted-light photomicrograph of exactly one complete adult female Daphnia magna carrying a developing parthenogenetic brood in the dorsal brood chamber beneath her transparent carapace.
Scene/backdrop: Quiet dark olive-blue freshwater microscope field with a few soft suspended particles; no substrate, plant, vessel, slide edge, text or second adult.
Mother: One coherent translucent Daphnia magna in clear lateral view, with one prominent black compound eye, one paired set of branched swimming antennae, an oval carapace, internal leaf-like thoracic limbs and one posterior tail spine. Keep the full mother and all appendages inside frame.
Brood: Show one compact dorsal chamber between the mother’s back and carapace containing about 8 to 12 separate rounded developing embryos at one similar stage. Each embryo stays inside the brood chamber, with no loose eggs or young in the water. Do not show an ephippium, mating male or birth event.
Style/medium: Photorealistic developmental-biology microscopy, restrained museum-publication color, credible transparent tissue and optical depth; no diagram, illustration or CGI look.
Composition/framing: Exact landscape 3:2. Place the mother around x=0.55 y=0.52, head left, viewed laterally so the dorsal chamber and separated embryos are readable without cropping the antennae or tail spine.
Lighting/mood: Soft transmitted illumination with gentle warm contrast on embryos and cool neutral water.
Evidence boundary: The scene demonstrates a brood chamber and direct-developing parthenogenetic embryos. It does not establish a fixed clutch size, embryo age, development time, clone identity, temperature response or wild reproductive rate.
Constraints: Exactly one complete adult daphnid; about 8 to 12 embryos only inside one dorsal brood chamber; one body, one prominent compound eye, one paired set of branched antennae, one tail spine; no other animal, no text, labels, arrows, scale bar, ruler, logo, signature, border or watermark.
Avoid: egg sac outside body, eggs scattered in water, live young outside the chamber, mammal pregnancy, insect ovary, ephippium, dark saddle case, mating, multiple adults, parasite cysts, bubbles mistaken for eggs, mosquito larva, copepod, brine shrimp, krill, fish larva, CGI, illustration, painting or oversaturation.
```

### 05 · Dark ephippium

```text
Use case: scientific-educational
Asset type: Fauna Atlas Daphnia magna ephippium gallery image 5 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original transmitted-light photomicrograph of exactly one complete adult female Daphnia magna carrying a mature dark ephippium, the protective saddle-shaped resting-egg case formed in the dorsal carapace.
Scene/backdrop: Muted amber-gray freshwater microscope field with a faint suggestion of a temporary pond environment; no dry sediment, plant, laboratory vessel, slide edge or second animal.
Subject: One coherent translucent Daphnia magna in lateral view with one prominent black compound eye, one paired set of branched swimming antennae, a thin oval carapace and one posterior tail spine. On the dorsal rear part of the carapace show one sharply defined dark brown-black saddle-shaped ephippium integrated into the carapace. Within the case, allow two subtle separate oval resting-egg silhouettes to be visible through transmitted light, without turning the case transparent or depicting loose eggs. Keep the whole animal, antennae and tail spine inside frame.
Style/medium: Photorealistic freshwater developmental microscopy, sober museum-publication treatment, credible translucent tissues and strongly melanized ephippium; no diagram, illustration or CGI look.
Composition/framing: Exact landscape 3:2. Center the complete animal around x=0.53 y=0.52, head left, with the dark dorsal ephippium as the visual focus and enough open water to separate its outline.
Lighting/mood: Soft transmitted warm light with restrained contrast between the pale body and dark case.
Evidence boundary: This representative scene shows the position and form of an ephippium. It does not prove every case contains two eggs, establish sexual origin, dormancy duration, hatching cue, season, population or survival rate.
Constraints: Exactly one complete adult daphnid; exactly one attached dark saddle-shaped ephippium; at most two subtle egg silhouettes only inside it; one body, one prominent compound eye, one paired set of branched antennae, one tail spine; no other animal, loose eggs, text, labels, arrows, scale bar, ruler, logo, signature, border or watermark.
Avoid: ordinary pale brood chamber, many embryos, egg sac hanging outside, insect pupa, seed pod, shell, wound, parasite, mating male, neon glow, dry cracked pond, mosquito larva, copepod, brine shrimp, krill, fish larva, CGI, illustration, painting or oversaturation.
```

### 06 · Ecotoxicology test vessels

```text
Use case: scientific-educational
Asset type: Fauna Atlas Daphnia magna ecotoxicology gallery image 6 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original documentary laboratory photograph of a careful Daphnia magna aquatic-toxicity test setup inspired by OECD test vessels, without depicting a result or a named chemical.
Scene/backdrop: A clean neutral laboratory bench with two orderly rows of small identical open glass test vessels, each holding the same volume of clear colorless water. A temperature-controlled water bath and soft-focus stereo microscope may sit in the background. No printed labels, brand names, chemical bottles, screens, charts or colored liquids.
Action: In the foreground, one gloved researcher’s hand uses a clean wide-bore glass transfer pipette just above one vessel. Several tiny translucent Daphnia-like points are visible in the clear water only on close inspection, while one magnified but credible Daphnia silhouette near the front glass makes the test organism readable. No animal appears injured, dead, trapped or outside water.
Style/medium: Photorealistic professional environmental-toxicology laboratory documentation, sober scientific-publication treatment, real glass reflections and stainless-steel texture, no staged marketing gloss or CGI look.
Composition/framing: Exact landscape 3:2. Place the foreground vessel and pipette around x=0.58 y=0.58; repeat vessels recede diagonally and leave calm bench space on the left. Keep the setup readable without any text.
Lighting/mood: Soft diffuse laboratory daylight, careful and controlled.
Evidence boundary: This is a generalized test-setting reconstruction. It does not document an OECD-compliant study, test concentration, chemical identity, exposure duration, immobilisation, reproduction, EC50, NOEC, result or animal count.
Constraints: Clear colorless water only; identical glass vessels; one pipette; at most one partial gloved hand; no visible harm; no text, numbers, labels, logos, signature, border or watermark.
Avoid: petri dish with giant animal, fish, insects, shrimp, blood, dead organisms, immobilized pile, colored toxic liquid, hazard symbols, skull icon, dramatic fumes, injection needle, sealed animal, cluttered bench, brand logo, readable document, chart, infographic, CGI, illustration, painting or oversaturation.
```

## Accepted file hashes

| No. | Source PNG SHA-256                                                 | Runtime WebP SHA-256                                               |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 01  | `661a1152fe63e81add5d1757c2adb4ab7f0375c9ceb6fbf9d34e227cd7b53033` | `65d7e75ceb8a1b357ce191f9eeaced69ddd8fb20a654aa4c4a84bcf2a0530ce6` |
| 02  | `6ad8d21b8c1445dae60bd9cac6fb39b7a9ecf578006c526d9b1d408d84373308` | `8f1943e9ace270a4da387602f1449c98d0b1cddfbf66f8594f88911478531bac` |
| 03  | `3220cda64c5eafc44c9c1f8a80c1e6f109c2b6bae9a29a4c205866530d955485` | `9ea998e28ecf10f500f3d20a9df2525c5d2da8f957cfa972e601cad85f23c871` |
| 04  | `7fe20f64c1e8631d5d2b15f9d78f39cbbf675ac4cea127a296e660adf199554c` | `4ef5bd6b5b3064fdb167fef51f4b60f75b4f8cb574c335c8d4467405ec392e9a` |
| 05  | `b4e05f5147a9ebbfa53cfd5d9ef2e917f47a91c10bef7d6b7290ef296642c48d` | `dba921fa9ca64a019200efe1e173bd72aa58aefb5c1cd6d366ea2661c2ebf8f9` |
| 06  | `901e686af1da4b05887e3ecfb311ec99277c6c777b29b2df72d31bc0e4d78431` | `a12fe2c89f4bab0272491dd4e34c917b33828ccbf4bf1a53f75dcbcfcde055c9` |
