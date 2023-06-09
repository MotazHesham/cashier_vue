<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\Admin\OrderResource;
use App\Models\Order;
use App\Models\Product;
use App\Models\VoucherCode;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OrdersApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('order_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new OrderResource(Order::with(['products'])->advancedFilter());
    }

    public function store(StoreOrderRequest $request)
    {
        $order = Order::create($request->validated());
        $order->products()->sync($request->input('products.*.id', []));

        return (new OrderResource($order))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('order_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'voucher_code' => VoucherCode::get(['id', 'code']),
                'products'     => Product::get(['id', 'name']),
            ],
        ]);
    }

    public function show(Order $order)
    {
        abort_if(Gate::denies('order_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new OrderResource($order->load(['voucherCode', 'products']));
    }

    public function update(UpdateOrderRequest $request, Order $order)
    {
        $order->update($request->validated());
        $order->products()->sync($request->input('products.*.id', []));

        return (new OrderResource($order))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Order $order)
    {
        abort_if(Gate::denies('order_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new OrderResource($order->load(['voucherCode', 'products'])),
            'meta' => [
                'voucher_code' => VoucherCode::get(['id', 'code']),
                'products'     => Product::get(['id', 'name']),
            ],
        ]);
    }

    public function destroy(Order $order)
    {
        abort_if(Gate::denies('order_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $order->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
