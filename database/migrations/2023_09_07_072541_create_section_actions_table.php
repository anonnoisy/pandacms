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
        Schema::create('section_actions', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('slug');
            $table->string('action');
            $table->enum('action_type', ['link', 'action']);
            $table->foreignId('section_id')->constrained('sections');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('section_actions');
    }
};
