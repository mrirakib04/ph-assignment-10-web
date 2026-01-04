import {
  FaShieldAlt,
  FaUserCheck,
  FaFileContract,
  FaExclamationTriangle,
} from "react-icons/fa";

const Conditions = () => {
  const sections = [
    {
      id: 1,
      icon: <FaUserCheck className="text-emerald-500" />,
      title: "User Eligibility",
      content:
        "By using EcoTrack, you represent that you are at least 13 years of age. You agree to provide accurate information during registration and maintain the security of your account credentials.",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-emerald-500" />,
      title: "Data Privacy",
      content:
        "Your eco-activity data is used to calculate community impact. We respect your privacy and do not sell your personal information to third parties. Please review our privacy policy for more details.",
    },
    {
      id: 3,
      icon: <FaFileContract className="text-emerald-500" />,
      title: "Community Guidelines",
      content:
        "EcoTrack is a positive community. Users are prohibited from posting misleading information about sustainability or engaging in any form of harassment within the community interaction features.",
    },
    {
      id: 4,
      icon: <FaExclamationTriangle className="text-emerald-500" />,
      title: "Limitation of Liability",
      content:
        "While we strive for accuracy, the environmental impact calculations are estimates. EcoTrack is not responsible for any actions taken based on the data provided by the platform.",
    },
  ];

  return (
    <div className="py-16 px-5 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="md:text-5xl text-3xl font-extrabold mb-6">
            Terms & <span className="text-emerald-500">Conditions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Please read these terms carefully before using the EcoTrack
            platform. By accessing our services, you agree to be bound by these
            guidelines.
          </p>
          <p className="text-sm text-emerald-600 font-bold mt-4 uppercase tracking-widest">
            Last Updated: January 2026
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section) => (
            <div
              key={section.id}
              data-aos="fade-up"
              data-aos-delay={section.id * 100}
              className="p-8 rounded-3xl border border-emerald-50 bg-emerald-50/30 hover:bg-white hover:border-emerald-200 transition-all duration-300 shadow-sm"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Detailed Info Box */}
        <div
          className="bg-gray-900 text-white rounded-4xl p-8 md:p-12"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaFileContract className="text-emerald-400" />
            Acceptance of Terms
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              By participating in EcoTrack challenges and tracking your habits,
              you acknowledge that you have read and understood these terms. We
              reserve the right to modify these conditions at any time to
              reflect changes in our service or legal requirements.
            </p>
            <p>
              Continued use of the platform after changes are posted constitutes
              your acceptance of the new terms. If you do not agree with any
              part of these conditions, please discontinue use of the platform.
            </p>
          </div>
        </div>

        {/* Contact Note */}
        <div className="mt-12 text-center text-gray-500" data-aos="fade-in">
          <p>
            Questions about our terms? Sent your inquiry to:{" "}
            <span className="text-emerald-600 font-bold">
              legal@ecotrack.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
