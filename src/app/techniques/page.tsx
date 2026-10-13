import Link from "next/link";

export const metadata = {
  title: "Techniques | Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Techniques() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <main className="home detail-page flex flex-col gap-[28px] row-start-2 sm:items-start">
        <Link href="/" className="back-link">← Back</Link>
        <div className="flex flex-col gap-[8px]">
          <h1>Techniques</h1>
          <p className="project-detail-blurb">
            Compressed generative AI workflows for{" "}
            <a href="https://flora.ai/" target="_blank" rel="noopener noreferrer" className="company-link">FLORA</a>.
          </p>
        </div>
        <video
          src={`${basePath}/videos/techniques.mp4`}
          autoPlay
          muted
          loop
          playsInline
          controls
          aria-label="FLORA Techniques workflow screen recording"
          className="project-media"
        />
        <div className="flex flex-col gap-[8px]">
          <h2 className="no-divider">From discovery to a usable result</h2>
          <p className="project-detail-blurb">
            Users discover a technique through visual examples, upload an image,
            and run the workflow. I organized the experience around inputs and
            results, with clear routes to download, rerun, or continue editing.
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <a href="https://flora.ai/product-technique" target="_blank" rel="noopener noreferrer" className="project-link">
            Explore FLORA Techniques ↗
          </a>
          <a href="https://www.figma.com/deck/8pdDowjy9j9aVVz4kEyEts/Tarshaa-s-Portfolio?node-id=7100-152" target="_blank" rel="noopener noreferrer" className="project-link">
            View the original portfolio slide ↗
          </a>
        </div>
      </main>
    </div>
  );
}
