import { Helmet } from "react-helmet-async";
import Navbar from "../component/Navbar";
import Header from "./Header";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Bruno Antunes</title>
      </Helmet>
      <Navbar />
      <Header />
    </>
  );
};
export default Home;
