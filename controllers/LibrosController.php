<?php

  // require_once('models/libro/Libro.php');
  // require_once('models/autor/Autor.php');
  // require_once('models/editorial/Editorial.php');

  class LibrosController extends Controller {
    
    public function index() {      
      // $libro_m = Libro::all();

      $libro_m = DB::table('libros')->get();

      return view('Libros/Libros', ['libros_m' => $libro_m]); 
      //echo 'Hello, World!';
    }

    public function show($id) { 
      $libro_m = DB::table('libros')->where('id',$id)->first();
      $autor_m = DB::table('autores')->where('id',$libro_m[0]['author_id'])->get();
      $editorial_m = DB::table('editoriales')->where('id',$libro_m[0]["publisher_id"])->get();
      // echo "<pre>";
      // var_dump($libro_m);
      // echo "</pre>";
      return view('Libros/Muestra', ['Libro_m' => $libro_m, 'Autor_m' => $autor_m, 'Editorial_m' => $editorial_m, 'edita' => false, 'muestra' => true, 'crea' => false, 'disabled' => true]);
    }

    public function edit($id) {
      $libro_m = DB::table('libros')->where('id',$id)->first();
      $authores_m = DB::table('autores')->get();
      $editorials_m = DB::table('editoriales')->get();
      
            
      return view('Libros/Muestra', ['Libro_m' => $libro_m, 'authores_m' => $authores_m, 'edita' => true, 'muestra' => false, 'crea' => false, 'disabled' => '', 'editorials_m' => $editorials_m]);
    }

    public function update($_,$id) {
      $title = Input::get('title');
      $edition = Input::get('edition');
      $copyright = Input::get('copyright');
      $language = Input::get('language');
      $pages = Input::get('pages');
      $author_id = Input::get('author_id');
      $publisher_id = Input::get('publisher_id');

      $item = ['title' => $title, 'edition' => $edition, 'copyright' => $copyright, 'language' => $language, 
              'pages' => $pages, 'author_id' => $author_id, 'publisher_id' => $publisher_id];
      echo "<pre>";
      var_dump($item);
      echo "</pre>";
      DB::table('libros')->update($id,$item);
     
      return redirect('/libros');

    }

    public function create() { 
      $authores_m = DB::table('autores')->get();
      $editorials_m = DB::table('editoriales')->get();
      $item = ['title' => '', 'edition' => '', 'copyright' => '', 'language' => '', 
      'pages' => '', 'author_id' => '', 'publisher_id' => ''];

      return view('Libros/Muestra', ['authores_m' => $authores_m, 'editorials_m' => $editorials_m, 'Libro_m' => $item, 'edita' => false, 'muestra' => false, 'crea' => true, 'disabled' => false]);
    }

    public function store()
    {
      $title = Input::get('title');
      $edition = Input::get('edition');
      $copyright = Input::get('copyright');
      $language = Input::get('language');
      $pages = Input::get('pages');
      $author_id = Input::get('author_id');
      $publisher_id = Input::get('publisher_id');

      $item = ['title' => $title, 'edition' => $edition, 'copyright' => $copyright, 'language' => $language, 
              'pages' => $pages, 'author_id' => $author_id, 'publisher_id' => $publisher_id];

      DB::table('libros')->insert($item);
     
      return redirect('/libros');      
    }

  }

?>