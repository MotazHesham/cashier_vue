<?php

namespace App\Http\Requests;

use App\Models\Attribute;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UpdateAttributeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('attribute_edit');
    }

    public function rules()
    {
        return [
            'attribute' => [
                'string',
                'required',
            ],
            'slug' => [
                'string',
                'required',
            ],
            'type' => [
                'required',
                'in:' . implode(',', Arr::pluck(Attribute::TYPE_SELECT, 'value')),
            ],
        ];
    }
}
