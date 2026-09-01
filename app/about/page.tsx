import Image from "next/image";
import { Navbar, Footer, CTA } from "@/components/site";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container page-main about-page">
        <p className="eyebrow">The person behind the products</p>
        <h1>
          Hey, I&apos;m <em>Sambit.</em>
        </h1>
        <div className="about-columns">
          <div className="about-monogram large">
            <Image
              src="/IMG_4148.PNG"
              alt="Sambit"
              width={360}
              height={360}
              priority
            />
          </div>
          <div className="about-body">
            <p>
              I&apos;m a Software Engineer and Founder building products for the
              internet.
            </p>
            <p>
              I work remotely, build AI and SaaS products, experiment with new
              ideas, and share what I learn along the way. I&apos;m interested
              in the space between a good idea and the useful thing it becomes.
            </p>
            <p>
              This website is where you&apos;ll find everything I&apos;m
              building, using, and recommending.
            </p>
            <div className="social-row">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">YouTube</a>
              <a href="#">X</a>
            </div>
          </div>
        </div>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
