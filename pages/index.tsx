import { NextPage } from "next";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

type MovieData = {
  id: number;
  original_title: string;
};

const API_KEY = "b8c0dbbfd97bd63cddd62402ad180193";

const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title={"Home"} />
      {!movies ? (
        <h4>Loading...</h4>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
