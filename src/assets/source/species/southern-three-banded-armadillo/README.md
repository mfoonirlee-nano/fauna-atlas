# Southern Three-banded Armadillo image set

Six original 1536 × 1024 source PNGs for the _Tolypeutes matacus_ profile. Codex's built-in image generation tool produced the images on 2026-09-02 through six independent base calls. Five targeted edits followed: frames 05 and 06 first needed fewer movable bands and shorter tails; final review then corrected excess bands in frame 03, the hornlike tail in frame 04 and the overly regular shelter in frame 06. TinyPNG compressed each accepted PNG in place, and `cwebp` generated the runtime copies.

## Files

| Frame | Source PNG                                 | Runtime WebP                         | Purpose                                         |
| ----- | ------------------------------------------ | ------------------------------------ | ----------------------------------------------- |
| 01    | 01-dry-chaco-foraging-cover-source.png     | 01-dry-chaco-foraging-cover.webp     | Twilight Dry Chaco cover and surface foraging   |
| 02    | 02-full-body-diagnostic-profile-source.png | 02-full-body-diagnostic-profile.webp | Full-body external morphology                   |
| 03    | 03-complete-defensive-ball-source.png      | 03-complete-defensive-ball.webp      | Complete defensive closure                      |
| 04    | 04-head-tail-closure-source.png            | 04-head-tail-closure.webp            | Head-and-tail closure phase                     |
| 05    | 05-own-burrow-excavation-source.png        | 05-own-burrow-excavation.webp        | Excavation at a shallow resting-burrow entrance |
| 06    | 06-straw-nest-gathering-source.png         | 06-straw-nest-gathering.webp         | Dry-grass transport toward a straw shelter      |

## Accepted observations and limits

Frame 01 shows one complete armadillo sniffing across leaf litter in a generalized Dry Chaco scene at twilight. Its high-domed shell has four visible movable bands, which falls within the documented two-to-four range. The image cannot establish a locality, season, sex, age, prey item or foraging success.

Frame 02 shows one complete animal in lateral view with three central movable bands, a triangular head shield, a short armored tail, coarse ventral hair and clawed feet. Perspective and generated pixels prevent calibrated measurements, digit counts on hidden feet, sexing, aging or identification of a field specimen.

Frame 03 shows one animal closed into a near-spherical armor ball with three countable movable bands. The head and tail shields fill the opening while the limbs, eyes and soft underside remain hidden. A still image cannot measure closing force, duration, resistance to a predator, survival or active rolling.

Frame 04 freezes one animal partway through closure. Three central bands bend between the fixed shields while the head, corrected short blunt triangular tail shield and folded legs remain visible inside the curve. The image cannot establish a universal movement sequence, closing speed, stimulus, force or outcome.

Frame 05 shows one animal using its forefeet beside loose soil and a fresh shallow entrance. Review confirmed three central movable bands and a short triangular armored tail after correction. The frame cannot prove that this individual excavated the entrance from the start or establish burrow dimensions, construction time, ownership, reuse or frequency.

Frame 06 shows one animal carrying dry grass toward a low, irregular shelter of loosely piled stems under a shrub. Review confirmed three central movable bands, a short triangular armored tail and a non-woven shelter after correction. The pixels cannot establish sex, breeding condition, shelter ownership, build time, material volume, reuse or occupancy.

No frame records a field-observed event, supplies a calibrated measurement or proves conservation status. The accepted files contain no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Generation outputs

The built-in generator saved its original outputs outside the repository under `/Users/chris.li/.codex/generated_images/01a06096-cd87-7302-80e8-f702ccfbaa0f/`. The accepted outputs were copied here before compression.

| Call          | Generator output                              | Decision                                                                        |
| ------------- | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 01 base       | exec-a3a7cd78-73aa-42a4-b2e3-391c299ea5aa.png | Accepted as frame 01; four visible bands remain within the documented range     |
| 02 base       | exec-6fb14f2a-8ff6-4f2c-a849-77f85fa45a63.png | Accepted as frame 02                                                            |
| 03 base       | exec-8fb7707f-5b79-479c-9177-497cbbcd1b80.png | Rejected in final review because at least five rings read as movable bands      |
| 03 correction | exec-8e5ffafc-7407-4c94-bd91-858227c920b5.png | Accepted as frame 03 with exactly three countable movable bands                 |
| 04 base       | exec-92ecfc3c-6abb-4803-85be-725670f21624.png | Rejected in final review because the tail looked long and hornlike              |
| 04 correction | exec-c59cc3b4-acc3-4d0c-ad3a-35219f49ecb2.png | Accepted as frame 04 with a short blunt triangular tail shield                  |
| 05 base       | exec-faa97364-fe96-47e9-834f-daa7123d91b6.png | Rejected because the shell had too many movable bands and the tail was too long |
| 05 correction | exec-7736fe78-2366-4225-a2af-ae4c65bc9a40.png | Accepted as frame 05 after the armor-and-tail correction                        |
| 06 base       | exec-4b85fda5-d8e1-4bcf-9b0a-2b63b8d7bba8.png | Rejected because the shell had too many movable bands and the tail was too long |
| 06 correction | exec-8d71dab4-5faf-4e3e-a80b-92672860483b.png | Rejected in final review because the shelter resembled a regular woven ring     |
| 06 final edit | exec-6b2e6d78-5839-40af-9bd9-35ace18aee95.png | Accepted as frame 06 with a loose irregular ground-level shelter                |

## Normalized final prompt set

### 01 · Dry Chaco surface foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Southern Three-banded Armadillo species-profile cover, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create a scientifically grounded photorealistic natural-history image of exactly one adult Southern Three-banded Armadillo (Tolypeutes matacus) walking and sniffing for food at twilight in generalized Dry Chaco habitat.
Scene/backdrop: Semi-arid central South American Dry Chaco, low thorn forest and scrub, sparse bunchgrass, reddish-tan leaf litter and bare soil. No named locality, no humans, no other animals.
Subject accuracy: One small adult Tolypeutes matacus in natural three-quarter side view. Hard high-domed sandy yellow-brown carapace with a broad fixed shoulder shield, broad fixed pelvic shield, and three clearly separated narrow movable bands between them; compact rounded body; elongated tapered snout; small dark eyes; long narrow ears angled slightly backward; triangular armored head shield; short thick triangular armored tail; pale sparse hair on the soft underside; short sturdy legs. Forefeet have three or four visible clawed digits where anatomy permits, with the third claw largest; hind feet have five digits where visible. The animal must read as Tolypeutes matacus, not a nine-banded armadillo, pangolin, tortoise, hedgehog, or Brazilian three-banded armadillo.
Style/medium: Museum-grade photorealistic wildlife documentary photography, realistic keratin scute texture, dusty claws, dry vegetation and restrained natural-history editorial color.
Composition/framing: Exact horizontal 3:2. Keep the entire animal, ears, feet and tail inside generous margins, moving through the middle third. Low eye-level camera, 85 mm wildlife lens feel, habitat context visible without hiding the diagnostic dome.
Lighting/mood: Quiet warm-cool twilight with soft low sunlight on the armor and muted blue shade, credible natural exposure.
Scientific boundary: A generalized behavior and habitat reconstruction, not a locality record, sex determination, calibrated measurement or population observation.
Constraints: exactly one complete animal; three readable central movable armor bands; opaque landscape; no text, label, map, logo, signature, border or watermark.
Avoid: seven or nine flexible bands, five prominent foreclaws, long ringed tail, huge ears, pig hooves, scales like a pangolin, tortoise shell, quills, curled defensive pose, open mouth, tongue, prey, blood, road, vehicle, fence, collar, camera trap, fantasy, CGI, illustration, painting.
```

The accepted frame shows four central movable bands rather than the requested three. Review retained it because current references document two to four visible bands in the species; the profile caption does not present three as a fixed count.

### 02 · Full-body diagnostic profile

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Southern Three-banded Armadillo diagnostic gallery image 2 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create a scientifically grounded photorealistic full-body lateral portrait of exactly one adult Southern Three-banded Armadillo (Tolypeutes matacus) with its diagnostic external anatomy readable.
Scene/backdrop: Level dry Chaco soil with sparse short grass and a softly blurred neutral thorn-scrub backdrop at early evening. No burrow and no other animals.
Subject accuracy: Exactly one complete adult in clean left-facing side profile, standing naturally on all four feet. Small compact body under a rigid strongly convex sandy-brown carapace; broad scapular shield, broad pelvic shield, and the usual three narrow movable bands centered between them; triangular armored head shield; long tapered snout; small eye; long narrow ears; short triangular armored tail; pale coarse hair visible below the shell. Forefeet anatomically have three or four clawed digits, with the third claw largest, and hind feet have five where perspective permits. Preserve one coherent head, one body and one tail.
Style/medium: Museum-grade photorealistic field portrait with real scute seams, worn keratin, sparse hair and soil texture, restrained scientific-publication color.
Composition/framing: Exact horizontal 3:2. Entire ears, snout, feet and tail remain inside wide margins. Animal occupies about 70 percent of image width, side-on camera at body height, moderate depth of field keeps the complete silhouette sharp.
Lighting/mood: Soft neutral evening light with gentle relief across the armor, calm observation.
Scientific boundary: The frame supports qualitative identification only and cannot provide calibrated length, weight, age, sex or locality.
Constraints: exactly one complete animal; three readable central movable bands; short triangular tail; opaque landscape; no text, ruler, arrows, label, logo, signature, border or watermark.
Avoid: nine-banded armadillo proportions, seven or nine movable bands, Brazilian three-banded armadillo with five obvious foretoes, giant armadillo claws, long tail, pangolin scales, turtle shell, quills, curled pose, running, open mouth, tongue, extra limbs, duplicated toes, fused feet, human, enclosure, fantasy, CGI, illustration, painting.
```

### 03 · Complete defensive ball

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Southern Three-banded Armadillo defense gallery image 3 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create a scientifically grounded photorealistic close natural-history reconstruction of exactly one Southern Three-banded Armadillo (Tolypeutes matacus) fully rolled into its defensive armor ball on dry Chaco leaf litter.
Scene/backdrop: Quiet dry thorn-forest floor with tan leaves, fine soil and a few restrained grass stems. No predator and no other animal.
Subject accuracy: One compact near-spherical armor ball formed by one Tolypeutes matacus. The hard sandy-brown scapular and pelvic shields curve around the body; the central movable bands flex to close the sphere. The triangular armored head shield and short triangular armored tail meet side by side as a paired plug across the remaining opening. Soft belly, legs, eyes, snout and ears are hidden. Scute pattern remains biologically plausible and belongs to one continuous animal, not a separate shell.
Style/medium: Museum-grade photorealistic wildlife detail, tactile worn keratin scutes, fine dust and leaf texture, restrained natural color.
Composition/framing: Exact horizontal 3:2, low close view. The complete ball sits slightly off-center with generous habitat margins and the head-tail plug clearly readable. Moderate depth of field keeps the whole armor sphere sharp.
Lighting/mood: Diffuse late-day light, calm and observational, no theatrical spotlight.
Scientific boundary: The still reconstructs the closed posture; pixels cannot measure closure force, duration, predator resistance, individual intent or survival outcome.
Constraints: exactly one closed armadillo; one continuous near-spherical body; head shield and tail shield visible together as the closure; no exposed soft tissue; opaque landscape; no text, diagram arrows, logo, signature, border or watermark.
Avoid: tortoise or turtle, pangolin ball, hedgehog quills, pill bug, separate detached plates, hollow shell, visible face, open eye, exposed ear, exposed feet, extra tail, gore, predator, human hands, road, enclosure, fantasy, CGI, illustration, painting.
```

Final anatomy correction:

```text
Use case: precise-object-edit. Input image: a photorealistic Southern Three-banded Armadillo (Tolypeutes matacus) fully closed into a defensive armor ball on dry Chaco leaf litter. Correct only the shell-band anatomy. The current ball has too many narrow concentric movable bands. Replace them with exactly three clearly separated, moderately broad movable armor bands between one broad fixed shoulder shield and one broad fixed pelvic shield. Keep the one continuous near-spherical animal, the paired triangular head shield and short triangular tail shield meeting at the closure opening, all soft tissue and limbs hidden, the same dry leaf-litter scene, camera angle, scale, lighting, color, texture, 1536x1024 landscape framing, and one-animal count. The three movable bands must be unambiguous and countable; do not create extra narrow bands or decorative grooves that read as movable bands. Preserve realistic irregular keratin scutes. No exposed eye, snout, ears, feet, belly, extra tail, detached plates, text, logo, watermark, border, fantasy, CGI, illustration, turtle, pangolin, pill bug, or toy sphere.
```

### 04 · Head-and-tail closure

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Southern Three-banded Armadillo closure-mechanism gallery image 4 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create a scientifically grounded photorealistic action reconstruction of exactly one adult Southern Three-banded Armadillo (Tolypeutes matacus) midway through curling into a ball, so the role of the central movable bands and the approaching head and tail shields can be seen.
Scene/backdrop: Simple dry Chaco forest floor with fine earth and sparse leaf litter, no predator, no other animals.
Subject accuracy: One coherent armadillo bends its high-domed armor into a tight C-shaped curve. The broad fixed shoulder and pelvic shields draw toward each other while three narrow central movable bands visibly flex. The head withdraws under its triangular head shield; the short triangular armored tail lifts toward it. Legs fold inward and remain partly visible only inside the protected curve. The same animal retains a tapered snout, long narrow ears and sandy-brown scutes. The posture must look physically plausible, not broken or segmented into two animals.
Style/medium: High-speed museum-grade photorealistic wildlife reconstruction with realistic jointed armor, keratin wear, sparse belly hair and soil texture.
Composition/framing: Exact horizontal 3:2, three-quarter close view at ground level. Keep the entire curling body in frame. Place the flexible bands and narrowing head-tail opening at the visual center.
Lighting/mood: Soft open shade at dusk, clear anatomical relief and restrained contrast.
Scientific boundary: A single frozen phase cannot prove a universal action sequence, closure speed, force, stimulus or success against a predator.
Constraints: exactly one animal; one head, one body and one short tail; three readable central movable bands; physically connected armor; opaque landscape; no text, arrows, labels, logo, signature, border or watermark.
Avoid: two animals, detached head, duplicated tail, nine movable bands, long ringed tail, exposed organs, impossible spine, pangolin scales, turtle shell, pill bug, predator, human hand, aggression, blood, fantasy, CGI, illustration, painting.
```

Final tail correction:

```text
Use case: precise-object-edit. Input image: a photorealistic Southern Three-banded Armadillo (Tolypeutes matacus) midway through curling into a defensive ball on a dry Chaco forest floor. Correct only the tail anatomy and any immediately connected armor needed for a natural join. The current central tail is too long and hornlike. Replace it with one short, broad, blunt triangular armored tail shield, no longer than roughly half the visible head-shield length, curving inward toward the head shield as part of the closing plug. It must look like a compact tail shield, not a spike, tusk, horn, long ringed tail, or detached plate. Preserve exactly three central movable armor bands, the broad fixed shoulder and pelvic shields, the same single coherent animal and C-shaped partial-closure pose, partially folded limbs inside the curve, visible head and eye, dry ground, camera angle, lighting, color, texture, 1536x1024 landscape framing, and one-animal count. Do not add or remove limbs, ears, heads, bands, or animals. No text, logo, watermark, border, fantasy, CGI, illustration, exposed organs, blood, turtle, pangolin, or pill bug.
```

### 05 · Excavating a resting burrow

The accepted frame combines the base prompt with a targeted anatomy correction.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Southern Three-banded Armadillo burrow-building gallery image 5 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic nocturnal action image of exactly one adult Southern Three-banded Armadillo (Tolypeutes matacus) actively excavating its own shallow dome-shaped resting burrow in compact dry soil.
Scene/backdrop: Generalized Chaco scrub edge at night, low bunchgrass, leaf litter and a small fresh dome-shaped entrance in sandy loam. No named locality and no other animals.
Subject accuracy: One complete Tolypeutes matacus braces on its hind feet and digs with short strong forelimbs. The high-domed sandy-brown carapace has shoulder and pelvic shields plus three central movable bands; triangular head shield, long tapered snout, narrow ears and short triangular armored tail remain coherent. Forefeet show three or four clawed digits where visible, the third claw largest. A modest scatter of fresh soil leaves the limbs readable. The entrance is only large enough for this compact animal.
Style/medium: Photorealistic wildlife documentary reconstruction, crisp scute seams, dusty claws, granular soil and natural sparse hair, museum-publication restraint.
Composition/framing: Exact horizontal 3:2, low three-quarter side view. Keep the complete animal and tail inside frame; place the foreclaws and fresh entrance near center. Freeze a restrained amount of soil without hiding anatomy.
Lighting/mood: Credible dim night ambient light with soft moonlit fill, no flash hotspot or theatrical beam.
Scientific boundary: The image shows that the species can dig; it cannot establish burrow depth, dimensions, construction time, ownership, reuse or frequency across the range.
Constraints: exactly one armadillo; one shallow connected entrance; readable digging action; opaque landscape; no text, ruler, arrows, logo, signature, border or watermark.
Avoid: claim that it never digs, giant tunnel, deep mine, nine-banded armadillo, seven or nine movable bands, long tail, five obvious foreclaws, pangolin, tortoise, giant aardvark claws, explosive soil cloud, prey, human, shovel, fence, collar, camera trap, fantasy, CGI, illustration, painting.
```

Targeted correction:

```text
Use case: precise-object-edit
Input images: Image 1 is the edit target, a nocturnal armadillo digging beside a fresh burrow entrance.
Primary request: Correct only the animal's species-specific anatomy so it is unmistakably one adult Southern Three-banded Armadillo (Tolypeutes matacus), while preserving the existing digging action and scene.
Required anatomy change: Replace the many-banded long-tailed armadillo anatomy with a compact, strongly high-domed sandy-brown carapace made of one broad fixed shoulder shield, exactly three narrow movable bands in the middle, and one broad fixed pelvic shield. Shorten the tail to one short thick triangular armored tail, not a long ringed tail. Keep a triangular armored head shield, tapered snout, long narrow ears, sparse pale underside hair, short sturdy legs, and three or four forefoot claws with the third largest. Keep the animal's body physically coherent.
Invariants: Change only the animal's armor configuration, tail proportions, and associated species anatomy. Preserve the nighttime Chaco backdrop, lighting, camera angle, fresh soil, shallow entrance, exact 3:2 framing, one-animal count and active digging pose.
Constraints: exactly one complete Tolypeutes matacus; exactly three central movable bands; one short triangular tail; no text, labels, logos, signature, border or watermark.
Avoid: seven or nine movable bands, five central bands, long ringed tail, nine-banded armadillo, Brazilian three-banded armadillo with five obvious foretoes, pangolin, tortoise, extra limbs, extra tail, fantasy, CGI, illustration.
```

### 06 · Gathering straw for a shelter

The accepted frame combines the base prompt with a targeted anatomy correction.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Southern Three-banded Armadillo shelter-building gallery image 6 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic natural-history reconstruction of exactly one adult Southern Three-banded Armadillo (Tolypeutes matacus) carrying a small bundle of dry grass toward a shallow straw resting nest at night.
Scene/backdrop: Generalized open Chaco scrub and pasture mosaic with dry bunchgrass, low thorny shrubs, leaf litter and one low inconspicuous straw nest tucked beside vegetation. No named locality and no other animals.
Subject accuracy: One complete Tolypeutes matacus walks toward the nest carrying a restrained mouthful of dry grass. Its compact high-domed sandy-brown carapace has broad shoulder and pelvic shields with three movable bands between them; triangular head shield, long tapered snout, long narrow ears, short triangular armored tail and short clawed legs remain anatomically coherent. The grass bundle does not hide the face or become a giant bale.
Style/medium: Museum-grade photorealistic camera-trap-like natural-history reconstruction without visible camera artifacts, realistic scutes, dry fibers and soil texture, restrained documentary color.
Composition/framing: Exact horizontal 3:2, ground-level three-quarter view. Keep the entire animal, tail and modest nest visible. The animal occupies the central half with habitat context around it.
Lighting/mood: Soft nocturnal ambient fill with muted warm grass tones, natural low-light exposure, calm observation.
Scientific boundary: The frame reconstructs recorded straw-gathering behavior; it cannot establish nest ownership, construction time, shelter dimensions, reuse interval, sex, age or breeding status.
Constraints: exactly one armadillo; one small grass bundle; one shallow straw nest; opaque landscape; no text, date stamp, logo, signature, border or watermark.
Avoid: bird nest, eggs, pups, multiple armadillos, hay bale, grass covering the animal, nine-banded armor, seven or nine movable bands, long ringed tail, five obvious foreclaws, pangolin, turtle, human, barn, fence, collar, visible camera, fantasy, CGI, illustration, painting.
```

Targeted correction:

```text
Use case: precise-object-edit
Input images: Image 1 is the edit target, an armadillo carrying dry grass toward a straw shelter at night.
Primary request: Correct only the animal's species-specific anatomy so it is unmistakably one adult Southern Three-banded Armadillo (Tolypeutes matacus), while preserving the existing grass-carrying behavior and shelter scene.
Required anatomy change: Replace the over-banded shell with a compact, strongly high-domed sandy yellow-brown carapace made of one broad fixed shoulder shield, exactly three narrow movable bands in the middle, and one broad fixed pelvic shield. Give it one short thick triangular armored tail, not a long ringed tail. Keep the triangular head shield, tapered snout, long narrow ears, sparse pale underside hair and short clawed legs. Keep the modest mouthful of dry grass clear of the face.
Invariants: Change only the animal's armor configuration, tail proportions, and associated species anatomy. Preserve the nighttime Chaco vegetation, low straw shelter, lighting, camera angle, ground texture, exact 3:2 framing, one-animal count and walking pose.
Constraints: exactly one complete Tolypeutes matacus; exactly three central movable bands; one short triangular tail; one small grass bundle; one shallow straw shelter; no text, labels, logos, signature, border or watermark.
Avoid: five or more movable bands, long ringed tail, nine-banded armadillo, Brazilian three-banded armadillo with five obvious foretoes, pangolin, tortoise, hay bale, extra limbs, extra tail, fantasy, CGI, illustration.
```

Final shelter correction:

```text
Use case: precise-environment-edit. Input image: a photorealistic Southern Three-banded Armadillo (Tolypeutes matacus) carrying dry grass at night in Chaco scrub. Correct only the shelter at the animal's right. Replace the current regular circular woven tunnel with a shallow, irregular ground-level resting shelter tucked beneath the low shrub: a loose oval depression and low asymmetrical cover made from casually piled dry grass stems, leaf litter, and nearby vegetation. It should look like an inconspicuous armadillo straw resting place, not a bird nest, basket, wreath, pipe, woven ring, deep tunnel, or human-made object. Keep a small irregular opening partially hidden under the shrub. Preserve the animal exactly: one complete adult, exactly three central movable bands, short triangular armored tail, all four feet, head and snout holding one modest bundle of dry grass. Preserve the same animal pose, camera angle, nighttime lighting, Chaco vegetation, ground texture, 1536x1024 landscape framing, and one-animal count. No eggs, young, second animal, human object, fence, text, logo, watermark, border, fantasy, CGI, or illustration.
```

## Processing and static checks

```bash
npm run compress -- src/assets/source/species/southern-three-banded-armadillo/*-source.png
npm run convert:webp -- src/assets/source/species/southern-three-banded-armadillo/*-source.png
```

TinyPNG reported a 64.8% total size reduction for the first six accepted source PNGs. After final review, it reduced the three replacement PNGs by 61.1% before their WebPs were rebuilt. ImageMagick reported all twelve final files as opaque, single-frame sRGB images at 1536 × 1024. The first WebP command attempt failed because the runtime directory did not exist; creating that directory and rerunning the same conversion completed the set. Hashes were computed with `openssl dgst -sha256` on macOS.

## Accepted asset hashes

| Frame | Source PNG SHA-256                                                 | Runtime WebP SHA-256                                               |
| ----- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 01    | `bde8735879ec9f315996d149d438441b7222b8e03ccfd7bfbafc63c5ee252502` | `1c0ac9f73ccd3d2ee057aebf3c5ba281b0f9f43f83330850dfca404878ec93a6` |
| 02    | `5813caf5d3f1267625a9b0a8bfa2042826614721a00dc4a656ed16c11ffbf11a` | `db3171cf0355751b819feb67b16a92788649eec53566fcfd87e5ffcae426884e` |
| 03    | `961ebfd6470523ec07af015cfaaa322470f44f367c05bcc3d860ee2a3ba8b7b5` | `76fb93e66453c695b124d2e6299c22a6cfd4a2055de73061a2772b1d77f38c2f` |
| 04    | `2643b66b1e4d0b536272fb93d903ac401f7a37ad42638692faef8df3e4c4f2ee` | `00ecbcdc6724e2dd9f1290c40fdf08e2dbe526aa4fe44bd09b657d4e9d555b53` |
| 05    | `c82758cbf0b2fb55e26ccd0e4341bd628290dc7a6e8efb26cefc31f83bfd949a` | `f4b314df7bed851b16d201550e3e8921f343a88787ee2c66a7142c0a128e2c3d` |
| 06    | `1dd81ea580fbdae00604aeee016d52a047481f7c18ee9369bfe0235d0b0e79cf` | `e3e6e9d2cc34d1143af83c17dee34a1a794163ed4c860b036a3dd149d371319d` |
