interface MovieSchema {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface MovieSchemaResponse {
    products: MovieSchema[];
}

export default MovieSchema;
