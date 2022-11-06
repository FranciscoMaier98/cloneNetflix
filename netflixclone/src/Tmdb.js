const API_KEY = '961f15fd521d7621b53c7209c995dfb9';
const API_BASE = 'https://api.themoviedb.org/3';


/*
- originais netflix
- recomendados, filmes em mais destaque (trending)
- em alta, melhores cotados, top rated
- ação
- comédia
- terror
- romance
- documentários
*/

//Dá um fetch na URL que quer pegar. Procura para cada item no getHomeList
const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



export default {
    getHomelist: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                //Busca apenas filmes originais da Netflix
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default: 
                    info = null;
                break;
            }
        }
        return info;
    }
}