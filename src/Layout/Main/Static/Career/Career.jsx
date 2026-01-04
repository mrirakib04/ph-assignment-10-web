import React from "react";
import { FaLeaf, FaHandsHelping, FaLightbulb, FaGlobe } from "react-icons/fa";

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Sustainability Analyst",
      type: "Full-time",
      location: "Remote / Dhaka",
      description:
        "Help us analyze environmental data and create impactful reports for our community.",
    },
    {
      id: 2,
      title: "Community Outreach Manager",
      type: "Contract",
      location: "On-site",
      description:
        "Engage with local communities to promote zero-waste lifestyles and eco-habits.",
    },
    {
      id: 3,
      title: "Content Strategist (Eco-Focus)",
      type: "Part-time",
      location: "Remote",
      description:
        "Create inspiring content that educates people on sustainable daily practices.",
    },
  ];

  const values = [
    {
      id: 1,
      icon: <FaLeaf />,
      title: "Purpose Driven",
      text: "Work on projects that actually help the planet.",
    },
    {
      id: 2,
      icon: <FaHandsHelping />,
      title: "Collaboration",
      text: "Join a team of passionate eco-warriors.",
    },
    {
      id: 3,
      icon: <FaLightbulb />,
      title: "Innovation",
      text: "Think outside the box to solve climate issues.",
    },
    {
      id: 4,
      icon: <FaGlobe />,
      title: "Global Reach",
      text: "Your work impacts users from all over the world.",
    },
  ];

  return (
    <div className="py-16 px-5 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="md:text-5xl text-3xl font-extrabold mb-6">
            Join the <span className="text-emerald-500">Green Revolution</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            At EcoTrack, we are building a team of innovators and dreamers
            dedicated to making sustainable living the new normal. Ready to make
            a real impact?
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h2
            className="md:text-3xl sm:text-2xl text-xl font-bold text-center mb-10"
            data-aos="fade-up"
          >
            Why Work With Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => (
              <div
                key={val.id}
                className="p-6 text-center group"
                data-aos="zoom-in"
                data-aos-delay={val.id * 100}
              >
                <div className="text-4xl text-emerald-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h4 className="sm:text-xl text-lg font-bold mb-2">
                  {val.title}
                </h4>
                <p className="text-gray-600">{val.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings Section */}
        <div className="bg-emerald-50 rounded-[3rem] p-10 md:p-16">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-900">
                Current Openings
              </h2>
              <p className="text-emerald-700 font-medium">
                Be a part of our growing family
              </p>
            </div>
            <div data-aos="fade-left">
              <span className="bg-emerald-200 text-emerald-800 px-4 py-1 rounded-full text-sm font-bold">
                {jobOpenings.length} Positions Available
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                data-aos="fade-up"
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100"
              >
                <h3 className="sm:text-xl text-lg font-bold text-gray-900 mb-1">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-gray-100 px-3 py-1 rounded-md">
                    {job.type}
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-md">
                    {job.location}
                  </span>
                </div>
                <p className="text-gray-600 max-w-3xl">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className="mt-20 text-center py-10 border-t border-emerald-100"
          data-aos="zoom-in"
        >
          <h3 className="text-2xl font-bold mb-4">
            Interested in any of these roles?
          </h3>
          <p className="text-xl text-gray-700 bg-emerald-50 inline-block px-8 py-4 rounded-2xl border border-dashed border-emerald-400">
            Sent your cv to:{" "}
            <span className="text-emerald-600 font-bold underline">
              hr@ecotrack.com
            </span>
          </p>
          <p className="mt-4 text-gray-500 italic">
            Mention the position name in the subject line of your email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
