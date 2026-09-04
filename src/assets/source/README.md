# Visual source assets

Species-specific image sets and their final prompts live under `species/<slug>/`.

## Species cover rule

Apply this rule whenever you add, generate, replace, or crop a species cover. `Species.media.image` and its matching `01-*-source.png` form the species cover, and the landing-page hero includes that image in its carousel.

### Composition

A cover passes composition review when all of these conditions hold:

- Place the primary animal or primary subject group on the right. Its visually inspected center must sit at or beyond 60% of the source width, while the left 40% remains quiet enough for the hero title, introduction, and call to action.
- Show the complete subject in the source. The reviewed boundary must include every visible outer feature required by the pose and taxon, including the head, bill or muzzle, horns or antennae, wing or fin tips, feet, tail, and tentacles.
- Leave real background between that boundary and the crop edge. Do not treat a `focalPoint` value as proof of subject placement; it controls `object-position` and does not describe the pixels occupied by the animal.

### Hero acceptance

The complete reviewed subject boundary must stay inside the landing-page hero with at least 24 CSS pixels of clearance. Check the runtime WebP with its committed `focalPoint` at `320×760`, `390×760`, `1366×768`, `1920×900`, `2560×900`, and `3840×900`. Cover the settled frame plus the initial, forward, and backward enter/leave animation endpoints defined in `src/styles.css`.

Also inspect the composed safe areas: the animal must remain clear of the left-side copy, the right-side carousel panel at each breakpoint, and the viewport edge. Reframe or regenerate the source when a crop fails. If one 3:2 composition cannot keep the subject readable and complete across the supported ratios, add breakpoint-specific hero art direction and its regression coverage before accepting the cover.

### Review record

Record the following evidence in the species image-set README whenever a cover changes:

- Runtime WebP SHA-256, source dimensions, committed `focalPoint`, and the visually measured full-subject boundary in source pixels.
- Results for every required viewport and animation endpoint, plus original-resolution inspection of both the source PNG and runtime WebP.
- The final generation or edit prompt and any known visual limitation.

Add or update the matching full-subject case in `tests/hero-carousel.test.mjs`, then run `npm run test:carousel`. A head-only boundary does not satisfy this rule.

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
