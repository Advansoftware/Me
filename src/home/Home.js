import { Helmet } from "react-helmet-async";
import Navbar from "../component/Navbar";
import Header from "./Header";
import About from "./About";
import BottomNav from "../component/BottomNav";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Bruno Antunes</title>
      </Helmet>
      <Navbar />
      <Header />
      <About />
      <BottomNav />
    </>
  );
};
export default Home;
