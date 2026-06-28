import Link from "next/link";

export const metadata = {
  title: "Game | Tarshaa Krishnaraj",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Game() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <main className="print-page flex flex-col items-center gap-[28px] row-start-2">
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <div className="self-start flex flex-col gap-[8px]">
          <h1>Game</h1>
          <p className="project-detail-blurb">Game designs, 2024.</p>
        </div>
        <div className="print-hero-row">
          <video
            src={`${basePath}/videos/game-hero.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="print-hero"
          />
          <div className="print-hero-text">
            <p>
              <em>Post-Human Game : Pathenogenesis</em> is a speculative game
              built in Unreal Engine 5 with National Geographic. It imagines
              a world rebuilt by microorganisms after the human era, asking
              what creative play looks like when we let technology answer to
              better futures, not the ones we&apos;ve been fed for long.
            </p>
            <p>
              I designed the world terrain and the wildlife that lives in it,
              dividing the game space through rocks and materials devoid of the
              human touch. At the center is Dia, the small organism players
              guide through environments mapped from geology rather than
              geography. The result is a quiet proof that games can carry
              serious cosmological questions without losing their joy.
            </p>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/images/game/post-human-phone.jpg`}
          alt="Post-Human Game: Pathenogenesis"
          className="print-hero"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/images/game/process-stills.jpg`}
          alt="Process stills from building the game in Unreal Engine 5"
          className="game-stills"
        />
      </main>
    </div>
  );
}
