<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVoucherCodesTable extends Migration
{
    public function up()
    {
        Schema::create('voucher_codes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->longText('description')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date');
            $table->string('type');
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
