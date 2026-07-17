import { Link } from "@inertiajs/react";
import { CarFront } from "lucide-react";

export default function HeaderDashboard() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">

            <div className="flex flex-col lg:flex-row justify-between items-center">

                <div>

                    <h1 className="text-4xl font-bold mb-3">

                        🚗 Car Price Prediction System

                    </h1>

                    <p className="text-lg opacity-90">

                        Prediksi harga mobil bekas menggunakan
                        Random Forest Regression.

                    </p>

                </div>

                <Link
                    href="/prediction"
                    className="mt-8 lg:mt-0 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 duration-300"
                >
                    🚗 Mulai Prediksi
                </Link>

            </div>

        </div>
    );
}