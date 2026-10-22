# New Romans — newromansband.com

Static Astro site, deployed on Netlify.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node 22.23+ (see `.nvmrc`).

## Editing content

The site is currently a coming-soon home page plus the contact page. The photos, about and newsletter pages are in git history (commit `0c7a919`) for when they're needed.

| What | Where |
| --- | --- |
| Tagline, email, social links | `src/config.ts` (look for `TODO`) |
| Colors, fonts | `:root` in `src/styles/global.css` |

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
