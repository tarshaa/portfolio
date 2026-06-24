const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface PreviewItem {
  kind: "img" | "video";
  src: string;
  slot: 1 | 2 | 3 | 4;
}

const GROUPS: { key: string; items: PreviewItem[] }[] = [
  {
    key: "product-innovation",
    items: [
      { kind: "video", src: "/videos/flora-blackfriday-promo.mp4", slot: 1 },
      { kind: "video", src: "/videos/techniques.mp4", slot: 2 },
    ],
  },
  {
    key: "design-and-marketing",
    items: [
      { kind: "img", src: "/images/flora-series-a.gif", slot: 1 },
      { kind: "img", src: "/images/flora-pricing.png", slot: 3 },
      { kind: "video", src: "/videos/flora-mcp-api.mp4", slot: 4 },
    ],
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
