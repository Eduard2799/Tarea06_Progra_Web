<?php

  // require_once('models/editorial/Editorial.php');
  // require_once('models/libro/Libro.php');

  class EditorialesController extends Controller {
       
    public function index() {      
      return view('Editoriales/Editoriales', ['login' => Auth::check(), 'editoriales_m' => DB::table('editoriales')->get()]); 
    }

    public function show($id) { 
      $editorial_m = DB::table('editoriales')->where('id',$id)->first();
      $libs_edit = DB::table('libros')->where('publisher_id',$editorial_m[0]['id'])->get();
      
      return view('Editoriales/Muestra', ['login' => Auth::check(), 'Editorial_m' => $editorial_m, 'libros_m' => $libs_edit, 'edita' => false, 'muestra' => true, 'crea' => false, 'disabled' => true]);
    }

    public function edit($id) {
      $editorial_m = DB::table('editoriales')->where('id',$id)->first();
      
      return view('Editoriales/Muestra', ['login' => Auth::check(), 'Editorial_m' => $editorial_m, 'edita' => true, 'muestra' => false, 'crea' => false, 'disabled' => '', 'libros_m' => false]);
    }

    public function update($_,$id) {

      $publisher = Input::get('publisher');
      $country = Input::get('country');
      $founded = Input::get('founded');
      $genere = Input::get('genere');

      $item = ['publisher' => $publisher, 'country' => $country, 'founded' => $founded, 'genere' => $genere];
      
      DB::table('editoriales')->update($id,$item);
     
      return redirect('/editoriales', ['login' => Auth::check()]);

    }

    public function create() { 
      $item = ['publisher' => '', 'country' => '', 'founded' => '', 'genere' => ''];
      return view('Editoriales/Muestra', ['login' => Auth::check(), 'Editorial_m' => $item, 'edita' => false, 'muestra' => false, 'crea' => true, 'disabled' => '',  'libros_m' => false]);
    }

    public function store()
    {
      $publisher = Input::get('publisher');
      $country = Input::get('country');
      $founded = Input::get('founded');
      $genere = Input::get('genere');

      $item = ['publisher' => $publisher, 'country' => $country, 'founded' => $founded, 'genere' => $genere];

      DB::table('editoriales')->insert($item);
     
      return redirect('/editoriales', ['login' => Auth::check()]);      
    }
    
  }

?>