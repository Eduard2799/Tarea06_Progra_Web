class ProfessorController {

  static index() {
    fetch('/server/professor',
     { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((data) => {
        return view('/views/professor/list.html',
         {'title':'Professor List',
		  'professors':data},'content')();}
     )
  }

  static show(params) {
    fetch('/server/professor/'+params.id,
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((data) => {
        return view('/views/professor/details.html',
          {'title':'Professor Details',
		   'professor':data,'show':true},'content')();}
	 )
  }

  static create() {
    var prof = {'name':'','degree':'',
          'email':'','phone':''};
    return view('/views/professor/details.html',
          {'title':'Professor Create',
          'professor':prof,'create':true},'content')();
  }

  static store() {
    var nam = Input.get('name');
    var degree = Input.get('degree');
    var email = Input.get('email');
    var phone = Input.get('phone');
    var prof = {'name':nam,'degree':degree,
	        'email':email,'phone':phone};
    fetch('/server/professor',
      { headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(prof)})
      .then((data) => {
         router.navigate('/professor');
      }
    )
  }

  static edit(params) {
    fetch('/server/professor/'+params.id,
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((data) => {
        return view('/views/professor/details.html',
          {'title':'Professor Edit',
		   'professor':data,'edit':true},'content')();}
	 )
  }

  static update(params) {
    var nam = Input.get('name');
    var degree = Input.get('degree');
    var email = Input.get('email');
    var phone = Input.get('phone');
    var prof = {'name':nam,'degree':degree,
  	        'email':email,'phone':phone};
    fetch('/server/professor/'+params.id,
      { headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify(prof)})
      .then((data) => {
         router.navigate('/professor');
       }
     )
  }

  static destroy(params) {
    fetch('/server/professor/'+params.id,
      { method: 'DELETE'})
      .then((data) => {
         router.navigate('/professor');
       }
     )
  }
}