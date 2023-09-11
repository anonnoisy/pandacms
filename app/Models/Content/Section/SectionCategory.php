<?php

namespace App\Models\Content\Section;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SectionCategory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
    ];

    /**
     * Get the category that owns the section.
     */
    public function sections(): HasMany
    {
        return $this->hasMany(Section::class, 'category_id', 'id');
    }
}
