import Link from "next/link";

export const metadata = {
  title: "Trailer Technologist | Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function TrailerTechnologist() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <main className="home detail-page flex flex-col gap-[28px] row-start-2 sm:items-start">
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <div className="flex flex-col gap-[8px]">
          <h1>Trailer Technologist</h1>
          <p className="project-detail-blurb">
            Cutting trailers, films, and social assets for Magnolia Pictures.
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h2 className="no-divider">Sister Midnight</h2>
          <a
            href="https://youtu.be/g2hiY3SNplw?si=yi2FEvBduE8epeq7"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Watch on YouTube ↗
          </a>
        </div>
        <video
          src={`${basePath}/videos/magnolia.mp4`}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="project-media"
        />

        <div className="flex flex-col gap-[8px]">
          <h2 className="no-divider">The Assessment</h2>
          <a
            href="https://youtu.be/bYmELiSalx0?si=pGDdAPV9xbcQGDF2"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Watch on YouTube ↗
          </a>
        </div>
        <video
          src={`${basePath}/videos/magnolia-assessment.mp4`}
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
