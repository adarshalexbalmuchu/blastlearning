import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
        background: '#FFFFFF',
      }}
    >
      <div
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 'clamp(5rem, 15vw, 9rem)',
          fontWeight: 700,
          color: '#E0F5FC',
          lineHeight: 1,
          marginBottom: '1rem',
          userSelect: 'none',
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1C1C28',
          margin: '0 0 1rem',
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1rem',
          color: '#5A5A6E',
          margin: '0 0 2rem',
          maxWidth: '420px',
          lineHeight: 1.6,
        }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/"
          style={{
            borderRadius: '10px',
            padding: '12px 28px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
            background: '#F03C6F',
            color: 'white',
            textDecoration: 'none',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#c42f59'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#F03C6F'; }}
        >
          Go to Home
        </Link>
        <Link
          to="/programs"
          style={{
            borderRadius: '10px',
            padding: '12px 28px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
            border: '1.5px solid #ECECF1',
            color: '#1C1C28',
            textDecoration: 'none',
            display: 'inline-block',
            background: 'transparent',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0FA8DC'; e.currentTarget.style.color = '#0FA8DC'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#ECECF1'; e.currentTarget.style.color = '#1C1C28'; }}
        >
          Browse Programs
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
