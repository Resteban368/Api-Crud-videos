<?php

namespace App\Http\Controllers\Api;

use Adldap\Laravel\Facades\Adldap;
use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     *
     * @OA\Post(
     * path="/api/auth/login",
     * summary="Sign in",
     * description="Login by email, password",
     * operationId="authLogin",
     * tags={"Auth"},
     * @OA\RequestBody(
     *    required=true,
     *    description="Pass user credentials",
     *    @OA\JsonContent(
     *       required={"email","password"},
     *       @OA\Property(property="email", type="string", format="email", example="admin@demo.com"),
     *       @OA\Property(property="password", type="string", format="password", example="demo"),
     *    ),
     * ),
     * @OA\Response(
     *    response=422,
     *    description="Wrong credentials response",
     *    @OA\JsonContent(
     *       @OA\Property(property="message", type="string", example="Sorry, wrong email address or password. Please try again")
     *        )
     *     )
     * )
     *

     * @return \Illuminate\Http\JsonResponse
     */
    public function login(AuthRequest $request)
    {
        $request->validate([
            'password' => 'required',
            'email' => 'required|email',
        ]);

        $credentials = request(['email', 'password']);


        if (!$token = auth()->attempt($credentials)) {
            return response(
                [
                    'message' => 'Credenciales incorrectas. Por favor, intente de nuevo',
                    'errors' => [
                        'credenciales' => ['Credenciales incorrectas. Por favor, intente de nuevo'],
                    ]
                ], 422);
        }

        if (auth()->user()->is_active && isset(auth()->user()->email_verified_at)) {
            User::whereId(auth()->user()->id)->first()->update(['remember_token' => bin2hex(openssl_random_pseudo_bytes((6 - (6 % 2)) / 2))]);
            return $this->respondWithToken($token);
        } else {
            return response(
                [
                    'message' => 'La cuenta asociada a este correo ha sido bloqueada o el correo no ha sido verificado',
                    'errors' => [
                        'account' => ['La cuenta asociada a este correo ha sido bloqueada o el correo no ha sido verificado']
                    ]
                ], 422);
        }
    }

    /**
     * Get the authenticated User.
     *
     *  @OA\Get(
     *  path="/api/auth/me",
     *  summary="user info login",
     *  operationId="authMe",
     *  tags={"Auth"},
     *  @OA\Response(response=200, description="", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        $user = User::find(Auth::user()->id);
        $user->load(['role','videos']);
        return $this->sendResponse($user);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @OA\Get(
     *  path="/api/auth/logout",
     *  summary="logout from app",
     *  operationId="authLogout",
     *  tags={"Auth"},
     *  @OA\Response(response=200, description="Logout from the app", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();

        return $this->sendResponse(['message' => 'Ha cerrado sesión satisfactoriamente']);
    }

    /**
     * Refresh a token.
     *  @OA\Get(
     *  path="/api/auth/refresh",
     *  summary="Refresh token",
     *  operationId="authRefresh",
     *  tags={"Auth"},
     *  @OA\Response(response=200, description="Refresh token", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(Auth::refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $data = [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 720,
        ];
        return $this->sendResponse($data, 'Se ha autenticado satisfactoriamente');
    }
}
