# Image assets and provenance

Keep one accepted image per scene: the compressed WebP in `public/images/`. Keep final prompts, credits, generation notes and acceptance records under `species/<slug>/`.

PNG inputs are temporary and ignored by Git. Existing PNG filenames and hashes in species records describe historical generation evidence; those files are no longer retained. Do not recreate them merely to satisfy an old record. The accepted WebP is the retained visual reference.

## Image workflow

1. Generate or edit temporary `*-source.png` files under this directory. Inspect them before conversion.
2. Run `npm run convert:webp -- <source.png>...` (requires `cwebp` and ImageMagick). It creates the matching path under `public/images/`, validates decoding and dimensions, and replaces the output only on success. TinyPNG via `npm run compress -- <source.png>...` is optional; WebP conversion does not need API credentials.
3. Inspect the final WebP, record its SHA-256 and cover acceptance evidence, and run the relevant tests. Remove the temporary PNG after acceptance. Never repeatedly recompress an accepted WebP.
4. `dist/` is ignored build output. Build or deploy from `public/images/`; remove local `dist/` when finished if disk space matters.


## Species image set rule

Each species has exactly six retained images: one cover and five gallery images. The carousel and species profile use the same cover through `Species.media.image`. Replace an unsuitable cover in place and preserve the five gallery images unless the task also calls for changing them.

Keep desktop and mobile presentation on that single cover. Do not add `hero-desktop`, `hero-mobile`, or other device-specific image variants. Temporary generation candidates stay outside the retained image set and leave the repository after acceptance.

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
