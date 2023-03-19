import { useQuery, gql } from "@apollo/client"

const QUERY_FILMS = gql`
    query Query {
        allFilms {
        films {
            title
            director
            releaseDate
            speciesConnection {
            species {
                name
                classification
                homeworld {
                name
                }
            }
            }
        }
        }
    }
`

const Films = () => {
    const { data, loading, error } = useQuery(QUERY_FILMS)

    loading && <h1>Data is Loading...</h1>
    error && console.log(error)
    
    return (
        <div>
            <h2>Star Wars and it's release date</h2>
            <div className="film-el">
                { 
                    data &&
                    data.allFilms.films
                    .map((film) => (
                        <div key={film.title}>
                            <p>{film.title}</p>
                            <p>{film.director}</p>
                            <p>{film.releaseDate}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Films