export default function ModelInformation(){

    return(

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-6 text-white">

            <h2 className="text-2xl font-bold">

                🤖 Informasi Model

            </h2>

            <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                    <span>Model</span>
                    <span className="font-semibold">Random Forest</span>
                </div>

                <div className="flex justify-between">
                    <span>Status</span>
                    <span className="text-green-400">🟢 Ready</span>
                </div>

                <div className="flex justify-between">
                    <span>Dataset</span>
                    <span>8128 Data</span>
                </div>

                <div className="flex justify-between">
                    <span>MAE</span>
                    <span>72933</span>
                </div>

                <div className="flex justify-between">
                    <span>RMSE</span>
                    <span>128732</span>
                </div>

                <div className="flex justify-between">
                    <span>R² Score</span>
                    <span>0.924</span>
                </div>

            </div>

            <button
                className="
                w-full
                mt-8
                bg-blue-600
                hover:bg-blue-700
                rounded-xl
                py-3
                font-bold
                duration-300
            "
            >

                🚗 Mulai Prediksi

            </button>

        </div>

    )

}