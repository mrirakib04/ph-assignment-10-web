import { useContext } from "react";
import MainContext from "../../../../Context/MainContext";
import HeroBanner from "./HomeComponents/HeroBanner";
import ActiveChallenges from "./HomeComponents/ActiveChallenges";
import RecentTips from "./HomeComponents/RecentTips";
import UpcomingEvents from "./HomeComponents/UpcomingEvents";
import WhyGoGreen from "./HomeComponents/WhyGoGreen";
import HowItWorks from "./HomeComponents/HowItWorks";

const Home = () => {
  const { name } = useContext(MainContext);
  console.log(name);
  return (
    <div className="flex flex-col items-center w-full">
      <HeroBanner></HeroBanner>
      <ActiveChallenges></ActiveChallenges>
      <RecentTips></RecentTips>
      <UpcomingEvents></UpcomingEvents>
      <WhyGoGreen></WhyGoGreen>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
