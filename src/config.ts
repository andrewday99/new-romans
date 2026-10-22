// Everything band-specific lives here so copy and links can change without touching layout code.
// Lines marked TODO are placeholders to replace with the real thing.

export const band = {
  name: 'New Romans',
  url: 'https://newromansband.com',
  // TODO: replace with the band's real one-liner.
  tagline: 'Loud songs for long drives',
  description:
    'New Romans — a rock band. Photos, news, booking and the mailing list.',
  // TODO: replace with the real booking / contact address.
  email: 'hello@newromansband.com',
  // TODO: replace with the real city or region.
  hometown: 'Hometown, Earth',
};

// TODO: fill in real profile URLs. Entries with an empty href are hidden.
export const socials: { label: string; href: string }[] = [
  { label: 'Instagram', href: '' },
  { label: 'Spotify', href: '' },
  { label: 'Bandcamp', href: '' },
  { label: 'YouTube', href: '' },
  { label: 'TikTok', href: '' },
];

// Beehiiv: Settings → Subscribe Forms → pick a form → "Get embed code", and paste the
// iframe's src URL here (looks like https://embeds.beehiiv.com/<uuid>).
// While empty, the newsletter page shows a placeholder instead of a broken frame.
export const beehiivEmbedUrl = '';

// TODO: replace with the real band bio. Each string is a paragraph.
export const bio: string[] = [
  'New Romans make the kind of rock records that sound like they were found in a shoebox: warm, a little blown out, and turned all the way up.',
  'Placeholder bio — swap this for how the band started, who plays what, and what the next record sounds like.',
];

// TODO: replace with the real lineup.
export const members: { name: string; role: string }[] = [
  { name: 'Member One', role: 'Vocals, guitar' },
  { name: 'Member Two', role: 'Guitar' },
  { name: 'Member Three', role: 'Bass' },
  { name: 'Member Four', role: 'Drums' },
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/photos/', label: 'Photos' },
  { href: '/about/', label: 'About' },
  { href: '/newsletter/', label: 'Newsletter' },
  { href: '/contact/', label: 'Contact' },
];
