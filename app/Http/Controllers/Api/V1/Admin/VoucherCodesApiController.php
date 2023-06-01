<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVoucherCodeRequest;
use App\Http\Requests\UpdateVoucherCodeRequest;
use App\Http\Resources\Admin\VoucherCodeResource;
use App\Models\VoucherCode;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VoucherCodesApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('voucher_code_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new VoucherCodeResource(VoucherCode::advancedFilter());
    }

    public function store(StoreVoucherCodeRequest $request)
    {
        $voucherCode = VoucherCode::create($request->validated());

        return (new VoucherCodeResource($voucherCode))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('voucher_code_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'type' => VoucherCode::TYPE_SELECT,
            ],
        ]);
    }

    public function show(VoucherCode $voucherCode)
    {
        abort_if(Gate::denies('voucher_code_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new VoucherCodeResource($voucherCode);
    }

    public function update(UpdateVoucherCodeRequest $request, VoucherCode $voucherCode)
    {
        $voucherCode->update($request->validated());

        return (new VoucherCodeResource($voucherCode))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(VoucherCode $voucherCode)
    {
        abort_if(Gate::denies('voucher_code_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new VoucherCodeResource($voucherCode),
            'meta' => [
                'type' => VoucherCode::TYPE_SELECT,
            ],
        ]);
    }

    public function destroy(VoucherCode $voucherCode)
    {
        abort_if(Gate::denies('voucher_code_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $voucherCode->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
