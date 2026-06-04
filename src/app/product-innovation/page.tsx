import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { WrenchBackground } from "@/components/WrenchBackground";

export const metadata = {
  title: "Product innovation | Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ProductInnovation() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <WrenchBackground />
      <main className="home flex flex-col gap-[28px] row-start-2 sm:items-start">
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <div className="flex flex-col gap-[8px]">
          <h1>Product innovation</h1>
          <p className="project-detail-blurb">
            Designed and innovated designs across product surfaces.
          </p>
        </div>
        <video
          src={`${basePath}/videos/flora-blackfriday-promo.mp4`}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="project-media"
        />

        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[8px]">
            <a
              href="https://flora.ai/techniques"
              target="_blank"
              rel="noopener noreferrer"
              className="heading-link"
            >
              <h2>Techniques</h2>
            </a>
            <p className="project-detail-blurb">Compressed generative ai workflows</p>
          </div>
          <ZoomableImage
            src={`${basePath}/images/techniques.gif`}
            alt="techniques"
            className="project-media"
          />
        </div>
      </main>
    </div>
  );
}
