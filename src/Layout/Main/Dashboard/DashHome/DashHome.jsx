import { useContext } from "react";
import MainContext from "../../../../Context/MainContext";
import { HeadProvider, Title } from "react-head";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import StatsPieChart from "./StatsPieChart";

const DashHome = () => {
  const { userName } = useContext(MainContext);
  const AxiosPublic = useAxiosPublic();

  // Fetch aggregated stats
  const { data: stats = {} } = useQuery({
    queryKey: ["communityStats"],
    queryFn: async () => {
      const res = await AxiosPublic.get("/api/challenges/stats");
      return res.data.data;
    },
    retry: 2,
  });

  return (
    <div className="flex flex-col items-center">
      <HeadProvider>
        <Title>Welcome In Dashboard || EcoTrack</Title>
      </HeadProvider>
      <div className="w-full py-10 md:py-16 text-center bg-linear-to-r from-purple-100 via-white to-purple-100 md:text-3xl sm:text-2xl text-lg font-medium">
        Welcome{" "}
        <span className="font-semibold italic text-sky-700">
          {userName || "User"}
        </span>{" "}
        in EcoTrack
      </div>
      {/* Community Stats */}
      <div className="grid px-2 md:px-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 py-10 max-w-7xl mx-auto w-full">
        <div className="text-center w-full p-10 rounded-md bg-white shadow-md hover:shadow-lg shadow-gray-400 bg-linear-to-br from-sky-100 via-white to-white">
          <p className="text-3xl font-bold text-green-700">
            {stats.totalParticipants || 0}+
          </p>
          <p className="text-gray-600 font-medium">Active Participants</p>
        </div>
        <div className="text-center w-full p-10 rounded-md bg-white shadow-md hover:shadow-lg shadow-gray-400 bg-linear-to-br from-green-100 via-white to-white">
          <p className="text-3xl font-bold text-green-700">
            {stats.totalChallenges || 0}
          </p>
          <p className="text-gray-600 font-medium">Total Challenges</p>
        </div>
        <div className="text-center w-full p-10 rounded-md bg-white shadow-md hover:shadow-lg shadow-gray-400 bg-linear-to-br from-purple-100 via-white to-white">
          <p className="text-3xl font-bold text-lime-700">
            {stats.totalUserChallenges || 0}
          </p>
          <p className="text-gray-600 font-medium">Accepted Challenges</p>
        </div>
      </div>
      <StatsPieChart></StatsPieChart>
    </div>
  );
};

export default DashHome;
