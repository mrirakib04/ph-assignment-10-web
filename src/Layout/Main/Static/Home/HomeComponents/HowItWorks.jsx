const HowItWorks = () => {
  return (
    <div className="py-10 bg-gray-100 w-full">
      <div className="max-w-6xl mx-auto text-center px-5 flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Join EcoTrack and make your eco-friendly impact in three easy steps.
        </p>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center">
          <div
            data-aos="zoom-in-right"
            className="from-white via-white to-sky-200 bg-linear-to-bl shadow-md shadow-gray-400 duration-300 rounded-2xl p-5 hover:shadow-lg transition h-full rounded-br-none"
          >
            <div className="text-green-600 text-4xl font-bold mb-3">1</div>
            <h3 className="text-xl font-semibold mb-2">Join a Challenge</h3>
            <p className="text-gray-600">
              Pick an environmental challenge that inspires you — like reducing
              plastic or planting trees.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="from-white via-white to-teal-200 bg-linear-to-b shadow-md shadow-gray-400 duration-300 rounded-2xl p-5 hover:shadow-lg transition h-full rounded-b-none"
          >
            <div className="text-green-600 text-4xl font-bold mb-3">2</div>
            <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
            <p className="text-gray-600">
              Log your daily eco actions and see how your efforts contribute to
              global change.
            </p>
          </div>

          <div
            data-aos="zoom-in-left"
            className="from-white via-white to-purple-200 bg-linear-to-br shadow-md shadow-gray-400 duration-300 md:col-span-1 sm:col-span-2 col-span-1 h-full rounded-2xl p-5 hover:shadow-lg transition rounded-bl-none"
          >
            <div className="text-green-600 text-4xl font-bold mb-3">3</div>
            <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
            <p className="text-gray-600">
              Celebrate milestones and inspire others to join — small steps lead
              to a cleaner planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
