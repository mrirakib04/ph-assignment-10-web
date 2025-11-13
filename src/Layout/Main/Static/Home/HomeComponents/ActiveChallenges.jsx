import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Loader from "../../../../../Components/Loader";
import { Link } from "react-router";

const ActiveChallenges = () => {
  const AxiosPublic = useAxiosPublic();
  const {
    data: challenges = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recentChallenges"],
    queryFn: async () => {
      const res = await AxiosPublic.get("/recent/challenges");
      return res.data.data;
    },
    retry: 2,
  });

  return (
    <div className="py-10 bg-yellow-50 w-full">
      <div className="max-w-6xl mx-auto px-5 text-center flex flex-col items-center w-full">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-yellow-800 mb-2">
          Active Challenges
        </h2>
        <p className="text-gray-600 mb-10">
          Explore the latest challenges and join to make an impact.
        </p>

        {isLoading ? (
          <Loader></Loader>
        ) : isError ? (
          <p className="text-center text-red-500 py-10">
            Failed to load challenges.
          </p>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {challenges.map((challenge) => (
              <div
                key={challenge._id}
                data-aos="zoom-in"
                className="bg-linear-to-br rounded-bl-none rounded-tr-none from-green-100 via-white to-cyan-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-yellow-700">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {challenge.description.length > 100
                    ? challenge.description.slice(0, 60) + "..."
                    : challenge.description}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-sm text-gray-500 mb-1 font-medium">
                    Category: {challenge.category}
                  </p>
                  <p className="text-sm text-gray-500 mb-1 font-medium">
                    Duration: {challenge.duration} days
                  </p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-sm text-gray-500 mb-1 font-medium">
                    Participants: {challenge.participants || 0}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    Created:{" "}
                    {new Date(challenge.createdDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link
          to={"/challenges"}
          className="text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-800 shadow hover:shadow-md duration-300 py-2 px-5 mt-5 rounded-md"
        >
          Explore All Challenges
        </Link>
      </div>
    </div>
  );
};

export default ActiveChallenges;
