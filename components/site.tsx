'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, Coffee, FileText, Maximize2, Menu, Moon, Sparkles, Sun, Video, X } from 'lucide-react'
import { products, setup, posts, sponsors, reels, creatorStats, highlights, buildLog, aboutQuote, aboutPhotos, type Product, type SetupItem, type Post } from '@/lib/data'

const IG_PROFILE = 'https://www.instagram.com/thisis.sambit'

declare global { interface Window { instgrm?: { Embeds: { process: () => void } } } }

export function ReelsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = 'ig-embed-script'
    const run = () => window.instgrm?.Embeds.process()
    if (document.getElementById(id)) { run(); return }
    const s = document.createElement('script')
    s.id = id
    s.async = true
    s.src = 'https://www.instagram.com/embed.js'
    s.onload = run
    document.body.appendChild(s)
  }, [])

  const scroll = (dir: number) => trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let paused = false
    const pause = () => { paused = true }
    const resume = () => { paused = false }
    el.addEventListener('pointerenter', pause)
    el.addEventListener('pointerleave', resume)
    el.addEventListener('touchstart', pause, { passive: true })
    const timer = window.setInterval(() => {
      if (paused) return
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + 340, behavior: 'smooth' })
    }, 3500)
    return () => {
      window.clearInterval(timer)
      el.removeEventListener('pointerenter', pause)
      el.removeEventListener('pointerleave', resume)
      el.removeEventListener('touchstart', pause)
    }
  }, [])

  return (
    <section className="reels-section container" aria-labelledby="reels-title">
      <div className="section-header">
        <div>
          <p className="eyebrow">Live from Instagram</p>
          <h2 id="reels-title">Latest reels</h2>
        </div>
        <div className="carousel-controls">
          <button className="carousel-button" aria-label="Previous reels" onClick={() => scroll(-1)}><ArrowLeft size={16} /></button>
          <button className="carousel-button" aria-label="Next reels" onClick={() => scroll(1)}><ArrowRight size={16} /></button>
          <a href={IG_PROFILE} target="_blank" rel="noreferrer" className="carousel-button" aria-label="Open Instagram profile"><ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="reels-track" ref={trackRef}>
        {reels.map((reel) => (
          <figure className="reel-card" key={reel.url}>
            <div className="reel-head">
              <img src="/profile.png" alt="" />
              <div>
                <strong>thisis.sambit</strong>
                <span>Instagram reel</span>
              </div>
              <a href={reel.url} target="_blank" rel="noreferrer" aria-label="Open reel on Instagram"><ArrowUpRight size={16} /></a>
            </div>
            {/* Instagram's embed header (with long song titles) can't be styled cross-origin, so .reel-frame crops it off. */}
            <div className="reel-frame">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${reel.url}?utm_source=ig_embed`}
                data-instgrm-version="14"
                style={{ background: 'var(--card)', border: 0, margin: 0, padding: 0, width: '100%' }}
              >
                <a href={reel.url} target="_blank" rel="noreferrer">View this reel on Instagram</a>
              </blockquote>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => setDark(document.documentElement.classList.contains('dark')), [])
  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
    setDark(next)
  }
  return <button aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="icon-button theme-toggle" onClick={toggle}>{dark ? <Sun size={16}/> : <Moon size={16}/>}</button>
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
}

export function BuildLog({ preview = false }: { preview?: boolean }) {
  // Data is oldest-first; show newest at the top and number entries chronologically.
  // The home page preview shows "What's next" plus the latest real product.
  const entries = buildLog.map((entry, i) => ({ entry, i })).reverse()
  const latest = entries.find(({ entry }) => entry.status !== 'Next')
  const shown = preview ? entries.filter(e => e.entry.status === 'Next' || e === latest) : entries
  return (
    <ol className="build-log">
      {shown.map(({ entry, i }) => { return (
        <li key={entry.name} className={'log-item log-' + entry.status.toLowerCase()}>
          <span className="log-dot" aria-hidden="true" />
          <div className="log-card">
            <div className="log-head">
              <span className="log-index">0{i + 1} · {entry.date}</span>
              <span className={'log-status log-status-' + entry.status.toLowerCase()}>{entry.status}</span>
            </div>
            <div className="log-title">
              {entry.logo
                ? <img src={entry.logo} alt={entry.name + ' logo'} className="log-logo" />
                : <span className="log-logo log-logo-empty" aria-hidden="true"><Sparkles size={20}/></span>}
              <h3>{entry.name}</h3>
            </div>
            <p>{entry.summary}</p>
            {entry.stats && <dl className="log-stats">{entry.stats.map(st => <div key={st.label}><dt>{st.label}</dt><dd>{st.value}</dd></div>)}</dl>}
            {entry.lesson && <p className="log-lesson"><strong>What I learned:</strong> {entry.lesson}</p>}
            {entry.url && <a href={entry.url} target="_blank" rel="noreferrer" className="text-link">Visit {entry.name} <ArrowUpRight size={15}/></a>}
          </div>
        </li>
      )})}
      {!preview && <li className="log-origin">
        <span className="log-dot" aria-hidden="true" />
        <span>Where it all started · {buildLog[0].date}</span>
      </li>}
    </ol>
  )
}

const serviceIcons: Record<string, typeof Video> = {
  '1-1-weekend-catch-up': Coffee,
  'frontend-mock-interview': Video,
  'resume-review': FileText,
  'most-asked-dsa-questions-js-book': BookOpen,
}

export function ServiceList() {
  const services = products.filter(p => p.status === 'LIVE')
  return (
    <div className="service-grid">
      {services.map(s => {
        const Icon = serviceIcons[s.slug] ?? Video
        return (
          <a key={s.slug} href={s.buyUrl} target="_blank" rel="noreferrer" className="service-card">
            <div className="service-top">
              <span className="service-icon"><Icon size={20}/></span>
              {s.badge && <span className="tag tag-orange">{s.badge}</span>}
            </div>
            <span className="service-meta">{s.duration ?? 'Digital download · PDF'}</span>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <div className="service-bottom">
              <span className="product-price-row"><span className="price-now">{s.price}</span>{s.originalPrice && <span className="price-was">{s.originalPrice}</span>}{s.rating && <span className="service-rating">★ {s.rating}</span>}</span>
              <span className="service-cta">{s.category === 'Coaching' ? 'Book' : 'Get it'} <ArrowUpRight size={15}/></span>
            </div>
          </a>
        )
      })}
    </div>
  )
}

// Repeating wide/narrow pattern so rows read like: wide · narrow · narrow, then narrow · wide · narrow.
const photoSpans = ['wide', 'narrow', 'narrow', 'narrow', 'wide', 'narrow']

export function AboutGallery() {
  return (
    <section className="about-gallery">
      <div className="gallery-quote">
        <h2>{aboutQuote.text}</h2>
        <p>{aboutQuote.sub}</p>
      </div>
      <div className="photo-grid">
        {aboutPhotos.map((photo, i) => (
          <figure key={photo.src} className={'photo-tile ' + photoSpans[i % photoSpans.length]}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export function StatsStrip() {
  return <div className="stats-strip">{creatorStats.map(s => <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div>
}

export function Bento() {
  return (
    <div className="bento">
      {highlights.map(h => {
        const external = h.href.startsWith('http')
        const body = <><span className={'tag tag-' + h.tone}>{h.tag}</span><h3>{h.title}</h3><p>{h.description}</p><span className="text-link">{h.linkText} <ArrowUpRight size={15}/></span></>
        const cls = h.wide ? 'bento-cell wide' : 'bento-cell'
        return external
          ? <a key={h.title} href={h.href} target="_blank" rel="noreferrer" className={cls}>{body}</a>
          : <Link key={h.title} href={h.href} className={cls}>{body}</Link>
      })}
    </div>
  )
}
export function Navbar() { const [open, setOpen] = useState(false); return <header className="site-nav"><div className="container nav-inner"><Link href="/" className="wordmark">thisis<span>.sambit</span></Link><nav className={open ? 'nav-links open' : 'nav-links'}><Link href="/">Home</Link><Link href="/products">Build log</Link><Link href="/setup">Setup</Link><Link href="/about">About</Link></nav><div className="nav-actions"><ThemeToggle/><a href={IG_PROFILE} target="_blank" rel="noreferrer" className="button button-brand"><InstagramIcon size={15}/> Follow</a><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></div></header> }
export function Footer() { return <footer className="footer"><div className="container footer-top"><div><Link href="/" className="wordmark">thisis<span>.sambit</span></Link><p className="muted footer-copy">A small internet headquarters for<br/>products, ideas, and the journey.</p></div><div className="footer-links"><Link href="/products">Build log</Link><Link href="/setup">Setup</Link><Link href="/about">About</Link><a href="mailto:hello@thisis.sambit">Contact</a></div><div className="footer-social"><a href={IG_PROFILE} target="_blank" rel="noreferrer">Instagram</a><a href="#">LinkedIn</a><a href="#">GitHub</a><a href="#">YouTube</a></div></div><div className="container footer-bottom"><span>© 2026 Sambit Nanda</span><span>Made with intent.</span></div></footer> }
export function SectionHeader({eyebrow, title, link}: {eyebrow:string; title:string; link?: string}) { return <div className="section-header"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{link && <Link href={link} className="text-link">View all <ArrowUpRight size={15}/></Link>}</div> }
export function StatusBadge({status}: {status: Product['status']}) { return <span className={'status status-'+status.toLowerCase().replace(' ','-')}><i/> {status}</span> }
export function SponsorCarousel() { const [active, setActive] = useState(0); const sponsor = sponsors[active]; const move = (direction: number) => setActive((active + direction + sponsors.length) % sponsors.length); return <section className="sponsor-section container" aria-labelledby="sponsor-title"><div className="sponsor-heading"><div><p className="eyebrow">Featured on the desk</p><h2 id="sponsor-title">Objects behind the work.</h2><p className="sponsor-subtitle">A rotating shelf of products I use, recommend, or partner with. Paid relationships are always labelled.</p></div><div className="carousel-controls"><button className="carousel-button" aria-label="Previous sponsor" onClick={() => move(-1)}><ArrowLeft size={16}/></button><button className="carousel-button" aria-label="Next sponsor" onClick={() => move(1)}><ArrowRight size={16}/></button></div></div><div className="sponsor-track" role="region" aria-live="polite" aria-label="Featured brand sponsors"><article className={'sponsor-feature '+sponsor.accent}><div className="sponsor-brand-mark">{sponsor.mark}</div><div className="sponsor-feature-copy"><span className="sponsor-index">0{active + 1} / 0{sponsors.length}</span><h3>{sponsor.name}</h3><p>{sponsor.tagline}</p></div><div className="sponsor-bottomline"><span className="sponsor-category">{sponsor.category}</span><span className="sponsor-disclosure">{sponsor.disclosure}</span></div><ArrowUpRight className="sponsor-arrow" size={19}/></article><div className="sponsor-mini-list">{sponsors.map((item, index) => <button key={item.name} className={index === active ? 'sponsor-mini active' : 'sponsor-mini'} onClick={() => setActive(index)} aria-label={'Show '+item.name+' sponsor'}><span>{item.mark}</span><strong>{item.name}</strong><small>{item.category}</small></button>)}</div></div></section> }

export function Lightbox({ images, name }: { images: string[]; name: string }) {
  const [open, setOpen] = useState(false)
  const [i, setI] = useState(0)
  const go = (n: number) => setI((i + n + images.length) % images.length)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  })
  const openAt = (n: number) => { setI(n); setOpen(true) }
  return (
    <div className="gallery">
      <button className="gallery-main" onClick={() => openAt(i)} aria-label={`Open ${name} image ${i + 1} full screen`}>
        <img src={images[i]} alt={`${name} — image ${i + 1}`} />
        <span className="gallery-zoom"><Maximize2 size={16} /> View</span>
      </button>
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((src, n) => (
            <button key={src} className={n === i ? 'thumb active' : 'thumb'} onClick={() => setI(n)} aria-label={`Show ${name} image ${n + 1}`}>
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} images`} onClick={() => setOpen(false)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setOpen(false)}><X size={22} /></button>
          {images.length > 1 && <button className="lightbox-nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); go(-1) }}><ArrowLeft size={22} /></button>}
          <img className="lightbox-img" src={images[i]} alt={`${name} — image ${i + 1}`} onClick={(e) => e.stopPropagation()} />
          {images.length > 1 && <button className="lightbox-nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); go(1) }}><ArrowRight size={22} /></button>}
          <span className="lightbox-count">{i + 1} / {images.length}</span>
        </div>
      )}
    </div>
  )
}

export function BuyButton({ url, type, price, retailer }: { url: string; type: 'direct' | 'affiliate'; price: string; retailer?: string }) {
  return (
    <div className="buy-block">
      <a href={url} target="_blank" rel="noreferrer" className="button button-dark buy-button">
        {type === 'direct' ? `Buy now — ${price}` : `Buy${retailer ? ` at ${retailer}` : ''} — ${price}`}
        <ArrowUpRight size={16} />
      </a>
      <span className="buy-note">{type === 'direct' ? 'Sold directly by thisis.sambit — instant access after checkout.' : `Affiliate link${retailer ? ` to ${retailer}` : ''}. I may earn a commission at no extra cost to you.`}</span>
    </div>
  )
}

export function ProductCard({product}: {product: Product}) { return <Link href={'/products/'+product.slug} className="product-card"><div className={'product-visual '+product.accent}><span className="product-mark">{product.mark}</span><span className="visual-label">thisis.sambit / 0{products.indexOf(product)+1}</span>{product.badge && <span className="product-badge">{product.badge}</span>}</div><div className="card-meta"><div>{product.duration && <span className="product-format">{product.duration}</span>}<div className="card-title">{product.name}</div><p>{product.description}</p></div><ArrowUpRight size={18}/></div><div className="card-bottom"><span className="product-price-row">{product.price !== '—' && <span className="price-now">{product.price}</span>}{product.originalPrice && <span className="price-was">{product.originalPrice}</span>}</span>{product.rating ? <span className="product-rating">★ {product.rating}</span> : <StatusBadge status={product.status}/>}</div></Link> }
export function SetupProductCard({item}: {item: SetupItem}) { return <Link href={'/setup/'+item.slug} className="setup-card"><div className="setup-image"><img src={item.image} alt={item.name}/><span className="category-pill">{item.category}</span></div><div className="setup-info"><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="price">{item.price}</span></div></Link> }
export function BlogCard({post}: {post: Post}) { return <a href="#" className="blog-card"><img src={post.image} alt=""/><div className="blog-info"><div className="blog-meta"><span>{post.category}</span><span>{post.date}</span></div><h3>{post.title}</h3><span className="muted">{post.read} <ArrowUpRight size={14}/></span></div></a> }
export function Newsletter() { const [email, setEmail] = useState(''); const [joined, setJoined] = useState(false); return <div className="newsletter"><div><p className="eyebrow">Stay in the loop</p><h2>Follow the journey.</h2><p className="muted">Products I&apos;m building, things I&apos;m learning and useful resources — occasionally in your inbox.</p></div>{joined ? <div className="joined"><Check size={18}/> You&apos;re on the list.</div> : <form onSubmit={e => {e.preventDefault(); if(email) setJoined(true)}}><input type="email" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required/><button className="button button-dark">Join the journey <ArrowUpRight size={15}/></button></form>}</div> }
export function CTA() { return <section className="cta container"><div><p className="eyebrow">What&apos;s next</p><h2>I&apos;m always building<br/><em>something.</em></h2></div><Link href="/products" className="button button-brand">See what I&apos;m working on <ArrowUpRight size={16}/></Link></section> }
export { products, setup, posts }
