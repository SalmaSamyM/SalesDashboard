import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle menu selection with optional auto-close on mobile
  const selectMenu = (menu) => {
    setActiveMenu(menu);
    if (window.innerWidth < 1024) setIsMenuOpen(false); // auto-close on small screens
  };

  return (
    <MenuContext.Provider
      value={{ activeMenu, setActiveMenu, isMenuOpen, setIsMenuOpen, selectMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
