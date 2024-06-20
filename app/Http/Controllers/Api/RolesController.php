<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Role;


class RolesController extends Controller
{
    /**
     * RolesController constructor.
     */
    public function __construct()
    {
    }

    /**
     * Get roles.
     *
     *  @OA\Get(
     *  path="/api/roles",
     *  summary="roles list",
     *  operationId="getAllRoles",
     *  tags={"Roles"},
     *  @OA\Response(response=200, description="get all roles", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function index()
    {
        $roles = Role::all();
        return $this->sendResponse($roles, "Roles recuperados exitosamente");
    }

    /**
     *
     * @OA\Post(
     * path="/api/roles",
     * summary="create a new rol",
     * operationId="newRol",
     * tags={"Roles"},
     * security={{ "apiAuth": {} }},
     * @OA\RequestBody(
     *    required=true,
     *    description="params for create new rol",
     *    @OA\JsonContent(
     *       required={"name"},
     *       @OA\Property(property="name", type="string", example="administrador"),
     *    ),
     * ),
     * @OA\Response(response=200, description="response create role", @OA\JsonContent()),
     * @OA\Response(response=500, description="Error to create a new role",
     *    @OA\JsonContent(
     *       @OA\Property(property="message", type="string", example="Sorry, we can't created a new role")
     *        )
     *     )
     * ),
     * )
     **/
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $role = Role::create(['name' => $request->input('name')]);
        return $this->sendResponse($role, "El rol fue creado exitosamente");
    }

    /**
     * Get a role.
     *
     *  @OA\Get(
     *  path="/api/roles/{role_id}",
     * @OA\Parameter(description="ID of role", in="path",name="role_id", required=true,
     *          @OA\Schema(
     *            type="integer",
     *            format="int64",
     *            example="3"
     *          )
     * ),
     *  summary="get a rol",
     *  operationId="getRole",
     *  tags={"Roles"},
     *  @OA\Response(response=200, description="get a rol", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function show($id)
    {
        return $this->sendResponse(Role::whereId($role_id)->first(), 'El rol se mostro con exito');
    }
}
