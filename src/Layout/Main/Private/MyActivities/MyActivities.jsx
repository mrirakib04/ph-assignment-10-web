import { useContext } from "react";
import MainContext from "../../../../Context/MainContext";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { TiInfo } from "react-icons/ti";
import { HeadProvider, Title } from "react-head";
import Loader from "../../../../Components/Loader";
import { Link } from "react-router";
import { Button } from "@mui/material";

const MyActivities = () => {
  const { user } = useContext(MainContext);
  const AxiosSecure = useAxiosSecure();

  const {
    data: activities = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["activities", user?.email],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/my-activities/${user?.email}`);
      return res.data.data;
    },
    retry: 2,
    retryDelay: 2000,
    enabled: !!user?.email,
  });

  console.log(activities);

  return (
    <div className="flex flex-col items-center gap-8 w-full mt-5 sm:px-10 px-5 py-10">
      <HeadProvider>
        <Title>My Activities || EcoTrack</Title>
      </HeadProvider>

      <div className="flex flex-col items-center gap-1 mx-auto text-center">
        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-emerald-700">
          My Activities
        </h2>
        <p className="font-medium text-gray-500 text-center">
          Track and manage all the challenges you've joined.
        </p>
      </div>

      {isLoading ? (
        <Loader></Loader>
      ) : activities.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-20">
          <TiInfo className="text-4xl text-orange-700" />
          <p className="text-center text-orange-500 font-medium">
            You haven't joined any challenge yet.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-6xl">
          {activities.map((activity) => (
            <div
              data-aos="zoom-in"
              key={activity._id}
              className="border rounded-xl bg-linear-to-br from-white via-white to-emerald-200 shadow-gray-400 rounded-br-none shadow-md overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              {/* <img
                src={activity.challengeDetails.imageUrl}
                alt={activity.challengeDetails.title}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-emerald-700">
                  {activity.challengeDetails.title}
                </h3>
                <p className="text-gray-600 text-base font-medium">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      activity.status === "Finished"
                        ? "text-green-600"
                        : activity.status === "Ongoing"
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {activity.status}
                  </span>
                </p>
                <p className="text-gray-600 text-sm font-medium">
                  Progress: {activity.progress}%
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  Joined on:{" "}
                  {new Date(activity.joinDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  Updated on:{" "}
                  {activity?.updateDate
                    ? new Date(activity?.updateDate).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "None"}
                </p>

                <div className="flex items-center gap-2 justify-between flex-wrap">
                  <Link to={`/join-challenges/${activity._id}`}>
                    <Button variant="contained" color="success">
                      Update Progress
                    </Button>
                  </Link>
                  <Link to={`/my-activities/${activity._id}`}>
                    <Button variant="contained" color="primary">
                      View More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyActivities;
