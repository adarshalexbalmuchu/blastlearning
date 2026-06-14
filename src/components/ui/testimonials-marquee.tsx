"use client";

import React from "react";

type CardT = {
  image: string;
  name: string;
  role: string;
  text: string;
};

const Card = ({ card }: { card: CardT }) => (
  <div className="p-5 rounded-2xl mx-4 shadow-md hover:shadow-lg transition-all duration-200 w-80 shrink-0 bg-white border border-[#ECECF1]">
    <div className="flex gap-3 mb-3">
      <img className="size-11 rounded-full object-cover" src={card.image} alt={card.name} />
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-[#1C1C28] text-sm font-[Poppins,sans-serif]">{card.name}</p>
        <span className="text-xs text-[#8E8EA0]">{card.role}</span>
      </div>
    </div>
    <div className="flex gap-0.5 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-amber-400 text-xs">★</span>
      ))}
    </div>
    <p className="text-sm text-[#5A5A6E] leading-relaxed font-[Fraunces,serif] italic">
      "{card.text}"
    </p>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 25,
}: {
  data: CardT[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = React.useMemo(() => [...data, ...data], [data]);
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40 z-10 bg-gradient-to-r from-[#F8F9FA] to-transparent" />
      <div
        className={`flex min-w-[200%] ${reverse ? "pt-3 pb-6" : "pt-6 pb-3"}`}
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40 z-10 bg-gradient-to-l from-[#F8F9FA] to-transparent" />
    </div>
  );
}

export default function TestimonialsMarquee({
  row1,
  row2,
}: {
  row1: CardT[];
  row2: CardT[];
}) {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="flex flex-col gap-2">
        <MarqueeRow data={row1} reverse={false} speed={30} />
        <MarqueeRow data={row2} reverse={true} speed={28} />
      </div>
    </>
  );
}
