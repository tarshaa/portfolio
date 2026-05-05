import Link from "next/link";

export const metadata = {
  title: "Product innovation — Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ProductInnovation() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
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
      </main>
    </div>
  );
}
