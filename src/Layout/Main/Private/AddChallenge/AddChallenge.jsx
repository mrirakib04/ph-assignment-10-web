import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import MainContext from "../../../../Context/MainContext";
import { toast } from "react-toastify";
import { HeadProvider, Title } from "react-head";
import { Typewriter } from "react-simple-typewriter";
import {
  Button,
  Divider,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

const AddChallenge = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(MainContext);

  // Add Challenge
  const handleAddChallenge = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!user)
      return toast.error(`You have to login first!`, {
        position: "top-right",
        autoClose: 3000,
        draggable: true,
      });

    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const duration = parseInt(form.duration.value);
    const target = form.target.value;
    const impactMetric = form.impactMetric.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const imageUrl = form.imageUrl.value;

    const newChallenge = {
      title,
      category,
      description,
      duration,
      target,
      participants: 0,
      impactMetric,
      createdBy: user?.email || "admin@ecotrack.com",
      startDate,
      endDate,
      imageUrl,
    };

    try {
      const res = await AxiosSecure.post("/challenges", newChallenge);
      if (res.data?.insertedId) {
        toast.success("Challenge added successfully!", {
          position: "top-right",
          autoClose: 2000,
          draggable: true,
        });
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error(`Failed to add challenge! ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        draggable: true,
      });
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 items-center mt-5 px-5 bg-linear-to-br py-10 from-white via-white to-emerald-200">
      <HeadProvider>
        <Title>Add Challenge || EcoTrack</Title>
      </HeadProvider>

      <div className="flex flex-col gap-1 items-center">
        <h3 className="md:text-4xl text-2xl italic font-semibold flex items-center gap-2">
          Add
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
        onSubmit={handleAddChallenge}
        className="flex flex-col items-center gap-5 max-w-4xl w-full p-5"
      >
        <div className="w-full flex sm:flex-nowrap flex-wrap gap-5">
          <TextField
            name="title"
            className="w-full"
            label="Challenge Title"
            variant="outlined"
            required
          />
          <TextField
            name="category"
            select
            className="w-full"
            label="Category"
            variant="outlined"
            defaultValue="Waste Reduction"
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
          required
        />

        <div className="w-full flex sm:flex-nowrap flex-wrap gap-5">
          <TextField
            name="duration"
            type="number"
            label="Duration (days)"
            className="w-full"
            variant="outlined"
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
            label="Impact Metric (e.g., kg plastic saved)"
            variant="outlined"
            required
          />
        </div>

        <div className="w-full flex sm:flex-nowrap flex-wrap gap-5">
          <TextField
            name="target"
            className="w-full"
            label="Target Goal"
            variant="outlined"
            required
          />
          <TextField
            name="imageUrl"
            className="w-full"
            label="Image URL"
            variant="outlined"
            required
          />
        </div>

        <div className="w-full flex sm:flex-nowrap flex-wrap gap-5">
          <TextField
            name="startDate"
            type="date"
            label="Start Date"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              },
            }}
            className="w-full"
            variant="outlined"
            required
          />
          <TextField
            name="endDate"
            type="date"
            label="End Date"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              },
            }}
            className="w-full"
            variant="outlined"
            required
          />
        </div>

        <div className="w-full sm:w-1/2 mx-auto">
          <Button
            type="submit"
            className="w-full py-2 rounded-md border-2 text-white! shadow-gray-400/90 bg-linear-to-tr from-emerald-600 to-teal-700 transition-all duration-300 hover:to-gray-600 hover:shadow-md"
          >
            <p className="text-lg font-semibold py-1">Add Challenge</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddChallenge;
