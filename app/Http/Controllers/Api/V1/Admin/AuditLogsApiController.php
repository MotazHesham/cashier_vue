<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Gate;
use Illuminate\Http\Response;

class AuditLogsApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('audit_log_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response()->json([
            'data' => [
                'message' => 'It works! This message is retrieved from an API. Your component is ready to be implemented.',
            ],
        ]);
    }
}
