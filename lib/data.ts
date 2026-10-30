export type Product = { slug: string; name: string; description: string; category: string; status: 'LIVE' | 'BUILDING' | 'COMING SOON'; price: string; originalPrice?: string; accent: string; mark: string; featured?: boolean; images: string[]; longDescription: string; features: string[]; buyUrl: string; buyType: 'direct' | 'affiliate'; duration?: string; rating?: number; badge?: string }
export type SetupItem = { slug: string; name: string; category: string; description: string; price: string; image: string; images: string[]; longDescription: string; buyUrl: string; buyType: 'affiliate' | 'direct'; retailer: string }
export type Post = { title: string; category: string; date: string; read: string; image: string }

const gallery = (_dir: string, _n: number) => ['/cmc.jpg']

export const products: Product[] = [
  {
    slug: 'orbit', name: 'Orbit', description: 'A calmer command center for the work that matters.',
    category: 'AI', status: 'COMING SOON', price: '—', accent: 'violet', mark: 'O', featured: true,
    images: gallery('products/orbit', 5),
    longDescription: 'Orbit brings your tasks, notes and signals into a single quiet surface so you can see the day at a glance and act without the noise.',
    features: ['Unified inbox for tasks and notes', 'AI daily briefing', 'Keyboard-first navigation', 'Works offline'],
    buyUrl: 'https://buy.stripe.com/test_orbit', buyType: 'direct',
  },
  {
    slug: 'frame', name: 'Frame', description: 'Ship your next SaaS with a point of view.',
    category: 'Developer Tools', status: 'COMING SOON', price: '—', accent: 'lime', mark: 'F', featured: true,
    images: gallery('products/frame', 5),
    longDescription: 'Frame is an opinionated Next.js starter with auth, billing, email and a design system already wired together, so you can build the actual product on day one.',
    features: ['Next.js + TypeScript', 'Auth and Stripe billing', 'Transactional email', 'Design system and marketing pages'],
    buyUrl: 'https://buy.stripe.com/test_frame', buyType: 'direct',
  },
  {
    slug: 'signal-kit', name: 'Signal Kit', description: 'A field guide for building in public without the noise.',
    category: 'Digital Products', status: 'COMING SOON', price: '—', accent: 'orange', mark: 'S', featured: true,
    images: gallery('products/signal-kit', 4),
    longDescription: 'A 60-page playbook plus templates for sharing your work consistently — content systems, cadence, and the metrics that actually matter.',
    features: ['60-page PDF playbook', 'Notion content calendar', 'Swipe file of 50 posts', 'Lifetime updates'],
    buyUrl: 'https://thisis-sambit.gumroad.com/l/signal-kit', buyType: 'direct',
  },
  {
    slug: 'relay', name: 'Relay', description: 'Tiny automations for teams who move quickly.',
    category: 'SaaS', status: 'COMING SOON', price: '—', accent: 'blue', mark: 'R',
    images: gallery('products/relay', 4),
    longDescription: 'Relay lets small teams connect the tools they already use with short, readable automations — no flowchart canvas, just a few lines that do one job well.',
    features: ['50+ integrations', 'Readable automation syntax', 'Run history and alerts', 'Generous free tier'],
    buyUrl: 'https://relay.thisis-sambit.com/signup', buyType: 'direct',
  },
  {
    slug: '1-1-weekend-catch-up', name: '1:1 Weekend Catch-Up', description: 'Got something you want to discuss?',
    category: 'Coaching', status: 'LIVE', price: '₹59', accent: 'blue', mark: '1:1',
    duration: 'Video meeting · 30 mins', badge: 'Popular',
    images: gallery('services/catch-up', 1),
    longDescription: 'A casual 30-minute video call to talk through whatever is on your mind — career questions, a product idea, or just a weekend check-in. Booked and hosted via Topmate.',
    features: ['30-minute video call', 'Booked via Topmate', 'Flexible weekend slots'],
    buyUrl: 'https://topmate.io/thisissambit/2283229?utm_source=public_profile&utm_campaign=thisissambit', buyType: 'direct',
  },
  {
    slug: 'most-asked-dsa-questions-js-book', name: 'Most Asked DSA Questions in JS Book', description: 'Best collection of most asked DSA questions in JavaScript! 🔥',
    category: 'Digital Products', status: 'LIVE', price: '₹299', originalPrice: '₹499', accent: 'lime', mark: 'JS',
    badge: 'Best Seller',
    images: gallery('services/dsa-book', 1),
    longDescription: 'A curated collection of the most frequently asked DSA questions in JavaScript, with clear explanations — built from real interview prep sessions.',
    features: ['Digital download (PDF)', 'Most asked DSA questions in JS', 'Lifetime access'],
    buyUrl: 'https://topmate.io/thisissambit/2283267?utm_source=public_profile&utm_campaign=thisissambit', buyType: 'direct',
  },
  {
    slug: 'frontend-mock-interview', name: 'Frontend Mock interview with me', description: 'Practice a real frontend interview end to end.',
    category: 'Coaching', status: 'LIVE', price: '₹1,499', originalPrice: '₹2,199', accent: 'violet', mark: 'FE',
    duration: 'Video meeting · 45 mins', rating: 5, badge: 'Popular',
    images: gallery('services/mock-interview', 1),
    longDescription: 'A 45-minute mock frontend interview covering JS fundamentals, DSA, and system design basics, with honest feedback at the end. Booked and hosted via Topmate.',
    features: ['45-minute video call', 'Live coding + feedback', 'Booked via Topmate'],
    buyUrl: 'https://topmate.io/thisissambit', buyType: 'direct',
  },
  {
    slug: 'resume-review', name: 'Resume review', description: 'Get your resume reviewed line by line.',
    category: 'Coaching', status: 'LIVE', price: '₹899', originalPrice: '₹1,199', accent: 'orange', mark: 'CV',
    duration: 'Video meeting · 15 mins', rating: 5,
    images: gallery('services/resume-review', 1),
    longDescription: 'A focused 15-minute session going through your resume line by line with actionable edits for clarity and impact. Booked and hosted via Topmate.',
    features: ['15-minute video call', 'Line-by-line feedback', 'Booked via Topmate'],
    buyUrl: 'https://topmate.io/thisissambit', buyType: 'direct',
  },
]

const CDN = 'https://cdn.shopify.com/s/files/1/0403/3688/3869/files'
const TSC = 'https://thesleepcompany.in/cdn/shop/files'
const CAP = 'https://candidapricot.com/cdn/shop/files'

export const setup: SetupItem[] = [
  {
    slug: 'beamer-bmw-m4-gt4-poster', name: 'The Beamer — BMW M4 GT4', category: 'Decor',
    description: 'Framed automotive wall art.', price: '₹2,199',
    image: `${CAP}/57_ebff5a7e-e86a-42c5-84d1-523276e617fd.jpg?v=1775668968&width=2000`,
    images: [
      `${CAP}/57_ebff5a7e-e86a-42c5-84d1-523276e617fd.jpg?v=1775668968&width=2000`,
      `${CAP}/58_3464d8d9-d3ba-4b14-86e2-c3a4c7754b98.jpg?v=1775668968&width=2000`,
      `${CAP}/59_aafff957-1edb-432a-88c3-0065bfb0f024.jpg?v=1775668968&width=2000`,
      `${CAP}/1_18a94c98-725e-401f-8ff4-03964d2b465d.jpg?v=1786988538&width=2000`,
    ],
    longDescription: 'A BMW M4 GT4 print from Candid Apricot’s automotive series — bold, high-contrast and a good anchor for the wall behind the desk on camera.',
    buyUrl: 'https://candidapricot.com/products/bmw-m4-gt4-the-beamer-frontline?variant=46651446264038',
    buyType: 'affiliate', retailer: 'Candid Apricot',
  },
  {
    slug: 'ergoyou-e2-standing-desk', name: 'ErgoYou E2 Standing Desk', category: 'Desk',
    description: 'Dual-motor sit-stand desk with a wood-grain top.', price: '₹34,990',
    image: `${CDN}/MapleWhiteFrameBlured_4.jpg?v=1764143146`,
    images: [
      `${CDN}/MapleWhiteFrameBlured_4.jpg?v=1764143146`,
      `${CDN}/2000pixels_fd72b79b-c73a-46f0-a900-daedd253049a.png?v=1764143146`,
      `${CDN}/8_fb772e02-195c-481c-af21-8dbdeaa9d4e2.png?v=1764143146`,
      `${CDN}/ImagewithDimensions_4a6e62ed-ac25-45a5-8eab-cdd8cf1cdbdc.png?v=1764143146`,
    ],
    longDescription: 'Dual motors with anti-collision, a 720–1215mm range and an LED controller with four memory presets. The engineered wood-grain top keeps the desk warm rather than office-grey, and the 4-year warranty makes it an easy long-term pick.',
    buyUrl: 'https://www.ergoyou.in/products/ergoyou-height-adjustable-desk-with-wood-grain-table-top-2-stage-motorized',
    buyType: 'affiliate', retailer: 'ErgoYou',
  },
  {
    slug: 'sleep-company-ultron-chair', name: 'The Sleep Company Ultron', category: 'Seating',
    description: 'Premium ergonomic office chair.', price: '₹36,999',
    image: `${TSC}/UltronPremiumErgonomicdesktopblack_1.webp`,
    images: [
      `${TSC}/UltronPremiumErgonomicdesktopblack_1.webp`,
      `${TSC}/UltronPremiumErgonomicdesktopblack_2.webp`,
      `${TSC}/UltronPremiumErgonomicdesktopblack_3.webp`,
      `${TSC}/UltronPremiumErgonomicdesktopblack_4.webp`,
      `${TSC}/UltronPremiumErgonomicdesktopblack_5.webp`,
    ],
    longDescription: '3D adjustable headrest, 7D armrests, a 90°–135° recline with a flexi backrest and a cushioned footrest. BIFMA and ISO certified with a Class-4 Samhongsa gas lift, so it holds up to full days in the chair.',
    buyUrl: 'https://thesleepcompany.in/products/ultron-premium-ergonomic-office-chair?variant=49542023807205',
    buyType: 'affiliate', retailer: 'The Sleep Company',
  },
  {
    slug: 'ergoyou-cable-tray', name: 'ErgoYou Cable Tray', category: 'Accessories',
    description: 'Clamp-on under-desk cable management.', price: '₹2,199',
    image: `${CDN}/CC11-9WHITEpic01.jpg?v=1755000149`,
    images: [
      `${CDN}/CC11-9WHITEpic01.jpg?v=1755000149`,
      `${CDN}/CC11-9WHITEpic02.jpg?v=1755000149`,
      `${CDN}/CC11-9WHITEpic03.jpg?v=1755000149`,
      `${CDN}/Image_with_Dimensions_9.png?v=1755000149`,
    ],
    longDescription: 'Powder-coated steel tray that clamps to tops 5–50mm thick — no drilling. The open design makes it easy to route power bricks and cables so nothing dangles behind a moving desk.',
    buyUrl: 'https://www.ergoyou.in/products/clamp-on-under-desk-cable-tray',
    buyType: 'affiliate', retailer: 'ErgoYou',
  },
  {
    slug: 'macbook-pro-m4-pro', name: 'MacBook Pro (M4 Pro)', category: 'Workstation',
    description: 'The daily driver.', price: '₹1,99,900',
    image: 'https://m.media-amazon.com/images/I/61z5pPjUGJL.jpg',
    images: [
      'https://m.media-amazon.com/images/I/61z5pPjUGJL.jpg',
      'https://m.media-amazon.com/images/I/61eA9PkZ07L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61v405rSEeL._SL1500_.jpg',
    ],
    longDescription: 'The M4 Pro MacBook Pro chews through builds, containers and video edits without the fans ever making themselves known. The Space Black finish, bright XDR display and all-day battery make it the one machine I actually want to carry.',
    buyUrl: 'https://www.apple.com/in/shop/buy-mac/macbook-pro/14-inch-m4-pro',
    buyType: 'affiliate', retailer: 'Apple',
  },
]

export const posts: Post[] = [
  { title: 'The quiet advantage of shipping small', category: 'Building', date: 'Aug 18, 2026', read: '6 min read', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80' },
  { title: 'What I look for in a first product', category: 'Founder notes', date: 'Aug 04, 2026', read: '4 min read', image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1200&q=80' },
  { title: 'A desk is a system, not a collection', category: 'Behind the scenes', date: 'Jul 22, 2026', read: '5 min read', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80' },
]

export type Sponsor = { name: string; category: string; tagline: string; mark: string; accent: string; disclosure: string }

export const sponsors: Sponsor[] = [
  { name: 'Notion', category: 'Workspace', tagline: 'The connected workspace I use to plan, write and ship.', mark: 'N', accent: 'sponsor-sand', disclosure: 'Used and loved — not sponsored' },
  { name: 'Vercel', category: 'Infrastructure', tagline: 'The platform behind this site and the products I ship.', mark: '▲', accent: 'sponsor-ink', disclosure: 'Partner feature' },
  { name: 'Herman Miller', category: 'Chair', tagline: 'A better seat for long days of focused building.', mark: 'H', accent: 'sponsor-lilac', disclosure: 'Paid collaboration' },
  { name: 'Keychron', category: 'Keyboard', tagline: 'Quiet, tactile, considered — the keyboard on my desk.', mark: 'K', accent: 'sponsor-mint', disclosure: 'Affiliate recommendation' },
  { name: 'Native Union', category: 'Desk setup', tagline: 'Simple objects that keep the workspace intentional.', mark: 'N', accent: 'sponsor-coral', disclosure: 'Partner feature' },
]

export type Reel = { url: string; caption: string }

// Latest reels from instagram.com/thisis.sambit (newest first).
// Instagram has no public API for "top performing" without the Graph API
// (business account + token + backend), so this list is curated by hand.
// Paste the reel permalink and a short caption; order = display order.
export const reels: Reel[] = [
  { url: 'https://www.instagram.com/reel/DcscBqgSCCd/', caption: 'Shipping small, every day' },
  { url: 'https://www.instagram.com/reel/Dcpm3j-zBiP/', caption: 'My remote setup tour' },
  { url: 'https://www.instagram.com/reel/DcnMRN3TbQQ/', caption: 'Building an AI product from scratch' },
  { url: 'https://www.instagram.com/reel/DckyM29PYib/', caption: 'What I look for in a first product' },
  { url: 'https://www.instagram.com/reel/DciJgECz5Bx/', caption: 'A week of building in public' },
]

export const productCategories =['All', 'SaaS', 'AI', 'Digital Products', 'Developer Tools', 'Coaching', 'Experiments']
export const setupCategories = ['All', 'Desk', 'Seating', 'Display', 'Workstation', 'Accessories', 'Decor']

export type Stat = { value: string; label: string }

// Shown in the home hero. Placeholder numbers — replace with your real Instagram figures.
export const creatorStats: Stat[] = [
  { value: '32K+', label: 'Instagram followers' },
  { value: '200+', label: 'Reels published' },
  { value: '10M+', label: 'Total views' },
  { value: '500+', label: 'Calls booked' },
]

export type Highlight = { title: string; description: string; tag: string; tone: 'orange' | 'blue' | 'green' | 'pink' | 'violet'; href: string; linkText: string; wide?: boolean }

export const highlights: Highlight[] = [
  { title: 'Tech, explained in 60 seconds', description: 'Short reels that break down databases, APIs, AI and system design into something you remember.', tag: 'Reels', tone: 'pink', href: 'https://www.instagram.com/thisis.sambit', linkText: 'Watch on Instagram', wide: true },
  { title: '1:1 calls', description: 'Mock interviews, resume reviews and weekend catch-ups.', tag: 'Coaching', tone: 'blue', href: '#work-with-me', linkText: 'Book a call' },
  { title: 'Interview prep', description: 'The most asked DSA questions in JavaScript, in one book.', tag: 'Resources', tone: 'orange', href: '#work-with-me', linkText: 'Get the book' },
  { title: 'My setup', description: 'Every desk, chair and gadget I use to work and create.', tag: 'Gear', tone: 'green', href: '/setup', linkText: 'See the setup' },
  { title: 'The build log', description: 'Every product I’ve started — what shipped, what failed and what I learned.', tag: 'Building', tone: 'violet', href: '/products', linkText: 'Read the log' },
]

export type BuildLogEntry = { name: string; date: string; status: 'Failed' | 'Shipped' | 'Building' | 'Next'; summary: string; lesson?: string; url?: string; logo?: string; stats?: Stat[] }

// Every product I've started — the ones that worked and the ones that didn't. Oldest first.
export const buildLog: BuildLogEntry[] = [
  {
    name: 'InvoiceZero', date: '2025', status: 'Failed', logo: '/logos/invoicezero.png',
    summary: 'Let AI handle your invoices while you handle the business. My first real product: upload an invoice and AI reads, sorts and tracks it for you.',
    stats: [
      { value: '~3,000', label: 'Views' },
      { value: '1,580', label: 'Sign-ups' },
      { value: '~50', label: 'Active users' },
      { value: '0', label: 'Paying customers' },
    ],
    lesson: 'Sign-ups aren’t validation. 1,580 people were happy to try it for free, but not one pulled out a card. Next time I find someone willing to pay before I build.',
  },
  {
    name: 'Cuebase', date: '2026', status: 'Failed', url: 'https://www.cuebase.co/', logo: '/logos/cuebase.jpg',
    summary: 'Customer feedback and testimonial software — collect feedback over email and WhatsApp, route happy customers to Google reviews, and turn the best ones into a Wall of Love. Launched on Product Hunt.',
    stats: [
      { value: '500', label: 'Visitors' },
      { value: '25', label: 'Sign-ups' },
      { value: '1', label: 'Paying customer' },
    ],
    lesson: 'Progress: my first paying customer — proof someone would pay. But 500 visitors wasn’t enough to grow from. Building it was the easy part; getting it in front of the right people is where it stalled.',
  },
  {
    name: 'What’s next', date: 'Now', status: 'Next',
    summary: 'Taking what InvoiceZero and Cuebase taught me — validate payment first, then solve distribution — into the next build. Logging it here, wins and failures alike.',
  },
]

// About page photo section. Put photos in public/gallery/ and list them here.
// Tiles alternate wide/narrow automatically (wide, narrow, narrow, narrow, wide, narrow…).
export const aboutQuote = {
  text: 'Time is money. Always spend money to save time because you cannot earn the time back.',
  sub: 'Life is short — don’t waste it, and don’t die with regrets.',
}

export type AboutPhoto = { src: string; alt: string }

export const aboutPhotos: AboutPhoto[] = [
  { src: '/gallery/sambit-desk.jpg', alt: 'Sambit at his desk' },
  // { src: '/gallery/your-photo.jpg', alt: 'Short description of the photo' },
]
