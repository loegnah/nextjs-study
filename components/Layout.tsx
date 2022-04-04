import { NextPage } from "next";
import NavBar from "./NavBar";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
