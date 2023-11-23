import { useFetch } from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import { Card } from '../components';
import { useTitle } from '../hooks/useTitle';



export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams()
  const queryTeam = searchParams.get('q')

  const { data:movies } = useFetch(apiPath,queryTeam)
  useTitle(`Search result for ${queryTeam}`)

  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>{ movies.length === 0 ? `No Result is found : '${queryTeam}'` : `Search Result : '${queryTeam}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-start flex-wrap ">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ) ) }
          
        </div>

      </section>
    </main> 
  )
}
