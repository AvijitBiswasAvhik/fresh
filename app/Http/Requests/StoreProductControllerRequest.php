<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\Description;
use App\Rules\tag;
use App\Rules\Varitions;


class StoreProductControllerRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|max:80|min:20',
            'shortDescription' => 'min:40|max:200',
            'description.feature' => 'required|array',
            'description.descriptionLong' => 'required|min:80',
            'sku' => 'required|max:20|min:10',
            'firstCategory' => 'required',
            'subCategory' => 'required',
            'price' => 'required',
            'tag' => ['required',new tag()],
            'quantity' => 'required',
            'variations' => ['required',new Varitions()],
            'variations.*.sku' => 'required',





        ];
    }
}
