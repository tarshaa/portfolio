import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { WrenchBackground } from "@/components/WrenchBackground";
import type { ContactLink, ProjectLink } from "@/types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface Content {
  name: string;
  bio: string;
  projectsHeading: string;
  projects: ProjectLink[];
  interactionsHeading: string;
  interactions: ProjectLink[];
  writingsHeading: string;
  writings: ProjectLink[];
  contacts: ContactLink[];
}

async function getContent(): Promise<Content> {
  const raw = await fs.readFile(path.join(process.cwd(), "data", "content.json"), "utf8");
  return JSON.parse(raw) as Content;
}

function ProjectCard({ project }: { project: ProjectLink }) {
  const hoverClass =
    project.href === "/product-innovation" ? "product-innovation-link" : undefined;
  const inner = (
    <div className="project flex flex-col gap-[6px]">
      <h3>{project.title}</h3>
      {project.description && (
        <p className="whitespace-pre-line">{project.description}</p>
      )}
    </div>
  );
  if (project.external) {
    return (
      <a
        href={project.href}
        className={hoverClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={project.href} className={hoverClass}>
      {inner}
    </Link>
  );
}

export default async function Home() {
  const c = await getContent();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <WrenchBackground hoverOnly />
      <main className="home flex flex-col gap-[36px] row-start-2 sm:items-start">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[8px]">
            <h1>{c.name}</h1>
            <div className="name-contacts flex flex-row gap-[14px]">
              {c.contacts.map((ct) =>
                ct.external ? (
                  <a
                    key={ct.href}
                    href={ct.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ct.label}
                  </a>
                ) : (
                  <a key={ct.href} href={ct.href}>
                    {ct.label}
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[28px]">
            <p data-bio>{c.bio}</p>
            <ZoomableImage
              src={`${basePath}/images/hero-placeholder.png`}
              alt=""
              className="hero-image"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[22px]">
            <h2>{c.projectsHeading}</h2>
            {c.projects.map((p) => (
              <ProjectCard key={p.href} project={p} />
            ))}
          </div>

          <div className="flex flex-col gap-[22px]">
            <h2>{c.interactionsHeading}</h2>
            {c.interactions.map((p) => (
              <ProjectCard key={p.href} project={p} />
            ))}
          </div>

          <div className="writings flex flex-col gap-[22px]">
            <h2>{c.writingsHeading}</h2>
            {c.writings.map((p) => (
              <ProjectCard key={p.href} project={p} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
