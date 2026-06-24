import learnImg from '../assets/Learn.png';
import masterImg from '../assets/master.png';
import uploadImg from '../assets/Upload.png';
import girlImg from '../assets/expressive-young-girl-posing-studio.jpg';

interface Feature {
  title: string;
  desc: string;
  accent: 'blue' | 'pink';
  image: string;
}

const features: Feature[] = [
  {
    title: 'Competency over content coverage',
    desc: 'Blast Learning sessions target what a student can do with knowledge, not how many chapters they\'ve covered.',
    accent: 'blue',
    image: learnImg,
  },
  {
    title: 'Critical thinking over rote memorisation',
    desc: 'Every session is built on retrieval and application — the opposite of the re-read-and-repeat cycle NEP 2020 explicitly replaces.',
    accent: 'pink',
    image: masterImg,
  },
  {
    title: 'Reduced curriculum load, deeper understanding',
    desc: 'The GAP Assessment focuses study time on genuine gaps. Students go deeper on less, instead of shallower on everything.',
    accent: 'blue',
    image: uploadImg,
  },
  {
    title: 'Continuous and holistic assessment',
    desc: 'Progress Dashboard tracks retention and confidence week by week — not just performance at term-end examinations.',
    accent: 'pink',
    image: girlImg,
  },
];

export default function FeatureExplorer() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(320px, 360px))',
        justifyContent: 'center',
        gap: '24px',
        width: '100%',
      }}
    >
      {features.map((feature) => {
        const labelColor = feature.accent === 'blue' ? '#0FA8DC' : '#E8135A';
        return (
          <article
            key={feature.title}
            style={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              background: '#F8F8F8',
              border: '1px solid #EEEEEE',
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(15, 23, 42, 0.04)',
              padding: '24px 26px',
              width: '100%',
            }}
          >
            <img
              src={feature.image}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: 0.4,
                filter: 'blur(1.5px) saturate(0.92)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                }}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '999px', background: labelColor, opacity: 0.28 }} />
                <span style={{ width: '4px', height: '4px', borderRadius: '999px', background: labelColor, opacity: 0.45 }} />
                <span style={{ width: '4px', height: '4px', borderRadius: '999px', background: labelColor, opacity: 0.65 }} />
                <span style={{ width: '18px', height: '3px', borderRadius: '999px', background: labelColor }} />
              </span>
              <span
                style={{
                  color: labelColor,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                NEP 2020 PRINCIPLE
              </span>
            </div>

            <h4
              style={{
                margin: 0,
                color: '#111111',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                lineHeight: 1.35,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {feature.title}
            </h4>

            <p
              style={{
                margin: '10px 0 0',
                color: '#5A5A6E',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '0.875rem',
                lineHeight: 1.6,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {feature.desc}
            </p>
          </article>
        );
        })}
    </div>
  );
}
