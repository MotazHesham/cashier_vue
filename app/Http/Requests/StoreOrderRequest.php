<?php

namespace App\Http\Requests;

use App\Models\Order;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreOrderRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('order_create');
    }

    public function rules()
    {
        return [
            'code' => [
                'string',
                'required',
            ],
            'paid_up' => [
                'numeric',
                'nullable',
            ],
            'total_cost' => [
                'numeric',
                'nullable',
            ],
            'voucher_code_id' => [
                'integer',
                'exists:voucher_codes,id',
                'nullable',
            ],
            'products' => [
                'required',
                'array',
            ],
            'products.*.id' => [
                'integer',
                'exists:products,id',
            ],
        ];
    }
}
