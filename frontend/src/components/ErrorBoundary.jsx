import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "40px",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          <h1 style={{ color: "#E11D48" }}>Oops, something went wrong!</h1>
          <p style={{ color: "#475569", marginBottom: "20px" }}>
            We encountered an unexpected error while rendering this page.
          </p>
          <div
            style={{
              background: "#F1F5F9",
              padding: "15px",
              borderRadius: "8px",
              display: "inline-block",
              textAlign: "left",
              maxWidth: "600px",
              overflow: "auto",
            }}
          >
            <code>{this.state.error?.toString()}</code>
          </div>
          <br />
          <br />
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              background: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
