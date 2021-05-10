class AutorController {

    static index() {
        fetch('/server/autor', { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/autor/list.html', {
                    'title': 'Autor List',
                    'autor_m': data
                }, 'content')();
            })
    }

    static show(params) {
        fetch('/server/autor/' + params.id, { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/autor/details.html', {
                    'title': 'Autor Details',
                    'autor_m': data[0],
                    'libro_m': data[1],
                    'show': true
                }, 'content')();
            })
    }

    static create() {
        var prof = {
            'author': '',
            'nationality': '',
            'birth_year': '',
            'fields': ''
        };
        return view('/views/autor/details.html', {
            'title': 'Autor Create',
            'autor_m': prof,
            'create': true
        }, 'content')();
    }

    static store() {
        var author = Input.get('author');
        var nationality = Input.get('nationality');
        var birth_year = Input.get('birth_year');
        var fields = Input.get('fields');
        var prof = {
            'author': author,
            'nationality': nationality,
            'birth_year': birth_year,
            'fields': fields
        };
        fetch('/server/autor', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(prof)
            })
            .then((data) => {
                router.navigate('/autor');
            })
    }

    static edit(params) {
        fetch('/server/autor/' + params.id, { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/autor/details.html', {
                    'title': 'Autor Edit',
                    'autor_m': data,
                    'edit': true
                }, 'content')();
            })
    }

    static update(params) {
        var author = Input.get('author');
        var nationality = Input.get('nationality');
        var birth_year = Input.get('birth_year');
        var fields = Input.get('fields');
        var prof = {
            'author': author,
            'nationality': nationality,
            'birth_year': birth_year,
            'fields': fields
        };
        fetch('/server/autor/' + params.id, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(prof)
            })
            .then((data) => {
                router.navigate('/autor');
            })
    }

    static destroy(params) {
        fetch('/server/autor/' + params.id, { method: 'DELETE' })
            .then((data) => {
                router.navigate('/autor');
            })
    }
}