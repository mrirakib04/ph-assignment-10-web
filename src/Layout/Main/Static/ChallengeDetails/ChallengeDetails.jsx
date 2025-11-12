import { Link, useNavigate, useParams } from "react-router";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import MainContext from "../../../../Context/MainContext";
import Swal from "sweetalert2";
import Loader from "../../../../Components/Loader";
import { HeadProvider, Title } from "react-head";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { TiInfo } from "react-icons/ti";

const ChallengeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const AxiosPublic = useAxiosPublic();
  const { user } = useContext(MainContext);

  // Fetch challenge with TanStack Query
  const {
    data: challenge,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["challenge", id],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/challenges/${id}`);
      return res.data.data;
    },
    retry: 2,
    retryDelay: 2000,
  });

  // Delete challenge
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the challenge!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await AxiosPublic.delete(`/challenges/${id}`);
          Swal.fire("Deleted!", "Challenge has been deleted.", "success");
          navigate("/challenges");
        } catch (error) {
          console.error(error);
          Swal.fire("Error", "Failed to delete challenge", "error");
        }
      }
    });
  };

  // Join challenge
  const handleJoin = async () => {
    try {
      await AxiosPublic.post(`/challenges/join/${id}`, {
        userId: user.email,
      });
      Swal.fire("Success", "You have joined the challenge!", "success");
      refetch();
      navigate("/my-activities");
    } catch (error) {
      Swal.fire("Error", `Failed to join challenge: ${error.message}`, "error");
    }
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (isLoading) return <Loader></Loader>;

  if (!challenge)
    return (
      <div className="flex flex-col items-center gap-2 py-20">
        <TiInfo className="text-4xl text-orange-700"></TiInfo>
        <p className="text-center text-orange-500 font-medium">
          Challenge not found!
        </p>
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-5 w-full mt-5 sm:px-10 px-5 py-10">
      <HeadProvider>
        <Title>{challenge.title} || EcoTrack</Title>
      </HeadProvider>

      <div className="max-w-4xl w-full border rounded-xl p-5 shadow-md bg-white shadow-gray-300 flex flex-col gap-5">
        <img
          src={challenge.imageUrl}
          alt={challenge.title}
          className="w-full h-64 object-cover rounded-md shadow-md"
        />
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-emerald-700">
          {challenge.title}
        </h2>
        <p className="text-gray-700">{challenge.description}</p>

        <div className="flex flex-wrap justify-between gap-2 text-gray-600 text-sm">
          <span>
            <strong>Category:</strong> {challenge.category}
          </span>
          <span>
            <strong>Duration:</strong> {challenge.duration} days
          </span>
          <span>
            <strong>Target:</strong> {challenge.target}
          </span>
          <span>
            <strong>Impact Metric:</strong> {challenge.impactMetric}
          </span>
          <span>
            <strong>Participants:</strong> {challenge.participants}
          </span>
          <span>
            <strong>Start Date:</strong> {formatDate(challenge.startDate)}
          </span>
          <span>
            <strong>End Date:</strong> {formatDate(challenge.endDate)}
          </span>
          <span>
            <strong>Created By:</strong> {challenge.createdBy}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          {user && user.email !== challenge.createdBy && (
            <Button
              variant="contained"
              color="success"
              onClick={handleJoin}
              className="bg-emerald-600 hover:bg-emerald-700 normal-case"
            >
              Join Challenge
            </Button>
          )}

          {user?.email === challenge.createdBy && (
            <>
              <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
                className="normal-case"
              >
                Delete
              </Button>
              <Link to={`/update-challenge/${challenge._id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  className="normal-case"
                >
                  Update
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
