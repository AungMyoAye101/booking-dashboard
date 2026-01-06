import React, { type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

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

    // 🔥 Catch render errors
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    // 🔥 Side effects (logging)
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("ErrorBoundary caught:", error, info);

        // Send to Sentry / backend here
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
                <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
                    <h2 className="text-lg font-semibold">
                        Something went wrong
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {error?.message}
                    </p>

                    <Button onClick={this.reset}>Try again</Button>
                </div>
            );
        }

        return this.props.children;
    }
}
