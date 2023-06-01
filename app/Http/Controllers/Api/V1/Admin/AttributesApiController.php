<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAttributeRequest;
use App\Http\Requests\UpdateAttributeRequest;
use App\Http\Resources\Admin\AttributeResource;
use App\Models\Attribute;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AttributesApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('attribute_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AttributeResource(Attribute::advancedFilter());
    }

    public function store(StoreAttributeRequest $request)
    {
        $attribute = Attribute::create($request->validated());

        return (new AttributeResource($attribute))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('attribute_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'type' => Attribute::TYPE_SELECT,
            ],
        ]);
    }

    public function show(Attribute $attribute)
    {
        abort_if(Gate::denies('attribute_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AttributeResource($attribute);
    }

    public function update(UpdateAttributeRequest $request, Attribute $attribute)
    {
        $attribute->update($request->validated());

        return (new AttributeResource($attribute))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Attribute $attribute)
    {
        abort_if(Gate::denies('attribute_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new AttributeResource($attribute),
            'meta' => [
                'type' => Attribute::TYPE_SELECT,
            ],
        ]);
    }

    public function destroy(Attribute $attribute)
    {
        abort_if(Gate::denies('attribute_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $attribute->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
