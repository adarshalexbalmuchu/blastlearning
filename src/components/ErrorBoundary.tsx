import { Component, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FFF0F4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '28px' }}>⚡</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.75rem', fontWeight: 700, color: '#1C1C28', marginBottom: '12px' }}>
            Something went wrong
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#5A5A6E', marginBottom: '32px', maxWidth: '400px', lineHeight: 1.6 }}>
            We hit an unexpected error. Please refresh the page or go back home.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => window.location.reload()}
              style={{ padding: '11px 24px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', border: 'none', cursor: 'pointer' }}
            >
              Refresh Page
            </button>
            <Link
              to="/"
              style={{ padding: '11px 24px', borderRadius: '10px', border: '1.5px solid #ECECF1', color: '#1C1C28', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
            >
              Go Home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
