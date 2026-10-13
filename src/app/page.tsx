import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { HoverPreviews } from "@/components/HoverPreviews";
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

const HOVER_CLASSES: Record<string, string> = {
  "/product-innovation": "product-innovation-link",
  "/design-and-marketing": "design-and-marketing-link",
  "/frontier-ai-models": "frontier-ai-models-link",
  "/print": "print-link",
  "/creative-context-cli": "creative-context-cli-link",
  "/trailer-technologist": "trailer-technologist-link",
};

const INLINE_PREVIEWS: Record<string, string> = {
  "/frontier-ai-models": "/videos/gif-o3.mp4",
  "/print": "/images/operating-manual-hero.gif",
  "/creative-context-cli": "/videos/creative-context-cli.mp4",
};


const COMPANY_WEBSITES: Record<string, string> = {
  "Medal": "https://medal.tv/",
  "General Intuition": "https://www.generalintuition.com/",
  "FLORA": "https://flora.ai/",
  "Magnolia Pictures": "https://www.magnoliapictures.com/",
  "Disney": "https://www.disney.com/",
  "Pinterest": "https://www.pinterest.com/",
  "Claude": "https://claude.ai/",
};

function CompanyText({ text }: { text: string }) {
  return text.split(/(Magnolia Pictures|General Intuition|Medal|FLORA|Disney|Pinterest|Claude)/g).map((part, index) =>
    COMPANY_WEBSITES[part] ? (
      <a key={index} href={COMPANY_WEBSITES[part]} target="_blank" rel="noopener noreferrer" className="company-link">
        {part}
      </a>
    ) : part,
  );
}

function ProjectCard({ project }: { project: ProjectLink }) {
  const hoverClass = HOVER_CLASSES[project.href];
  const title = <h3 className={hoverClass}>{project.title}</h3>;
  const wrapped = (
    <div className="project flex flex-col gap-[6px]">
      {project.external ? (
        <a href={project.href} target="_blank" rel="noopener noreferrer">{title}</a>
      ) : (
        <Link href={project.href}>{title}</Link>
      )}
      {project.description && (
        <p className="whitespace-pre-line"><CompanyText text={project.description} /></p>
      )}
    </div>
  );

  const inlineSrc = INLINE_PREVIEWS[project.href];
  if (inlineSrc) {
    const isVideo = inlineSrc.endsWith(".mp4");
    return (
      <div className="project-row">
        {wrapped}
        {isVideo ? (
          <video
            src={`${basePath}${inlineSrc}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="row-hover-preview"
            aria-hidden="true"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${basePath}${inlineSrc}`}
            alt=""
            className="row-hover-preview"
            aria-hidden="true"
          />
        )}
      </div>
    );
  }
  return wrapped;
}

export default async function Home() {
  const c = await getContent();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 py-20 gap-16 sm:p-20">
      <HoverPreviews />
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
            <p data-bio><CompanyText text={c.bio} /></p>
            <div className="hero-frame">
              <ZoomableImage
                src={`${basePath}/images/hero.jpg`}
                alt=""
                className="hero-image"
              />
            </div>
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
