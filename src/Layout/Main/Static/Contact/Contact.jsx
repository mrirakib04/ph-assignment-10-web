import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLeaf } from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <FaPhoneAlt />,
      title: "Call Us",
      info: "+880 1234 567 890",
      bgColor: "bg-emerald-50",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Email Us",
      info: "support@ecotrack.com",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "Our Office",
      info: "Eco Tower, Green Road, Dhaka",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <div className="py-16 px-5 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="flex justify-center mb-4">
            <FaLeaf className="text-emerald-500 text-4xl" />
          </div>
          <h1 className="md:text-5xl text-3xl font-extrabold mb-6">
            Get in <span className="text-emerald-500">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have questions about sustainable living or need help with your
            EcoTrack account? Our green team is here to help you every step of
            the way.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactDetails.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={item.id * 100}
              className={`p-10 rounded-3xl text-center border border-gray-100 shadow-sm transition-all hover:shadow-md ${item.bgColor}`}
            >
              <div className="text-3xl text-emerald-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 font-medium">{item.info}</p>
            </div>
          ))}
        </div>

        {/* Simple Message Section (Instead of Form) */}
        <div
          className="bg-emerald-600 md:rounded-4xl sm:rounded-3xl rounded-2xl sm:p-10 p-3 py-4 md:p-16 text-center text-white"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Want to collaborate?
          </h2>
          <p className="text-emerald-100 md:text-xl sm:text-base text-sm mb-8 max-w-2xl mx-auto">
            We are always looking for eco-conscious partners and organizations
            to grow our community. Drop us a line and let's save the planet
            together.
          </p>

          <div className="inline-block bg-white/10 backdrop-blur-md sm:px-8 px-2 sm:py-5 py-2 sm:rounded-2xl rounded-xl border border-white/20">
            <p className="sm:text-lg text-base font-medium">
              Direct Inquiries:
            </p>
            <p className="sm:text-2xl text-lg font-bold">hello@ecotrack.com</p>
          </div>
        </div>

        {/* Support Hours */}
        <div className="mt-16 text-center text-gray-500" data-aos="fade-in">
          <p className="font-medium">
            Support Available: Monday - Friday (9:00 AM - 6:00 PM)
          </p>
          <p className="text-sm mt-1">We usually respond within 24 hours.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
