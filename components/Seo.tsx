import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title: string;
}

const Seo: NextPage<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default Seo;
