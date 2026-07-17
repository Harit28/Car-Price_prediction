import { Link } from "@inertiajs/react";
import {
    LayoutDashboard,
    Car,
    History,
    BarChart3,
    User,
    LogOut
} from "lucide-react";

export default function MainLayout({ user, children }) {
    const menus = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
        },
        {
            name: "Prediksi",
            icon: Car,
            href: "/prediction",
        },
        {
            name: "Riwayat",
            icon: History,
            href: "/history",
        },
        {
            name: "Analisis Model",
            icon: BarChart3,
            href: "/analysis",
        },
        {
            name: "Profil",
            icon: User,
            href: "/profile",
        },
    ];

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}

            <aside className="w-72 bg-slate-900 text-white shadow-xl">

                <div className="p-8">

                    <h1 className="text-2xl font-bold">

                        🚗 Car Price

                    </h1>

                    <p className="text-gray-400 text-sm">

                        Prediction System

                    </p>

                </div>

                <nav className="mt-8">

                    {menus.map((menu) => {

                        const Icon = menu.icon;

                        return (

                            <Link
                                key={menu.name}
                                href={menu.href}
                                className="flex items-center gap-4 px-8 py-4 hover:bg-slate-800 transition"
                            >

                                <Icon size={22}/>

                                {menu.name}

                            </Link>

                        );

                    })}

                </nav>

                <div className="absolute bottom-6 left-6">

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex items-center gap-3 text-red-400 hover:text-red-300"
                    >

                        <LogOut size={20}/>

                        Logout

                    </Link>

                </div>

            </aside>

            {/* Content */}

            <main className="flex-1">

                <header className="bg-white shadow px-10 py-5 flex justify-between items-center">

                    <div>

                        <h2 className="text-2xl font-bold">

                            Dashboard

                        </h2>

                    </div>

                    <div className="font-semibold">

                        {user.name}

                    </div>

                </header>

                <section className="p-10">

                    {children}

                </section>

            </main>

        </div>
    );
}