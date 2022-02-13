import { Helmet } from "react-helmet-async";
import Navbar from "../component/Navbar";
import Header from "./Header";
import About from "./About";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Bruno Antunes</title>
      </Helmet>
      <Navbar />
      <Header />
      <About />
    </>
  );
};
export default Home;
