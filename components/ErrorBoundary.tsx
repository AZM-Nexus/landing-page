'use client'

import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          fontFamily: 'Plus Jakarta Sans, sans-serif'
        }}>
          <p style={{ color: '#1D4A52', fontSize: '20px', fontWeight: 600 }}>
            Something went wrong.
          </p>
          <p style={{ color: '#4A6670', fontSize: '15px', marginTop: '8px' }}>
            Please refresh the page to continue.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '24px',
              padding: '12px 28px',
              backgroundColor: '#1D4A52',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
