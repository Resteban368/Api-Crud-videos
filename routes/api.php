<?php

use App\Http\Controllers\Api\VideoController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public url

//auth
Route::group(['middleware' => 'api'], function () {
    // Auth
    Route::group([
        'prefix' => 'auth'
    ], function () {
        Route::post('login', [AuthController::class, 'login']);
    });

    //users
    Route::group([
        'prefix' => 'users'
    ], function () {
        Route::post('/', [UserController::class, 'store']);
        Route::post('/verifyAccount', [UserController::class, 'verifyAccount']);
        Route::post('/password', [UserController::class, 'changePassword']);
        Route::post('/resendCode', [UserController::class, 'resendCode']);
    });
});

// Routes with access denied
Route::group(['middleware' => 'auth:api'], function () {

    // Auth
    Route::group(['prefix' => 'auth'], function () {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('refresh', [AuthController::class, 'refresh']);
        Route::get('me', [AuthController::class, 'me']);
    });

    //users
    Route::group([
        'prefix' => 'users'
    ], function () {
        Route::get('/', [UserController::class, 'index']);
        Route::get('/{id}', [UserController::class, 'show']);
        Route::post('/update/{id}', [UserController::class, 'update']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
    });

    //Videos
    Route::group([
        'prefix' => 'videos'
    ], function () {
        Route::get('/', [VideoController::class, 'index']);
        Route::get('/byUser/{user_id}', [VideoController::class, 'indexByUser']);
        Route::post('/', [VideoController::class, 'store']);
        Route::get('/{id}', [VideoController::class, 'show']);
        Route::post('/update/{id}', [VideoController::class, 'update']);
        Route::delete('/{id}', [VideoController::class, 'destroy']);
    });

    //roles
    Route::group([
        'prefix' => 'roles'
    ], function () {
        Route::get('/', [RolesController::class, 'index']);
        Route::post('/', [RolesController::class, 'store']);
        Route::get('/{id}', [RolesController::class, 'show']);
    });

});
