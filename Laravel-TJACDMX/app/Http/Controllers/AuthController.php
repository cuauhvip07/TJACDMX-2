<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegistroRequest $request){
        
        $data = $request->validate();

        $user = User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password'])
        ]);

        return [
            'token'=>$user->createToken('toke')->plainTextToken,
            'user'=>$user
        ];
    }
}
