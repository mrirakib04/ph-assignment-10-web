import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Loader from "../../../../../Components/Loader";
import { motion } from "framer-motion";
import logo1 from "/mrir_with_bg.jpg";
import logo2 from "/logo2.jpg";
import { Link } from "react-router";

const HeroBanner = () => {
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

  console.log(stats);

  // Animation Variants
  const bannerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { yoyo: Infinity, duration: 0.3 },
    },
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-10">
      {/* Heading */}
      <motion.div
        initial="visible"
        animate="visible"
        variants={bannerVariants}
        className={`w-full flex flex-col items-center justify-center text-center bg-linear-to-t from-green-300 via-white to-green-300 text-black py-20 px-5`}
      >
        <div className="flex items-center gap-5 flex-wrap-reverse justify-evenly">
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            >
              Welcome to EcoTrack
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-lg sm:text-2xl mb-8 lg:max-w-xl"
            >
              Take small steps for a greener future with EcoTrack — join, track,
              complete eco challenges for a better planet
            </motion.p>
            <div>
              <Link to={"/challenges"}>
                <motion.button
                  whileHover="hover"
                  variants={buttonVariants}
                  className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 cursor-pointer"
                >
                  Explore Chellenges
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:w-auto w-full">
            <motion.img
              animate={{ x: [5, 15, 5], y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 rounded-tr-xl rounded-bl-xl border-l-4 border-t-4 border-cyan-600"
              src={logo1}
              alt="logo-1"
            />
            <motion.img
              animate={{ y: [-5, -20, -5], x: [105, 110, 105] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 rounded-tr-xl rounded-bl-xl border-l-4 border-t-4 border-cyan-600 object-cover"
              src={logo2}
              alt="logo-2"
            />
          </div>
        </div>
        <div id="latest-blogs"></div>
      </motion.div>

      {/* Community Stats */}
      <div className="flex flex-wrap justify-center gap-8 py-10">
        <div className="text-center p-5 rounded-md bg-white shadow-md hover:shadow-lg shadow-gray-400 bg-linear-to-br from-sky-100 via-white to-white">
          <p className="text-3xl font-bold text-green-700">
            {stats.totalParticipants || 0}+
          </p>
          <p className="text-gray-600 font-medium">Active Participants</p>
        </div>
        <div className="text-center p-5 rounded-md bg-white shadow-md hover:shadow-lg shadow-gray-400 bg-linear-to-br from-green-100 via-white to-white">
          <p className="text-3xl font-bold text-green-700">
            {stats.totalChallenges || 0}
          </p>
          <p className="text-gray-600 font-medium">Total Challenges</p>
        </div>
        <div className="text-center p-5 rounded-md bg-white shadow-md hover:shadow-lg shadow-gray-400 bg-linear-to-br from-purple-100 via-white to-white">
          <p className="text-3xl font-bold text-lime-700">20 kg/week</p>
          <p className="text-gray-600 font-medium">Impact Metric</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
