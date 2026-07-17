export default function FeatureImportance() {

    const features = [
        { name: "Year", value: 28 },
        { name: "Max Power", value: 22 },
        { name: "Engine", value: 18 },
        { name: "Km Driven", value: 15 },
        { name: "Fuel", value: 9 },
    ];

    return (

        <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-6">

                📊 Feature Importance

            </h2>

            {
                features.map((item,index)=>(

                    <div key={index} className="mb-5">

                        <div className="flex justify-between mb-2">

                            <span className="font-medium">

                                {item.name}

                            </span>

                            <span>

                                {item.value}%

                            </span>

                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-3">

                            <div
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full duration-500"
                                style={{
                                    width:`${item.value}%`
                                }}
                            ></div>

                        </div>

                    </div>

                ))
            }

        </div>

    );

}