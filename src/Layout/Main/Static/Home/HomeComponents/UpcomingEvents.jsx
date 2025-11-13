import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Loader from "../../../../../Components/Loader";

const UpcomingEvents = () => {
  const AxiosPublic = useAxiosPublic();
  const {
    data: events = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["upcomingEvents"],
    queryFn: async () => {
      const res = await AxiosPublic.get("/events");
      return res.data.data;
    },
    retry: 2,
  });

  return (
    <div className="py-10 bg-sky-100 w-full">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800 mb-2">
          Upcoming Events
        </h2>
        <p className="text-gray-600 mb-10">
          Join inspiring community events and take small steps for a greener
          planet.
        </p>

        {isLoading ? (
          <Loader></Loader>
        ) : isError ? (
          <p className="text-center text-red-500 py-10">
            Failed to load events.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                data-aos="zoom-in"
                key={event._id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <p className="text-sm text-gray-500">
                  📅 {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">📍 {event.location}</p>
                <p className="mt-3 text-sm text-gray-600">
                  Participants: {event.currentParticipants}/
                  {event.maxParticipants}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
