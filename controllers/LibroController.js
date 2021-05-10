class LibroController {

    static index() {
        fetch('/server/libro', { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/libro/list.html', {
                    'title': 'Libro List',
                    'libro_m': data
                }, 'content')();
            })
    }

    static show(params) {
        fetch('/server/libro/' + params.id, { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/libro/details.html', {
                    'title': 'Libro Details',
                    'libro_m': data[0],
                    'autor_m': data[1],
                    'editorial_m': data[2],
                    'show': true
                }, 'content')();
            })
    }

    static create() {
        var prof = {
            'title': '',
            'edition': '',
            'copyright': '',
            'language': '',
            'pages': ''
        };
        fetch('/server/libro/', { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/libro/details.html', {
                    'title': 'Libro Create',
                    'libro_m': prof,
                    'autor_m': data[0],
                    'editorial_m': data[1],
                    'create': true
                }, 'content')();
            })

    }

    static store() {
        var publisher = Input.get('publisher');
        var country = Input.get('country');
        var founded = Input.get('founded');
        var genere = Input.get('genere');
        var prof = {
            'publisher': publisher,
            'country': country,
            'founded': founded,
            'genere': genere
        };
        fetch('/server/libro', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(prof)
            })
            .then((data) => {
                router.navigate('/libro');
            })
    }

    static edit(params) {
        fetch('/server/libro/' + params.id, { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/libro/details.html', {
                    'title': 'libro Edit',
                    'libro_m': data[0],
                    'edit': true
                }, 'content')();
            })
    }

    static update(params) {
        var publisher = Input.get('publisher');
        var country = Input.get('country');
        var founded = Input.get('founded');
        var genere = Input.get('genere');
        var prof = {
            'publisher': publisher,
            'country': country,
            'founded': founded,
            'genere': genere
        };
        fetch('/server/libro/' + params.id, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(prof)
            })
            .then((data) => {
                router.navigate('/libro');
            })
    }

    static destroy(params) {
        fetch('/server/libro/' + params.id, { method: 'DELETE' })
            .then((data) => {
                router.navigate('/libro');
            })
    }
}