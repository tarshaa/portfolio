import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";

export const metadata = {
  title: "Print | Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PAGES = [1, 2, 3, 4, 5, 6] as const;

export default function Print() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <main className="print-page flex flex-col items-center gap-[28px] row-start-2">
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <div className="self-start flex flex-col gap-[8px]">
          <h1>Print</h1>
          <p className="project-detail-blurb">
            Operating Manual, December 2025.
          </p>
        </div>
        <div className="print-hero-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/operating-manual-hero.gif`}
            alt="Operating Manual"
            className="print-hero"
          />
          <div className="print-hero-text">
            <p>
              The Operating Manual is FLORA&apos;s first printed edition, a
              field guide that frames generative AI as a new operating layer
              for creative work. It was made for the enterprises and teams
              just stepping into this shift, who need a way in that isn&apos;t
              hype or jargon.
            </p>
            <p>
              The book maps the workflows, principles, and emerging systems
              already taking shape, so the move to AI feels less like overhead
              and more like opening a door. The aim was simple: make adoption
              approachable, and make creative work with AI feel like something
              to lean into, not endure.
            </p>
          </div>
        </div>
        <div className="print-grid">
          {PAGES.map((n) => (
            <ZoomableImage
              key={n}
              src={`${basePath}/images/operating-manual/operating-manual-${n}.png`}
              alt={`Operating Manual page ${n}`}
              className="print-grid-item"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
