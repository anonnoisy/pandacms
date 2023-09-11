<?php

namespace App\Models\Content\Section;

use App\Models\Content\Page;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Section extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'label',
        'slug',
        'category_id',
    ];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['content', 'images', 'videos', 'actions', 'background'];

    /**
     * Get the category that owns the section.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(SectionCategory::class, 'category_id', 'id');
    }

    /**
     * The pages that belong to the section.
     */
    public function pages(): BelongsToMany
    {
        return $this->belongsToMany(Page::class);
    }

    /**
     * Get the content associated with the section.
     */
    public function content(): HasOne
    {
        return $this->hasOne(SectionContent::class);
    }

    /**
     * Get the images for the content.
     */
    public function images(): HasMany
    {
        return $this->hasMany(SectionImg::class);
    }

    /**
     * Get the videos for the content.
     */
    public function videos(): HasMany
    {
        return $this->hasMany(SectionVideo::class);
    }

    /**
     * Get the actions for the content.
     */
    public function actions(): HasMany
    {
        return $this->hasMany(SectionAction::class);
    }

    /**
     * Get the background content associated with the section.
     */
    public function background(): HasOne
    {
        return $this->hasOne(SectionBg::class);
    }
}
