<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Str;

class varitions implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $res = array_map(function ($val) use ($fail) {
            $valKey = array_keys($val);
            if (!in_array('price', $valKey)) {
                array_push($valKey, 'price');
                $val['price'] = 0;
            };
            if (!in_array('discountPrice', $valKey)) {
                array_push($valKey, 'discountPrice');
                $val['discountPrice'] = 0;
            };

            $result = array_reduce($valKey, function ($accumulator, $cKey) use ($val, $fail, $valKey) {

                if ($cKey == 'color') {
                    $arr = [
                        "name" => isset($val["color"]["name"]) ? $val["color"]["name"] : '',
                        "type" => isset($val["color"]["type"]) ? $val["color"]["type"] : '',

                    ];

                    $keys = array_keys($arr);
                    $color = array_reduce($keys, function ($acc, $key) use ($arr, $fail) {
                        // $fail($currentValue);
                        if (empty($arr[$key])) {

                            return [...$acc, $key => "The {$key} field must be provided"];
                        } elseif (Str::length($arr[$key]) <= 3) {

                            return [...$acc, $key =>  "The {$key} length must be grater than 3 characters."];
                        } else {
                            return [...$acc];
                        }
                    }, []);

                    return [...$accumulator, ...$color];
                }


                if ($cKey == 'price') {
                    if ($val[$cKey] == 0) {
                        return [...$accumulator, 'price' => 'Price field: non-empty'];
                    } else {
                        return [...$accumulator];
                    }
                } elseif ($cKey == 'discountPrice') {
                    if ($val[$cKey] == 0) {
                        return [...$accumulator, 'discountPrice' => 'the discount price field required'];
                    } else if (intval($val[$cKey]) >= intval($val['price'])) {
                        return [...$accumulator, 'discountPrice' => 'the discount price must be lower than price'];
                    } else {
                        return [...$accumulator];
                    }
                } else {
                    return [...$accumulator];
                }
            }, []);

            if (!empty($result)) {
                return [$val['sku'] => [...$result]];
            }else{
                return;
            }
        }, $value);
        $filteredArray = array_filter($res, function($value) {
            return $value !== null;
        });
        
        if (!empty($filteredArray)) {
            $fail(json_encode($filteredArray));
        }
    }
}
