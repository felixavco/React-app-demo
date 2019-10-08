import React, { Component } from 'react';
import ErrorPage from './ErrorPage';

class ErrorBundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error('Error on component', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />;
        }

        return this.props.children;
    }
}

export default ErrorBundary;
