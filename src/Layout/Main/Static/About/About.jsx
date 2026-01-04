import { FaLeaf, FaUsers, FaGlobeAmericas, FaChartLine } from "react-icons/fa";
import aPhoto from "/logo2.jpg";
import { Link } from "react-router";

const About = () => {
  const stats = [
    {
      id: 1,
      icon: <FaLeaf />,
      title: "Eco Goals",
      desc: "Setting sustainable targets for a better tomorrow.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Community",
      desc: "A growing network of eco-conscious individuals.",
    },
    {
      id: 3,
      icon: <FaGlobeAmericas />,
      title: "Global Impact",
      desc: "Reducing carbon footprint on a global scale.",
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Real-time Tracking",
      desc: "Monitor your progress with interactive analytics.",
    },
  ];

  return (
    <div className="py-16 px-5 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">
            About EcoTrack
          </h2>
          <h1 className="md:text-5xl text-3xl font-extrabold mb-6">
            Empowering Your Journey to{" "}
            <span className="text-emerald-500">Sustainability</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            EcoTrack is more than just a tool; it's a movement. We help
            individuals transform small daily habits into significant
            environmental changes through tracking, community support, and
            personal challenges.
          </p>
        </div>

        {/* Content Section - Image & Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative" data-aos="fade-right">
            <img
              src={aPhoto}
              alt="Sustainable Living"
              className="rounded-3xl shadow-2xl border-8 border-emerald-50"
            />
            <div
              className="absolute -bottom-6 -right-6 bg-emerald-500 p-6 rounded-2xl hidden md:block"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <p className="text-white font-bold text-xl">100% Eco-Driven</p>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <h3 className="text-3xl font-bold text-gray-900">
              Why We Started EcoTrack?
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              Our mission is to bridge the gap between awareness and action. We
              believe that everyone wants to help the planet, but often doesn't
              know where to start. EcoTrack provides a clear roadmap and a
              supportive community to make sustainable living accessible to all.
            </p>
            <ul className="space-y-4">
              {[
                "Promote renewable habits",
                "Encourage zero-waste lifestyle",
                "Build a global support community",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <FaLeaf className="text-emerald-600 text-sm" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats/Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              data-aos="zoom-in"
              data-aos-delay={stat.id * 100}
              className="p-8 rounded-3xl text-center border border-emerald-100 bg-emerald-50 transition-all hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="text-4xl text-emerald-500 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                {stat.title}
              </h4>
              <p className="text-gray-600">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="mt-20 p-10 rounded-[3rem] bg-emerald-600 text-center text-white"
          data-aos="flip-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to track your impact?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto text-lg">
            Join thousands of eco-warriors today and start making a difference,
            one habit at a time.
          </p>
          <Link
            to={"/challenges"}
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
