# New Romans — newromansband.com

Static Astro site, deployed on Netlify.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node 22.23+ (see `.nvmrc`).

## Editing content

| What | Where |
| --- | --- |
| Tagline, email, hometown, bio, lineup, social links | `src/config.ts` (look for `TODO`) |
| Beehiiv signup form | `beehiivEmbedUrl` in `src/config.ts` |
| Photos | Drop images into `src/assets/photos/` |
| Hero background photo (optional) | Add `src/assets/hero.jpg` |
| Colors, fonts | `:root` in `src/styles/global.css` |

**Photos** are picked up automatically and sorted by filename, so prefix them `01-`, `02-`… to set the order. The filename becomes the alt text (`03-live-at-the-roxy.jpg` → "live at the roxy"). Astro resizes and converts them to modern formats at build time, so full-size originals are fine.

**Beehiiv:** in Beehiiv go to *Audience → Subscribe forms*, pick or create a form, copy its embed code and paste only the iframe's `src` URL (e.g. `https://embeds.beehiiv.com/xxxxxxxx-...`) into `beehiivEmbedUrl`. Set the form's background to transparent and button color to `#c4501b` in Beehiiv so it matches.

## Deploying (Netlify, personal account)

1. Push this repo to GitHub (or GitLab/Bitbucket) under your personal account.
2. In Netlify: *Add new site → Import an existing project*, pick the repo. Build settings come from `netlify.toml` — nothing to change.
3. **Forms:** form detection is on by default for new sites; if not, enable it under *Site configuration → Forms*. After the first deploy the `contact` form appears there. Add an email notification under *Forms → Form notifications* so submissions reach your inbox.

## Domain (GoDaddy → Netlify)

In Netlify: *Domain management → Add a domain* → `newromansband.com` (add `www` too). Then pick **one** of:

**A. Keep DNS at GoDaddy** — in GoDaddy *DNS → Manage DNS*:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `75.2.60.5` |
| CNAME | `www` | `<your-site-name>.netlify.app` |

Delete any existing `A @` (often GoDaddy's "Parked") and `CNAME www` records first.

**B. Move DNS to Netlify** — choose *Set up Netlify DNS* in Netlify, then in GoDaddy *Nameservers → Change → I'll use my own nameservers* and enter the four `dns*.p0*.nsone.net` servers Netlify shows you. Keep any existing MX records (email) by recreating them in Netlify DNS first.

Netlify issues the HTTPS certificate automatically once DNS resolves (minutes to a few hours). `www` redirects to the bare domain via `netlify.toml`.
