import { motion } from 'framer-motion';
import img1 from '../assets/Critical Thinking Image.png';
import img2 from '../assets/Competency Image.png';
import img3 from '../assets/Continious Image.png';
import img4 from '../assets/Competency Image (1).png';

interface Feature {
  tag: string;
  title: string;
  desc: string;
  accent: 'blue' | 'pink';
  panel: string;
  img: string;
}

const features: Feature[] = [
  {
    tag: 'COMPETENCY-BASED LEARNING',
    title: 'Competency over content coverage',
    desc: 'Blast Learning sessions measure how effectively a student applies knowledge across every chapter studied.',
    accent: 'blue',
    panel: '#E7F6FB',
    img: img1,
  },
  {
    tag: 'CRITICAL THINKING',
    title: 'Reasoning over rote memorization',
    desc: 'Every session trains retrieval and application, the specific skills NEP 2020 favors over rote re-reading.',
    accent: 'pink',
    panel: '#FCEEF1',
    img: img2,
  },
  {
    tag: 'CURRICULUM LOAD REDUCTION',
    title: 'Lower load, deeper understanding',
    desc: 'The GAP Assessment directs every study session toward genuine gaps, building depth where it matters most.',
    accent: 'blue',
    panel: '#EEF6FF',
    img: img3,
  },
  {
    tag: 'HOLISTIC ASSESSMENT',
    title: 'Ongoing and holistic assessments',
    desc: 'The Progress Dashboard measures retention and confidence every week, well ahead of term-end examinations.',
    accent: 'pink',
    panel: '#F0EDFC',
    img: img4,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function FeatureExplorer() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={stagger}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '24px',
        width: '100%',
      }}
    >
      {features.map((feature) => {
        const labelColor = feature.accent === 'blue' ? '#0FA8DC' : '#E8135A';
        return (
          <motion.article
            className="nep-principle-card"
            key={feature.title}
            variants={cardVariants}
            whileHover={{
              y: -6,
              boxShadow: '0 16px 40px rgba(15, 23, 42, 0.10), 0 4px 12px rgba(15, 23, 42, 0.06)',
              borderColor: '#D1D5DB',
              transition: { type: 'spring', stiffness: 300, damping: 22 },
            }}
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
              cursor: 'default',
            }}
          >
            <div
              className="nep-principle-copy"
              style={{
                width: '55%',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span style={{ width: '3px', height: '3px', borderRadius: '9999px', background: labelColor, opacity: 0.3 }} />
                  <span style={{ width: '4px', height: '4px', borderRadius: '9999px', background: labelColor, opacity: 0.6 }} />
                  <span style={{ width: '5px', height: '5px', borderRadius: '9999px', background: labelColor }} />
                  <span style={{ width: '8px',  height: '2px', borderRadius: '9999px', background: labelColor }} />
                  <span style={{ width: '13px', height: '2px', borderRadius: '9999px', background: labelColor }} />
                </span>
                <span
                  style={{
                    color: labelColor,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.74rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {feature.tag}
                </span>
              </div>

              <h4
                style={{
                  margin: 0,
                  color: '#111111',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: 1.35,
                }}
              >
                {feature.title}
              </h4>

              <p
                style={{
                  margin: '6px 0 0',
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
                width: '45%',
                background: feature.panel,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                minHeight: '180px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.img
                src={feature.img}
                alt=""
                aria-hidden="true"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  position: 'absolute',
                  inset: 0,
                }}
              />
            </div>
          </motion.article>
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
            min-height: 220px !important;
            height: 220px !important;
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 12px !important;
            border-top-left-radius: 12px !important;
            border-bottom-left-radius: 0 !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
