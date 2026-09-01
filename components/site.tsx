'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Maximize2, Menu, Moon, Sun, X } from 'lucide-react'
import { products, setup, resources, posts, sponsors, reels, type Product, type SetupItem, type Resource, type Post } from '@/lib/data'

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
          <h2 id="reels-title">Top performing reels</h2>
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
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={`${reel.url}?utm_source=ig_embed`}
              data-instgrm-version="14"
              style={{ background: 'var(--card)', border: 0, margin: 0, padding: 0, width: '100%' }}
            >
              <a href={reel.url} target="_blank" rel="noreferrer">View this reel on Instagram</a>
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function ThemeToggle() { const [dark, setDark] = useState(false); return <button aria-label="Toggle theme" className="icon-button" onClick={() => { document.documentElement.classList.toggle('dark'); setDark(!dark) }}>{dark ? <Sun size={16}/> : <Moon size={16}/>}</button> }
export function Navbar() { const [open, setOpen] = useState(false); return <header className="site-nav"><div className="container nav-inner"><Link href="/" className="wordmark">thisis<span>.sambit</span></Link><nav className={open ? 'nav-links open' : 'nav-links'}><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/setup">Setup</Link><Link href="/resources">Resources</Link><Link href="/about">About</Link></nav><div className="nav-actions"><ThemeToggle/><Link href="/products" className="button button-dark">Explore products <ArrowUpRight size={15}/></Link><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></div></header> }
export function Footer() { return <footer className="footer"><div className="container footer-top"><div><Link href="/" className="wordmark">thisis<span>.sambit</span></Link><p className="muted footer-copy">A small internet headquarters for<br/>products, ideas, and the journey.</p></div><div className="footer-links"><Link href="/products">Products</Link><Link href="/setup">Setup</Link><Link href="/resources">Resources</Link><Link href="/about">About</Link><a href="mailto:hello@thisis.sambit">Contact</a></div><div className="footer-social"><a href="#">X</a><a href="#">in</a><a href="#">gh</a><a href="#">yt</a></div></div><div className="container footer-bottom"><span>© 2026 Sambit Nanda</span><span>Made with intent.</span></div></footer> }
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

export function ProductCard({product}: {product: Product}) { return <Link href={'/products/'+product.slug} className="product-card"><div className={'product-visual '+product.accent}><span className="product-mark">{product.mark}</span><span className="visual-label">thisis.sambit / 0{products.indexOf(product)+1}</span></div><div className="card-meta"><div><div className="card-title">{product.name}</div><p>{product.description}</p></div><ArrowUpRight size={18}/></div><div className="card-bottom"><StatusBadge status={product.status}/>{product.price !== '—' && <span>{product.price}</span>}</div></Link> }
export function SetupProductCard({item}: {item: SetupItem}) { return <Link href={'/setup/'+item.slug} className="setup-card"><div className="setup-image"><img src={item.image} alt={item.name}/><span className="category-pill">{item.category}</span></div><div className="setup-info"><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="price">{item.price}</span></div></Link> }
export function ResourceCard({item}: {item: Resource}) { return <a href="#" className="resource-card"><span className="resource-mark">{item.mark}</span><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="resource-cat">{item.category}</span><ArrowUpRight size={16}/></a> }
export function BlogCard({post}: {post: Post}) { return <a href="#" className="blog-card"><img src={post.image} alt=""/><div className="blog-info"><div className="blog-meta"><span>{post.category}</span><span>{post.date}</span></div><h3>{post.title}</h3><span className="muted">{post.read} <ArrowUpRight size={14}/></span></div></a> }
export function Newsletter() { const [email, setEmail] = useState(''); const [joined, setJoined] = useState(false); return <div className="newsletter"><div><p className="eyebrow">Stay in the loop</p><h2>Follow the journey.</h2><p className="muted">Products I&apos;m building, things I&apos;m learning and useful resources — occasionally in your inbox.</p></div>{joined ? <div className="joined"><Check size={18}/> You&apos;re on the list.</div> : <form onSubmit={e => {e.preventDefault(); if(email) setJoined(true)}}><input type="email" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required/><button className="button button-dark">Join the journey <ArrowUpRight size={15}/></button></form>}</div> }
export function CTA() { return <section className="cta container"><div><p className="eyebrow">What&apos;s next</p><h2>I&apos;m always building<br/><em>something.</em></h2></div><Link href="/products" className="button button-light">See what I&apos;m working on <ArrowUpRight size={16}/></Link></section> }
export { products, setup, resources, posts }
