<?php
    Route::resource('/', 'HomeController');
    Route::resource('libros', 'LibrosController');
    Route::resource('autores', 'AutoresController');
    Route::resource('editoriales', 'EditorialesController');

    Route::get('/', function () { return view('home',
        ['title'=>'Welcome','login'=>Auth::check()]); });

    Route::resource('professor', 'ProfessorController');
    Route::get('/professor/(:number)/delete','ProfessorController@destroy');
    Route::get('/','ProfessorController@index');

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
