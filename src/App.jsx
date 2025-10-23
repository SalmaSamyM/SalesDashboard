import AppContent from "./components/layout/AppContent"
import { DashboardProvider } from "./context/DashboardContext"
import { MenuProvider } from "./context/MenuContext"

function App() {
  return (
    <MenuProvider>
      <DashboardProvider>
         <AppContent />
      </DashboardProvider>
    </MenuProvider>
  )
}

export default App
