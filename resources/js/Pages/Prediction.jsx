import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Prediction({ auth }) {

    // ===========================
    // Dropdown Options
    // ===========================

    const [options, setOptions] = useState({
        name: [],
        fuel: [],
        seller_type: [],
        transmission: [],
        owner: [],
    });

    // ===========================
    // Form Data
    // ===========================

    const [form, setForm] = useState({
        name: "",
        year: "",
        km_driven: "",
        fuel: "",
        seller_type: "",
        transmission: "",
        owner: "",
        mileage: "",
        engine: "",
        max_power: "",
        seats: "",
    });

    // ===========================
    // Result
    // ===========================

    const [prediction, setPrediction] = useState(null);

    const [loading, setLoading] = useState(false);

    // ===========================
    // Load Dropdown
    // ===========================

    useEffect(() => {

        fetch("http://127.0.0.1:5000/options")

            .then(res => res.json())

            .then(data => {

                setOptions(data);

            })

            .catch(err => console.log(err));

    }, []);

    // ===========================
    // Handle Input
    // ===========================

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

// ===========================
// Prediksi Harga
// ===========================

const predictPrice = async () => {

    setLoading(true);

    try {

        const response = await fetch("http://127.0.0.1:5000/predict", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(form)

        });

        const data = await response.json();

        if (data.success) {

        setPrediction(data.price_idr);

        } else {

    alert(data.error);

}

    } catch (error) {

        console.log(error);

        alert("Gagal terhubung ke Flask API");

    }

    setLoading(false);

};

    return (

        <MainLayout user={auth.user}>

            <Head title="Prediksi Harga Mobil" />

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold text-gray-800">

                        🚗 Prediksi Harga Mobil

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Masukkan spesifikasi mobil.

                    </p>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Nama Mobil */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Nama Mobil
            </label>

            <select
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >
                <option value="">Pilih Mobil</option>

                {options.name.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>

        {/* Tahun */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Tahun
            </label>

            <input
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Contoh: 2020"
            />
        </div>

        {/* Kilometer */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                KM Driven
            </label>

            <input
                type="number"
                name="km_driven"
                value={form.km_driven}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Contoh: 35000"
            />
        </div>

        {/* Fuel */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Fuel
            </label>

            <select
                name="fuel"
                value={form.fuel}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >
                <option value="">Pilih Fuel</option>

                {options.fuel.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>

        {/* Seller */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Seller Type
            </label>

            <select
                name="seller_type"
                value={form.seller_type}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >
                <option value="">Pilih Seller</option>

                {options.seller_type.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>

        {/* Transmission */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Transmission
            </label>

            <select
                name="transmission"
                value={form.transmission}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >
                <option value="">Pilih Transmission</option>

                {options.transmission.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>

        {/* Owner */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Owner
            </label>

            <select
                name="owner"
                value={form.owner}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >
                <option value="">Pilih Owner</option>

                {options.owner.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>

        {/* Mileage */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Mileage
            </label>

            <input
                type="number"
                step="0.1"
                name="mileage"
                value={form.mileage}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Contoh: 22.5"
            />
        </div>

        {/* Engine */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Engine (CC)
            </label>

            <input
                type="number"
                name="engine"
                value={form.engine}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Contoh: 1498"
            />
        </div>

        {/* Max Power */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Max Power
            </label>

            <input
                type="number"
                step="0.1"
                name="max_power"
                value={form.max_power}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Contoh: 108"
            />
        </div>

        {/* Seats */}
        <div>
            <label className="block text-sm font-semibold mb-2">
                Seats
            </label>

            <input
                type="number"
                name="seats"
                value={form.seats}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Contoh: 5"
            />
        </div>

    </div>

</div>

            </div>
            <div className="mt-8 flex justify-center">

                <button

                    onClick={predictPrice}

                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg transition"

                >

                    {loading ? "Memproses..." : "Prediksi Harga"}

                </button>

            </div>
            {
            prediction && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-700">
                    Estimasi Harga Mobil
                </h3>

                <p className="text-4xl font-extrabold mt-3 text-green-600">
                    Rp {Number(prediction).toLocaleString("id-ID")}
                </p>

                <p className="text-gray-500 mt-2">
                    *Estimasi hasil konversi dari dataset CarDekho (India).
                </p>
            </div>

            

    )
}
        </MainLayout>

    );

}