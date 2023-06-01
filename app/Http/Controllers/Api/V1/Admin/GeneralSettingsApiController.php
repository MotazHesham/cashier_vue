<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGeneralSettingRequest;
use App\Http\Requests\UpdateGeneralSettingRequest;
use App\Http\Resources\Admin\GeneralSettingResource;
use App\Models\GeneralSetting;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class GeneralSettingsApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('general_setting_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new GeneralSettingResource(GeneralSetting::advancedFilter());
    }

    public function store(StoreGeneralSettingRequest $request)
    {
        $generalSetting = GeneralSetting::create($request->validated());

        if ($media = $request->input('logo', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $generalSetting->id]);
        }

        return (new GeneralSettingResource($generalSetting))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('general_setting_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(GeneralSetting $generalSetting)
    {
        abort_if(Gate::denies('general_setting_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new GeneralSettingResource($generalSetting);
    }

    public function update(UpdateGeneralSettingRequest $request, GeneralSetting $generalSetting)
    {
        $generalSetting->update($request->validated());

        $generalSetting->updateMedia($request->input('logo', []), 'general_setting_logo');

        return (new GeneralSettingResource($generalSetting))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(GeneralSetting $generalSetting)
    {
        abort_if(Gate::denies('general_setting_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new GeneralSettingResource($generalSetting),
            'meta' => [],
        ]);
    }

    public function destroy(GeneralSetting $generalSetting)
    {
        abort_if(Gate::denies('general_setting_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $generalSetting->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['general_setting_create', 'general_setting_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new GeneralSetting();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
