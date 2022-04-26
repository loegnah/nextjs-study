import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

type MovieData = {
  id: number;
  original_title: string;
  poster_path: string;
};

interface Props {
  results: MovieData[];
}

const Home: NextPage<Props> = ({ results }) => {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          id,
          title,
        },
      },
      `/movies/${id}`
    );
  };

  return (
    <div className="container">
      <Seo title={"Home"} />
      {results?.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => onClick(movie.id, movie.original_title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  id: movie.id,
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await (
    await fetch("http://localhost:3000/api/movie")
  ).json();
  return {
    props: {
      results,
    },
  };
};

export default Home;
export { getServerSideProps };
