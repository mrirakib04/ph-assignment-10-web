import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Loader from "../../../../../Components/Loader";

const RecentTips = () => {
  const AxiosPublic = useAxiosPublic();
  const {
    data: tips = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recentTips"],
    queryFn: async () => {
      const res = await AxiosPublic.get("/tips?limit=5");
      return res.data.data;
    },
    retry: 2,
  });

  return (
    <div className="py-10 bg-green-50 w-full">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-green-800 mb-2">
          Recent Eco Tips
        </h2>
        <p className="text-gray-600 mb-10">
          Quick actionable tips to help you live sustainably.
        </p>

        {isLoading ? (
          <Loader></Loader>
        ) : isError ? (
          <p className="text-center text-red-500 py-10">Failed to load tips.</p>
        ) : (
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {tips.map((tip) => (
              <div
                key={tip._id}
                data-aos="zoom-in"
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-lg font-semibold mb-1 text-green-700">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {tip.content.length > 80
                    ? tip.content.slice(0, 65) + "..."
                    : tip.content}
                </p>
                <p className="text-xs text-gray-500">
                  By {tip.authorName} |{" "}
                  {new Date(tip.createdAt).toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Upvotes: {tip.upvotes}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentTips;
