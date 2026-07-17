<?php

namespace App\Http\Controllers;

use App\Models\Prediction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PredictionController extends Controller
{
    public function index()
    {
        return Inertia::render('Prediction');
    }

    public function predict(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'year' => 'required',
            'km_driven' => 'required',
            'fuel' => 'required',
            'seller_type' => 'required',
            'transmission' => 'required',
            'owner' => 'required',
            'mileage' => 'required',
            'engine' => 'required',
            'max_power' => 'required',
            'seats' => 'required',
        ]);

        // Kirim data ke Flask
        $response = Http::post('http://127.0.0.1:5000/predict', [
            'name' => $request->name,
            'year' => $request->year,
            'km_driven' => $request->km_driven,
            'fuel' => $request->fuel,
            'seller_type' => $request->seller_type,
            'transmission' => $request->transmission,
            'owner' => $request->owner,
            'mileage' => $request->mileage,
            'engine' => $request->engine,
            'max_power' => $request->max_power,
            'seats' => $request->seats,
        ]);

        if (!$response->successful()) {
            return back()->with('error', 'Gagal menghubungi Flask API.');
        }

        $hasil = $response->json();

        Prediction::create([

            'user_id' => Auth::id(),

            'name' => $request->name,

            'year' => $request->year,

            'km_driven' => $request->km_driven,

            'fuel' => $request->fuel,

            'seller_type' => $request->seller_type,

            'transmission' => $request->transmission,

            'owner' => $request->owner,

            'mileage' => $request->mileage,

            'engine' => $request->engine,

            'max_power' => $request->max_power,

            'seats' => $request->seats,

            'predicted_price' => $hasil['price_idr']

        ]);

        return response()->json([
        'success' => true,
        'prediction' => $hasil['price_idr']
        ]);
    }
}