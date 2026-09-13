type Building = {
  x: number;
  w: number;
  h: number;
  roof?: "flat" | "peak" | "dome" | "step";
  windowCols?: number;
  windowRows?: number;
};

const BASE_Y = 420;

const buildings: Building[] = [
  { x: -20, w: 90, h: 190, windowCols: 3, windowRows: 6 },
  { x: 70, w: 56, h: 260, windowCols: 2, windowRows: 9 },
  { x: 130, w: 120, h: 150, roof: "step", windowCols: 4, windowRows: 4 },
  { x: 260, w: 70, h: 320, windowCols: 2, windowRows: 11 },
  { x: 340, w: 100, h: 230, roof: "peak", windowCols: 3, windowRows: 7 },
  { x: 450, w: 64, h: 180, windowCols: 2, windowRows: 6 },
  { x: 525, w: 140, h: 360, windowCols: 4, windowRows: 13 },
  { x: 680, w: 84, h: 210, roof: "dome", windowCols: 3, windowRows: 6 },
  { x: 780, w: 60, h: 150, windowCols: 2, windowRows: 5 },
  { x: 850, w: 110, h: 290, windowCols: 3, windowRows: 10 },
  { x: 975, w: 76, h: 200, roof: "step", windowCols: 2, windowRows: 6 },
  { x: 1065, w: 130, h: 340, windowCols: 4, windowRows: 12 },
  { x: 1210, w: 66, h: 170, windowCols: 2, windowRows: 5 },
  { x: 1290, w: 96, h: 250, roof: "peak", windowCols: 3, windowRows: 8 },
  { x: 1400, w: 58, h: 190, windowCols: 2, windowRows: 6 },
  { x: 1470, w: 120, h: 280, windowCols: 3, windowRows: 9 },
  { x: 1600, w: 90, h: 200, windowCols: 3, windowRows: 6 },
];

function Windows({ b }: { b: Building }) {
  const cols = b.windowCols ?? 3;
  const rows = b.windowRows ?? 5;
  const pad = b.w * 0.16;
  const gapX = (b.w - pad * 2) / cols;
  const topPad = b.h * 0.1;
  const gapY = (b.h - topPad * 1.6) / rows;
  const cells: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({
        x: b.x + pad + c * gapX + gapX * 0.2,
        y: BASE_Y - b.h + topPad + r * gapY + gapY * 0.2,
      });
    }
  }
  const cw = (gapX * 0.6);
  const ch = (gapY * 0.55);
  return (
    <>
      {cells.map((cell, i) => (
        <rect key={i} x={cell.x} y={cell.y} width={cw} height={ch} fill="currentColor" opacity={0.55} />
      ))}
    </>
  );
}

function Roofline({ b }: { b: Building }) {
  const top = BASE_Y - b.h;
  const midX = b.x + b.w / 2;
  if (b.roof === "peak") {
    return <path d={`M${b.x},${top} L${midX},${top - 42} L${b.x + b.w},${top}`} fill="none" />;
  }
  if (b.roof === "dome") {
    return (
      <path
        d={`M${b.x},${top} C${b.x},${top - 46} ${b.x + b.w},${top - 46} ${b.x + b.w},${top}`}
        fill="none"
      />
    );
  }
  if (b.roof === "step") {
    const stepW = b.w * 0.4;
    return (
      <path
        d={`M${b.x},${top} L${midX - stepW / 2},${top} L${midX - stepW / 2},${top - 26} L${midX + stepW / 2},${top - 26} L${midX + stepW / 2},${top} L${b.x + b.w},${top}`}
        fill="none"
      />
    );
  }
  return null;
}

export default function SkylineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 420"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth={2} fill="none">
        {buildings.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={BASE_Y - b.h} width={b.w} height={b.h} />
            <Roofline b={b} />
          </g>
        ))}
      </g>
      <g stroke="none">
        {buildings.map((b, i) => (
          <Windows key={i} b={b} />
        ))}
      </g>
      {/* crane */}
      <g stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round">
        <line x1="595" y1={BASE_Y - 360} x2="595" y2={BASE_Y - 40} />
        <line x1="595" y1={BASE_Y - 355} x2="740" y2={BASE_Y - 355} />
        <line x1="595" y1={BASE_Y - 355} x2="540" y2={BASE_Y - 330} />
        <line x1="700" y1={BASE_Y - 355} x2="700" y2={BASE_Y - 310} />
        <line x1="655" y1={BASE_Y - 355} x2="640" y2={BASE_Y - 320} />
      </g>
      {/* ground line */}
      <line x1="-20" y1={BASE_Y} x2="1620" y2={BASE_Y} stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}
