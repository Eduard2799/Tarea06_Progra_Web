<?php

  // require_once('models/autor/Autor.php');
  // require_once('models/libro/Libro.php');

  class AutoresController extends Controller {   
        
    public function index() {      
      return view('Autores/Autores', ['login' => Auth::check(), 'autores_m' => DB::table('autores')->get()]);
      //echo 'Hello, World!';
    }

    public function show($id) { 
        $autor_m = DB::table('autores')->where('id',$id)->first();
        $libs_aut = DB::table('libros')->where('author_id',$autor_m[0]['id'])->get();

        if(sizeof($libs_aut) == 0){
          $libs_aut = ['title' => '', 'edition' => '', 'copyright' => '', 'language' => '', 'pages' => '', 'author_id' => '', 'publisher_id' => ''];
        }

        return view('Autores/Muestra', ['login' => Auth::check(), 'autor_m' => $autor_m, 'libros_m' => $libs_aut, 'edita' => false, 'muestra' => true, 'crea' => false, 'disabled' => true]);
    }

    public function edit($id) { 
      $autor_m =  DB::table('autores')->where('id',$id)->first();
      
      return view('Autores/Muestra', ['login' => Auth::check(), 'autor_m' => $autor_m, 'edita' => true, 'muestra' => false, 'crea' => false, 'disabled' => false]);
    }

    public function update($_,$id)
    {
      $author = Input::get('author');
      $nationality = Input::get('nationality');
      $birth_year = Input::get('birth_year');
      $fields = Input::get('fields');;

      $item = ['author' => $author, 'nationality' => $nationality, 'birth_year' => $birth_year, 'fields' => $fields];
      
      DB::table('autores',['login' => Auth::check()])->update($id,$item);
     
      return redirect('/autores');
    }

    public function create() { 
      $autor_m = ['author' => '', 'nationality' => '', 'birth_year' => '', 'fields' => ''];
      return view('Autores/Muestra', ['login' => Auth::check(), 'edita' => false, 'muestra' => false, 'crea' => true, 'disabled' => false, 'autor_m' => $autor_m]);
    }

    public function store()
    {
      $author = Input::get('author');
      $nationality = Input::get('nationality');
      $birth_year = Input::get('birth_year');
      $fields = Input::get('fields');;

      $item = ['author' => $author, 'nationality' => $nationality, 'birth_year' => $birth_year, 'fields' => $fields];

      DB::table('autores')->insert($item);
      // Autor::create($item);
     
      return redirect('/autores',['login' => Auth::check()]);      
    }
  }
?>