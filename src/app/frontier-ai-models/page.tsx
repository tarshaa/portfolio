import Link from "next/link";

export const metadata = {
  title: "Frontier AI Models — Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FrontierAIModels() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <main className="home flex flex-col gap-[28px] row-start-2 sm:items-start">
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <h1>Frontier AI Models</h1>

        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="no-divider">Benchmarking and Taste-Benching AI Models</h2>
            <p className="project-detail-blurb">
              Tested, documented, and evaluated each model across AI workflows. Designed
              visuals and content to showcase real-world use cases.
            </p>
          </div>
          <video
            src={`${basePath}/videos/gif-o3.mp4`}
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
