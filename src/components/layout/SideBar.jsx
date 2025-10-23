import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.svg";
import dashboardIcon from "../../assets/sidebar/dashboard.svg";
import leaderboardIcon from "../../assets/sidebar/leaderboard.svg";
import orderIcon from "../../assets/sidebar/order.svg";
import productsIcon from "../../assets/sidebar/products.svg";
import salesIcon from "../../assets/sidebar/sales.svg";
import messagesIcon from "../../assets/sidebar/messages.svg";
import settingsIcon from "../../assets/sidebar/settings.svg";
import signoutIcon from "../../assets/sidebar/signout.svg";
import CtaCard from "../common/CtaCard";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Leaderboard", icon: leaderboardIcon },
    { name: "Order", icon: orderIcon },
    { name: "Products", icon: productsIcon },
    { name: "Sales Report", icon: salesIcon },
    { name: "Messages", icon: messagesIcon },
    { name: "Settings", icon: settingsIcon },
    { name: "Sign Out", icon: signoutIcon },
  ];

  return (
    <div className="relative lg:w-[18vw]">
      {/* MENU BUTTON (visible only on mobile when sidebar is closed) */}
      {!open && (
        <div className="absolute top-4 left-4 z-20 lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-[var(--color-primary)] p-2 rounded-lg shadow-md"
          >
            <Menu size={22} />
          </button>
        </div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`absolute top-0 left-0 z-30 bg-white text-[var(--color-text)] flex flex-col p-6
        w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-full h-full shadow-xl
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-[var(--color-primary)] bg-white p-2 rounded-lg shadow-md lg:hidden"
        >
          <X size={22} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 mt-4">
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[var(--color-primary)]">
            <img
              src={logo}
              alt="Logo"
              className="w-[24px] h-[24px] object-contain"
            />
          </div>
          <h2 className="font-poppins font-semibold text-[30px] text-[var(--color-blue-gray)]">
            Dabang
          </h2>
        </div>

        {/* Sidebar Scrollable Content */}
        <div className="flex flex-col gap-8 overflow-y-auto pr-1">
          {/* Menu */}
          <nav className="flex flex-col space-y-3 sm:space-y-4">
            {menuItems.map((item) => {
              const isActive = active === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-3 w-full py-2.5 px-4 text-sm rounded-lg font-medium transition
                    ${
                      isActive
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

          {/* CTA Card — appears after menu, not stretched */}
          <div className="mt-4">
            <CtaCard
              icon={logo}
              title="Dabang Pro"
              description="Get access to all features on Tetumbas"
              align="center"
              className="w-[85%] mx-auto rounded-xl flex flex-col justify-center text-center"
              style={{
                backgroundImage: "url('/src/assets/bgGetPro.svg')",
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
        </div>
      </aside>
    </div>
  );
}
