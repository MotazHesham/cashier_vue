<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Attribute extends Model
{
    use HasAdvancedFilter;
    use SoftDeletes;
    use HasFactory;

    public const TYPE_SELECT = [
        [
            'label' => 'v',
            'value' => 'single',
        ],
        [
            'label' => 'Multiple',
            'value' => 'multiple',
        ],
    ];

    public $table = 'attributes';

    protected $appends = [
        'type_label',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'attribute',
        'slug',
        'type',
    ];

    protected $filterable = [
        'id',
        'attribute',
        'slug',
        'type',
    ];

    protected $fillable = [
        'attribute',
        'slug',
        'type',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function getTypeLabelAttribute()
    {
        return collect(static::TYPE_SELECT)->firstWhere('value', $this->type)['label'] ?? '';
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
