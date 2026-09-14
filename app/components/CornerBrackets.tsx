/**
 * L-shaped corner marks, like a surveyor's benchmark or a camera
 * viewfinder — a small architectural touch for framing photography.
 * Inherits `color` from its parent. Use `variant="top"` when the lower
 * half of the frame is already busy with a text overlay.
 */
export default function CornerBrackets({
  className = "",
  variant = "all",
}: {
  className?: string;
  variant?: "all" | "top";
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="square" vectorEffect="non-scaling-stroke">
        <path d="M5,17 L5,5 L17,5" />
        <path d="M83,5 L95,5 L95,17" />
        {variant === "all" && (
          <>
            <path d="M95,83 L95,95 L83,95" />
            <path d="M17,95 L5,95 L5,83" />
          </>
        )}
      </g>
    </svg>
  );
}
