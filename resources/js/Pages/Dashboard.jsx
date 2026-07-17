import MainLayout from "@/Layouts/MainLayout";
import HeaderDashboard from "@/Components/Dashboard/HeaderDashboard";
import { Head } from "@inertiajs/react";
import FeatureImportance from "@/Components/Dashboard/FeatureImportance";
import ModelInformation from "@/Components/Dashboard/ModelInformation";

import StatCard from "@/Components/Cards/StatCard";

import {
    Car,
    Database,
    Activity,
    Trophy
} from "lucide-react";

export default function Dashboard({ auth }) {

    return (

        <MainLayout
            user={auth.user}
        >

            <HeaderDashboard />

                <div className="mt-10">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

                    <StatCard
                        title="Total Prediksi"
                        value="0"
                        subtitle="Belum ada prediksi"
                        icon={Car}
                        iconColor="bg-blue-500"
                    />

                    <StatCard
                        title="Akurasi Model"
                        value="92.45%"
                        subtitle="Random Forest"
                        icon={Activity}
                        iconColor="bg-green-500"
                    />

                    <StatCard
                        title="Dataset"
                        value="8128"
                        subtitle="CarDekho Dataset"
                        icon={Database}
                        iconColor="bg-purple-500"
                    />

                    <StatCard
                        title="R² Score"
                        value="0.924"
                        subtitle="Model Terbaik"
                        icon={Trophy}
                        iconColor="bg-yellow-500"
                    />

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

        <FeatureImportance />

        <ModelInformation />

        </div>
        </div>

        </MainLayout>

    );

}