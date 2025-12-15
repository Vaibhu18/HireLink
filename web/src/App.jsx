import { Routes, Route, Navigate } from "react-router"
import { useUser } from "@clerk/clerk-react"
import { Loader } from "lucide-react"
import HomePage from "./pages/HomePage"
import ProblemsPage from "./pages/ProblemsPage"
import { Toaster } from "react-hot-toast"
import DashboardPage from "./pages/DashboardPage"
import ProblemPage from "./pages/ProblemPage"
import SessionPage from "./pages/SessionPage"

function App() {

  const { isSignedIn, isLoaded } = useUser();

  // this will get rid of the flickering effect
  if (!isLoaded)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-base-100">
        <div className="flex flex-col items-center gap-5 animate-fade-in">

          <Loader className="size-16 animate-spin text-primary drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]" />

          <h1 className="text-4xl font-black tracking-widest bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
            HireLink
          </h1>

          <p className="text-sm text-base-content/60 tracking-wide animate-pulse">
            Code Together, Learn Together
          </p>
        </div>
      </div>
    );

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
