<?php

namespace App\Models\Content;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
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
        'link',
        'link_type',
        'primary',
        'menu_id',
    ];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['sub_menus'];

    /**
     * Get the sub menus for the menu.
     */
    public function sub_menus(): HasMany
    {
        return $this->hasMany(Menu::class);
    }
}
