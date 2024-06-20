<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Rules\MatchOldPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
    }

    const user_loads = ['role','videos'];

    /**
     * Get users.
     *
     *  @OA\Get(
     *  path="/api/users",
     *  summary="users list",
     *  operationId="getAllUsers",
     *  tags={"Users"},
     *  @OA\Response(response=200, description="get all users", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function index()
    {
        $users = User::all();
        return $this->sendResponse($users->load(self::user_loads), 'Usuarios recuperados exitosamente');
    }

    /**
     *
     * @OA\Post(
     * path="/api/users",
     * summary="create a new user",
     * operationId="newuser",
     * tags={"Users"},
     *     	@OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  required={"name", "lastname", "email", "phone", "password"},
     *                  @OA\Property(property="name", type="string", example="Juan"),
     *                  @OA\Property(property="lastname", type="string", example="Perez"),
     *                  @OA\Property(property="email", type="string", example="correo@test.com"),
     *                  @OA\Property(property="phone", type="string", example="44444444444"),
     *                  @OA\Property(property="password", type="password"),
     *                  @OA\Property(
     *                      property="photo",
     *                      description="image from user",
     *                      type="file",
     *                      @OA\schema(type="string", format="binary")
     *                   ),
     *               ),
     *           ),
     *       ),
     * @OA\Response(response=200, description="response create new user", @OA\JsonContent()),
     * @OA\Response(response=400, description="Bad request", @OA\JsonContent()),
     * @OA\Response(response=404, description="Resource Not Found", @OA\JsonContent()),
     * @OA\Response(response=422, description="Los datos proporcionados no son válidos", @OA\JsonContent()),
     * )
     **/
    public function store(UserRequest $request)
    {
        try {
            $data = $request->except('photo');
            $data['remember_token'] = bin2hex(openssl_random_pseudo_bytes((6 - (6 % 2)) / 2));
            $data['password'] = bcrypt($request->password);
            $user = User::create($data);
            if ($request->photo && !strpos($request->photo, 'storage')) {
                $image = $request->photo;
                $path = $image->store('user_avatar', 'public');
                $user->photo = 'storage/' . $path;
                $user->save();
            }
            return $this->sendResponse($user->load(self::user_loads), "El usuario fue creado exitosamente");
        } catch (\Exception $e) {
            return response(
                [
                    'message' => $e->getMessage(),
                    'errors' => [
                        'error' => [$e->getMessage()]
                    ]
                ], 400);
        }
    }

    /**
     * Get user Id.
     *
     *  @OA\Get(
     *  path="/api/users/{id}",
     * @OA\Parameter(description="ID of user", in="path",name="id", required=true,
     *          @OA\Schema(
     *            type="integer",
     *            format="int64",
     *            example="3"
     *          )
     * ),
     *  summary="user",
     *  operationId="getUser",
     *  tags={"Users"},
     *  @OA\Response(response=200, description="get user", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function show($id)
    {
        $user = User::find($id);
        $user->load(self::user_loads);
        return $this->sendResponse($user, 'El usuario se mostro con exito');
    }

    /**
     *
     * @OA\post(
     * path="/api/users/update/{id}",
     * @OA\Parameter(description="ID of user", in="path",name="id", required=true,
     *          @OA\Schema(
     *            type="integer",
     *            format="int64",
     *            example="3"
     *          )
     * ),
     * summary="update a user",
     * operationId="updateuser",
     * tags={"Users"},
     * security={{ "apiAuth": {} }},
     *     	@OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  @OA\Property(property="name", type="string", example="Yandy"),
     *                  @OA\Property(property="lastname", type="string", example="Fernandez"),
     *                  @OA\Property(property="phone", type="string", example="58446896"),
     *                  @OA\Property(property="email", type="string", example="correo@test.com"),
     *                  @OA\Property(
     *                      property="photo",
     *                      description="image from user",
     *                      type="file",
     *                      @OA\schema(type="string", format="binary")
     *                   ),
     *               ),
     *           ),
     *       ),
     * @OA\Response(response=200, description="response update user", @OA\JsonContent()),
     * @OA\Response(response=400, description="Bad request", @OA\JsonContent()),
     * @OA\Response(response=404, description="Resource Not Found", @OA\JsonContent()),
     * )
     **/
    public function update(Request $request, $id)
    {
        $user = User::whereId($id)->first();
        if ($user->email !== $request->email) {
            if (User::where('email', $request->email)->exists()) {
                return response(
                    [
                        'message' => 'Validation Error',
                        'errors' => [
                            'email' => ['El correo ya está tomado. Debe especificar uno que no esté registrado'],
                        ]
                    ], 400);
            }
        }
        $data = $request->all();
        $data['remember_token'] = bin2hex(openssl_random_pseudo_bytes((6 - (6 % 2)) / 2));
        if ($request->photo && !strpos($request->photo, 'storage')) {
            $image = $request->photo;
            $path = $image->store('user_avatar', 'public');
            $data['photo'] = 'storage/' . $path;
        } else {
            $data['photo'] = $user->photo;
        }
        $user->update($data);
        return $this->sendResponse($user->load(self::user_loads), "El usuario fue actualizado exitosamente");
    }

    /**
     * destroy user.
     *
     *  @OA\Delete(
     *  path="/api/users/{id}",
     * @OA\Parameter(description="ID of user", in="path",name="id", required=true,
     *          @OA\Schema(
     *            type="integer",
     *            format="int64",
     *            example="3"
     *          )
     * ),
     *  summary="delete user",
     *  operationId="DeleteUsers",
     *  tags={"Users"},
     *  @OA\Response(response=200, description="delete users", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function destroy($id)
    {
        $user = User::whereId($id)->first();
        $user->delete();
        return $this->sendResponse(null, 'El usuario fue eliminado correctamente');
    }

    /**
     *
     * @OA\post(
     * path="/api/users/password}",
     * summary="change password a user",
     * operationId="changePaswordUser",
     * tags={"Users"},
     *     	@OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              @OA\Schema(
     *                  required={"password","verifyPass"},
     *                  @OA\Property(property="code", type="string", example="4665asd"),
     *                  @OA\Property(property="current_password", type="password", example="demo123"),
     *                  @OA\Property(property="password", type="password", example="nuevopassword"),
     *                  @OA\Property(property="verifyPass", type="password", example="nuevopassword")
     *               ),
     *           ),
     *       ),
     * @OA\Response(response=200, description="response update user", @OA\JsonContent()),
     * @OA\Response(response=400, description="Bad request", @OA\JsonContent()),
     * @OA\Response(response=404, description="Resource Not Found", @OA\JsonContent()),
     * )
     **/
    public function changePassword(Request $request)
    {
        $data = null;
        if ($request['code']) {
            $data = $request->validate([
                'password' => 'required',
                'verifyPass' => ['same:password']
            ]);
            $user_code = $request['code'];
        } else {
            $data = $request->validate([
                'current_password' => ['required', new MatchOldPassword()],
                'password' => 'required',
                'verifyPass' => ['same:password']
            ]);
            $user_code = auth()->user()->remember_token;
        }

        $user_update = User::whereRememberToken($user_code)->first()->update([
            'password' => Hash::make($data['password']),
            'remember_token' => bin2hex(openssl_random_pseudo_bytes((6 - (6 % 2)) / 2))
        ]);
        return $this->sendResponse($user_update, 'Contraseña actualizada con éxito !!');
    }

    /**
     *
     * @OA\post(
     * path="/api/users/verifyAccount",
     * summary="verify account a user",
     * operationId="verifyAccountUser",
     * tags={"Users"},
     *     	@OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              @OA\Schema(
     *                  required={"code"},
     *                  @OA\Property(property="code", type="string", example="1A2B3C")
     *               ),
     *           ),
     *       ),
     * @OA\Response(response=200, description="response verify user", @OA\JsonContent()),
     * @OA\Response(response=400, description="Bad request", @OA\JsonContent()),
     * @OA\Response(response=404, description="Resource Not Found", @OA\JsonContent()),
     * )
     **/
    public function verifyAccount(Request $request)
    {
        $user_update = User::whereRememberToken($request['code'])->first()->update([
            'email_verified_at' => now(),
            'remember_token' => bin2hex(openssl_random_pseudo_bytes((6 - (6 % 2)) / 2))
        ]);
        return $this->sendResponse($user_update, 'Cuenta verificada con exito');
    }

    /**
     *
     * @OA\post(
     * path="/api/users/resendCode",
     * summary="resend Code",
     * operationId="resendCoder",
     * tags={"Users"},
     *     	@OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              @OA\Schema(
     *                  required={"email"},
     *                  @OA\Property(property="email", type="string", example="1A2B3C"),
     *                  @OA\Property(property="isPassRecovery", type="string", example="1", description="atributo para diferencia el correo a enviar (si existe el atributo se envia crreo para cambio de contrasenna de lo contrario se envia correo para verificacion de cuenta)"),
     *               ),
     *           ),
     *       ),
     * @OA\Response(response=200, description="response user", @OA\JsonContent()),
     * @OA\Response(response=400, description="Bad request", @OA\JsonContent()),
     * @OA\Response(response=404, description="Resource Not Found", @OA\JsonContent()),
     * )
     **/
    public function resendCode( Request $request){
        $request->validate([
            'email' => 'required|email',
        ]);
        $user = User::whereEmail($request['email'])->first();

        //TODO enviar email
        /*if ($request['isPassRecovery']){

        }else{

        }*/

        return $this->sendResponse($user, 'codigo reenviado con éxito !!');
    }
}
