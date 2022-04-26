import { NextPage } from "next";
import { useRouter } from "next/router";

const MoviesId: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>/Movies/id</h1>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  );
};

export default MoviesId;
