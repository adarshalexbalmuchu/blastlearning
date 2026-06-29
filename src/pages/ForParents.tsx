import { useSEO } from '../hooks/useSEO';

export default function ForParents() {
  useSEO({
    title: 'For Parents | Blast Learning India',
    description: 'The parent platform is coming soon.',
  });

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFFFFF',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#E8135A',
        fontFamily: 'Inter, sans-serif',
        marginBottom: '20px',
      }}>
        For Parents
      </p>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.25rem)',
        fontWeight: 700,
        fontFamily: 'Poppins, sans-serif',
        color: '#1C1C28',
        lineHeight: 1.15,
        marginBottom: '20px',
      }}>
        The Real Question Isn't Whether Your Child Is Trying
      </h1>
      <p style={{
        fontSize: '16px',
        lineHeight: 1.75,
        color: '#5A5A6E',
        fontFamily: 'Inter, sans-serif',
        maxWidth: '480px',
      }}>
        The parent portal is under development. Check back shortly.
      </p>
    </div>
  );
}
