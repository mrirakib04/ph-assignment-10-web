import { Link, useParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader";
import { HeadProvider, Title } from "react-head";
import { Button, Divider } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import MainContext from "../../../../Context/MainContext";
import { TiInfo } from "react-icons/ti";

const MyActivitiesDetails = () => {
  const { id } = useParams();
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(MainContext);

  const { data: challenge, isLoading } = useQuery({
    queryKey: ["challenge", id],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/joined/challenges/${id}`);
      return res.data.data;
    },
    enabled: !!id,
    retry: 2,
  });

  if (isLoading) return <Loader></Loader>;

  if (!challenge)
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-600 text-lg">
        Challenge not found!
      </div>
    );

  if (user?.email !== challenge?.userId)
    return (
      <div className="flex flex-col items-center gap-2 py-20">
        <TiInfo className="text-5xl text-red-800"></TiInfo>
        <p className="text-center text-red-500 font-medium">
          You haven't own this activity!
        </p>
        <Link
          className="py-1 px-6 rounded-lg bg-green-600 hover:bg-green-800 duration-300 transition font-medium text-white text-lg mt-2"
          to={"/my-activities"}
        >
          Go back!
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-5 w-full mt-5 sm:px-10 px-5 py-10">
      <HeadProvider>
        <Title>Joined Challenge Progress || EcoTrack</Title>
      </HeadProvider>

      <img
        src={challenge.challengeDetails.imageUrl}
        alt={challenge.challengeDetails.title}
        className="w-full max-w-2xl h-72 object-cover rounded-lg shadow-md"
      />

      <h2 className="sm:text-3xl text-2xl font-bold text-green-700">
        {challenge.challengeDetails.title}
      </h2>

      <Divider className="my-4 w-full max-w-2xl" />

      <div className="max-w-2xl w-full flex flex-col gap-2 text-gray-700 text-base">
        <p>
          <strong>Category:</strong> {challenge.challengeDetails.category}
        </p>
        <p>
          <strong>Description:</strong> {challenge.challengeDetails.description}
        </p>
        <p>
          <strong>Duration:</strong> {challenge.challengeDetails.duration} days
        </p>
        <p>
          <strong>Target Goal:</strong> {challenge.challengeDetails.target}
        </p>
        <p>
          <strong>Impact Metric:</strong>{" "}
          {challenge.challengeDetails.impactMetric}
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {new Date(challenge.challengeDetails.startDate).toLocaleDateString()}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {new Date(challenge.challengeDetails.endDate).toLocaleDateString()}
        </p>
        {challenge.updatedOn && (
          <p>
            <strong>Last Updated:</strong>{" "}
            {new Date(challenge.updatedOn).toLocaleString()}
          </p>
        )}
      </div>

      <div className="mt-6">
        <Link to={`/join-challenges/${challenge._id}`}>
          <Button
            variant="contained"
            color="success"
            className="normal-case bg-green-600 hover:bg-green-700 flex items-center gap-2"
          >
            Update Progress <FaArrowRight></FaArrowRight>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyActivitiesDetails;
