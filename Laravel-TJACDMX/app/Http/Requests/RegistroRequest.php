<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegistroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string','required'],
            'email'=>['email','required','unique:users,email'],
            'password'=>[
                'required',
                'confirmed',
                Password::min(1)->letters()->symbols()->numbers()
            ]

        ];
    }

    public function messages() {
        return[
            'name'=>'El nombre es obligatorio',
            'email.required'=>'El correo es obligatorio',
            'email.email'=>'El email no es valido',
            'email.unique'=>'El email ya esta registrado',
            'password'=>'Debe contener un numero y un caracter especial'
        ];
    }
}
