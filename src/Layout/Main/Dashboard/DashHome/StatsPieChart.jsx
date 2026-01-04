import { useQuery } from "@tanstack/react-query";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Loader from "../../../../Components/Loader";

const StatsPieChart = () => {
  const AxiosPublic = useAxiosPublic();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["communityStats"],
    queryFn: async () => {
      const res = await AxiosPublic.get("/api/challenges/stats");
      return res.data.data;
    },
  });

  if (isLoading) return <Loader />;

  const chartData = [
    { name: "Active Participants", value: stats.totalParticipants || 0 },
    { name: "Total Challenges", value: stats.totalChallenges || 0 },
    { name: "Accepted Challenges", value: stats.totalUserChallenges || 0 },
  ].filter((item) => item.value > 0);

  // ইকো-ফ্রেন্ডলি কালার প্যালেট (Emerald, Green, Lime)
  const COLORS = ["#10b981", "#059669", "#84cc16"];

  return (
    <div className="w-full px-3 md:px-5 py-10">
      {" "}
      <div className="w-full p-6 rounded-3xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
          Community Impact Overview
        </h2>

        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={chartData} cx="50%" cy="45%" dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="none"
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  borderColor: "#e5e7eb",
                  borderRadius: "12px",
                  fontSize: "14px",
                }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                formatter={(value) => (
                  <span className="text-gray-600 font-medium text-sm">
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPieChart;
