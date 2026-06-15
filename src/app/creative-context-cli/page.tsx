import Link from "next/link";

export const metadata = {
  title: "Creative Context CLI | Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CreativeContextCLI() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <main className="home detail-page flex flex-col gap-[28px] row-start-2 sm:items-start">
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <div className="flex flex-col gap-[8px]">
          <h1>Creative Context CLI</h1>
          <p className="project-detail-blurb">
            A CLI for creatives. Sync your Pinterest boards locally so Claude
            can search them by mood, aesthetic, and pattern. Zero config, just
            be logged in.
          </p>
          <a
            href="https://x.com/tartartuna/status/2042989251759952303?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on X ↗
          </a>
        </div>
        <video
          src={`${basePath}/videos/creative-context-cli.mp4`}
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
