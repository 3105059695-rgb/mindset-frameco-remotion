import React from "react";
import {
  AbsoluteFill,
  Audio,
  Composition,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import "@fontsource/roboto/700.css";
import "@fontsource/tinos/400-italic.css";

// Measured reference keyframes in a 720 x 1280 design space.
const ease = Easing.bezier(0.22, 1, 0.36, 1);
const tween = (t: number, keys: number[], values: number[]) =>
  interpolate(t, keys, values, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

const Brain: React.FC<{
  x: number;
  y: number;
  width: number;
  gray?: boolean;
}> = ({ x, y, width, gray = false }) => (
  <Img
    src={staticFile("brain.png")}
    style={{
      position: "absolute",
      left: x,
      top: y,
      width,
      filter: gray ? "grayscale(1) brightness(0.5)" : "none",
    }}
  />
);

const Background: React.FC<{ t: number }> = ({ t }) => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(ellipse at 47% 49%, #ffffff 0%, #f3f3f3 43%, #e8e8e8 100%)",
    }}
  >
    <svg
      width="900"
      height="1400"
      style={{
        position: "absolute",
        left: tween(t, [5.55, 6.2], [0, -90]),
        top: -30,
        opacity: tween(t, [2.38, 2.7], [0, 1]),
      }}
    >
      <path
        d="M -95 0 C 130 160 285 305 352 570 C 410 800 435 1070 758 1335"
        fill="none"
        stroke="#d8d8d8"
        strokeWidth="108"
        opacity="0.61"
      />
      <defs>
        <pattern id="grid" width="24" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M24 0H0V20"
            stroke="#aaa"
            strokeWidth="0.65"
            strokeDasharray="1 5"
            fill="none"
          />
          <circle cx="0" cy="0" r="1.35" fill="#aaa" />
        </pattern>
        <linearGradient id="fade">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity=".7" />
        </linearGradient>
        <mask id="gridFade">
          <rect x="300" y="275" width="430" height="810" fill="url(#fade)" />
        </mask>
      </defs>
      <rect
        x="300"
        y="275"
        width="430"
        height="810"
        fill="url(#grid)"
        transform={`translate(${tween(t, [5.55, 6.2], [0, -300])}, ${tween(t, [5.55, 6.2], [0, -100])})`}
        opacity=".28"
      />
    </svg>
  </AbsoluteFill>
);

const Opening: React.FC<{ t: number }> = ({ t }) => (
  <AbsoluteFill
    style={{
      opacity: tween(t, [0, 0.2, 2.35, 2.65], [0.4, 1, 1, 0]),
      fontFamily: "Roboto",
      fontWeight: 700,
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 78,
        top: 538,
        fontSize: 176,
        letterSpacing: -5,
      }}
    >
      br
      <span style={{ display: "inline-block", width: 160 }} />
      ins
    </div>
    <div style={{ position: "absolute", left: 128, top: 577, fontSize: 30 }}>
      our
    </div>
    <svg width="720" height="1280" style={{ position: "absolute" }}>
      <path
        d="M334 720 L386 720 L363 754 L363 1280 L356 1280 L356 754 Z"
        fill="#aaa"
      />
    </svg>
    <div
      style={{
        position: "absolute",
        left: 98,
        top: 718,
        fontSize: 28,
        letterSpacing: -0.7,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ opacity: tween(t, [0.45, 0.7], [0, 1]) }}>operates </span>
      <span style={{ opacity: tween(t, [0.8, 1.05], [0, 1]) }}>in </span>
      <span style={{ opacity: tween(t, [1.04, 1.24], [0, 1]) }}>two </span>
      <span style={{ opacity: tween(t, [1.28, 1.5], [0, 1]) }}>distinct </span>
      <span
        style={{
          color: "#f77f8d",
          fontSize: 56,
          opacity: tween(t, [1.55, 1.84], [0, 1]),
          verticalAlign: "-4px",
        }}
      >
        modes
      </span>
    </div>
    {[0, 1].map((i) => (
      <svg
        key={i}
        width="88"
        height="45"
        viewBox="0 0 88 45"
        style={{
          position: "absolute",
          left:
            i === 0
              ? tween(t, [0.15, 2.5], [750, -80])
              : tween(t, [0.5, 2.5], [810, 650]),
          top: i === 0 ? 305 : 1060,
          opacity: tween(t, [0.1, 0.5], [0, 0.6]),
        }}
      >
        <path d="M0 35 L22 6 L49 31 L76 0 L56 42 L24 19 Z" fill="#444" />
      </svg>
    ))}
  </AbsoluteFill>
);

const Word: React.FC<{
  t: number;
  start: number;
  children: React.ReactNode;
}> = ({ t, start, children }) => (
  <div
    style={{
      opacity: tween(t, [start, start + 0.23], [0, 1]),
      filter: `blur(${tween(t, [start, start + 0.25], [8, 0])}px)`,
      translate: `0 ${tween(t, [start, start + 0.3], [20, 0])}px`,
      whiteSpace: "nowrap",
    }}
  >
    · {children}
  </div>
);

export const Mindset: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const width = tween(
    t,
    [2.13, 2.38, 3.06, 3.5, 5.55, 6.17],
    [420, 420, 420, 688, 688, 714],
  );
  const x = tween(
    t,
    [2.13, 2.38, 3.06, 3.5, 5.55, 6.17],
    [150, 150, 150, 150, 150, -195],
  );
  const y = interpolate(
    t,
    [2.13, 2.2, 2.3, 2.5, 2.7, 3.06, 3.5, 5.55, 5.75, 6, 6.17],
    [1310, 937, 681, 517, 475, 455, 518, 518, 344, 228, 216],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return (
    <AbsoluteFill style={{ overflow: "hidden", color: "#090909" }}>
      <Background t={t} />
      <Opening t={t} />
      <div style={{ opacity: tween(t, [2.35, 2.65], [1, 0]) }}>
        <Brain x={248} y={581} width={160} gray />
      </div>
      {t >= 2.13 && <Brain x={x} y={y} width={width} />}
      <div
        style={{
          position: "absolute",
          left: tween(t, [3.2, 3.9, 5.55, 5.88], [70, 70, 70, -500]),
          top: tween(t, [3.2, 3.9], [213, 227]),
          fontFamily: "Tinos",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 96,
          lineHeight: 1.0,
          letterSpacing: -4,
          opacity: tween(t, [5.55, 5.88], [1, 0]),
        }}
      >
        <Word t={t} start={3.22}>
          Fast
        </Word>
        <Word t={t} start={3.5}>
          Automatic
        </Word>
        <Word t={t} start={4.8}>
          Unconscious
        </Word>
      </div>
      <div
        style={{
          position: "absolute",
          left: 306,
          top: 789,
          fontFamily: "Tinos",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 96,
          lineHeight: 1.0,
          letterSpacing: -4,
          opacity: tween(t, [9.4, 9.86], [1, 0.55]),
        }}
      >
        <Word t={t} start={6.28}>
          Slow
        </Word>
        <Word t={t} start={6.83}>
          Conscious
        </Word>
        <Word t={t} start={8.08}>
          Effortfull
        </Word>
      </div>
      <div
        style={{
          position: "absolute",
          left: 490,
          top: 253,
          fontFamily: "Roboto",
          fontWeight: 700,
          fontSize: 32,
          letterSpacing: -1.4,
        }}
      >
        @frameco
      </div>
      <Audio src={staticFile("reference-audio.m4a")} />
    </AbsoluteFill>
  );
};

export const MyComposition = () => (
  <Composition
    id="Mindset"
    component={Mindset}
    durationInFrames={592}
    fps={60}
    width={720}
    height={1280}
  />
);
