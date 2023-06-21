import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message and design here
      return (
        <div className="App">
          <h1>Oops! Something went wrong.</h1>
          <p>We apologize for the inconvenience. Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
