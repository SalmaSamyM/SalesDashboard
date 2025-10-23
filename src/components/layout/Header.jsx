import { Bell, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import adminProfile from "../../assets/adminprofile.svg";
import usFlag from "../../assets/us.svg";
import frFlag from "../../assets/logo.svg"; // 🇫🇷 Example flag
import arFlag from "../../assets/logo.svg"; // 🇪🇬 Example flag

export default function Header() {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const flagMap = {
    EN: usFlag,
    FR: frFlag,
    AR: arFlag,
  };

  return (
    <header className="bg-white p-5 flex justify-between items-center">
      {/* Left: Title */}
      <h1 className="text-xl font-semibold text-[--color-blue-gray]">Dashboard</h1>

      {/* Center: Search */}
      <div className="flex-1 mx-6 max-w-md">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
          />
        </div>
      </div>

      {/* Right: Language, Notification, User */}
      <div className="flex items-center gap-5 relative">
        {/* Language Selector with Flag */}
        <img
          src={flagMap[language]}
          alt="flag"
          className="w-5 h-5 rounded-sm object-cover"
        />
        <select
          className="bg-transparent text-sm focus:outline-none cursor-pointer"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="EN">Eng (US)</option>
          <option value="FR">FR</option>
          <option value="AR">AR</option>
        </select>

        {/* Notification Icon */}
        <button className="relative text-yellow-500 hover:text-yellow-600 transition">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></span>
        </button>

        {/* User Profile Section */}
        <div
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={adminProfile}
            alt="User"
            className="w-9 h-9 rounded-full border border-gray-200"
          />
          <div className="flex flex-col">
            <span className="font-medium text-sm text-gray-700 leading-tight">
              Musfiq
            </span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <ChevronDown
            size={16}
            className={`text-gray-500 transition-transform ${menuOpen ? "rotate-180" : "rotate-0"
              }`}
          />

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-12 right-0 w-40 bg-white shadow-lg rounded-lg border border-gray-100 z-10">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-red-500">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
