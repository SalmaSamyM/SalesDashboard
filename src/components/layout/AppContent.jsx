import { useMenu } from "../../context/MenuContext";
import Dashboard from "../../pages/Dashboard";
import FakePage from "../../pages/FakePage";
import Layout from "./Layout";

export default function AppContent() {
  const { activeMenu } = useMenu();

  // Map active menu to components
  const pageMap = {
    Dashboard: <Dashboard />,
    Leaderboard: <FakePage title="Leaderboard" />,
    Order: <FakePage title="Order" />,
    Products: <FakePage title="Products" />,
    "Sales Report": <FakePage title="Sales Report" />,
    Messages: <FakePage title="Messages" />,
    Settings: <FakePage title="Settings" />,
    "Sign Out": <FakePage title="Sign Out" />,
  };

  const PageComponent = pageMap[activeMenu] || <Dashboard />;

  return <Layout>{PageComponent}</Layout>;
}