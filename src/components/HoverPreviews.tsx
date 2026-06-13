const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface PreviewItem {
  kind: "img" | "video";
  src: string;
  slot: 1 | 2 | 3 | 4;
}

const GROUPS: { key: string; items: PreviewItem[] }[] = [
  {
    key: "design-and-marketing",
    items: [
      { kind: "img", src: "/images/flora-series-a.gif", slot: 1 },
      { kind: "img", src: "/images/flora-labs-merch.png", slot: 2 },
      { kind: "img", src: "/images/flora-pricing.png", slot: 3 },
      { kind: "video", src: "/videos/flora-mcp-api.mp4", slot: 4 },
    ],
  },
  {
    key: "frontier-ai-models",
    items: [{ kind: "video", src: "/videos/gif-o3.mp4", slot: 1 }],
  },
  {
    key: "print",
    items: [
      { kind: "img", src: "/images/operating-manual-hero.gif", slot: 1 },
      { kind: "img", src: "/images/operating-manual/operating-manual-1.png", slot: 2 },
      { kind: "img", src: "/images/operating-manual/operating-manual-4.png", slot: 3 },
      { kind: "img", src: "/images/operating-manual/operating-manual-3.png", slot: 4 },
    ],
  },
  {
    key: "creative-context-cli",
    items: [{ kind: "video", src: "/videos/creative-context-cli.mp4", slot: 1 }],
  },
  {
    key: "trailer-technologist",
    items: [
      { kind: "video", src: "/videos/magnolia.mp4", slot: 1 },
      { kind: "video", src: "/videos/magnolia-assessment.mp4", slot: 2 },
    ],
  },
];

export function HoverPreviews() {
  return (
    <>
      {GROUPS.map((g) => (
        <div
          key={g.key}
          className={`hover-group hover-group--${g.key}`}
          aria-hidden="true"
        >
          {g.items.map((item, idx) =>
            item.kind === "video" ? (
              <video
                key={idx}
                src={`${basePath}${item.src}`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={`hp hp-${g.key}-${item.slot}`}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={idx}
                src={`${basePath}${item.src}`}
                alt=""
                className={`hp hp-${g.key}-${item.slot}`}
              />
            ),
          )}
        </div>
      ))}
    </>
  );
}
