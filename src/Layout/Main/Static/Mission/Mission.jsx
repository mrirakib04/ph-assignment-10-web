import { FaBullseye, FaBinoculars, FaGlobe, FaHeart } from "react-icons/fa";

const Mission = () => {
  const objectives = [
    {
      id: 1,
      icon: <FaBullseye className="text-emerald-500" />,
      title: "Our Mission",
      content:
        "To empower individuals to take measurable actions toward sustainability by providing easy-to-use tracking tools and a supportive community.",
    },
    {
      id: 2,
      icon: <FaBinoculars className="text-emerald-500" />,
      title: "Our Vision",
      content:
        "A world where sustainable living is the default choice for everyone, leading to a healthier, greener, and more resilient planet for future generations.",
    },
  ];

  const values = [
    {
      id: 1,
      icon: <FaGlobe />,
      title: "Environmental Impact",
      desc: "Every small habit counts toward a massive global change.",
    },
    {
      id: 2,
      icon: <FaHeart />,
      title: "Community Driven",
      desc: "We believe in the power of collective action and shared goals.",
    },
  ];

  return (
    <div className="py-16 px-5 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="md:text-5xl text-3xl font-extrabold mb-6">
            Our <span className="text-emerald-500">Mission</span> & Vision
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            At EcoTrack, we aren't just building an app; we are building a
            legacy of environmental consciousness and responsibility.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {objectives.map((obj) => (
            <div
              key={obj.id}
              data-aos={obj.id === 1 ? "fade-right" : "fade-left"}
              className="p-10 rounded-[2.5rem] border border-emerald-100 bg-emerald-50/50 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="text-4xl mb-6">{obj.icon}</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {obj.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {obj.content}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div
          className="bg-gray-900 text-white rounded-[3rem] p-10 md:p-16"
          data-aos="zoom-in"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why EcoTrack Exists?</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((val) => (
              <div key={val.id} className="flex gap-6 items-start">
                <div className="bg-emerald-500/20 p-4 rounded-2xl text-emerald-400 text-2xl">
                  {val.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-emerald-400">
                    {val.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Be Part of the Solution
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our mission grows stronger with every new member. If you share our
            vision for a sustainable future, we’d love to have you with us.
          </p>
          <p className="text-sm text-gray-400">
            Sent your cv to:{" "}
            <span className="text-emerald-600 font-bold">hr@ecotrack.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
