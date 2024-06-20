<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $response = new JsonResponse([
            'data' => ['errors' => $validator->errors()],
            'message' => 'Los datos proporcionados no son válidos',
        ], 422);

        throw new \Illuminate\Validation\ValidationException($validator, $response);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        $user_unique = Rule::unique('users', 'email')->ignore($this->email);
        $phone_unique = Rule::unique('users', 'phone')->ignore($this->phone);

        if ($request->isMethod('PUT')) {
            $user_unique = Rule::unique('users', 'email')->ignore($this->email, 'email');
            $phone_unique = Rule::unique('users', 'phone')->ignore($this->phone, 'phone');
        }

        return [
            'name' => 'required',
            'lastname' => 'required',
            'email' => [
                'required',
                'email',
                $user_unique
            ],
            'password' => 'required|min:8',
            'phone' => ['required', $phone_unique],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'El nombre es obligatorio',
            'email.required' => 'El email es obligatorio',
            'email.unique' => 'El email está en uso',
            'email.email' => 'El email no es valido',
            'password.required' => 'La contraseña es obligatorio',
            'password.min' => 'La contraseña tiene que tener 8 caracteres como mínimo',
            'phone.required' => 'El teléfono es obligatorio',
            'phone.unique' => 'El teléfono está en uso'
        ];
    }
}
