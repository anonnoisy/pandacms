<?php

namespace App\Models\Content\Section;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SectionContent extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'content',
        'section_id',
    ];

    /**
     * Get the section that owns the action.
     */
    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }
}
