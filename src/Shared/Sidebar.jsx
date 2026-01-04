import { Link, NavLink } from "react-router";
import { MdDashboard, MdPostAdd } from "react-icons/md";
import { FaHome, FaUserCircle, FaTasks, FaLeaf } from "react-icons/fa";

const Sidebar = () => {
  const menuLinks = [
    {
      to: "/dashboard", // Dashboard Home (Main path)
      label: "Dashboard Home",
      icon: <MdDashboard />,
    },
    {
      to: "/dashboard/add-challenge",
      label: "Add Challenge",
      icon: <MdPostAdd />,
    },
    {
      to: "/dashboard/my-activities",
      label: "My Activities",
      icon: <FaTasks />,
    },
    {
      to: "/dashboard/profile",
      label: "My Profile",
      icon: <FaUserCircle />,
    },
  ];

  return (
    <div className="w-full h-full bg-emerald-50 sm:p-4 p-1 space-y-2 border-r border-emerald-100">
      {/* Logo or Brand for Sidebar */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-4 mb-4">
        <FaLeaf className="text-emerald-600 text-2xl" />
        <span className="text-xl font-bold text-emerald-800">EcoTrack</span>
      </div>

      {/* Dynamic Menu Links */}
      {menuLinks.map((item) => {
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/dashboard"} // Ensures Dashboard Home doesn't stay active for sub-routes
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                isActive
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                  : "text-emerald-800 hover:bg-emerald-200"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            {/* Desktop text */}
            <span className="lg:flex hidden lg:text-sm xl:text-base">
              {item.label}
            </span>
          </NavLink>
        );
      })}

      {/* Static Links */}
      <div className="pt-4 mt-4 border-t border-emerald-200">
        <Link
          to={"/"}
          className="flex items-center gap-2 px-3 py-2 rounded-md font-medium text-emerald-800 hover:bg-emerald-200 transition-all"
        >
          <FaHome className="text-xl" />
          <span className="lg:flex hidden lg:text-sm xl:text-base">
            Back Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
