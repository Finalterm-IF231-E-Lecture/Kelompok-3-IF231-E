import { StrictMode } from "react";
import Header from "../components/Header";
import Credits from "../components/Credits";

const Home = () => {
  return (
    <StrictMode>
      <Header />
      <Credits />
    </StrictMode>
  );
};

export default Home;
