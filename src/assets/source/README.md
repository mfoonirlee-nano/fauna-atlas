# Image assets and provenance

Keep one accepted image per scene: the compressed WebP in `public/images/`. Keep final prompts, credits, generation notes and acceptance records under `species/<slug>/`.

PNG inputs are temporary and ignored by Git. Existing PNG filenames and hashes in species records describe historical generation evidence; those files are no longer retained. Do not recreate them merely to satisfy an old record. The accepted WebP is the retained visual reference.

## Image workflow

非动物微生物专题的生成图与结构示意独立于动物图片集，详见[微生物图片记录](./microbes/README.md)。

1. Generate or edit temporary `*-source.png` files under this directory. Inspect them before conversion.
2. Run `npm run convert:webp -- <source.png>...` (requires `cwebp` and ImageMagick). It creates the matching path under `public/images/`, validates decoding and dimensions, and replaces the output only on success. TinyPNG via `npm run compress -- <source.png>...` is optional; WebP conversion does not need API credentials.
3. Inspect the final WebP, record its SHA-256 and cover acceptance evidence, and run the relevant tests. Remove the temporary PNG after acceptance. Never repeatedly recompress an accepted WebP.
4. `dist/` is ignored build output. Build or deploy from `public/images/`; remove local `dist/` when finished if disk space matters.


## Species image set rule

Each species has exactly six retained images: one cover and five gallery images. The carousel and species profile use the same cover through `Species.media.image`. Replace an unsuitable cover in place and preserve the five gallery images unless the task also calls for changing them.

Keep desktop and mobile presentation on that single cover. Do not add `hero-desktop`, `hero-mobile`, or other device-specific image variants. Temporary generation candidates stay outside the retained image set and leave the repository after acceptance.

## Withdrawn biological review

When an image set fails or awaits biological review, retain the six source assets and technical provenance in `Species.pendingMedia.assets`, with a concrete `reason`. Public `Species.media` must have neither `image` nor `gallery`; use the existing taxon artwork or missing-image fallback. Pending images must not enter cards, map previews, hero rotation, profile galleries or the image viewer. Hash-bound cover fixtures may still describe retained draft bytes; passing geometry or hash checks does not approve their biology. Restore public images only after authoritative reference comparison and renewed structural, source-composition and runtime acceptance.

## Species cover rule

Apply this rule whenever you add, generate, replace, or crop a species cover. `Species.media.image` points to the retained WebP species cover, and the landing-page hero includes that image in its carousel.

### Composition

A cover passes composition review when all of these conditions hold:

- Make the animal the clear main subject. Maximize its visible size within the full-body clearance constraints below; do not shrink it into a distant speck to pass cropping checks. Compare the old and regenerated cover and record the full-subject size in both source pixels and the evaluated hero frames.
- Place the primary animal or primary subject group on the right. Its visually inspected center must sit at or beyond 60% of the source width, while the left 40% remains quiet enough for the hero title, introduction, and call to action.
- Show the complete subject in the source. The reviewed boundary must include every visible outer feature required by the pose and taxon, including the head, bill or muzzle, horns or antennae, wing or fin tips, feet, tail, and tentacles.
- Leave real background between that boundary and the crop edge. Do not treat a `focalPoint` value as proof of subject placement; it controls `object-position` and does not describe the pixels occupied by the animal.

When the task asks to regenerate covers with small subjects, generate replacement images for the affected species. CSS zoom, `object-position`, or container changes alone do not complete that request. Framing adjustments may support a regenerated cover, but both subject prominence and complete-body visibility must pass review.

### Hero acceptance

Use the following presentation for the canonical cover:

- **Desktop:** Fit the complete reviewed subject inside its own image panel with at least 24 CSS pixels of clearance. Maximize the animal within that constraint. Keep copy and controls in a separate grid column. Measure the panel when its size changes; viewport dimensions alone do not capture content-driven height changes.
- **Mobile (up to 760px):** Show the complete source image with `object-fit: contain` inside the panel's 24px inset. Put copy and controls below the image. Override desktop fit dimensions when crossing the breakpoint.
- **Background and motion:** Fill unused panel space with a blurred, darkened copy of the same cover. Crossfade complete slides over an opaque outgoing slide; preserve the painted image node and keep all animation endpoints free of scaling or translation.
- **Fallback:** Use full-image `contain` while subject metadata loads, when it fails to load, or when bounds or size observation are unavailable. This fallback protects display while loading; it does not replace the required metadata for a new animal.

Verify the complete subject at `320×760`, `390×760`, `1366×768`, `1920×900`, `2560×900`, and `3840×900`, plus `761×760`, `900×760`, and `1100×768`. Check both sides of any breakpoint changed by the task. Cover the settled frame and the initial, forward and backward enter/leave animation endpoints in `src/styles.css`. Inspect the animal's separation from copy, controls and panel edges as well as numerical clearance.

The former full-bleed `object-fit: cover` foreground and coverage-only tests do not establish full-subject visibility. Keep source-composition evidence separate from runtime framing acceptance. Use [the 2026-09-29 verification record](../../../docs/hero-framing-verification.md) as historical evidence, not as acceptance for future images or layouts.

### Cover metadata and loading

For each added or replaced cover:

1. Inspect the retained WebP and read its **actual decoded dimensions** and SHA-256. For dimensions, use `magick identify -ping -format '%w %h\n' public/images/species/<slug>/<cover>.webp`. A generation prompt, PNG size or previous README is not evidence of the runtime dimensions; even a 1px error affects the fit.
2. Measure the complete subject boundary in that WebP's pixel coordinates. Include the outer features listed under Composition. Keep bounds inside the decoded source dimensions; a focal point or head-only box cannot stand in for a full silhouette.
3. Add or update the slug in `src/data/cover-subjects.ts` and its matching record in exactly one of `tests/fixtures/original-covers.json` or `tests/fixtures/regenerated-covers.json`. Keep dimensions and bounds identical, bind the fixture to the current WebP hash, and record the evidence in the species README. Correct metadata when it is wrong; preserve image bytes when the task only concerns metadata or framing.

Every catalogue animal must have a reviewed subject record and a matching fixture. The carousel tests compare the slug sets and decoded dimensions; keep those checks exhaustive as the catalogue grows.

Load the subject table separately from the initial application bundle and retain the `contain` fallback during loading or failure. Keep full species profiles independently loaded as well. Adding catalogue entries can exceed the initial JavaScript budget even when type checks and the production build pass. Use the budgets enforced by `tests/dist-subpath.test.mjs`; resolve a regression through data representation or loading rather than increasing the limits to make an addition pass.

### Review record

Record the following evidence in the species image-set README whenever a cover changes:

- Runtime WebP SHA-256, actual decoded runtime dimensions, committed `focalPoint`, and the visually measured full-subject boundary in runtime pixels. Record temporary source dimensions separately when they differ.
- Results for every required viewport and animation endpoint, plus original-resolution inspection of the temporary input and runtime WebP before discarding the input.
- The final generation or edit prompt and any known visual limitation.

### Completion checks

- Run `npm run test:carousel` after adding an animal or changing a cover, bounds, framing, animation or metadata loading. It must cover all catalogue animals, verify six retained images and canonical-cover hashes, compare recorded dimensions with the actual WebP, and check full-subject clearance and carousel interactions. Include a regression test for a newly discovered failure.
- Run `npm run test:dist-subpath` after these changes to verify the production build, image paths and JavaScript budgets. A successful build alone does not check the budgets. For a new species, run `npm test` to include profile, catalogue and taxonomy checks as well.
- Inspect representative image-panel simulations using the retained WebP and current fitting rules, including the affected animal and long tails, wings or tall silhouettes when framing changes. Follow the repository's no-browser verification rule. State that static geometry and simulations do not verify browser typography or the complete rendered page.
- Refresh acceptance after any source, bounds, framing or animation change. Report source inspection, geometry checks and visual inspection separately. Claim completion only after the relevant checks pass; identify unresolved failures and unverified visual aspects explicitly.

For a layout-only change, record shared verification in a layout report instead of rewriting every species' historical source review. For changed covers or corrected metadata, update the affected species record. Geometry checks against old bounds are not a new pixel-level audit of every animal.

This rule is a forward gate from 2026-09-03. Covers added or changed after this rule lands must pass it. Existing covers remain on the legacy baseline until someone audits or changes them; do not describe the full catalogue as compliant before that audit finishes.

- [Giant panda image set](./species/giant-panda/README.md)
- [Red panda image set](./species/red-panda/README.md)
- [Eurasian otter image set](./species/eurasian-otter/README.md)
- [Platypus image set](./species/platypus/README.md)
- [Short-beaked Echidna image set](./species/short-beaked-echidna/README.md)
- [Snow leopard image set](./species/snow-leopard/README.md)
- [Chinese mountain cat image set](./species/chinese-mountain-cat/README.md)
- [Emperor penguin image set](./species/emperor-penguin/README.md)
- [Whale shark image set](./species/whale-shark/README.md)
- [Golden poison frog image set](./species/golden-poison-frog/README.md)
- [Goliath frog image set](./species/goliath-frog/README.md)
- [Xiamen lancelet image set](./species/belchers-lancelet/README.md)
- [Sea lamprey image set](./species/sea-lamprey/README.md)
- [Arapaima image set](./species/arapaima/README.md)
- [Atlantic bluefin tuna image set](./species/atlantic-bluefin-tuna/README.md)
- [Great Blue-spotted Mudskipper image set](./species/great-blue-spotted-mudskipper/README.md)
- [Chinese Horseshoe Crab image set](./species/chinese-horseshoe-crab/README.md)
- [Axolotl image set](./species/axolotl/README.md)
- [African savanna elephant image set](./species/african-savanna-elephant/README.md)
- [Komodo dragon image set](./species/komodo-dragon/README.md)
- [Gharial image set](./species/gharial/README.md)
- [Nile crocodile image set](./species/nile-crocodile/README.md)
- [Blue whale image set](./species/blue-whale/README.md)
- [Rusty-patched bumble bee image set](./species/rusty-patched-bumble-bee/README.md)
- [Staghorn coral image set](./species/staghorn-coral/README.md)
- [Moon jellyfish image set](./species/moon-jelly/README.md)
- [Western gorilla image set](./species/western-gorilla/README.md)
- [Polar bear image set](./species/polar-bear/README.md)
- [Red kangaroo image set](./species/red-kangaroo/README.md)
- [Common bottlenose dolphin image set](./species/common-bottlenose-dolphin/README.md)
- [Yangtze Finless Porpoise image set](./species/yangtze-finless-porpoise/README.md)
- [Crested Ibis image set](./species/crested-ibis/README.md)
- [Red-crowned Crane image set](./species/red-crowned-crane/README.md)
- [Golden eagle image set](./species/golden-eagle/README.md)
- [Peregrine falcon image set](./species/peregrine-falcon/README.md)
- [Snowy owl image set](./species/snowy-owl/README.md)
- [Green peafowl image set](./species/green-peafowl/README.md)
- [Arctic Tern image set](./species/arctic-tern/README.md)
- [Common Ostrich image set](./species/african-ostrich/README.md)
- [Tuatara image set](./species/tuatara/README.md)
- [Snowy albatross image set](./species/wandering-albatross/README.md)
- [Ruby-throated hummingbird image set](./species/ruby-throated-hummingbird/README.md)
- [Green sea turtle image set](./species/green-sea-turtle/README.md)
- [Leatherback turtle image set](./species/leatherback-turtle/README.md)
- [Marine iguana image set](./species/marine-iguana/README.md)
- [Reticulated python image set](./species/reticulated-python/README.md)
- [Chinese giant salamander image set](./species/chinese-giant-salamander/README.md)
- [Monarch butterfly image set](./species/monarch-butterfly/README.md)
- [Bowed fiddler crab image set](./species/bowed-fiddler-crab/README.md)
- [Chinese pangolin image set](./species/chinese-pangolin/README.md)
- [Dugong image set](./species/dugong/README.md)
- [White rhinoceros image set](./species/white-rhinoceros/README.md)
- [Brown-throated three-toed sloth image set](./species/brown-throated-sloth/README.md)
- [Eurasian beaver image set](./species/eurasian-beaver/README.md)
- [Plateau pika image set](./species/plateau-pika/README.md)
- [Chinese rufous horseshoe bat image set](./species/chinese-rufous-horseshoe-bat/README.md)
- [Chinese sturgeon image set](./species/chinese-sturgeon/README.md)
- [West Indian Ocean coelacanth image set](./species/coelacanth/README.md)
- [Tiger image set](./species/tiger/README.md)
- [Sea otter image set](./species/sea-otter/README.md)
- [Golden snub-nosed monkey image set](./species/golden-snub-nosed-monkey/README.md)
- [Tibetan antelope image set](./species/tibetan-antelope/README.md)
- [Asian elephant image set](./species/asian-elephant/README.md)
- [Goliath Birdeater image set](./species/goliath-birdeater/README.md)
- [Chinese Mantis image set](./species/chinese-mantis/README.md)
- [Seven-spotted Ladybird image set](./species/seven-spotted-ladybird/README.md)
- [Emperor Dragonfly image set](./species/emperor-dragonfly/README.md)
- [Domestic Silkworm image set](./species/domestic-silkworm/README.md)
- [Antarctic Krill image set](./species/antarctic-krill/README.md)
- [Coconut Crab image set](./species/coconut-crab/README.md)
- [Chambered Nautilus image set](./species/chambered-nautilus/README.md)
- [Common Octopus image set](./species/common-octopus/README.md)
- [Atlantic Blue Sea Slug image set](./species/atlantic-blue-sea-slug/README.md)
- [Giant Clam image set](./species/giant-clam/README.md)
- [Portuguese Man o' War image set](./species/portuguese-man-of-war/README.md)
- [Crown-of-thorns Starfish image set](./species/crown-of-thorns-starfish/README.md)
- [Japanese Sea Cucumber image set](./species/japanese-sea-cucumber/README.md)
- [Giant Gippsland Earthworm image set](./species/giant-gippsland-earthworm/README.md)
- [Aardvark image set](./species/aardvark/README.md)
- [Common Naked Mole-rat image set](./species/naked-mole-rat/README.md)
- [Star-nosed Mole image set](./species/star-nosed-mole/README.md)
- [Kākāpō image set](./species/kakapo/README.md)
- [Hoatzin image set](./species/hoatzin/README.md)
- [Superb Lyrebird image set](./species/superb-lyrebird/README.md)
- [Oilbird image set](./species/oilbird/README.md)
- [Great Hornbill image set](./species/great-hornbill/README.md)
- [Shoebill image set](./species/shoebill/README.md)
- [Thorny Devil image set](./species/thorny-devil/README.md)
- [Texas Horned Lizard image set](./species/texas-horned-lizard/README.md)
- [Chinese Alligator image set](./species/chinese-alligator/README.md)
- [Gila Monster image set](./species/gila-monster/README.md)
- [Ringed Caecilian image set](./species/ringed-caecilian/README.md)
- [Surinam Toad image set](./species/surinam-toad/README.md)
- [Atlantic Hagfish image set](./species/atlantic-hagfish/README.md)
- [Ocellate Torpedo image set](./species/ocellate-torpedo/README.md)
- [Australian Lungfish image set](./species/australian-lungfish/README.md)
- [Atlantic Pyrosome image set](./species/atlantic-pyrosome/README.md)
- [Venus' Flower Basket image set](./species/venus-flower-basket/README.md)
- [Warty Comb Jelly image set](./species/warty-comb-jelly/README.md)
- [Japanese Planarian image set](./species/japanese-planarian/README.md)
- [C. elegans image set](./species/caenorhabditis-elegans/README.md)
- [Lingula anatina image set](./species/lingula-anatina/README.md)
- [Bugula neritina image set](./species/bugula-neritina/README.md)
- [Red-eyed Tree Frog image set](./species/red-eyed-tree-frog/README.md)
- [South American Giant Centipede image set](./species/south-american-giant-centipede/README.md)
- [African Giant Millipede image set](./species/african-giant-millipede/README.md)
- [Emperor Scorpion image set](./species/emperor-scorpion/README.md)
- [Large Water Flea image set](./species/large-water-flea/README.md)
- [Peacock Mantis Shrimp image set](./species/peacock-mantis-shrimp/README.md)
- [Seventeen-year Cicada image set](./species/seventeen-year-cicada/README.md)
- [Lion image set](./species/lion/README.md)
- [Gumboot Chiton image set](./species/gumboot-chiton/README.md)
- [Common Tusk Shell image set](./species/common-tusk-shell/README.md)
- [Giant Tube Worm image set](./species/giant-tube-worm/README.md)
- [Purple Sea Urchin image set](./species/purple-sea-urchin/README.md)
- [Common Brittlestar image set](./species/common-brittle-star/README.md)
- [Rosy Feather-star image set](./species/rosy-feather-star/README.md)
- [Aye-aye image set](./species/aye-aye/README.md)
- [Southern Three-banded Armadillo image set](./species/southern-three-banded-armadillo/README.md)
- [Sunda Colugo image set](./species/sunda-colugo/README.md)
- [Meerkat image set](./species/meerkat/README.md)
- [Common Raccoon image set](./species/common-raccoon/README.md)

- [Common Pillbug image set](./species/common-pillbug/README.md)

- [Garden Snail image set](./species/garden-snail/README.md)

- [Spider-tailed Horned Viper image set](./species/spider-tailed-horned-viper/README.md)

## Image compression workflow

Source PNGs are compressed in place with TinyPNG, then converted to the runtime WebP assets. Both steps need a one-time setup: copy `.env.example` to `.env` and fill in `TINYPNG_API_KEY` (free tier: 500 images/month).

```bash
npm run compress        # tinify-compress source PNGs in place
npm run convert:webp    # regenerate public/images WebP from the sources (cwebp -q 82 -m 6 -mt)
```

Both scripts accept explicit file paths, so a newly added image set can be processed on its own:

```bash
npm run compress src/assets/source/species/<slug>/*.png
npm run convert:webp src/assets/source/species/<slug>/*-source.png
```

Compress new sources with `npm run compress` before their first commit; git history keeps every earlier revision of already-committed files.

If TinyPNG returns HTTP 429, compress only the new source files with the local palette fallback, record the fallback in the species README, inspect the result at original resolution, and rerun the WebP conversion:

```bash
pngquant --quality=80-95 --speed 1 --force --strip --ext .png \
  src/assets/source/species/<slug>/*-source.png
npm run convert:webp src/assets/source/species/<slug>/*-source.png
```

## Landing-page hero

The original snow-leopard landing-page hero is an original project asset generated with Codex's built-in image generation tool, then converted to WebP for the runtime site. The page now chooses its live hero from the first featured species with a cover image, while this asset remains the fallback hero. The snow leopard profile uses its dedicated 3:2 image set linked above.

- Editable source: `fauna-hero-source.png`
- Runtime asset: `public/images/fauna-hero.webp`
- Runtime dimensions: 1774 × 887

## Final prompt

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas landing-page hero
Primary request: an editorial wildlife photograph of a snow leopard standing quietly on a high Himalayan rock ridge, for a modern digital biodiversity atlas
Scene/backdrop: windswept pale granite, sparse alpine grasses, distant layered mountains dissolving into cool morning mist
Subject: one anatomically accurate adult snow leopard, natural alert posture, detailed winter fur and long tail
Style/medium: photorealistic natural-history editorial photography, understated museum-publication quality
Composition/framing: cinematic wide landscape, snow leopard positioned in the right third, generous calm negative space on the left for website typography, subtle depth
Lighting/mood: quiet blue-gray dawn with one warm shaft of low sunlight, contemplative and scientifically grounded
Color palette: mineral gray, fog blue, muted sage, restrained warm ochre
Materials/textures: realistic fur, weathered stone, fine atmospheric grain
Constraints: no text, no logos, no watermark, no border, no fantasy elements, no collage, no other animals, no exaggerated colors
Avoid: stock-photo gloss, oversaturation, centered subject, aggressive pose
```

- [Himalayan marmot image set](./species/himalayan-marmot/README.md)

- [Ocellaris Clownfish image set](./species/ocellaris-clownfish/README.md)

- [Hairy Frog image set](./species/hairy-frog/README.md)

- [Purple Frog image set](./species/purple-frog/README.md)

- [Southern Darwin’s Frog image set](./species/darwins-frog/README.md)

- [Pacific Barreleye image set](./species/barreleye/README.md)

- [Leafy Seadragon image set](./species/leafy-seadragon/README.md)

- [Electric Eel image set](./species/electric-eel/README.md)

- [White-spotted Pufferfish image set](./species/white-spotted-pufferfish/README.md)

- [Banded Archerfish image set](./species/banded-archerfish/README.md)

- [Plains Zebra image set](./species/plains-zebra/README.md)

- [Totoro Velvet Worm image set](./species/totoro-velvet-worm/README.md)

- [Ramazzottius varieornatus image set](./species/ramazzottius-varieornatus/README.md)

- [Trichoplax adhaerens image set](./species/trichoplax-adhaerens/README.md)

- [Bootlace Worm image set](./species/bootlace-worm/README.md)
- [Tongue-eating Louse image set](./species/tongue-eating-louse/README.md)
- [Giant Vinegaroon image set](./species/giant-vinegaroon/README.md)

- [Sacculina carcini image set](./species/sacculina-carcini/README.md)
- [Scaly-foot Snail image set](./species/scaly-foot-snail/README.md)

- [Vampire Squid image set](./species/vampire-squid/README.md)
- [Australian Box Jellyfish image set](./species/australian-box-jellyfish/README.md)
- [Bobbit Worm image set](./species/bobbit-worm/README.md)
- [Reticulated Giraffe image set](./species/reticulated-giraffe/README.md)
- [Common Hippopotamus image set](./species/hippopotamus/README.md)

- [Cheetah image set](./species/cheetah/README.md)
- [Ring-tailed Lemur image set](./species/ring-tailed-lemur/README.md)
- [Greater Flamingo image set](./species/greater-flamingo/README.md)
- [Budgerigar image set](./species/budgerigar/README.md)
- [Toco Toucan image set](./species/toco-toucan/README.md)

- [Common Kingfisher image set](./species/common-kingfisher/README.md)
- [Mandarin Duck image set](./species/mandarin-duck/README.md)
- [Barn Swallow image set](./species/barn-swallow/README.md)
- [Green Iguana image set](./species/green-iguana/README.md)
- [Central Bearded Dragon image set](./species/central-bearded-dragon/README.md)

- [Veiled Chameleon image set](./species/veiled-chameleon/README.md)
- [Oriental Fire-bellied Toad image set](./species/oriental-fire-bellied-toad/README.md)
- [Goldfish image set](./species/goldfish/README.md)
- [Siamese Fighting Fish image set](./species/siamese-fighting-fish/README.md)
- [Great White Shark image set](./species/great-white-shark/README.md)

- [Eastern Honey Bee image set](./species/eastern-honey-bee/README.md)

- [Two-spotted Cricket image set](./species/two-spotted-cricket/README.md)

- [Japanese Rhinoceros Beetle image set](./species/japanese-rhinoceros-beetle/README.md)

- [Orange Oakleaf image set](./species/orange-oakleaf/README.md)

- [Heike Firefly image set](./species/heike-firefly/README.md)

- [European Rabbit image set](./species/european-rabbit/README.md)

- [Eurasian Red Squirrel image set](./species/eurasian-red-squirrel/README.md)

- [Mallard image set](./species/mallard/README.md)

- [Alpaca image set](./species/alpaca/README.md)

- [Golden Hamster image set](./species/golden-hamster/README.md)

- [Koala image set](./species/koala/README.md)

- [Capybara image set](./species/capybara/README.md)

- [Western European Hedgehog image set](./species/european-hedgehog/README.md)

- [Little Blue Penguin image set](./species/little-blue-penguin/README.md)

- [Aldabra Giant Tortoise image set](./species/aldabra-giant-tortoise/README.md)

- [Yellow Seahorse image set](./species/yellow-seahorse/README.md)

- [Common Starfish image set](./species/common-starfish/README.md)
- [Walrus image set](./species/walrus/README.md)
- [Great Spotted Woodpecker image set](./species/great-spotted-woodpecker/README.md)
- [Leafcutter Ant image set](./species/leafcutter-ant/README.md)
- [Guinea Pig image set](./species/guinea-pig/README.md)

- [Fennec Fox image set](./species/fennec-fox/README.md)
- [Harbor Seal image set](./species/harbor-seal/README.md)
- [Beluga Whale image set](./species/beluga-whale/README.md)
- [Killer Whale image set](./species/killer-whale/README.md)
- [Atlantic Puffin image set](./species/atlantic-puffin/README.md)

- [Scarlet Macaw image set](./species/scarlet-macaw/README.md)
- [Guppy image set](./species/guppy/README.md)
- [Blue Tang image set](./species/blue-tang/README.md)
- [Chinese Mitten Crab image set](./species/chinese-mitten-crab/README.md)
- [Common Cuttlefish image set](./species/common-cuttlefish/README.md)
- [Fire Salamander image set](./species/fire-salamander/README.md)
- [Malayan Tapir image set](./species/malayan-tapir/README.md)
- [Brown Bear image set](./species/brown-bear/README.md)
- [Eurasian Magpie image set](./species/eurasian-magpie/README.md)
- [Long-tailed Chinchilla image set](./species/long-tailed-chinchilla/README.md)

- [Bare-nosed Wombat image set](./species/common-wombat/README.md)
- [Quokka image set](./species/quokka/README.md)
- [Reindeer image set](./species/reindeer/README.md)
- [Red Fox image set](./species/red-fox/README.md)
- [California Sea Lion image set](./species/california-sea-lion/README.md)

- [Humpback Whale image set](./species/humpback-whale/README.md)
- [Narwhal image set](./species/narwhal/README.md)
- [Okapi image set](./species/okapi/README.md)
- [American Bison image set](./species/american-bison/README.md)
- [Saiga image set](./species/saiga/README.md)
- [Chimpanzee image set](./species/chimpanzee/README.md)
- [Bornean Orangutan image set](./species/bornean-orangutan/README.md)
- [Cockatiel image set](./species/cockatiel/README.md)
- [Mute Swan image set](./species/mute-swan/README.md)
- [Indian Peafowl image set](./species/indian-peafowl/README.md)

- [Sulphur-crested Cockatoo image set](./species/sulphur-crested-cockatoo/README.md)
- [Eurasian Hoopoe image set](./species/eurasian-hoopoe/README.md)
- [Southern Cassowary image set](./species/southern-cassowary/README.md)
- [Eurasian Eagle-Owl image set](./species/eurasian-eagle-owl/README.md)
- [White Stork image set](./species/white-stork/README.md)

- [Pond Slider image set](./species/pond-slider/README.md)
- [Common Leopard Gecko image set](./species/leopard-gecko/README.md)
- [Frilled Lizard image set](./species/frilled-lizard/README.md)
- [Corn Snake image set](./species/corn-snake/README.md)
- [White's Tree Frog image set](./species/whites-tree-frog/README.md)

- [Oriental Fire-bellied Newt image set](./species/oriental-fire-bellied-newt/README.md)
- [Ocean Sunfish image set](./species/ocean-sunfish/README.md)
- [Largetooth Sawfish image set](./species/largetooth-sawfish/README.md)
- [Menelaus Blue Morpho image set](./species/menelaus-blue-morpho/README.md)
- [European Stag Beetle image set](./species/european-stag-beetle/README.md)

- [American Lobster image set](./species/american-lobster/README.md)
- [Giant Peacock Moth image set](./species/giant-peacock-moth/README.md)
- [Striped Skunk image set](./species/striped-skunk/README.md)
- [Caracal image set](./species/caracal/README.md)
- [Leopard image set](./species/leopard/README.md)

- [Chinese Tree Frog image set](./species/chinese-tree-frog/README.md)
- [American Bullfrog image set](./species/american-bullfrog/README.md)
- [Atlantic Salmon image set](./species/atlantic-salmon/README.md)
- [Green Tree Python image set](./species/green-tree-python/README.md)
- [Arctic Fox image set](./species/arctic-fox/README.md)

- [American Black Bear image set](./species/american-black-bear/README.md)
- [Sun Bear image set](./species/sun-bear/README.md)
- [Jaguar image set](./species/jaguar/README.md)
- [Puma image set](./species/puma/README.md)
- [Serval image set](./species/serval/README.md)

- [Eurasian Lynx image set](./species/eurasian-lynx/README.md)
- [Gray Wolf image set](./species/gray-wolf/README.md)
- [African Wild Dog image set](./species/african-wild-dog/README.md)
- [Spotted Hyena image set](./species/spotted-hyena/README.md)
- [Honey Badger image set](./species/honey-badger/README.md)

- [Wolverine image set](./species/wolverine/README.md)
- [European Badger image set](./species/european-badger/README.md)
- [South American Coati image set](./species/south-american-coati/README.md)
- [Sperm Whale image set](./species/sperm-whale/README.md)
- [Pygmy Hippopotamus image set](./species/pygmy-hippopotamus/README.md)

- [Black Rhinoceros image set](./species/black-rhinoceros/README.md)
- [King Penguin image set](./species/king-penguin/README.md)
- [Adélie Penguin image set](./species/adelie-penguin/README.md)
- [Gentoo Penguin image set](./species/gentoo-penguin/README.md)
- [African Penguin image set](./species/african-penguin/README.md)

- [Emu image set](./species/emu/README.md)
- [Greater Rhea image set](./species/greater-rhea/README.md)
- [African Grey Parrot image set](./species/african-grey-parrot/README.md)
- [Blue-and-yellow Macaw image set](./species/blue-and-yellow-macaw/README.md)
- [Rosy-faced Lovebird image set](./species/rosy-faced-lovebird/README.md)

- [Laughing Kookaburra image set](./species/laughing-kookaburra/README.md)
- [European Bee-eater image set](./species/european-bee-eater/README.md)
- [Toucan Barbet image set](./species/toucan-barbet/README.md)
- [Common Raven image set](./species/common-raven/README.md)
- [European Robin image set](./species/european-robin/README.md)

- [Eurasian Blue Tit image set](./species/blue-tit/README.md)
- [Australian Zebra Finch image set](./species/zebra-finch/README.md)
- [Bald Eagle image set](./species/bald-eagle/README.md)
- [Black Swan image set](./species/black-swan/README.md)
- [American Alligator image set](./species/american-alligator/README.md)

- [Saltwater Crocodile image set](./species/saltwater-crocodile/README.md)
- [Spectacled Caiman image set](./species/spectacled-caiman/README.md)
- [Common Snapping Turtle image set](./species/common-snapping-turtle/README.md)
- [Alligator Snapping Turtle image set](./species/alligator-snapping-turtle/README.md)
- [Leopard Tortoise image set](./species/leopard-tortoise/README.md)

- [African Spurred Tortoise image set](./species/sulcata-tortoise/README.md)

- [Hermann's Tortoise image set](./species/hermanns-tortoise/README.md)

- [Hawksbill Turtle image set](./species/hawksbill-turtle/README.md)

- [Loggerhead Turtle image set](./species/loggerhead-turtle/README.md)

- [Ball Python image set](./species/ball-python/README.md)

- [Panther Chameleon image set](./species/panther-chameleon/README.md)
- [Common Frog image set](./species/common-frog/README.md)
- [European Tree Frog image set](./species/european-tree-frog/README.md)
- [Strawberry Poison Frog image set](./species/strawberry-poison-frog/README.md)
- [Dyeing Poison Frog image set](./species/dyeing-poison-frog/README.md)

- [African Clawed Frog image set](./species/african-clawed-frog/README.md)
- [Basking Shark image set](./species/basking-shark/README.md)
- [Zebra Shark image set](./species/zebra-shark/README.md)
- [Blue Shark image set](./species/blue-shark/README.md)
- [Rainbow Trout image set](./species/rainbow-trout/README.md)

- [zebrafish image set](./species/zebrafish/README.md)
- [neon-tetra image set](./species/neon-tetra/README.md)
- [blue-green-chromis image set](./species/blue-green-chromis/README.md)
- [chinese-windmill image set](./species/chinese-windmill/README.md)
- [hercules-beetle image set](./species/hercules-beetle/README.md)

- [Giant Anteater image set](./species/giant-anteater/README.md)
- [Maned Wolf image set](./species/maned-wolf/README.md)
- [Secretarybird image set](./species/secretary-bird/README.md)
- [Eurasian Spoonbill image set](./species/eurasian-spoonbill/README.md)
- [Pig-nosed Turtle image set](./species/pig-nosed-turtle/README.md)
- [Tomato Frog image set](./species/tomato-frog/README.md)
- [Spotted Garden Eel image set](./species/spotted-garden-eel/README.md)
- [Indian Stick Insect image set](./species/indian-stick-insect/README.md)
- [California Sea Hare image set](./species/california-sea-hare/README.md)
- [Great Scallop image set](./species/great-scallop/README.md)

- [Binturong image set](./species/binturong/README.md)
- [Fossa image set](./species/fossa/README.md)
- [Black-winged Stilt image set](./species/black-winged-stilt/README.md)
- [Pied Avocet image set](./species/pied-avocet/README.md)
- [Pancake Tortoise image set](./species/pancake-tortoise/README.md)
- [Common Midwife Toad image set](./species/common-midwife-toad/README.md)
- [Yellow Boxfish image set](./species/yellow-boxfish/README.md)
- [Orchid Mantis image set](./species/orchid-mantis/README.md)
- [Blue Mussel image set](./species/blue-mussel/README.md)
- [Beadlet Anemone image set](./species/beadlet-anemone/README.md)

- [Proboscis Monkey image set](./species/proboscis-monkey/README.md)
- [Mandrill image set](./species/mandrill/README.md)
- [Great White Pelican image set](./species/great-white-pelican/README.md)
- [Blue-footed Booby image set](./species/blue-footed-booby/README.md)
- [Tokay Gecko image set](./species/tokay-gecko/README.md)
- [Alpine Newt image set](./species/alpine-newt/README.md)
- [Long-spined Porcupinefish image set](./species/long-spined-porcupinefish/README.md)
- [Glasswing Butterfly image set](./species/glasswing-butterfly/README.md)
- [Leopard Slug image set](./species/leopard-slug/README.md)
- [Orange Sea Pen image set](./species/orange-sea-pen/README.md)

- [Lar Gibbon image set](./species/lar-gibbon/README.md)
- [Magnificent Frigatebird image set](./species/magnificent-frigatebird/README.md)
- [Sandfish Skink image set](./species/sandfish-skink/README.md)
- [Great Hammerhead image set](./species/great-hammerhead/README.md)
- [Atlas Moth image set](./species/atlas-moth/README.md)

- [Mantled Guereza image set](./species/mantled-guereza/README.md)
- [Wattled Jacana image set](./species/wattled-jacana/README.md)
- [Fleischmann’s Glass Frog image set](./species/fleischmanns-glass-frog/README.md)
- [Spiny Leaf Insect image set](./species/spiny-leaf-insect/README.md)
- [Willan’s Chromodoris image set](./species/willans-chromodoris/README.md)

- [Golden Lion Tamarin image set](./species/golden-lion-tamarin/README.md)
- [Tasmanian Devil image set](./species/tasmanian-devil/README.md)
- [Village Weaver image set](./species/village-weaver/README.md)
- [Satin Bowerbird image set](./species/satin-bowerbird/README.md)
- [Amazon Mata Mata image set](./species/amazon-mata-mata/README.md)
- [Three-toed Amphiuma image set](./species/three-toed-amphiuma/README.md)
- [Giant Manta Ray image set](./species/giant-manta-ray/README.md)
- [Hummingbird Hawk-moth image set](./species/hummingbird-hawk-moth/README.md)
- [Bigfin Reef Squid image set](./species/bigfin-reef-squid/README.md)
- [Greater Argonaut image set](./species/greater-argonaut/README.md)

- [Numbat image set](./species/numbat/README.md)
- [Burrowing Owl image set](./species/burrowing-owl/README.md)
- [Satanic Leaf-tailed Gecko image set](./species/satanic-leaf-tailed-gecko/README.md)
- [Red Lionfish image set](./species/red-lionfish/README.md)
- [Red Mason Bee image set](./species/red-mason-bee/README.md)

- [Matschie’s Tree Kangaroo image set](./species/matschies-tree-kangaroo/README.md)
- [Cape Porcupine image set](./species/cape-porcupine/README.md)
- [Greater Roadrunner image set](./species/greater-roadrunner/README.md)
- [Sunbittern image set](./species/sunbittern/README.md)
- [Yellow-lipped Sea Krait image set](./species/yellow-lipped-sea-krait/README.md)
- [Flying Gurnard image set](./species/flying-gurnard/README.md)
- [Chinese Trumpetfish image set](./species/chinese-trumpetfish/README.md)
- [Violet Carpenter Bee image set](./species/violet-carpenter-bee/README.md)
- [Common Hermit Crab image set](./species/common-hermit-crab/README.md)
- [Pacific Sea Nettle image set](./species/pacific-sea-nettle/README.md)

- [Muskox image set](./species/muskox/README.md)
- [Dromedary image set](./species/dromedary/README.md)
- [Magnificent Bird-of-Paradise image set](./species/magnificent-bird-of-paradise/README.md)
- [North Island Brown Kiwi image set](./species/north-island-brown-kiwi/README.md)
- [Common Flying Dragon image set](./species/common-flying-dragon/README.md)
- [Common Thresher Shark image set](./species/common-thresher-shark/README.md)
- [Sacred Scarab image set](./species/sacred-scarab/README.md)
- [Common Pond Skater image set](./species/common-pond-skater/README.md)
- [Christmas Tree Worm image set](./species/christmas-tree-worm/README.md)
- [Bath Sponge image set](./species/bath-sponge/README.md)

- [South African Springhare image set](./species/south-african-springhare/README.md)
- [Gerenuk image set](./species/gerenuk/README.md)
- [Common Basilisk image set](./species/common-basilisk/README.md)
- [Brahminy Blindsnake image set](./species/brahminy-blind-snake/README.md)
- [Giant Frogfish image set](./species/giant-frogfish/README.md)
- [Mandarinfish image set](./species/mandarinfish/README.md)
- [Great Diving Beetle image set](./species/great-diving-beetle/README.md)
- [European Earwig image set](./species/european-earwig/README.md)
- [Pacific Cleaner Shrimp image set](./species/scarlet-cleaner-shrimp/README.md)
- [King Ragworm image set](./species/king-ragworm/README.md)

- [Sugar Glider image set](./species/sugar-glider/README.md)
- [Indian Flying Fox image set](./species/indian-flying-fox/README.md)
- [Moose image set](./species/moose/README.md)
- [Tropical Two-wing Flyingfish image set](./species/tropical-two-wing-flyingfish/README.md)
- [Live Sharksucker image set](./species/sharksucker/README.md)
- [Greater Pipefish image set](./species/greater-pipefish/README.md)
- [Giant Golden Orb Weaver image set](./species/giant-golden-orb-weaver/README.md)
- [Japanese Spider Crab image set](./species/japanese-spider-crab/README.md)
- [Rosy Sea Biscuit image set](./species/rosy-sea-biscuit/README.md)
- [Snake Sea Cucumber image set](./species/snake-sea-cucumber/README.md)

- [European Plaice image set](./species/european-plaice/README.md)
- [Whirligig Beetle image set](./species/whirligig-beetle/README.md)
- [Peacock Spider image set](./species/peacock-spider/README.md)
- [Common Goose Barnacle image set](./species/goose-barnacle/README.md)
- [European Tadpole Shrimp image set](./species/tadpole-shrimp/README.md)

- [Kinkajou image set](./species/kinkajou/README.md)
- [Bat-eared Fox image set](./species/bat-eared-fox/README.md)
- [Eurasian Tree Sparrow image set](./species/eurasian-tree-sparrow/README.md)
- [Light-vented Bulbul image set](./species/light-vented-bulbul/README.md)
- [Crested Gecko image set](./species/crested-gecko/README.md)
- [Vietnamese Mossy Frog image set](./species/vietnamese-mossy-frog/README.md)
- [Longhorn Cowfish image set](./species/longhorn-cowfish/README.md)
- [Old World Swallowtail image set](./species/old-world-swallowtail/README.md)
- [Giant Pacific Octopus image set](./species/giant-pacific-octopus/README.md)
- [Brown Hydra image set](./species/brown-hydra/README.md)

- [Spotted Linsang image set](./species/spotted-linsang/README.md)

- [Alleghanian Spotted Skunk image set](./species/eastern-spotted-skunk/README.md)

- [Pallas's Cat image set](./species/pallas-cat/README.md)

- [Sand Cat image set](./species/sand-cat/README.md)

- [Hoffmann's Two-toed Sloth image set](./species/hoffmanns-two-toed-sloth/README.md)

- [Southern Tamandua image set](./species/southern-tamandua/README.md)
- [Giant Armadillo image set](./species/giant-armadillo/README.md)
- [Common Silky Anteater image set](./species/silky-anteater/README.md)
- [Lowland Streaked Tenrec image set](./species/lowland-streaked-tenrec/README.md)
- [Karoo Round-eared Sengi image set](./species/short-eared-sengi/README.md)

- [长耳跳鼠 image set](./species/long-eared-jerboa/README.md)
- [榛睡鼠 image set](./species/hazel-dormouse/README.md)
- [北美豪猪 image set](./species/north-american-porcupine/README.md)
- [黑尾草原犬鼠 image set](./species/black-tailed-prairie-dog/README.md)
- [冠毛豪猪 image set](./species/crested-porcupine/README.md)

- [非洲岩蹄兔 image set](./species/rock-hyrax/README.md)
- [捻角山羊 image set](./species/markhor/README.md)
- [冠海豹 image set](./species/hooded-seal/README.md)
- [乌鸫 image set](./species/common-blackbird/README.md)
- [珠颈斑鸠 image set](./species/spotted-dove/README.md)

- [大山雀 image set](./species/great-tit/README.md)
- [银喉长尾山雀 image set](./species/long-tailed-tit/README.md)
- [普通䴓 image set](./species/eurasian-nuthatch/README.md)
- [凤头麦鸡 image set](./species/northern-lapwing/README.md)
- [蛎鹬 image set](./species/eurasian-oystercatcher/README.md)

- [黑剪嘴鸥 image set](./species/black-skimmer/README.md)
- [凤头䴙䴘 image set](./species/great-crested-grebe/README.md)
- [凤冠鸠 image set](./species/victoria-crowned-pigeon/README.md)
- [紫胸佛法僧 image set](./species/lilac-breasted-roller/README.md)
- [丽色黄喉蜂虎 image set](./species/northern-carmine-bee-eater/README.md)

- [长尾巧织雀 image set](./species/long-tailed-widowbird/README.md)

- [安第斯动冠伞鸟 image set](./species/andean-cock-of-the-rock/README.md)

- [缨尾蜂鸟 image set](./species/red-billed-streamertail/README.md)

- [吸蜜鹦鹉 image set](./species/rainbow-lorikeet/README.md)

- [啄羊鹦鹉 image set](./species/kea/README.md)

- [普通缝叶莺 image set](./species/common-tailorbird/README.md)
- [两栖突眼蜥 image set](./species/red-eyed-crocodile-skink/README.md)
- [绿安乐蜥 image set](./species/green-anole/README.md)
- [蓝舌石龙子 image set](./species/eastern-blue-tongued-skink/README.md)
- [松果蜥 image set](./species/shingleback/README.md)

- [犰狳环尾蜥 image set](./species/armadillo-girdled-lizard/README.md)
- [翡翠树蚺 image set](./species/emerald-tree-boa/README.md)
- [触须蛇 image set](./species/tentacled-snake/README.md)
- [菱斑龟 image set](./species/diamondback-terrapin/README.md)
- [长颈龟 image set](./species/eastern-long-necked-turtle/README.md)

- [华莱士飞蛙 image set](./species/wallaces-flying-frog/README.md)
- [苏里南角蛙 image set](./species/surinam-horned-frog/README.md)
- [沙漠雨蛙 image set](./species/desert-rain-frog/README.md)
- [非洲牛箱头蛙 image set](./species/african-bullfrog/README.md)
- [囊蛙 image set](./species/riobamba-marsupial-frog/README.md)

- [洞螈 image set](./species/olm/README.md)
- [斑点钝口螈 image set](./species/spotted-salamander/README.md)
- [皇冠海马 image set](./species/bargibants-pygmy-seahorse/README.md)
- [条纹躄鱼 image set](./species/striated-frogfish/README.md)
- [东方豹鲂鮄 image set](./species/oriental-flying-gurnard/README.md)

- [条纹虾鱼 image set](./species/jointed-razorfish/README.md)
- [矛尾翻车鲀 image set](./species/sharptail-sunfish/README.md)
- [大斑躄鱼 image set](./species/warty-frogfish/README.md)
- [波纹唇鱼 image set](./species/humphead-wrasse/README.md)
- [黄头后颌鰧 image set](./species/yellowhead-jawfish/README.md)

- [双带双锯鱼 image set](./species/clarks-anemonefish/README.md)
- [裂唇鱼 image set](./species/bluestreak-cleaner-wrasse/README.md)
- [霓虹虾虎鱼 image set](./species/neon-goby/README.md)
- [红腹食人鱼 image set](./species/red-bellied-piranha/README.md)
- [玻璃鲶 image set](./species/glass-catfish/README.md)

- [三刺鱼 image set](./species/three-spined-stickleback/README.md)
- [月蛾 image set](./species/luna-moth/README.md)
- [大透翅天蛾 image set](./species/coffee-bee-hawk-moth/README.md)
- [大白粉蝶 image set](./species/large-white/README.md)
- [玫瑰枫蛾 image set](./species/rosy-maple-moth/README.md)

- [大丽花螳螂 image set](./species/spiny-flower-mantis/README.md)
- [长颈卷叶象 image set](./species/giraffe-weevil/README.md)
- [金龟甲 image set](./species/golden-tortoise-beetle/README.md)
- [大花金龟 image set](./species/goliath-beetle/README.md)
- [澳洲织叶蚁 image set](./species/asian-weaver-ant/README.md)

- [草蛉 image set](./species/common-green-lacewing/README.md)
- [蚁蛉 image set](./species/common-antlion/README.md)
- [美洲剑尾鲎 image set](./species/atlantic-horseshoe-crab/README.md)
- [拳击蟹 image set](./species/pom-pom-crab/README.md)
- [箭蟹 image set](./species/yellowline-arrow-crab/README.md)

- [跳蛛 image set](./species/regal-jumping-spider/README.md)
- [盐水丰年虫 image set](./species/brine-shrimp/README.md)
- [草莓鱿鱼 image set](./species/strawberry-squid/README.md)
- [裸海蝶 image set](./species/sea-angel/README.md)
- [叶羊海天牛 image set](./species/leaf-sheep/README.md)

- [心形鸟蛤 image set](./species/heart-cockle/README.md)

- [紫螺 image set](./species/violet-snail/README.md)

- [仙后水母 image set](./species/upside-down-jellyfish/README.md)

- [血腹栉水母 image set](./species/bloody-belly-comb-jelly/README.md)

- [萼花臂尾轮虫 image set](./species/brachionus-calyciflorus/README.md)

- [双足蚓蜥 image set](./species/mexican-mole-lizard/README.md)
- [大鳗螈 image set](./species/greater-siren/README.md)
- [斑点银鲛 image set](./species/spotted-ratfish/README.md)
- [强壮海鞘 image set](./species/robust-sea-squirt/README.md)
- [海萤 image set](./species/sea-firefly/README.md)

- [海地沟齿鼩 image set](./species/hispaniolan-solenodon/README.md)
- [好望角金毛鼹 image set](./species/cape-golden-mole/README.md)
- [塞拉亚跗猴 image set](./species/selayar-tarsier/README.md)
- [普通吸血蝠 image set](./species/common-vampire-bat/README.md)
- [猪鼻蝠 image set](./species/kittis-hog-nosed-bat/README.md)
- [大兔唇蝠 image set](./species/greater-bulldog-bat/README.md)
- [巨獭鼩 image set](./species/giant-otter-shrew/README.md)
- [中南大羚 image set](./species/saola/README.md)
- [草原黏鼠 image set](./species/plains-viscacha/README.md)
- [东部长吻针鼹 image set](./species/eastern-long-beaked-echidna/README.md)
- [美洲蛇鹈 image set](./species/anhinga/README.md)
- [普通潜鸟 image set](./species/common-loon/README.md)
- [暴风海燕 image set](./species/european-storm-petrel/README.md)
- [普通鹈燕 image set](./species/common-diving-petrel/README.md)
- [橙脚冢雉 image set](./species/orange-footed-scrubfowl/README.md)

- [大响蜜鴷 image set](./species/greater-honeyguide/README.md)
- [红交嘴雀 image set](./species/red-crossbill/README.md)
- [丘鹬 image set](./species/eurasian-woodcock/README.md)
- [大林鸱 image set](./species/great-potoo/README.md)
- [茶色蟆口鸱 image set](./species/tawny-frogmouth/README.md)
- [瘰鳞蛇 image set](./species/javan-file-snake/README.md)
- [天堂金花蛇 image set](./species/paradise-flying-snake/README.md)
- [卵食蛇 image set](./species/common-egg-eater/README.md)
- [鼋 image set](./species/cantors-giant-softshell-turtle/README.md)
- [平胸龟 image set](./species/big-headed-turtle/README.md)

- [黄斑夜蜥 image set](./species/yellow-spotted-night-lizard/README.md)
- [菲律宾帆蜥 image set](./species/philippine-sailfin-lizard/README.md)
- [斑泥螈 image set](./species/common-mudpuppy/README.md)
- [红背无肺螈 image set](./species/eastern-red-backed-salamander/README.md)
- [尾蟾 image set](./species/coastal-tailed-frog/README.md)

- [奇异多指节蟾 image set](./species/paradoxical-frog/README.md)
- [锡兰鱼螈 image set](./species/ceylon-caecilian/README.md)
- [科基蛙 image set](./species/common-coqui/README.md)
- [皱鳃鲨 image set](./species/frilled-shark/README.md)
- [欧氏尖吻鲨 image set](./species/goblin-shark/README.md)

- [四眼鱼 image set](./species/largescale-foureyes/README.md)
- [南美肺鱼 image set](./species/south-american-lungfish/README.md)
- [大西洋弹涂鱼 image set](./species/atlantic-mudskipper/README.md)
- [黑鳍冰鱼 image set](./species/blackfin-icefish/README.md)
- [月鱼 image set](./species/north-atlantic-opah/README.md)

- [黑叉齿龙鱼 image set](./species/black-swallower/README.md)
- [达尔文蝙蝠鱼 image set](./species/red-lipped-batfish/README.md)
- [泥鳅 image set](./species/pond-loach/README.md)
- [斑点雀鳝 image set](./species/spotted-gar/README.md)
- [塞内加尔多鳍鱼 image set](./species/senegal-bichir/README.md)

- [巨型尾海鞘 image set](./species/blue-tailed-giant-larvacean/README.md)
- [丹麦蜉蝣 image set](./species/green-drake-mayfly/README.md)
- [加州大石蝇 image set](./species/giant-salmonfly/README.md)
- [月斑石蛾 image set](./species/lunated-caddisfly/README.md)
- [普通蝎蛉 image set](./species/common-scorpionfly/README.md)

- [蛇蛉 image set](./species/snakefly/README.md)
- [捻翅虫 image set](./species/mengenilla-chobauti/README.md)
- [欧洲蝼蛄 image set](./species/european-mole-cricket/README.md)
- [喷炮步甲 image set](./species/bombardier-beetle/README.md)
- [豌豆蚜 image set](./species/pea-aphid/README.md)

- [猫栉首蚤 image set](./species/cat-flea/README.md)
- [苜蓿跳虫 image set](./species/lucerne-springtail/README.md)
- [原尾虫 image set](./species/eosentomon-transitorium/README.md)
- [双尾虫 image set](./species/campodea-staphylinus/README.md)
- [北方哲水蚤 image set](./species/calanus-finmarchicus/README.md)

- [二斑叶螨 image set](./species/two-spotted-spider-mite/README.md)
- [海蜘蛛 image set](./species/gracile-sea-spider/README.md)
- [无鞭蝎 image set](./species/damon-diadema/README.md)
- [蚰蜒 image set](./species/house-centipede/README.md)
- [球马陆 image set](./species/black-pill-millipede/README.md)

- [新碟贝 image set](./species/neopilina-galatheae/README.md)
- [毛皮贝（暂用中文标签） image set](./species/chaetoderma-nitidulum/README.md)
- [盘鲍 image set](./species/disk-abalone/README.md)
- [船蛆 image set](./species/naval-shipworm/README.md)
- [地纹芋螺 image set](./species/geography-cone/README.md)

- [星状海葵 image set](./species/starlet-sea-anemone/README.md)

- [耳形十字水母 image set](./species/kaleidoscope-jellyfish/README.md)

- [诱饵管水母 image set](./species/angler-siphonophore/README.md)

- [卵形瓜水母 image set](./species/ovate-comb-jelly/README.md)

- [竖琴海绵 image set](./species/harp-sponge/README.md)

- [湖沼海绵 image set](./species/freshwater-sponge/README.md)

- [弗氏食骨虫 image set](./species/frankpress-bone-worm/README.md)

- [绿螠 image set](./species/green-spoon-worm/README.md)

- [裸体方格星虫 image set](./species/naked-peanut-worm/README.md)

- [蛇发篮海星 image set](./species/gorgons-head-basket-star/README.md)

- [游泳海参 image set](./species/swimming-sea-cucumber/README.md)

- [科瓦列夫斯基柱头虫 image set](./species/kowalevsky-acorn-worm/README.md)

- [头翼箭虫 image set](./species/benthic-arrow-worm/README.md)

- [动吻虫 image set](./species/dujardin-mud-dragon/README.md)

- [铠甲虫 image set](./species/mystic-loriciferan/README.md)

- [鳃曳虫 image set](./species/priapulus-caudatus/README.md)
- [鳞皮腹毛虫 image set](./species/scaled-gastrotrich/README.md)
- [颚口虫 image set](./species/paradox-jaw-worm/README.md)
- [微颚动物 image set](./species/maersk-micrognathozoan/README.md)
- [潘多拉共生虫 image set](./species/pandora-symbion/README.md)
- [垂头海索虫 image set](./species/nodding-entoproct/README.md)
- [南方帚虫 image set](./species/southern-horseshoe-worm/README.md)
- [水生铁线虫 image set](./species/aquatic-horsehair-worm/README.md)
- [曼氏血吸虫 image set](./species/manson-blood-fluke/README.md)
- [蛭态轮虫 image set](./species/wandering-bdelloid/README.md)

- [家猫 image set](./species/domestic-cat/README.md)
- [家马 image set](./species/domestic-horse/README.md)
- [家驴 image set](./species/domestic-donkey/README.md)
- [家牛 image set](./species/domestic-cattle/README.md)
- [绵羊 image set](./species/domestic-sheep/README.md)

- [domestic-goat image set](./species/domestic-goat/README.md)
- [domestic-pig image set](./species/domestic-pig/README.md)
- [domestic-chicken image set](./species/domestic-chicken/README.md)
- [rock-pigeon image set](./species/rock-pigeon/README.md)
- [little-egret image set](./species/little-egret/README.md)

- [多疣壁虎 image set](./species/japanese-gecko/README.md)
- [菜粉蝶 image set](./species/small-white/README.md)
- [夜鹭 image set](./species/black-crowned-night-heron/README.md)
- [鹊鸲 image set](./species/oriental-magpie-robin/README.md)
- [飞蝗 image set](./species/migratory-locust/README.md)

- [小䴙䴘 image set](./species/little-grebe/README.md)

- [普通鸬鹚 image set](./species/great-cormorant/README.md)

- [白骨顶 image set](./species/eurasian-coot/README.md)

- [黑水鸡 image set](./species/common-moorhen/README.md)

- [池鹭 image set](./species/chinese-pond-heron/README.md)

- [Chinese Long-headed Grasshopper image set](./species/chinese-long-headed-grasshopper/README.md)
- [Spotted Lanternfly image set](./species/spotted-lanternfly/README.md)
- [Gampsocleis sinensis image set](./species/chinese-bush-cricket/README.md)
- [Asian Bluetail image set](./species/asian-bluetail/README.md)
- [Japanese Carpenter Ant image set](./species/japanese-carpenter-ant/README.md)
- [Orange Skimmer image set](./species/scarlet-skimmer/README.md)
- [Common Scarlet image set](./species/common-scarlet/README.md)
- [Wandering Glider image set](./species/wandering-glider/README.md)
- [Harlequin Ladybird image set](./species/harlequin-ladybird/README.md)
- [Asian Swallowtail image set](./species/asian-swallowtail/README.md)

- [Common Carp image set](./species/common-carp/README.md)
- [Grass Carp image set](./species/grass-carp/README.md)
- [Silver Carp image set](./species/silver-carp/README.md)
- [Chinese Hooksnout Carp image set](./species/chinese-hooksnout-carp/README.md)
- [Bighead Carp image set](./species/bighead-carp/README.md)

- [青鱼 image set](./species/black-carp/README.md)
- [黄鳝 image set](./species/asian-swamp-eel/README.md)
- [麦穗鱼 image set](./species/topmouth-gudgeon/README.md)
- [中华鳑鲏 image set](./species/chinese-bitterling/README.md)
- [宽鳍鱲 image set](./species/pale-chub/README.md)

- [鲶 image set](./species/amur-catfish/README.md)
- [黄颡鱼 image set](./species/yellow-catfish/README.md)
- [乌鳢 image set](./species/northern-snakehead/README.md)
- [尼罗罗非鱼 image set](./species/nile-tilapia/README.md)
- [草龟 image set](./species/reeves-turtle/README.md)

- [Chinese Softshell Turtle image set](./species/chinese-softshell-turtle/README.md)
- [Chinese Stripe-necked Turtle image set](./species/chinese-stripe-necked-turtle/README.md)
- [Yellow Pond Turtle image set](./species/yellow-pond-turtle/README.md)
- [Northern Grass Lizard image set](./species/northern-grass-lizard/README.md)
- [Black-spotted Pond Frog image set](./species/black-spotted-pond-frog/README.md)

- [水牛 image set](./species/water-buffalo/README.md)
- [加卡利亚仓鼠 image set](./species/djungarian-hamster/README.md)
- [小家鼠 image set](./species/house-mouse/README.md)
- [褐家鼠 image set](./species/brown-rat/README.md)
- [梅花鹿 image set](./species/sika-deer/README.md)

## 2026-10-18 身边动物收尾

- [adzuki-bean-beetle 图片集](./species/adzuki-bean-beetle/README.md)
- [asian-common-toad 图片集](./species/asian-common-toad/README.md)
- [asian-jumping-mantis 图片集](./species/asian-jumping-mantis/README.md)
- [asian-tiger-mosquito 图片集](./species/asian-tiger-mosquito/README.md)
- [azure-winged-magpie 图片集](./species/azure-winged-magpie/README.md)
- [bactrian-camel 图片集](./species/bactrian-camel/README.md)
- [black-headed-gull 图片集](./species/black-headed-gull/README.md)
- [black-soldier-fly 图片集](./species/black-soldier-fly/README.md)
- [black-tailed-gull 图片集](./species/black-tailed-gull/README.md)
- [chinese-carpenter-bee 图片集](./species/chinese-carpenter-bee/README.md)
- [common-mormon 图片集](./species/common-mormon/README.md)
- [crested-myna 图片集](./species/crested-myna/README.md)
- [diamondback-moth 图片集](./species/diamondback-moth/README.md)
- [domestic-yak 图片集](./species/domestic-yak/README.md)
- [eastern-cattle-egret 图片集](./species/eastern-cattle-egret/README.md)
- [eurasian-siskin 图片集](./species/eurasian-siskin/README.md)
- [gazami-crab 图片集](./species/gazami-crab/README.md)
- [green-leafhopper 图片集](./species/green-leafhopper/README.md)
- [housefly 图片集](./species/housefly/README.md)
- [large-billed-crow 图片集](./species/large-billed-crow/README.md)
- [manila-clam 图片集](./species/manila-clam/README.md)
- [oriental-river-prawn 图片集](./species/oriental-river-prawn/README.md)
- [pacific-oyster 图片集](./species/pacific-oyster/README.md)
- [paddy-frog 图片集](./species/paddy-frog/README.md)
- [pale-grass-blue 图片集](./species/pale-grass-blue/README.md)
- [pallas-squirrel 图片集](./species/pallas-squirrel/README.md)
- [pantropical-huntsman-spider 图片集](./species/pantropical-huntsman-spider/README.md)
- [pantropical-jumping-spider 图片集](./species/pantropical-jumping-spider/README.md)
- [red-billed-blue-magpie 图片集](./species/red-billed-blue-magpie/README.md)
- [red-deer 图片集](./species/red-deer/README.md)
- [red-swamp-crayfish 图片集](./species/red-swamp-crayfish/README.md)
- [red-whiskered-bulbul 图片集](./species/red-whiskered-bulbul/README.md)
- [red-wiggler 图片集](./species/red-wiggler/README.md)
- [reeves-muntjac 图片集](./species/reeves-muntjac/README.md)
- [rice-weevil 图片集](./species/rice-weevil/README.md)
- [siberian-chipmunk 图片集](./species/siberian-chipmunk/README.md)
- [siberian-weasel 图片集](./species/siberian-weasel/README.md)
- [ventricose-orb-weaver 图片集](./species/ventricose-orb-weaver/README.md)
- [vinous-throated-parrotbill 图片集](./species/vinous-throated-parrotbill/README.md)
- [western-yellow-wagtail 图片集](./species/western-yellow-wagtail/README.md)
- [white-browed-laughingthrush 图片集](./species/white-browed-laughingthrush/README.md)
- [white-rumped-munia 图片集](./species/white-rumped-munia/README.md)
- [white-wagtail 图片集](./species/white-wagtail/README.md)
- [whiteleg-shrimp 图片集](./species/whiteleg-shrimp/README.md)
- [yellow-legged-hornet 图片集](./species/yellow-legged-hornet/README.md)

## 2026-10-19 首批灭绝动物

- [渡渡鸟图片集](./species/dodo/README.md)
- [罗德里格斯孤鸽图片集](./species/rodrigues-solitaire/README.md)
- [旅鸽图片集](./species/passenger-pigeon/README.md)
- [大海雀图片集](./species/great-auk/README.md)
- [袋狼图片集](./species/thylacine/README.md)

## 2026-10-19 第二批灭绝动物

- [斯特勒海牛图片集](./species/stellers-sea-cow/README.md)
- [大角鹿图片集](./species/giant-deer/README.md)
- [加勒比僧海豹图片集](./species/caribbean-monk-seal/README.md)
- [福克兰狼图片集](./species/falkland-island-wolf/README.md)
- [蓝马羚图片集](./species/bluebuck/README.md)

## 2026-10-20 第三批灭绝动物

- [小兔耳袋狸图片集](./species/lesser-bilby/README.md)
- [南方豚足袋狸图片集](./species/southern-pig-footed-bandicoot/README.md)
- [卡罗来纳鹦鹉图片集](./species/carolina-parakeet/README.md)
- [拉布拉多鸭图片集](./species/labrador-duck/README.md)
- [白令鸬鹚图片集](./species/spectacled-cormorant/README.md)

## 2026-10-20 第四批灭绝动物

- [大象鸟图片集](./species/elephant-bird/README.md)
- [北岛巨恐鸟图片集](./species/north-island-giant-moa/README.md)
- [南岛巨恐鸟图片集](./species/south-island-giant-moa/README.md)
- [小丛林恐鸟图片集](./species/little-bush-moa/README.md)
- [东部恐鸟图片集](./species/eastern-moa/README.md)

## 2026-10-20 第五批灭绝动物

- [重脚恐鸟图片集](./species/heavy-footed-moa/README.md)
- [高地恐鸟图片集](./species/upland-moa/README.md)
- [哈斯特鹰图片集](./species/haasts-eagle/README.md)
- [垂耳鸦图片集](./species/huia/README.md)
- [笑鸮图片集](./species/laughing-owl/README.md)

## 2026-10-20 第六批灭绝动物

- [异鹩图片集](./species/lyalls-wren/README.md)
- [奥克兰秋沙鸭图片集](./species/auckland-island-merganser/README.md)
- [芬氏鸭图片集](./species/finschs-duck/README.md)
- [南岛巨鹅图片集](./species/south-island-goose/README.md)
- [南岛厚嘴鹤图片集](./species/south-island-adzebill/README.md)

## 2026-10-20 第七批灭绝动物

- [霸王龙图片集](./species/tyrannosaurus-rex/README.md)
- [三角龙图片集](./species/triceratops-horridus/README.md)
- [装甲剑龙图片集](./species/stegosaurus-stenops/README.md)
- [巨型腕龙图片集](./species/brachiosaurus-altithorax/README.md)
- [卡内基梁龙图片集](./species/diplodocus-carnegii/README.md)

## 2026-10-20 第八批灭绝动物

- [雷龙图片集](./species/brontosaurus-excelsus/README.md)
- [路氏迷惑龙图片集](./species/apatosaurus-louisae/README.md)
- [脆弱异特龙图片集](./species/allosaurus-fragilis/README.md)
- [蒙古伶盗龙图片集](./species/velociraptor-mongoliensis/README.md)
- [巨大恐爪龙图片集](./species/deinonychus-antirrhopus/README.md)

## 2026-10-21 第九批灭绝动物

- [埃及棘龙图片集](./species/spinosaurus-aegyptiacus/README.md)
- [萨氏食肉牛龙图片集](./species/carnotaurus-sastrei/README.md)
- [似鳄重爪龙图片集](./species/baryonyx-walkeri/README.md)
- [双嵴龙图片集](./species/dilophosaurus-wetherilli/README.md)
- [巴氏腔骨龙图片集](./species/coelophysis-bauri/README.md)

## 2026-10-22 第十批灭绝动物

- [板龙图片集](./species/plateosaurus-trossingensis/README.md)
- [伯尼萨特禽龙图片集](./species/iguanodon-bernissartensis/README.md)
- [沃克氏副栉龙图片集](./species/parasaurolophus-walkeri/README.md)
- [连接埃德蒙顿龙图片集](./species/edmontosaurus-annectens/README.md)
- [巨型甲龙图片集](./species/ankylosaurus-magniventris/README.md)

## 2026-10-22 第十一批灭绝动物

- [图特河包头龙图片集](./species/euoplocephalus-tutus/README.md)
- [怀俄明肿头龙图片集](./species/pachycephalosaurus-wyomingensis/README.md)
- [短颈潘龙图片集](./species/amargasaurus-cazaui/README.md)
- [蒙古镰刀龙图片集](./species/therizinosaurus-cheloniformis/README.md)
- [蒙古鹦鹉嘴龙图片集](./species/psittacosaurus-mongoliensis/README.md)

## 2026-10-22 第十二批灭绝动物

- [长头无齿翼龙图片集](./species/pteranodon-longiceps/README.md)
- [诺氏风神翼龙图片集](./species/quetzalcoatlus-northropi/README.md)
- [古翼手龙图片集](./species/pterodactylus-antiquus/README.md)
- [明氏喙嘴翼龙图片集](./species/rhamphorhynchus-muensteri/README.md)
- [普通鱼龙图片集](./species/ichthyosaurus-communis/README.md)

## 2026-10-22 第十三批灭绝动物

- [四鳍滑齿龙图片集](./species/liopleurodon-ferox/README.md)
- [宽尾薄板龙图片集](./species/elasmosaurus-platyurus/README.md)
- [霍氏沧龙图片集](./species/mosasaurus-hoffmannii/README.md)
- [普氏泰洛龙图片集](./species/tylosaurus-proriger/README.md)
- [长颈龙图片集](./species/tanystropheus-longobardicus/README.md)

## 2026-10-22 接续十种灭绝动物

- [里奥格兰德恐鳄图片集](./species/deinosuchus-riograndensis/README.md)
- [帝王肌鳄图片集](./species/sarcosuchus-imperator/README.md)
- [真猛犸象图片集](./species/woolly-mammoth/README.md)
- [披毛犀图片集](./species/woolly-rhinoceros/README.md)
- [致命刃齿虎图片集](./species/smilodon-fatalis/README.md)
- [重型恐狼图片集](./species/dire-wolf/README.md)
- [美洲乳齿象图片集](./species/american-mastodon/README.md)
- [大地懒图片集](./species/megatherium-americanum/README.md)
- [双门齿兽图片集](./species/diprotodon-optatum/README.md)
- [袋狮图片集](./species/thylacoleo-carnifex/README.md)

## 2026-10-22 第十四批十种灭绝动物

- [大异齿龙图片集](./species/dimetrodon-grandis/README.md)
- [始祖鸟图片集](./species/archaeopteryx-lithographica/README.md)
- [王氏黄昏鸟图片集](./species/hesperornis-regalis/README.md)
- [异齿鱼鸟图片集](./species/ichthyornis-dispar/README.md)
- [盾甲魔鬼蛙图片集](./species/beelzebufo-ampinga/README.md)
- [大角双螈图片集](./species/diplocaulus-magnicornis/README.md)
- [泰瑞尔邓氏鱼图片集](./species/dunkleosteus-terrelli/README.md)
- [巨齿鲨图片集](./species/otodus-megalodon/README.md)
- [凶猛剑射鱼图片集](./species/xiphactinus-audax/README.md)
- [加拿大沟鳞鱼图片集](./species/bothriolepis-canadensis/README.md)

## 2026-10-22 灭绝动物收尾十五种

- [麦氏提塔利克鱼图片集](./species/tiktaalik-roseae/README.md)
- [加拿大奇虾图片集](./species/anomalocaris-canadensis/README.md)
- [欧巴宾虫图片集](./species/opabinia-regalis/README.md)
- [稀有怪诞虫图片集](./species/hallucigenia-sparsa/README.md)
- [华美马尔拉虫图片集](./species/marrella-splendens/README.md)
- [锯齿拟油栉虫图片集](./species/olenoides-serratus/README.md)
- [意外西德尼虫图片集](./species/sidneyia-inexpectans/README.md)
- [桨足广翅鲎图片集](./species/eurypterus-remipes/README.md)
- [莱茵耶克尔鲎图片集](./species/jaekelopterus-rhenaniae/README.md)
- [蛙形埃氏三叶虫图片集](./species/eldredgeops-rana/README.md)
- [巨型等称虫图片集](./species/isotelus-maximus/README.md)
- [普通指菊石图片集](./species/dactylioceras-commune/README.md)
- [大王菊石图片集](./species/parapuzosia-seppenradensis/README.md)
- [布氏巨脉蜻蜓图片集](./species/meganeura-monyi/README.md)
- [网纹雕齿兽图片集](./species/glyptodon-reticulatus/README.md)

## 2026-10-23 新奇动物首批五种

- [火焰乌贼图片集](./species/flamboyant-cuttlefish/README.md)
- [夏威夷短尾乌贼图片集](./species/hawaiian-bobtail-squid/README.md)
- [拟态章鱼图片集](./species/mimic-octopus/README.md)
- [椰子章鱼图片集](./species/coconut-octopus/README.md)
- [那马瓜沙鸡图片集](./species/namaqua-sandgrouse/README.md)

## 2026-10-23 新奇动物第二批五种

- [水蜘蛛图片集](./species/diving-bell-spider/README.md)
- [达氏柄眼蝇图片集](./species/dalman-stalk-eyed-fly/README.md)
- [狮鬃海蛞蝓图片集](./species/lion-mane-nudibranch/README.md)
- [海绵背蟹图片集](./species/sponge-crab/README.md)
- [龟蛙图片集](./species/turtle-frog/README.md)

## 2026-10-23 新奇动物第三批五种

- [海兔兔图片集](./species/sea-bunny/README.md)
- [深海兜帽海蛞蝓图片集](./species/mystery-nudibranch/README.md)
- [金带栉水母图片集](./species/venus-girdle/README.md)
- [向日葵海星图片集](./species/sunflower-sea-star/README.md)
- [雪人蟹图片集](./species/yeti-crab/README.md)

## 2026-10-24 新奇动物第四批五种

- [透明中层章鱼图片集](./species/midwater-octopus/README.md)
- [八腕鱿鱼图片集](./species/octopus-squid/README.md)
- [珍珠章鱼图片集](./species/pearl-octopus/README.md)
- [七腕章鱼图片集](./species/seven-arm-octopus/README.md)
- [大红水母图片集](./species/big-red-jelly/README.md)

## 2026-10-27 新奇动物第五批五种

- [巨型幽灵水母图片集](./species/giant-phantom-jelly/README.md)
- [疙瘩水母图片集](./species/bumpy-jelly/README.md)
- [绒球海葵图片集](./species/pom-pom-anemone/README.md)
- [米尔斯十字水母图片集](./species/psychedelic-jelly/README.md)
- [深渊瓜水母图片集](./species/abyssal-comb-jelly/README.md)

## 2026-10-27 新奇动物第六批五种

- [violet-blanket-octopus 图片集](./species/violet-blanket-octopus/README.md)
- [neomenia-carinata 图片集](./species/neomenia-carinata/README.md)
- [striped-pyjama-squid 图片集](./species/striped-pyjama-squid/README.md)
- [solar-powered-nudibranch 图片集](./species/solar-powered-nudibranch/README.md)
- [eastern-emerald-elysia 图片集](./species/eastern-emerald-elysia/README.md)

## 2026-10-27 新奇动物第七批五种

- [flamingo-tongue-snail 图片集](./species/flamingo-tongue-snail/README.md)
- [queen-conch 图片集](./species/queen-conch/README.md)
- [lined-chiton 图片集](./species/lined-chiton/README.md)
- [greater-blue-ringed-octopus 图片集](./species/greater-blue-ringed-octopus/README.md)
- [spanish-dancer-nudibranch 图片集](./species/spanish-dancer-nudibranch/README.md)

## 2026-10-28 新奇动物第八批五种

- [红色马鲁管水母图片集](./species/red-siphonophore/README.md)
- [泡泡糖珊瑚图片集](./species/bubblegum-coral/README.md)
- [蘑菇软珊瑚图片集](./species/mushroom-soft-coral/README.md)
- [鳞甲海参图片集](./species/armored-sea-cucumber/README.md)
- [加州太阳海星图片集](./species/california-sun-star/README.md)

## 2026-10-29 新奇动物第九批八种

- [脆壳粉红海胆图片集](./species/fragile-pink-sea-urchin/README.md)
- [赭色海星图片集](./species/ochre-sea-star/README.md)
- [偏心沙钱图片集](./species/eccentric-sand-dollar/README.md)
- [橙色瓜参图片集](./species/orange-sea-cucumber/README.md)
- [蝙蝠海星图片集](./species/bat-star/README.md)
- [海鼠图片集](./species/sea-mouse/README.md)
- [胡须火焰虫图片集](./species/bearded-fireworm/README.md)
- [地中海扇虫图片集](./species/mediterranean-fan-worm/README.md)

## 2026-10-30 新奇动物第十批五种

- [气球蠕虫图片集](./species/balloon-worm/README.md)
- [猪臀虫图片集](./species/pigbutt-worm/README.md)
- [庞贝虫图片集](./species/pompeii-worm/README.md)
- [指状高脚杯海绵图片集](./species/fingered-goblet-sponge/README.md)
- [桶居端足虾图片集](./species/barrel-amphipod/README.md)
