import { useContext, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { HeadProvider, Title } from "react-head";
import { Button, TextField } from "@mui/material";
import Loader from "../../../../Components/Loader";
import { Link } from "react-router";
import MainContext from "../../../../Context/MainContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Challenges = () => {
  const AxiosPublic = useAxiosPublic();
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(MainContext);

  const {
    data: challenges = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["challenges", searchTerm],
    queryFn: async () => {
      const res = await AxiosPublic.get(
        `/challenges${searchTerm ? `?search=${searchTerm}` : ""}`
      );
      return res.data.data;
    },
    retry: 2,
    retryDelay: 2000,
  });

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This challenge will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await AxiosPublic.delete(`/delete/challenge/${id}`);
          if (res.data.success) {
            toast.success("Challenge deleted successfully!", {
              position: "top-right",
              autoClose: 2000,
              draggable: true,
            });
            refetch();
          } else {
            toast.error(`Failed to delete challenge!`, {
              position: "top-right",
              autoClose: 3000,
              draggable: true,
            });
          }
        } catch (err) {
          toast.error(`Error to delete challenge: ${err.message}`, {
            position: "top-right",
            autoClose: 3000,
            draggable: true,
          });
        }
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full mt-5 sm:px-10 px-5 py-10">
      <HeadProvider>
        <Title>Challenges || EcoTrack</Title>
      </HeadProvider>

      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center">
        Explore Challenges
      </h2>

      {/* Search Bar */}
      <div className="w-full flex justify-center">
        <TextField
          placeholder="Search challenges..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2"
          variant="outlined"
        />
      </div>

      {/* Challenges Grid */}
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {challenges.length > 0 ? (
            challenges.map((ch) => (
              <div
                key={ch._id}
                className="border rounded-xl p-5 shadow-md hover:shadow-lg bg-white shadow-gray-400 duration-300 flex flex-col gap-1 justify-between"
              >
                <img
                  src={ch.imageUrl}
                  alt={ch.title}
                  className="w-full h-48 object-cover rounded-md mb-3 shadow-md"
                />
                <h3 className="font-bold lg:text-xl text-lg text-emerald-700">
                  {ch.title}
                </h3>

                <p className="text-gray-700 text-sm">
                  {ch.description.length > 100
                    ? `${ch.description.slice(0, 100)}...`
                    : ch.description}
                </p>

                <div className="flex justify-between items-center mt-3 text-sm text-gray-600 flex-wrap gap-1">
                  <span>
                    <span className="font-medium">Category:</span> {ch.category}
                  </span>
                  <span>
                    <span className="font-medium">Duration:</span> {ch.duration}{" "}
                    days
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 flex-wrap gap-1">
                  <span>
                    <span className="font-medium">Starts:</span>{" "}
                    {formatDate(ch.startDate)}
                  </span>
                  <span>
                    <span className="font-medium">Ends:</span>{" "}
                    {formatDate(ch.endDate)}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
                  <Link to={`/challenges/${ch._id}`}>
                    <Button
                      variant="contained"
                      color="success"
                      size="medium"
                      className="bg-emerald-600 hover:bg-emerald-700 normal-case"
                    >
                      View Details
                    </Button>
                  </Link>
                  {user?.email === ch.createdBy && (
                    <Button
                      variant="contained"
                      color="error"
                      size="medium"
                      onClick={() => handleDelete(ch._id)}
                    >
                      Delete
                    </Button>
                  )}
                  {user?.email === ch.createdBy && (
                    <Link to={`/update-challenge/${ch._id}`}>
                      <Button variant="contained" color="primary" size="medium">
                        Update
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-3 py-10 font-medium">
              No challenges found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Challenges;
