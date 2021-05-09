<?php

  // file: controllers/RegisterController.php  
  require_once('models/user/userModel.php');

  class RegisterController extends Controller {

    public function showRegistrationForm() {
      return view('auth/registration',
        ['login'=>Auth::check()]); 
    }

    public function register() {
      $name = Input::get('name');  
      $email = Input::get('email');  
      $password = Input::get('password');
      $user = [
        'name'=>$name,'email'=>$email,  
        'password'=>$password];
      UserModel::create($user);
      return redirect('/');
    }
  }
?>