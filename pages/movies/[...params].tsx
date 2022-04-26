import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  title: string;
  id: number;
}

const MoviesId: NextPage<Props> = ({ title, id }) => {
  return (
    <div>
      <h1>/Movies/id</h1>
      <p>
        {title}, {id}
      </p>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [title, id] = ctx.params?.params as string[];
  return {
    props: { title, id },
  };
};

export default MoviesId;
export { getServerSideProps };
