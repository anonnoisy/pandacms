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
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('slug');
            $table->string('link')->nullable();
            $table->enum('link_type', ['static', 'dynamic'])->nullable();
            $table->boolean('primary')->default(false);
            $table->unsignedBigInteger('menu_id')->nullable();
            $table->timestamps();

            $table->foreign('menu_id')->references('id')->on('menus');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
