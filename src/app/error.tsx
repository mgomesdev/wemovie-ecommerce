'use client';

import BaseLayout from './components/base/BaseLayout';
import ErrorState from './components/organism/ErrorState';

export interface GlobalErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: GlobalErrorProps) {
    return (
        <html lang="pt-BR">
            <body>
                <BaseLayout>
                    <ErrorState error={error} reset={reset} />
                </BaseLayout>
            </body>
        </html>
    );
}
