import Image from "next/image";

// app/components/InlineSvgTrusted.tsx (Server Component)
type Props = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  revalidate?: number;
};

export default async function InlineSvgTrusted({
  src,
  alt = "icon",
  className,
  width,
  height,
  revalidate = 60,
}: Props) {
  const res = await fetch(src, { next: { revalidate } });
  if (!res.ok) return null;

  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("image/svg+xml")) {
    // Fallback for non-SVGs
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  const svg = await res.text();

  // Optional guard if you still want a quick sanity check
  if (!svg.trim().startsWith("<svg")) return null;

  return (
    <span
      role="img"
      aria-label={alt}
      style={{ width, height }}
      className={`flex items-center justify-center ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
