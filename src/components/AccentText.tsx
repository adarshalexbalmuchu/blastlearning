import type { ReactNode } from 'react';

type AccentTone = 'pink' | 'blue' | 'gradient';

export default function AccentText({ children, tone = 'gradient' }: { children: ReactNode; tone?: AccentTone }) {
  const style: React.CSSProperties =
    tone === 'pink'
      ? { color: '#E8135A' }
      : tone === 'blue'
        ? { color: '#0FA8DC' }
        : {
            backgroundImage: 'linear-gradient(90deg, #E8135A 0%, #0FA8DC 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          };

  return <span style={style}>{children}</span>;
}