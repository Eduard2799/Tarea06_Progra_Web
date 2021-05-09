<?php
    Route::resource('/', 'HomeController');
    Route::resource('libros', 'LibrosController');
    Route::resource('autores', 'AutoresController');
    Route::resource('editoriales', 'EditorialesController');


    //Route::get('/', function () { return view('home',
        //['title'=>'Welcome','login'=>Auth::check()]); });


    // Authentication Routes  
    Route::get('login', 'LoginController@showLoginForm');
    Route::get('loginFails', 'LoginController@LoginFails');           
    Route::post('login', 'LoginController@login');  
    Route::get('logout', 'LoginController@logout');  

    // Registration Routes  
    Route::get('register', 'RegisterController@showRegistrationForm');  
    Route::post('register', 'RegisterController@register');

    
    Route::dispatch();
?>
