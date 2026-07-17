from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# ==========================
# Load Model & Encoder
# ==========================
model = joblib.load("model (2).pkl")
encoders = joblib.load("encoders.pkl")

print("=" * 60)
print("ENCODER BERHASIL DIMUAT")
print(type(encoders))
print(encoders.keys())
print(type(encoders["name"]))
print(encoders["name"].classes_[:5])
print("=" * 60)


@app.route("/")
def home():
    return "Car Price Prediction API Running"


@app.route("/options", methods=["GET"])
def options():

    return jsonify({
        "name": encoders["name"].classes_.tolist(),
        "fuel": encoders["fuel"].classes_.tolist(),
        "seller_type": encoders["seller_type"].classes_.tolist(),
        "transmission": encoders["transmission"].classes_.tolist(),
        "owner": encoders["owner"].classes_.tolist()
    })


@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        # =====================
        # Encode kategori
        # =====================
        name = encoders["name"].transform([data["name"]])[0]
        fuel = encoders["fuel"].transform([data["fuel"]])[0]
        seller_type = encoders["seller_type"].transform([data["seller_type"]])[0]
        transmission = encoders["transmission"].transform([data["transmission"]])[0]
        owner = encoders["owner"].transform([data["owner"]])[0]

        # =====================
        # Data untuk model
        # =====================
        input_data = pd.DataFrame([{
            "name": name,
            "year": int(data["year"]),
            "km_driven": int(data["km_driven"]),
            "fuel": fuel,
            "seller_type": seller_type,
            "transmission": transmission,
            "owner": owner,
            "mileage(km/ltr/kg)": float(data["mileage"]),
            "engine": float(data["engine"]),
            "max_power": float(data["max_power"]),
            "seats": float(data["seats"])
        }])

        # =====================
        # DEBUG
        # =====================
        print("\n==============================")
        print("INPUT KE MODEL")
        print(input_data)
        print("==============================")

        print("\nURUTAN KOLOM")
        print(input_data.columns)

        prediction = model.predict(input_data)

        print("\nHASIL PREDIKSI")
        print(prediction)
        
        # Harga dari model (Rupee India)
        harga_inr = float(prediction[0])

        # Kurs INR -> IDR
        kurs_inr_ke_idr = 190

        # Konversi ke Rupiah
        harga_idr = harga_inr * kurs_inr_ke_idr

        return jsonify({
            "success": True,
            "price_inr": harga_inr,
            "price_idr": harga_idr
        })
    
        print("\nHASIL PREDIKSI")
        print(prediction)

        

    except Exception as e:

        print("\nERROR")
        print(e)

        return jsonify({
            "success": False,
            "error": str(e)
        })


if __name__ == "__main__":
    app.run(debug=True)