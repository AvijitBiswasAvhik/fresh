<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAddressRequest extends FormRequest
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
            'streetNumber' => 'required|max:10',
            'addressLine1' => 'required|max:100',
            'addressLine2' => 'max:100',
            'city' => 'required|max:20',
            'region' => 'required|max:20',
            'postalCode' => 'required|max:10',
            'countryId' => 'max:3',
            

        ];
    }
}
