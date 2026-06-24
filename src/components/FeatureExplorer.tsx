import { Brain, ClipboardCheck, ChartColumnIncreasing, BookOpenText } from 'lucide-react';

interface Feature {
  title: string;
  desc: string;
  accent: 'blue' | 'pink';
  panel: string;
  Icon: typeof ClipboardCheck;
}

const features: Feature[] = [
  {
    title: 'Competency over content coverage',
    desc: 'Blast Learning sessions target what a student can do with knowledge, not how many chapters they\'ve covered.',
    accent: 'blue',
    panel: '#E7F6FB',
    Icon: ClipboardCheck,
  },
  {
    title: 'Critical thinking over rote memorisation',
    desc: 'Every session is built on retrieval and application, the opposite of the re-read-and-repeat cycle NEP 2020 explicitly replaces.',
    accent: 'pink',
    panel: '#FCEEF1',
    Icon: Brain,
  },
  {
    title: 'Reduced curriculum load, deeper understanding',
    desc: 'The GAP Assessment focuses study time on genuine gaps. Students go deeper on less, instead of shallower on everything.',
    accent: 'blue',
    panel: '#E7F6FB',
    Icon: BookOpenText,
  },
  {
    title: 'Continuous and holistic assessment',
    desc: 'Progress Dashboard tracks retention and confidence week by week, not just performance at term-end examinations.',
    accent: 'pink',
    panel: '#F0EDFC',
    Icon: ChartColumnIncreasing,
  },
];

export default function FeatureExplorer() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '24px',
        width: '100%',
      }}
    >
      {features.map((feature) => {
        const labelColor = feature.accent === 'blue' ? '#0FA8DC' : '#E8135A';
        const Icon = feature.Icon;
        return (
          <article
            className="nep-principle-card"
            key={feature.title}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'row',
              background: '#F8F8F8',
              border: '1px solid #EEEEEE',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
              minHeight: '180px',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <div
              className="nep-principle-copy"
              style={{
                width: '50%',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '12px',
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
                }}
              >
                {feature.desc}
              </p>
            </div>

            <div
              className="nep-principle-art"
              style={{
                width: '50%',
                background: feature.panel,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                minHeight: '180px',
              }}
            >
              <Icon size={80} strokeWidth={1.6} color={labelColor} opacity={0.92} />
            </div>
          </article>
        );
        })}

      <style>{`
        @media (max-width: 767px) {
          .nep-principle-card {
            flex-direction: column !important;
            min-height: 0 !important;
          }

          .nep-principle-copy,
          .nep-principle-art {
            width: 100% !important;
          }

          .nep-principle-art {
            min-height: 160px !important;
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 12px !important;
            border-top-left-radius: 12px !important;
            border-bottom-left-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
