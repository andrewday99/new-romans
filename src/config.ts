// Everything band-specific lives here so copy and links can change without touching layout code.
// Lines marked TODO are placeholders to replace with the real thing.

export const band = {
  name: 'New Romans',
  url: 'https://newromansband.com',
  // TODO: replace with the band's real one-liner.
  tagline: 'Coming soon',
  description:
    'New Romans — a rock band. New site coming soon.',
  // TODO: replace with the real booking / contact address.
  email: 'hello@newromansband.com',
};

// TODO: fill in real profile URLs. Entries with an empty href are hidden.
export const socials: { label: string; href: string }[] = [
  { label: 'Instagram', href: '' },
  { label: 'Spotify', href: '' },
  { label: 'Bandcamp', href: '' },
  { label: 'YouTube', href: '' },
  { label: 'TikTok', href: '' },
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/contact/', label: 'Contact' },
];
