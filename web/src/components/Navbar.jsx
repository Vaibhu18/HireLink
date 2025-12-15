import { Link, useLocation } from "react-router"
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon } from "lucide-react"
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    return (
        <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
                {/* LOGO */}
                <Link to={"/"} className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                    <div className="size-10 rounded-xl bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                        <SparklesIcon className="size-5 text-black" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-black text-2xl bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
                            HireLink
                        </span>
                        <span className="text-[12px] text-base-content/70 font-medium font-mono -mt-1">
                            Code Together
                        </span>
                    </div>
                </Link>

                <div className="flex items-center gap-1">
                    {/* PROBLEMS PAGE LINK */}
                    <Link to={"/problems"} className={`px-4 py-2.5 rounded-lg transition-all duration-300 ${isActive("/problems") ? "bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}`}>
                        <div className="flex items-center gap-2">
                            <BookOpenIcon className="size-4" />
                            <span className="font-medium hidden sm:inline">Problems</span>
                        </div>
                    </Link>

                    {/* DASHBOARD PAGE LINK */}
                    <Link to={"/dashboard"} className={`px-4 py-2.5 rounded-lg transition-all duration-300 ${isActive("/dashboard") ? "bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}`}>
                        <div className="flex items-center gap-2">
                            <LayoutDashboardIcon className="size-4" />
                            <span className="font-medium hidden sm:inline">Dashboard</span>
                        </div>
                    </Link>

                    {/* USER PROFILE */}
                    <UserButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar