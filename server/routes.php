<?php    
  // file: routes.php  

  Route::resource('server/professor', 'ProfessorController');
  Route::resource('server/autor', 'AutorController');
  Route::resource('server/editorial', 'EditorialController');
  Route::resource('server/libro', 'LibroController');

  Route::dispatch();
  
?> 
