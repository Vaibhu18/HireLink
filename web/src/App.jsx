import { Routes, Route, Navigate } from "react-router"
import { useUser } from "@clerk/clerk-react"
import HomePage from "./pages/HomePage"
import ProblemPage from "./pages/ProblemPage"
import { Toaster } from "react-hot-toast"
import DashboardPage from "./pages/DashboardPage"

function App() {

  const { isSignedIn, isLoaded } = useUser();

  // this will get rid of the flickering effect
  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
        <Route path="/problems" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
