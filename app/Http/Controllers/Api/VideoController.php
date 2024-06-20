<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Requests\VideoRequest;
use App\Models\User;
use App\Models\Video;
use App\Rules\MatchOldPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class VideoController extends Controller
{
    public function __construct()
    {
    }

    const video_loads = ['user'];

    /**
     * Get videos.
     *
     *  @OA\Get(
     *  path="/api/videos",
     *  summary="videos list",
     *  operationId="getAllVideos",
     *  tags={"Videos"},
     *  @OA\Response(response=200, description="get all videos", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function index()
    {
        $videos = Video::all();
        return $this->sendResponse($videos->load(self::video_loads), 'Videos recuperados exitosamente');
    }

    /**
     * Get videos by user Id.
     *
     *  @OA\Get(
     *  path="/api/videos/byUser/{user_id}",
     * @OA\Parameter(description="ID of user", in="path",name="user_id", required=true,
     *          @OA\Schema(
     *            type="integer",
     *            format="int64",
     *            example="3"
     *          )
     * ),
     *  summary="video",
     *  operationId="getVideosByUserId",
     *  tags={"Videos"},
     *  @OA\Response(response=200, description="get videos by user id", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function indexByUser($user_id)
    {
        $videos = Video::whereUserId($user_id)->get();
        return $this->sendResponse($videos->load(self::video_loads), 'Videos recuperados exitosamente');
    }

    /**
     *
     * @OA\Post(
     * path="/api/videos",
     * summary="create a new video",
     * operationId="newVideo",
     * tags={"Videos"},
     * security={{ "apiAuth": {} }},
     *     	@OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  required={"title", "video"},
     *                  @OA\Property(property="title", type="string", example="Mi moto nueva"),
     *                  @OA\Property(property="description", type="string", example="-------"),
     *                  @OA\Property(
     *                      property="video",
     *                      description="video",
     *                      type="file",
     *                      @OA\schema(type="string", format="binary")
     *                   ),
     *               ),
     *           ),
     *       ),
     * @OA\Response(response=200, description="response create new video", @OA\JsonContent()),
     * @OA\Response(response=400, description="Bad request", @OA\JsonContent()),
     * @OA\Response(response=404, description="Resource Not Found", @OA\JsonContent()),
     * @OA\Response(response=422, description="Los datos proporcionados no son válidos", @OA\JsonContent()),
     * )
     **/
    public function store(VideoRequest $request)
    {
        try {
            $data = $request->except('video');
            $data['user_id'] = auth()->user()->id;
            if ($request->video && !strpos($request->video, 'storage')) {
                $media = $request->video;
                $path = $media->store('videos', 'public');
                $data['path'] = 'storage/' . $path;
            }
            $video = Video::create($data);
            return $this->sendResponse($video->load(self::video_loads), "El video fue creado exitosamente");
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
     * Get video Id.
     *
     *  @OA\Get(
     *  path="/api/videos/{id}",
     * @OA\Parameter(description="ID of video", in="path",name="id", required=true,
     *          @OA\Schema(
     *            type="integer",
     *            format="int64",
     *            example="3"
     *          )
     * ),
     *  summary="video",
     *  operationId="getVideo",
     *  tags={"Videos"},
     *  @OA\Response(response=200, description="get video", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function show($id)
    {
        $video = Video::find($id);
        $video->load(self::video_loads);
        return $this->sendResponse($video, 'El video se mostro con exito');
    }

    /**
     *
     * @OA\post(
     * path="/api/videos/update/{id}",
     * @OA\Parameter(description="ID of user", in="path",name="id", required=true,
     *          @OA\Schema(
     *            type="integer",
     *            format="int64",
     *            example="3"
     *          )
     * ),
     * summary="update a video",
     * operationId="updateVideo",
     * tags={"Videos"},
     * security={{ "apiAuth": {} }},
     *     	@OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  @OA\Property(property="title", type="string", example="Mi moto vieja"),
     *                  @OA\Property(property="description", type="string", example="Vendida hace poco"),
     *                  @OA\Property(
     *                      property="video",
     *                      description="video",
     *                      type="file",
     *                      @OA\schema(type="string", format="binary")
     *                   ),
     *               ),
     *           ),
     *       ),
     * @OA\Response(response=200, description="response update video", @OA\JsonContent()),
     * @OA\Response(response=400, description="Bad request", @OA\JsonContent()),
     * @OA\Response(response=404, description="Resource Not Found", @OA\JsonContent()),
     * )
     **/
    public function update(Request $request, $id)
    {
        $video = Video::whereId($id)->first();
        $data = $request->all();
        if ($request->video && !strpos($request->video, 'storage')) {
            $media = $request->video;
            $path = $media->store('videos', 'public');
            $data['path'] = 'storage/' . $path;
        } else {
            $data['path'] = $video->path;
        }
        $video->update($data);
        return $this->sendResponse($video->load(self::video_loads), "El video fue actualizado exitosamente");
    }

    /**
     * destroy video.
     *
     *  @OA\Delete(
     *  path="/api/videos/{id}",
     * @OA\Parameter(description="ID of user", in="path",name="id", required=true,
     *          @OA\Schema(
     *            type="integer",
     *            format="int64",
     *            example="3"
     *          )
     * ),
     *  summary="delete videos",
     *  operationId="DeleteVideo",
     *  tags={"Videos"},
     *  @OA\Response(response=200, description="delete video", @OA\JsonContent()),
     *  security={{ "apiAuth": {} }}
     * )
     **/
    public function destroy($id)
    {
        $video = Video::whereId($id)->first();
        $video->delete();
        return $this->sendResponse(null, 'El video fue eliminado correctamente');
    }
}
