<?php

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Dashboard
    Route::get('dashboard', 'DashboardApiController@index')->name('dashboard');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    // Expense Category
    Route::resource('expense-categories', 'ExpenseCategoryApiController');

    // Income Category
    Route::resource('income-categories', 'IncomeCategoryApiController');

    // Expense
    Route::resource('expenses', 'ExpenseApiController');

    // Income
    Route::resource('incomes', 'IncomeApiController');

    // Expense Report
    Route::apiResource('expense-reports', 'ExpenseReportApiController', ['only' => ['index']]);

    // Product Category
    Route::post('product-categories/media', 'ProductCategoryApiController@storeMedia')->name('product-categories.storeMedia');
    Route::resource('product-categories', 'ProductCategoryApiController');

    // Product Tag
    Route::resource('product-tags', 'ProductTagApiController');

    // Product
    Route::post('products/media', 'ProductApiController@storeMedia')->name('products.storeMedia');
    Route::resource('products', 'ProductApiController');

    // Audit Logs
    Route::apiResource('audit-logs', 'AuditLogsApiController', ['only' => ['index']]);

    // Attributes
    Route::resource('attributes', 'AttributesApiController');

    // Voucher Codes
    Route::resource('voucher-codes', 'VoucherCodesApiController');

    // General Settings
    Route::post('general-settings/media', 'GeneralSettingsApiController@storeMedia')->name('general-settings.storeMedia');
    Route::resource('general-settings', 'GeneralSettingsApiController');

    // Orders
    Route::resource('orders', 'OrdersApiController');

    // Cashier Mode
    Route::apiResource('cashier-modes', 'CashierModeApiController', ['only' => ['index']]);
});
