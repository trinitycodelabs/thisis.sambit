import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import {
  Navbar,
  Footer,
  SectionHeader,
  ProductCard,
  SetupProductCard,
  ResourceCard,
  BlogCard,
  Newsletter,
  CTA,
  SponsorCarousel,
  ReelsCarousel,
} from "@/components/site";
import { products, setup, resources, posts } from "@/lib/data";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-wrap">
          <video
            className="hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/hero-light.mp4" type="video/mp4" />
          </video>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow intro-eyebrow">
              <span className="pulse" /> Software Engineer <b>•</b> Founder{" "}
              <b>•</b> Builder
            </div>
            <h1>
              I build products
              <br />
              for the <em>internet.</em>
            </h1>
            <p className="hero-sub">
              Software Engineer & Founder building AI, SaaS and digital products
              while sharing the journey along the way.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="button button-dark">
                Explore my products <ArrowUpRight size={16} />
              </Link>
              <a href="#journey" className="button button-ghost">
                Follow my journey <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="hero-note">
              <span>Based between</span>
              <strong>
                India <i>→</i> London
              </strong>
            </div>
          </div>
          <div className="portrait">
            <div className="portrait-glow" />
            <div className="portrait-inner">
              <div className="portrait-initial">SN</div>
              <span>
                THIS IS
                <br />
                Sambit
              </span>
            </div>
            <div className="portrait-caption">
              Building from wherever there&apos;s
              <br />
              good coffee and a clear signal.
            </div>
          </div>
        </section>
        </div>
        <SponsorCarousel />
        <section className="container section">
          <SectionHeader
            eyebrow="The studio"
            title="Things I'm building"
            link="/products"
          />
          <div className="product-grid">
            {products.slice(0, 3).map((p) => (
              <ProductCard product={p} key={p.slug} />
            ))}
          </div>
        </section>
        <section className="container section setup-preview">
          <SectionHeader
            eyebrow="The essentials"
            title="My setup"
            link="/setup"
          />
          <p className="section-lede">
            Everything I use to work, build and create.
          </p>
          <div className="setup-grid">
            {setup.slice(0, 3).map((item) => (
              <SetupProductCard item={item} key={item.name} />
            ))}
          </div>
        </section>
        <section className="container section store-section">
          <div className="store-copy">
            <p className="eyebrow">The digital shelf</p>
            <h2>
              Useful things,
              <br />
              <em>beautifully made.</em>
            </h2>
            <p className="muted">
              Templates, tools, and field notes for people building their own
              corner of the internet.
            </p>
            <Link href="/products" className="text-link">
              Browse the digital store <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="store-card">
            <div className="store-orbit">S</div>
            <div>
              <span className="status status-building">
                <i /> Coming next
              </span>
              <h3>Signal Kit</h3>
              <p>A field guide for building in public without the noise.</p>
            </div>
            <ArrowUpRight size={18} />
          </div>
        </section>
        <section className="container section">
          <SectionHeader
            eyebrow="Good tools, shared freely"
            title="Resources I recommend"
            link="/resources"
          />
          <div className="resource-grid">
            {resources.map((item) => (
              <ResourceCard item={item} key={item.name} />
            ))}
          </div>
        </section>
        <ReelsCarousel />
        <section className="container section" id="journey">
          <SectionHeader
            eyebrow="Notes from the road"
            title="Building in public"
            link="/about"
          />
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard post={post} key={post.title} />
            ))}
          </div>
        </section>
        <section className="about-strip container">
          <div className="about-monogram">
            <Image
              src="/IMG_4148.PNG"
              alt="Sambit"
              width={200}
              height={200}
              priority
            />
          </div>
          <div>
            <p className="eyebrow">A little about me</p>
            <h2>Hey, I&apos;m Sambit.</h2>
            <p className="muted about-text">
              I&apos;m a Software Engineer and Founder building products for the
              internet. I work remotely, build AI and SaaS products, experiment
              with new ideas and share what I learn along the way.
            </p>
            <Link href="/about" className="text-link">
              More about me <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
        <section className="container">
          <Newsletter />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
