import { useLayoutEffect, useRef, type FC } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface IllustrationProps {
  className?: string;
  animated?: boolean;
  width?: number | string;
  height?: number | string;
}

export const ForgettingCurveIllustration: FC<IllustrationProps> = ({
  className,
  animated = true,
  width = '100%',
  height = '100%',
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    if (!animated || !svgRef.current) return;
    const svg = svgRef.current;
    const forgettingPath = svg.querySelector('.forgetting-curve-line') as SVGPathElement | null;
    const blastPath = svg.querySelector('.blast-curve-line') as SVGPathElement | null;
    if (!forgettingPath || !blastPath) return;

    const fLen = forgettingPath.getTotalLength();
    const bLen = blastPath.getTotalLength();

    gsap.set(forgettingPath, { strokeDasharray: fLen, strokeDashoffset: fLen });
    gsap.set(blastPath, { strokeDasharray: bLen, strokeDashoffset: bLen });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: svg,
        start: 'top 78%',
        once: true,
        onEnter: () => {
          gsap.to(forgettingPath, { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' });
          gsap.to(blastPath, { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut', delay: 0.4 });
        },
      });
    });

    return () => ctx.revert();
  }, [animated]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 320"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fci-blast" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0FA8DC" />
          <stop offset="100%" stopColor="#8B86F0" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={`h${i}`} x1="60" y1={60 + i * 50} x2="470" y2={60 + i * 50} stroke="rgba(28,28,40,0.06)" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={`v${i}`} x1={60 + i * 60} y1="60" x2={60 + i * 60} y2="260" stroke="rgba(28,28,40,0.06)" strokeWidth="1" />
      ))}

      {/* Axes */}
      <line x1="60" y1="260" x2="470" y2="260" stroke="rgba(28,28,40,0.2)" strokeWidth="1.5" />
      <line x1="60" y1="60" x2="60" y2="260" stroke="rgba(28,28,40,0.2)" strokeWidth="1.5" />

      {/* Y-axis labels */}
      <text x="52" y="64" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">100%</text>
      <text x="52" y="114" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">75%</text>
      <text x="52" y="164" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">50%</text>
      <text x="52" y="214" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">25%</text>
      <text x="52" y="263" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">0%</text>

      {/* X-axis labels */}
      <text x="60" y="278" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">Day 1</text>
      <text x="180" y="278" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">Day 3</text>
      <text x="300" y="278" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">Week 1</text>
      <text x="420" y="278" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#8E8EA0">Month 1</text>
      <text x="265" y="298" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#5A5A6E">Time</text>

      {/* Y-axis title */}
      <text x="18" y="175" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#5A5A6E" transform="rotate(-90, 18, 175)">Retention</text>

      {/* Forgetting curve — exponential decay (muted) */}
      <path
        className="forgetting-curve-line"
        d="M 60 62 C 105 80, 155 128, 210 168 C 255 198, 318 228, 430 248"
        stroke="#C4C4D0"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Blast Learning curve — spaced repetition stays high (brand) */}
      <path
        className="blast-curve-line"
        d="M 60 62 C 92 60, 132 58, 172 60 C 218 63, 268 66, 310 63 C 355 60, 398 62, 430 64"
        stroke="url(#fci-blast)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Legend */}
      <rect x="300" y="88" width="162" height="56" rx="8" fill="#FFFFFF" stroke="#ECECF1" strokeWidth="1" />
      <line x1="312" y1="108" x2="332" y2="108" stroke="#C4C4D0" strokeWidth="2.5" strokeLinecap="round" />
      <text x="338" y="112" fontFamily="Inter, sans-serif" fontSize="10" fill="#5A5A6E">Without Blast</text>
      <line x1="312" y1="128" x2="332" y2="128" stroke="#0FA8DC" strokeWidth="2.5" strokeLinecap="round" />
      <text x="338" y="132" fontFamily="Inter, sans-serif" fontSize="10" fill="#5A5A6E">With Blast</text>
    </svg>
  );
};
