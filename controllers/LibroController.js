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
        fetch('/server/libro/create', {
                headers: { 'Accept': 'application/json' },
            })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/libro/details.html', {
                    'title': 'Book Create',
                    'libro_m': prof,
                    'author_m': data[0],
                    'editorial_m': data[1],
                    'create': true
                }, 'content')();
            })

    }

    static store() {
        var title = Input.get('title');
        var edition = Input.get('edition');
        var copyright = Input.get('copyright');
        var language = Input.get('language');
        var pages = Input.get('pages');
        var publisher_id = Input.get('select_publisher');
        var author_id = Input.get('select_author');
        var prof = {
            'title': title,
            'edition': edition,
            'copyright': copyright,
            'language': language,
            'pages': pages,
            'publisher_id': publisher_id,
            'author_id': author_id
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
        fetch('/server/libro/' + params.id + '/edit', { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                return view('/views/libro/details.html', {
                    'title': 'Libro Edit',
                    'libro_m': data[0],
                    'author_m': data[1],
                    'editorial_m': data[2],
                    'edit': true
                }, 'content')();
            })
    }

    static update(params) {
        var title = Input.get('title');
        var edition = Input.get('edition');
        var copyright = Input.get('copyright');
        var language = Input.get('language');
        var pages = Input.get('pages');
        var publisher_id = Input.get('select_publisher');
        var author_id = Input.get('select_author');
        var prof = {
            'title': title,
            'edition': edition,
            'copyright': copyright,
            'language': language,
            'pages': pages,
            'publisher_id': publisher_id,
            'author_id': author_id
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