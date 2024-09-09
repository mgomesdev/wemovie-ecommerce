import MovieService from '@/services/MovieService';
import { MovieList } from './index';
import EmptyState from '../EmptyState';

export default async function MovieListProvider() {
    const movies = await MovieService.getMovies();
    return <>{movies && movies.products.length > 0 ? <MovieList movies={movies.products} /> : <EmptyState />}</>;
}
