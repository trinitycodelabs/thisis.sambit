import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Navbar,
  Footer,
  SectionHeader,
  SetupProductCard,
  ServiceList,
  Newsletter,
  CTA,
  ReelsCarousel,
  InstagramIcon,
  StatsStrip,
  Bento,
  BuildLog,
} from "@/components/site";
import { setup, creatorStats } from "@/lib/data";

const IG_PROFILE = "https://www.instagram.com/thisis.sambit";

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
          <div className="hero-grid" />
          <div className="hero-glow" />
          <section className="hero container">
            <a
              href={IG_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="hero-pill"
            >
              <Image src="/profile.png" alt="" width={26} height={26} />
              Followed by <b>{creatorStats[0].value}</b> on Instagram
              <ArrowUpRight size={14} />
            </a>
            <h1>
              I build products
              <br />
              for the <em>internet.</em>
            </h1>
            <p className="hero-sub">
              Software Engineer & Founder building AI, SaaS and digital products
              — and breaking down tech in bite-sized reels along the way.
            </p>
            <div className="hero-actions">
              <a
                href={IG_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="button button-brand"
              >
                <InstagramIcon size={16} /> Follow @thisis.sambit
              </a>
              <Link href="/products" className="button button-outline">
                See my build log <ArrowUpRight size={16} />
              </Link>
            </div>
            <StatsStrip />
          </section>
        </div>
        <section className="container section">
          <SectionHeader eyebrow="What you'll find here" title="Everything, in one place" />
          <Bento />
        </section>
        <section className="container section" id="work-with-me">
          <SectionHeader eyebrow="Work with me" title="1:1 calls & resources" />
          <p className="section-lede">
            Mock interviews, resume reviews and interview prep — booked and delivered via Topmate.
          </p>
          <ServiceList />
        </section>
        <section className="container section">
          <SectionHeader
            eyebrow="The build log"
            title="Shipped, failed, logged"
            link="/products"
          />
          <p className="section-lede">
            What I&apos;m building next, and my latest build — every product, including the ones that didn&apos;t work, is in the full log.
          </p>
          <BuildLog preview />
        </section>
        <ReelsCarousel />
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
        <section className="about-strip container">
          <div className="about-monogram">
            <Image
              src="/profile.png"
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
