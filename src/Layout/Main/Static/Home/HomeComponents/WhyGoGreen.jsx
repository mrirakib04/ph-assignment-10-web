const WhyGoGreen = () => {
  return (
    <div className="py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto text-center px-5 flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800 mb-4">
          Why Go Green?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Going green isn't just a choice — it's a responsibility. Every action
          we take today shapes the planet we live on tomorrow.
        </p>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-start">
          <div
            data-aos="fade-up"
            className="from-green-50 via-white to-green-100 bg-linear-to-bl shadow-md shadow-gray-300 duration-300 rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Protect Nature</h3>
            <p className="text-gray-600">
              Reduce pollution and conserve biodiversity to ensure a thriving
              ecosystem for generations ahead.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="from-green-50 via-white to-cyan-100 bg-linear-to-b shadow-md shadow-gray-300 duration-300 rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">💧</div>
            <h3 className="text-xl font-semibold mb-2">Save Resources</h3>
            <p className="text-gray-600">
              Sustainable habits like recycling and reducing waste help preserve
              energy, water, and raw materials.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="from-green-50 via-white to-lime-100 bg-linear-to-br shadow-md shadow-gray-300 duration-300 rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-semibold mb-2">
              Build a Better Future
            </h3>
            <p className="text-gray-600">
              Together we can slow climate change, protect communities, and
              create a cleaner, healthier planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGoGreen;
