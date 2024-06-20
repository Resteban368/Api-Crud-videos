<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *    title="Documentation APIRest for Esteban Project",
 *    version="1.0.0",
 * )
 *
 * @OA\SecurityScheme(
 *     type="http",
 *     description="Login with email and password to get the authentication token",
 *     name="Token based Based",
 *     in="header",
 *     scheme="bearer",
 *     bearerFormat="JWT",
 *     securityScheme="apiAuth",
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $message = null, $code = 200)
    {
        return response()->json([
            'status' => 'Success',
            'message' => $message,
            'data' => $result
        ], $code);
    }


    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $errorMessages = [], $code = 404)
    {
        $response = [
            'type' => 'Error',
            'message' => $error,
        ];

        if (!empty($errorMessages)) {
            $response['errors'] = $errorMessages;
        }

        return response()->json($response, $code);
    }

	/**
     * success response method.
     * 1: $model         ->=> Modelo con el cual se va a trabajar
     * 2: $per_page      ->=> Cantidad de elementos a mostrar en la paginacion
     * 3: $dependencies  ->=> Son los campos que se desean mostrar especificamente, en caso de que sea null se muestran todos los campos(*)
     * 4: $params        ->=> Parametros de WHERE en caso de que la consulta tenga condiciones (Ejemplo: ['cantidad',5] Ejemplo multiple: [['cantidad', '>=', 5],['atributo', 'valor']])
     * @return \Illuminate\Http\Response
     */
    public function itemsPaginate($model, $per_page = 10, $dependencies = [], $params = null)
    {
		$o = $model::paginate($per_page);
		if (!empty($params)) {
			$o->appends($params);
        }
		$pagination = ['current_page' => $o->currentPage(),'first_page_url' => $o->onFirstPage(),'next_page_url' => $o->nextPageUrl(),'per_page' => $o->perPage(),'prev_page_url' => $o->previousPageUrl(),'hasPages' => $o->hasPages(),'hasMorePages' => $o->hasMorePages(),'getOptions' => $o->getOptions()];
		$items = $o->items();
		if (!empty($dependencies)) {
			$items = $o->load($dependencies);
		}
		return ['items' => $items,'pagination' => $pagination];
    }

    public function sendResponsePaginate($result, $load = [], $item_name = "items", $message = null, $summary = [])
    {
        $pagination = [
            'current_page' => $result->currentPage(),
            'per_page' => $result->perPage(),
            'from' => $result->firstItem(),
            'to' => $result->lastItem(),
            'total' => $result->total(),
            'last_page' => $result->lastPage(),
            'path' => $result->path(),
            'first_page_url' => $result->url(1),
            'prev_page_url' => $result->previousPageUrl(),
            'next_page_url' => $result->nextPageUrl(),
            'last_page_url' => $result->url($result->lastPage()),
            'hasPages' => $result->hasPages(),
            'hasMorePages' => $result->hasMorePages()
        ];
        $response = [
            $item_name => $result->load($load),
            "pagination" => $pagination
        ];
        if (!empty($summary)) {
            $response['summary'] = $summary;
        }
        return response()->json([
            'status' => 'Success',
            'message' => $message,
            'data' => $response
        ], 200);
    }
}
