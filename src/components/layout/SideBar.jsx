import React from "react";
import { X } from "lucide-react";
import CtaCard from "../common/CtaCard";
import { useMenu } from "../../context/MenuContext";

export default function SideBar() {
  const { activeMenu, isMenuOpen, setIsMenuOpen, selectMenu } = useMenu();

  const menuItems = [
    { name: "Dashboard", icon: "/assets/sidebar/dashboard.svg" },
    { name: "Leaderboard", icon: "/assets/sidebar/leaderboard.svg" },
    { name: "Order", icon: "/assets/sidebar/order.svg" },
    { name: "Products", icon: "/assets/sidebar/products.svg" },
    { name: "Sales Report", icon: "/assets/sidebar/sales.svg" },
    { name: "Messages", icon: "/assets/sidebar/messages.svg" },
    { name: "Settings", icon: "/assets/sidebar/settings.svg" },
    { name: "Sign Out", icon: "/assets/sidebar/signout.svg" },
  ];

  return (
    <div className="relative lg:w-[18vw]">
      <aside
        className={`fixed  z-30 bg-white text-[var(--color-text)] flex flex-col p-6
          sm:w-[50vw] md:w-[40vw] lg:w-[18vw] h-full shadow-xl
        transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 text-[var(--color-primary)] bg-white p-2 rounded-lg shadow-md lg:hidden"
        >
          <X size={22} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 mt-4">
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[var(--color-primary)]">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              className="w-[24px] h-[24px] object-contain"
            />
          </div>
          <h2 className="font-poppins font-semibold text-[30px] text-[var(--color-blue-gray)]">
            Dabang
          </h2>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3 sm:gap-4 overflow-y-auto flex-1">
          {menuItems.map((item) => {
            const isActive = activeMenu === item.name;
            return (
              <button
                key={item.name}
                onClick={() => selectMenu(item.name)}
                className={`flex items-center gap-2 w-full py-2.5 px-4 text-sm rounded-lg font-medium transition
                  ${isActive
                    ? "bg-[var(--color-primary)] text-white shadow-md"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  }`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-5 h-5"
                  style={{
                    filter: isActive
                      ? "brightness(0) saturate(100%) invert(100%)"
                      : "invert(30%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(70%) contrast(90%)",
                  }}
                />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA Card */}
        <div className="mt-4">
          <CtaCard
            icon="/assets/logo.svg"
            title="Dabang Pro"
            description="Get access to all features on Tetumbas"
            align="center"
            className="w-[85%] mx-auto rounded-xl flex flex-col justify-center text-center"
            style={{
              backgroundImage: "url('/assets/bgGetPro.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              padding: "1.5rem",
            }}
            iconStyle={{ width: 40, height: 40 }}
            titleStyle={{ fontSize: 18, fontWeight: 600 }}
            descriptionStyle={{ fontSize: 14, marginBottom: 12 }}
          >
            <button className="text-[var(--color-primary)] bg-white font-semibold text-base py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              Get Pro
            </button>
          </CtaCard>
        </div>
      </aside>
    </div>
  );
}
