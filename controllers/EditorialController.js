class EditorialController {

    static index() {
        fetch('/server/editorial', { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/editorial/list.html', {
                    'title': 'Editorial List',
                    'editorial_m': data
                }, 'content')();
            })
    }

    static show(params) {
        fetch('/server/editorial/' + params.id, { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/editorial/details.html', {
                    'title': 'Editorial Details',
                    'editorial_m': data[0],
                    'libro_m': data[1],
                    'show': true
                }, 'content')();
            })
    }

    static create() {
        var prof = {
            'publisher': '',
            'country': '',
            'founded': '',
            'genere': ''
        };
        return view('/views/editorial/details.html', {
            'title': 'Editorial Create',
            'editorial_m': prof,
            'create': true
        }, 'content')();
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
        fetch('/server/editorial', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(prof)
            })
            .then((data) => {
                router.navigate('/editorial');
            })
    }

    static edit(params) {
        fetch('/server/editorial/' + params.id, { headers: { 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((data) => {
                return view('/views/editorial/details.html', {
                    'title': 'editorial Edit',
                    'editorial_m': data,
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
        fetch('/server/editorial/' + params.id, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(prof)
            })
            .then((data) => {
                router.navigate('/editorial');
            })
    }

    static destroy(params) {
        fetch('/server/editorial/' + params.id, { method: 'DELETE' })
            .then((data) => {
                router.navigate('/editorial');
            })
    }
}