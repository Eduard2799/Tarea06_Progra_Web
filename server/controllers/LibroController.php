<?php  
  // file: controllers/ProfessorController.php 
  require_once('models/EditorialModel.php');
  require_once('models/LibroModel.php');
  require_once('models/AutorModel.php');

class LibroController extends Controller {
  
  public function index() {  
    return LibroModel::all();
  } 
  
  public function create(){
    $authores_m = AutorModel::all();
    $editorials_m = EditorialModel::all();
    
    return [$authores_m, $editorials_m];
  }
  
  public function store($request) {
    return LibroModel::create($request);
  }  
  
  public function show($id) {
    $libro_m = LibroModel::find($id);
    $autor_m = AutorModel::where('id',$libro_m[0]["author_id"]);
    $editorial_m = EditorialModel::where('id',$libro_m[0]["publisher_id"]);

    return [$libro_m, $autor_m, $editorial_m];
  } 
  
  public function edit($id) {
    $libro_m = LibroModel::find($id);
    $authores_m = AutorModel::all();
    $editorials_m = EditorialModel::all();  
    
    return [$libro_m,$authores_m,$editorials_m, "Hola"];
  }

  
  public function update($request,$id) {  
    return LibroModel::update($id,$request);
  }  
  
  public function destroy($id) {  
    return LibroModel::destroy($id);
  }
}
?>
