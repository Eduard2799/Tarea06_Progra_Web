<?php

  // require_once('models/editorial/Editorial.php');
  // require_once('models/libro/Libro.php');

  class EditorialesController extends Controller {
       
    public function index() {      
      return view('Editoriales/Editoriales', ['editoriales_m' => DB::table('editoriales')->get()]); 
    }

    public function show($id) { 
      $editorial_m = DB::table('editoriales')->where('id',$id)->first();
      $libs_edit = DB::table('libros')->where('id',$editorial_m[0]['publisher_id'])->get();
      
      return view('Editoriales/Muestra', ['editorial_m' => $editorial_m, 'libros_m' => $libs_edit]);
    }

    public function edit($id) {
      $editorial_m = DB::table('editoriales')->where('id',$id)->first();
      
      return view('Editoriales/Edita', ['Editorial_m' => $editorial_m]);
    }

    public function update($_,$id) {

      $publisher = Input::get('publisher');
      $country = Input::get('country');
      $founded = Input::get('founded');
      $genere = Input::get('genere');

      $item = ['publisher' => $publisher, 'country' => $country, 'founded' => $founded, 'genere' => $genere];

      DB::table('editoriales')->update($id,$item);
     
      return redirect('/editoriales');

    }

    public function create() { 
      return view('Editoriales/Crea');
    }

    public function store()
    {
      $publisher = Input::get('publisher');
      $country = Input::get('country');
      $founded = Input::get('founded');
      $genere = Input::get('genere');

      $item = ['publisher' => $publisher, 'country' => $country, 'founded' => $founded, 'genere' => $genere];

      DB::table('editoriales')->insert($item);
     
      return redirect('/editoriales');      
    }
    
  }

?>