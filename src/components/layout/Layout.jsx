import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({ children, selectedPage, setSelectedPage }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar with dynamic selection */}
      <SideBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
