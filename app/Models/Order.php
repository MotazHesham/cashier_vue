<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use App\Traits\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasAdvancedFilter;
    use SoftDeletes;
    use Tenantable;
    use HasFactory;

    public $table = 'orders';

    protected $orderable = [
        'id',
        'code',
        'total_cost',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'code',
        'total_cost',
        'products.name',
    ];

    protected $fillable = [
        'code',
        'paid_up',
        'total_cost',
        'voucher_code_id',
        'created_at',
        'updated_at',
        'deleted_at',
        'owner_id',
    ];

    public function voucherCode()
    {
        return $this->belongsTo(VoucherCode::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
