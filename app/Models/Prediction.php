<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prediction extends Model
{
    protected $fillable = [

        'user_id',

        'name',

        'year',

        'km_driven',

        'fuel',

        'seller_type',

        'transmission',

        'owner',

        'mileage',

        'engine',

        'max_power',

        'seats',

        'predicted_price'

    ];
}