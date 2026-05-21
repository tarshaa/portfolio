import Link from "next/link";

export const metadata = {
  title: "Design and Marketing — Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function DesignAndMarketing() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <main className="home flex flex-col gap-[28px] row-start-2 sm:items-start">
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <div className="flex flex-col gap-[8px]">
          <h1>Design and Marketing</h1>
          <p className="project-detail-blurb">
            Innovated Design and Marketing from Seed Stage to Series A.
          </p>
        </div>

        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="no-divider">FLORA Series A</h2>
            <p className="project-detail-blurb">Design, Marketing</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/flora-series-a.gif`}
            alt="FLORA Series A"
            className="project-media"
          />
        </div>
      </main>
    </div>
  );
}
