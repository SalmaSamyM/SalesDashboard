import { createContext, useContext, useEffect, useState } from "react";
import dashboardData from "../data/products.json";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      try {
        if (isMounted) setData(dashboardData);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }, 500); // simulate network delay

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <DashboardContext.Provider value={{ data, loading, error }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
