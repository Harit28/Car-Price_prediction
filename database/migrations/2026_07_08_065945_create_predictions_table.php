<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('predictions', function (Blueprint $table) {

        $table->id();

        $table->foreignId('user_id')->constrained()->cascadeOnDelete();

        $table->string('name');

        $table->integer('year');

        $table->integer('km_driven');

        $table->string('fuel');

        $table->string('seller_type');

        $table->string('transmission');

        $table->string('owner');

        $table->float('mileage');

        $table->float('engine');

        $table->float('max_power');

        $table->integer('seats');

        $table->double('predicted_price');

        $table->timestamps();

    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('predictions');
    }
};
