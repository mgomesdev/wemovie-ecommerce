import { MovieSchemaResponse } from '../schemas/MovieSchema';

const domain = process.env.NEXT_PUBLIC_API_URL;

const MovieService = {
    getMovies: async (): Promise<MovieSchemaResponse> => {
        const res = await fetch(`${domain}/movies`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const movies = await res.json();
        return movies;
    },
};

export default MovieService;
