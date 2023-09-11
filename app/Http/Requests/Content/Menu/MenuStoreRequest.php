<?php

namespace App\Http\Requests\Content\Menu;

use App\Enums\Content\LinkTypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class MenuStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'label'     => ['required', 'string'],
            'link'      => ['nullable', 'string'],
            'link_type' => ['nullable', new Enum(LinkTypeEnum::class)],
            'primary'   => ['required', 'boolean'],
            'sub_menus' => ['nullable', 'array', 'min:1'],
            'sub_menus.*.label'     => ['required', 'string'],
            'sub_menus.*.link'      => ['required', 'string'],
            'sub_menus.*.link_type' => ['required',  new Enum(LinkTypeEnum::class)],
            'sub_menus.*.primary'   => ['required', 'boolean'],
        ];
    }
}
