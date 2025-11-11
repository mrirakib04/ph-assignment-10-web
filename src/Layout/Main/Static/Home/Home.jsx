import { useContext } from "react";
import MainContext from "../../../../Context/MainContext";

const Home = () => {
  const { name } = useContext(MainContext);
  console.log(name);
  return <div>Home</div>;
};

export default Home;
