import { Suspense } from 'react';

import { BaseLayoutContent } from './components/base/BaseLayout';
import MovieListProvider from './components/organism/MovieList';
import LoadingSpinner from './components/atoms/LoadingSpinner';

export default async function Home() {
    return (
        <BaseLayoutContent>
            <Suspense
                fallback={
                    <LoadingSpinner
                        config={{
                            customClassName: 'mt-12 md:mt-64',
                        }}
                    />
                }
            >
                <MovieListProvider />
            </Suspense>
        </BaseLayoutContent>
    );
}
