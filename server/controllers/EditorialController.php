<?php  
  // file: controllers/ProfessorController.php 
  require_once('models/EditorialModel.php');
  require_once('models/LibroModel.php');

class EditorialController extends Controller {
  
  public function index() {  
    return EditorialModel::all();
  }  
  
  public function store($request) {
    return EditorialModel::create($request);
  }  
  
  public function show($id) {
    $editorial_m = EditorialModel::find($id);
    $libs_edit = LibroModel::where('publisher_id',$editorial_m[0]['id']);
    return [$editorial_m, $libs_edit];
  } 
  
  public function edit($id) { 
    $editorial_m = EditorialModel::find($id);
    return $editorial_m;
  }

  
  public function update($request,$id) {  
    return EditorialModel::update($id,$request);
  }  
  
  public function destroy($id) {  
    EditorialModel::destroy($id);
  }
}
?>
