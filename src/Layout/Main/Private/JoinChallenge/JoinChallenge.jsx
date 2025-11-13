import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import MainContext from "../../../../Context/MainContext";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Loader from "../../../../Components/Loader";
import { HeadProvider, Title } from "react-head";
import { Button } from "@mui/material";

const JoinChallenge = () => {
  const { id } = useParams();
  const { user } = useContext(MainContext);
  const AxiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Not Started");

  // Fetch user challenge details
  const {
    data: activity,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userChallenge", user?.email, id],
    queryFn: async () => {
      const res = await AxiosSecure.get(
        `/user-challenges/${user?.email}/${id}`
      );
      return res.data.data;
    },
    enabled: !!user?.email,
    retry: 2,
    retryDelay: 2000,
  });

  // Populate local state when activity loads
  useEffect(() => {
    if (activity) {
      setProgress(activity.progress || 0);
      setStatus(activity.status || "Not Started");
    }
  }, [activity]);
  console.log(activity);

  // Update progress/status
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user?.email) {
      return toast.error("You must be logged in!", { position: "top-right" });
    }

    try {
      await AxiosSecure.patch(`/user-challenges/${user.email}/${id}`, {
        progress: Number(progress),
        status,
      });
      toast.success("Progress updated successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      refetch();
      navigate("/my-activities");
    } catch (error) {
      console.error(error);
      toast.error(`Failed to update progress: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  if (isLoading) return <Loader></Loader>;

  if (!activity)
    return (
      <div className="flex flex-col items-center gap-2 py-20">
        <p className="text-center text-orange-500 font-medium">
          Challenge not found or not joined.
        </p>
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-5 w-full mt-5 sm:px-10 px-5 py-10">
      <HeadProvider>
        <Title>Joined Challenge || EcoTrack</Title>
      </HeadProvider>

      {/* Challenge Image */}
      <img
        src={activity.challengeDetails.imageUrl}
        alt={activity.challengeDetails.title}
        className="w-full max-w-2xl h-64 object-cover rounded-md shadow-md"
      />

      {/* Challenge Title */}
      <h2 className="sm:text-2xl text-xl font-bold text-emerald-700">
        {activity.challengeDetails.title}
      </h2>

      {/* Challenge Description */}
      <p className="text-gray-700 max-w-4xl mx-auto">
        {activity.challengeDetails.description}
      </p>

      {/* Activity Data */}
      <div className="w-full max-w-md border rounded p-5 shadow-md bg-white mt-4 flex flex-col gap-2">
        <p>
          <strong>User ID:</strong> {activity.userId}
        </p>
        <p>
          <strong>Challenge ID:</strong> {activity.challengeId}
        </p>
        <p>
          <strong>Status:</strong> {activity.status}
        </p>
        <p>
          <strong>Progress:</strong> {activity.progress}%
        </p>
        <p>
          <strong>Joined On:</strong>{" "}
          {new Date(activity.joinDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <p>
          <strong>Updated On:</strong>{" "}
          {activity.updateDate
            ? new Date(activity?.updateDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "None"}
        </p>
        <p>
          <strong>Activity _id:</strong> {activity._id}
        </p>
      </div>

      {/* Update Form */}
      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-3 w-full max-w-md mt-5"
      >
        <label className="font-semibold">Progress (%)</label>
        <input
          type="number"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          className="border rounded p-2"
          min={0}
          max={100}
        />

        <label className="font-semibold">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded p-2"
        >
          <option>Not Started</option>
          <option>Ongoing</option>
          <option>Finished</option>
        </select>

        <Button
          type="submit"
          variant="contained"
          color="success"
          className="mt-3 normal-case bg-emerald-600 hover:bg-emerald-700"
        >
          Update Progress
        </Button>
      </form>
    </div>
  );
};

export default JoinChallenge;
