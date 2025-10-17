import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

    componentDidCatch(error, info) {
        console.error("Erro capturado pelo ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
                    <h2>Ocorreu um erro inesperado!:</h2>
                    <p>{this.state.message}</p>
                </div>
            );
        }
        return this.props.children;
    }
}
