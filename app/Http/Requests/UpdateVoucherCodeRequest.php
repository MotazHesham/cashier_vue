<?php

namespace App\Http\Requests;

use App\Models\VoucherCode;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UpdateVoucherCodeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('voucher_code_edit');
    }

    public function rules()
    {
        return [
            'code' => [
                'string',
                'required',
            ],
            'description' => [
                'string',
                'nullable',
            ],
            'start_date' => [
                'date_format:' . config('project.date_format'),
                'nullable',
            ],
            'end_date' => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'type' => [
                'required',
                'in:' . implode(',', Arr::pluck(VoucherCode::TYPE_SELECT, 'value')),
            ],
        ];
    }
}
