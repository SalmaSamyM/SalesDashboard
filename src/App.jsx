import Layout from "./components/layout/Layout"
import { DashboardProvider } from "./context/DashboardContext"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <DashboardProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </DashboardProvider>
  )
}

export default App
