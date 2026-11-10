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

// TODO: fill in real profile URLs. The home page shows every icon but only links
// those with an href; the footer hides entries with an empty href.
export const socials: { label: string; icon: SocialIcon; href: string }[] = [
  { label: 'Instagram', icon: 'instagram', href: '' },
  { label: 'Facebook', icon: 'facebook', href: '' },
  { label: 'TikTok', icon: 'tiktok', href: '' },
  { label: 'Spotify', icon: 'spotify', href: '' },
  { label: 'Apple Music', icon: 'music', href: '' },
];

export type SocialIcon = 'instagram' | 'facebook' | 'tiktok' | 'spotify' | 'music';

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/contact/', label: 'Contact' },
];
