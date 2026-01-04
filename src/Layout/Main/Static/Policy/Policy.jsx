import React from "react";
import { FaLock, FaEye, FaDatabase, FaUserShield } from "react-icons/fa";

const Policy = () => {
  const policyPoints = [
    {
      id: 1,
      icon: <FaDatabase className="text-emerald-500" />,
      title: "Information Collection",
      content:
        "We collect basic information like your name, email address, and eco-activity logs (recycling, energy saving) to provide a personalized experience and track your environmental impact.",
    },
    {
      id: 2,
      icon: <FaEye className="text-emerald-500" />,
      title: "Data Usage",
      content:
        "Your data helps us calculate community-wide sustainability statistics. We use it to improve our features, send reminders, and suggest new eco-friendly challenges tailored to your habits.",
    },
    {
      id: 3,
      icon: <FaLock className="text-emerald-500" />,
      title: "Data Security",
      content:
        "We implement industry-standard security measures to protect your personal information. Your account is password-protected, and we use encryption to ensure your data stays private.",
    },
    {
      id: 4,
      icon: <FaUserShield className="text-emerald-500" />,
      title: "Third-Party Sharing",
      content:
        "EcoTrack does not sell, trade, or rent your personal identification information to others. We only share aggregated, anonymous statistics for environmental research purposes.",
    },
  ];

  return (
    <div className="py-16 px-5 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="md:text-5xl text-3xl font-extrabold mb-6">
            Privacy <span className="text-emerald-500">Policy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            At EcoTrack, your privacy is our priority. This policy outlines how
            we handle your information as you work towards a more sustainable
            lifestyle.
          </p>
          <div className="mt-4 inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase">
            Effective Date: January 01, 2026
          </div>
        </div>

        {/* Policy Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {policyPoints.map((point) => (
            <div
              key={point.id}
              data-aos="fade-up"
              data-aos-delay={point.id * 100}
              className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed italic">
                "{point.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Cookie Policy Section */}
        <div
          className="bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100"
          data-aos="zoom-in"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cookie Policy
              </h2>
              <p className="text-emerald-700 font-medium">
                Small data for a better experience.
              </p>
            </div>
            <div className="md:w-2/3 text-gray-600 leading-relaxed border-l-0 md:border-l-2 border-emerald-200 md:pl-8">
              We use cookies to enhance your browsing experience. These small
              files help us remember your preferences and understand how you
              interact with our platform. You can choose to disable cookies
              through your browser settings, though some features of EcoTrack
              may not function properly without them.
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className="mt-16 text-center border-t border-gray-100 pt-10"
          data-aos="fade-in"
        >
          <p className="text-gray-500">
            If you have any concerns regarding your data privacy, sent your cv
            to:
            <span className="text-emerald-600 font-bold ml-1">
              privacy@ecotrack.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
