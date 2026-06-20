import { Link } from 'react-router-dom';
import newBanner from '../assets/Banner.png';

// ─── Carousel ────────────────────────────────────────────────────────────────────
export default function HeroCarousel() {
  return (
    <section
      aria-label="Hero banner"
      style={{
        position: 'relative',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        overflow: 'hidden',
      }}
    >
      <Link to="/programs" aria-label="View all programs" style={{ display: 'block', cursor: 'pointer', lineHeight: 0 }}>
        <img
          src={newBanner}
          alt="Blast Learning hero banner"
          width={2048}
          height={1092}
          loading="eager"
          decoding="sync"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Link>
    </section>
  );
}
