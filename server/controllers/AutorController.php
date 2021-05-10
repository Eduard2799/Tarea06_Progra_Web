<?php  
  // file: controllers/ProfessorController.php 
  require_once('models/AutorModel.php');
  require_once('models/LibroModel.php');

class AutorController extends Controller {
  
  public function index() {  
    return AutorModel::all();
  }  
  
  public function store($request) {
    return AutorModel::create($request);
  }  
  
  public function show($id) {
    $autor_m = AutorModel::find($id);
    $libs_aut = LibroModel::where('author_id',$autor_m[0]['id']);
    return [$autor_m, $libs_aut];
  } 
  
  public function edit($id) { 
    $autor_m = AutorModel::find($id);
    return $autor_m;
  }

  
  public function update($request,$id) {  
    return AutorModel::update($id,$request);
  }  
  
  public function destroy($id) {  
    return AutorModel::destroy($id);
  }
}
?>
