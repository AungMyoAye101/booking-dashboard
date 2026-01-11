import React, { type ErrorInfo, type ReactNode } from "react";
import ErrorPage from "./error-page";


interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }


    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("ErrorBoundary caught:", error, info);

    }

    reset = () => {
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        const { hasError, error } = this.state;

        if (hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <ErrorPage message={error?.message} reset={() => this.reset} />
            );
        }

        return this.props.children;
    }
}
