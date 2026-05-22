const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface Props {
  hoverOnly?: boolean;
}

export function WrenchBackground({ hoverOnly = false }: Props) {
  return (
    <div
      className={`wrench-bg${hoverOnly ? " wrench-bg-hover-only" : ""}`}
      aria-hidden="true"
    >
      {[1, 2, 3, 4].map((i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={`${basePath}/images/wrench-${i}.png`}
          alt=""
          className={`wrench wrench-${i}`}
        />
      ))}
    </div>
  );
}
