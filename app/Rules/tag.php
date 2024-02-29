<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Str;

class tag implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        foreach ($value as $val) {
           
            // code to execute for each element in the array
            if (Str::length($val) <= 3) {
                $fail('Each array element must higher than 3');
                return; // Stop further validation on failure
            }
        }
    }
}
