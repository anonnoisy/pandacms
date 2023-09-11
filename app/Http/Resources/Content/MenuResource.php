<?php

namespace App\Http\Resources\Content;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MenuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'        => $this->id,
            'label'     => $this->label,
            'slug'      => $this->slug,
            'link'      => $this->link,
            'link_type' => $this->link_type,
            'primary'   => $this->primary,
            'sub_menus' => MenuResource::collection($this->whenLoaded('sub_menus'))
        ];
    }
}
