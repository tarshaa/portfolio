import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";

export const metadata = {
  title: "Product & Brand Design | Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function DesignAndMarketing() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <main className="home detail-page flex flex-col gap-[28px] row-start-2 sm:items-start">
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <div className="flex flex-col gap-[8px]">
          <h1>Product & Brand Design</h1>
          <p className="project-detail-blurb">
            Product and brand design for Medal / General Intuition and FLORA, from social interactions to launch experiences.
          </p>
        </div>

        <div className="flex flex-col gap-[6px]">
          <a href="#medal-general-intuition" className="project-link">+ Medal / General Intuition</a>
          <a href="#flora-series-a" className="project-link">+ FLORA Series A</a>
          <a href="#flora-merch-design" className="project-link">+ FLORA Merch Design</a>
          <a href="#product-brand-bits" className="project-link">+ Product-Brand Bits</a>
          <a href="#flora-mcp-api" className="project-link">+ FLORA MCP + API</a>
        </div>

        <section id="medal-general-intuition" className="project-block flex flex-col gap-[22px]" aria-labelledby="medal-heading">
          <div className="flex flex-col gap-[8px]">
            <h2 id="medal-heading" className="no-divider">Medal / General Intuition</h2>
            <p className="project-detail-blurb">Product design · Contract</p>
            <p className="project-detail-blurb">
              Players browse gameplay clips and game reviews, then respond through likes, comments, and sharing.
              I designed interaction feedback and rating cards that connect each response to the player, game, and opinion behind it.
            </p>
          </div>
          <div className="medal-work-grid">
            <figure className="medal-work-item">
              <ZoomableImage src={`${basePath}/images/medal-liked-clip.png`} alt="Medal mobile feed showing the liked-clip interaction" className="project-media" />
              <figcaption>
                <h3>Liked-clip interaction</h3>
                <p>Feedback acknowledges a player’s reaction while keeping attention on the clip and their place in the feed.</p>
              </figcaption>
            </figure>
            <figure className="medal-work-item">
              <ZoomableImage src={`${basePath}/images/medal-game-rating.png`} alt="Teamfight Tactics game-rating card with player review, five-star rating, and social actions" className="project-media" />
              <figcaption>
                <h3>Game-rating cards</h3>
                <p>Game artwork, a clear rating, and the player’s own words make reviews easy to scan before joining the conversation.</p>
              </figcaption>
            </figure>
          </div>
          <a href="https://www.figma.com/design/y9y3v8RDHMloIseT8yE794?node-id=38-6" target="_blank" rel="noopener noreferrer" className="project-link">Explore the rating card in Figma ↗</a>
        </section>

        <div id="flora-series-a" className="project-block flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="no-divider">FLORA Series A</h2>
            <p className="project-detail-blurb">
              Scripted, filmed and edited the Series A $40M announcement.
            </p>
          </div>
          <ZoomableImage
            src={`${basePath}/images/flora-series-a.gif`}
            alt="FLORA Series A"
            className="project-media"
          />
        </div>

        <div id="flora-merch-design" className="project-block flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="no-divider">FLORA Merch Design</h2>
            <p className="project-detail-blurb">
              Worked with Michelle Ma to design merch and fundamental modular brand elements
            </p>
          </div>
          <ZoomableImage
            src={`${basePath}/images/flora-labs-merch.jpg`}
            alt="FLORA Merch Design"
            className="project-media"
          />
        </div>

        <div id="product-brand-bits" className="project-block flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="no-divider">Product-Brand Bits</h2>
            <a
              href="https://flora.ai/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              FLORA Pricing
            </a>
          </div>
          <ZoomableImage
            src={`${basePath}/images/flora-pricing.png`}
            alt="FLORA Pricing"
            className="project-media"
          />
        </div>

        <div id="flora-mcp-api" className="project-block flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="no-divider">FLORA MCP + API</h2>
            <p className="project-detail-blurb">
              Brand and launch design for FLORA&apos;s developer platform.
            </p>
          </div>
          <video
            src={`${basePath}/videos/flora-mcp-api.mp4`}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="project-media"
          />
        </div>
      </main>
    </div>
  );
}
