<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToOrdersTable extends Migration
{
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('voucher_code_id')->nullable();
            $table->foreign('voucher_code_id', 'voucher_code_fk_6239946')->references('id')->on('voucher_codes');
            $table->unsignedBigInteger('owner_id')->nullable();
            $table->foreign('owner_id', 'owner_fk_6239951')->references('id')->on('users');
        });
    }
}
