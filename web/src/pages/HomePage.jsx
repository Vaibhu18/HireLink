import { Link } from "react-router";
import {
    ArrowRightIcon,
    CheckIcon,
    Code2Icon,
    SparklesIcon,
    UsersIcon,
    VideoIcon,
    ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

const HomePage = () => {
    return (
        <div className="bg-linear-to-br from-base-100 via-base-200 to-base-300">
            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 border-b border-primary/20 bg-base-100/70 backdrop-blur-xl shadow-lg shadow-black/5">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* LOGO */}
                    <Link
                        to="/"
                        className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary via-secondary to-accent blur-md opacity-40 group-hover:opacity-70 transition"></div>

                            <div className="relative size-10 rounded-xl bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                                <SparklesIcon className="size-5 text-black" />
                            </div>
                        </div>

                        <div className="flex flex-col leading-tight">
                            <span className="font-black text-xl bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wide">
                                HireLink
                            </span>
                            <span className="text-[11px] text-base-content/70 font-medium tracking-wide">
                                Code Together
                            </span>
                        </div>
                    </Link>

                    {/* AUTH BUTTON */}
                    <SignInButton mode="modal">
                        <button className="group relative px-6 py-3 rounded-xl font-semibold text-sm text-black overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">

                            <span className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent"></span>

                            <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/30 rotate-12 group-hover:left-[120%] transition-all duration-700"></span>

                            <span className="relative flex items-center gap-2">
                                Get Started
                                <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                        </button>
                    </SignInButton>

                </div>
            </nav>


            {/* HERO SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-5 animate-fade-in">

                        <div className="badge badge-primary badge-lg gap-2 shadow-md">
                            <ZapIcon className="size-4" />
                            Real-time Collaboration
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                            <span className="bg-linear-to-t from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Code Together,
                            </span>
                            <br />
                            <span className="text-base-content">
                                Learn Together
                            </span>
                        </h1>

                        <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
                            The ultimate platform for collaborative coding interviews and pair
                            programming. Connect face-to-face, code in real-time, and ace your
                            technical interviews.
                        </p>

                        {/* FEATURE PILLS */}
                        <div className="flex flex-wrap gap-3">
                            {["Live Video Chat", "Code Editor", "Multi-Language"].map((item) => (
                                <div
                                    key={item}
                                    className="badge badge-lg badge-outline gap-2 hover:scale-105 transition-transform"
                                >
                                    <CheckIcon className="size-4 text-success" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* CTA BUTTONS */}
                        <div className="flex flex-wrap gap-4">
                            <SignInButton mode="modal">
                                <button className="btn btn-primary btn-lg gap-2 shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                                    Start Coding Now
                                    <ArrowRightIcon className="size-5" />
                                </button>
                            </SignInButton>

                            <button className="btn btn-outline btn-lg gap-2 hover:scale-105 transition-transform">
                                <VideoIcon className="size-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* STATS */}
                        <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-xl">
                            <div className="stat">
                                <div className="stat-value text-primary">10K+</div>
                                <div className="stat-title">Active Users</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-secondary">50K+</div>
                                <div className="stat-title">Sessions</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-accent">99.9%</div>
                                <div className="stat-title">Uptime</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <img
                        src="/hero.png"
                        alt="HireLink Platform"
                        className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100/60 hover:scale-[1.03] transition-all duration-500"
                    />
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                        Everything You Need to{" "}
                        <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-mono">
                            Succeed
                        </span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Powerful features designed to make your coding interviews seamless
                        and productive
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="grid md:grid-cols-3 gap-8 mb-15">
                    {[
                        {
                            icon: <VideoIcon className="size-8 text-primary" />,
                            title: "HD Video Call",
                            desc: "Crystal clear video and audio for seamless communication during interviews",
                        },
                        {
                            icon: <Code2Icon className="size-8 text-primary" />,
                            title: "Live Code Editor",
                            desc: "Collaborate in real-time with syntax highlighting and multiple language support",
                        },
                        {
                            icon: <UsersIcon className="size-8 text-primary" />,
                            title: "Easy Collaboration",
                            desc: "Share your screen, discuss solutions, and learn from each other in real-time",
                        },
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="card-body items-center text-center">
                                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
                                    {feature.icon}
                                </div>
                                <h3 className="card-title">{feature.title}</h3>
                                <p className="text-base-content/70">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
