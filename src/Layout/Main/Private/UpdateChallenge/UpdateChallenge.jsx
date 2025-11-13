import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import MainContext from "../../../../Context/MainContext";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Loader from "../../../../Components/Loader";
import { TiInfo } from "react-icons/ti";
import { HeadProvider, Title } from "react-head";
import { Typewriter } from "react-simple-typewriter";
import {
  Button,
  Divider,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

const UpdateChallenge = () => {
  const { id } = useParams();
  const { user } = useContext(MainContext);
  const AxiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    data: challenge,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["challenge", id],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/challenges/${id}`);
      return res.data.data;
    },
    enabled: !!id,
    retry: 2,
  });

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    duration: "",
    target: "",
    impactMetric: "",
    startDate: "",
    endDate: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (challenge) {
      setFormData({
        title: challenge.title || "",
        category: challenge.category || "",
        description: challenge.description || "",
        duration: challenge.duration || "",
        target: challenge.target || "",
        impactMetric: challenge.impactMetric || "",
        startDate: challenge.startDate?.slice(0, 10) || "",
        endDate: challenge.endDate?.slice(0, 10) || "",
        imageUrl: challenge.imageUrl || "",
      });
    }
  }, [challenge]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateChallenge = async (e) => {
    e.preventDefault();
    if (!user)
      return toast.error("You must be logged in!", {
        position: "top-right",
        autoClose: 3000,
      });
    if (user.email !== challenge.createdBy)
      return toast.error("You haven't own this challenge!", {
        position: "top-right",
        autoClose: 3000,
      });

    try {
      const updatedChallenge = {
        ...formData,
        duration: parseInt(formData.duration),
        updatedOn: new Date(),
      };

      const res = await AxiosSecure.patch(
        `/challenges/${id}`,
        updatedChallenge
      );
      console.log(res);
      if (res.data?.success === true) {
        toast.success("Challenge updated successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        refetch();
      } else {
        toast.info("No changes were made.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(`Update failed! ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  if (isLoading) return <Loader></Loader>;
  if (user?.email !== challenge?.createdBy)
    return (
      <div className="flex flex-col items-center gap-2 py-20">
        <TiInfo className="text-5xl text-red-800"></TiInfo>
        <p className="text-center text-red-500 font-medium">
          You haven't own this challenge!
        </p>
        <Link
          className="py-1 px-6 rounded-lg bg-green-600 hover:bg-green-800 duration-300 transition font-medium text-white text-lg mt-2"
          to={"/challenges"}
        >
          Go back!
        </Link>
      </div>
    );

  return (
    <div className="w-full flex flex-col gap-5 items-center mt-5 px-5 bg-linear-to-br py-10 from-white via-white to-emerald-200">
      <HeadProvider>
        <Title>Update Challenge || EcoTrack</Title>
      </HeadProvider>

      <div className="flex flex-col gap-1 items-center">
        <h3 className="md:text-4xl text-2xl italic font-semibold flex items-center gap-2">
          Update
          <span className="text-emerald-700">
            <Typewriter
              cursorColor="green"
              words={["Challenge"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={150}
            />
          </span>
        </h3>
      </div>

      <div className="py-5 w-full max-w-5xl mx-auto">
        <Divider orientation="horizontal" variant="middle" flexItem />
      </div>

      <form
        onSubmit={handleUpdateChallenge}
        className="flex flex-col items-center gap-5 max-w-4xl w-full p-5"
      >
        <div className="w-full flex sm:flex-nowrap flex-wrap gap-5">
          <TextField
            name="title"
            className="w-full"
            label="Challenge Title"
            variant="outlined"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <TextField
            name="category"
            select
            className="w-full"
            label="Category"
            variant="outlined"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <MenuItem value="Waste Reduction">Waste Reduction</MenuItem>
            <MenuItem value="Energy Conservation">Energy Conservation</MenuItem>
            <MenuItem value="Water Conservation">Water Conservation</MenuItem>
            <MenuItem value="Sustainable Transport">
              Sustainable Transport
            </MenuItem>
            <MenuItem value="Green Living">Green Living</MenuItem>
          </TextField>
        </div>

        <TextField
          name="description"
          className="w-full"
          label="Description"
          variant="outlined"
          multiline
          rows={5}
          value={formData.description}
          onChange={handleChange}
          required
        />

        <div className="w-full flex sm:flex-nowrap flex-wrap gap-5">
          <TextField
            name="duration"
            type="number"
            label="Duration (days)"
            className="w-full"
            variant="outlined"
            value={formData.duration}
            onChange={handleChange}
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              },
            }}
          />
          <TextField
            name="impactMetric"
            className="w-full"
            label="Impact Metric"
            variant="outlined"
            value={formData.impactMetric}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex sm:flex-nowrap flex-wrap gap-5">
          <TextField
            name="target"
            className="w-full"
            label="Target Goal"
            variant="outlined"
            value={formData.target}
            onChange={handleChange}
            required
          />
          <TextField
            name="imageUrl"
            className="w-full"
            label="Image URL"
            variant="outlined"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex sm:flex-nowrap flex-wrap gap-5">
          <TextField
            name="startDate"
            type="date"
            label="Start Date"
            className="w-full"
            variant="outlined"
            value={formData.startDate}
            onChange={handleChange}
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              },
            }}
          />
          <TextField
            name="endDate"
            type="date"
            label="End Date"
            className="w-full"
            variant="outlined"
            value={formData.endDate}
            onChange={handleChange}
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              },
            }}
          />
        </div>

        <div className="w-full sm:w-1/2 mx-auto">
          <Button
            type="submit"
            className="w-full py-2 rounded-md border-2 text-white! shadow-gray-400/90 bg-linear-to-tr from-emerald-600 to-teal-700 transition-all duration-300 hover:to-gray-600 hover:shadow-md"
          >
            <p className="text-lg font-semibold py-1">Update Challenge</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateChallenge;
