// router.on('/professor',
//     () => ProfessorController.index());
// router.on('/professor/show/:id',
//     ({ data }) => ProfessorController.show(data));
// router.on('/professor/edit/:id',
//     ({ data }) => ProfessorController.edit(data));
// router.on('/professor/store',
//     () => ProfessorController.store());
// router.on('/professor/update/:id',
//     ({ data }) => ProfessorController.update(data));
// router.on('/professor/create',
//     () => ProfessorController.create());
// router.on('/professor/delete/:id',
//     ({ data }) => ProfessorController.destroy(data));

//Rutas autor
router.on('/autor',
    () => AutorController.index());
router.on('/autor/show/:id',
    ({ data }) => AutorController.show(data));
router.on('/autor/edit/:id',
    ({ data }) => AutorController.edit(data));
router.on('/autor/store',
    () => AutorController.store());
router.on('/autor/update/:id',
    ({ data }) => AutorController.update(data));
router.on('/autor/create',
    () => AutorController.create());
router.on('/autor/delete/:id',
    ({ data }) => AutorController.destroy(data));

//Rutas editorial
router.on('/editorial',
    () => EditorialController.index());
router.on('/editorial/show/:id',
    ({ data }) => EditorialController.show(data));
router.on('/editorial/edit/:id',
    ({ data }) => EditorialController.edit(data));
router.on('/editorial/store',
    () => EditorialController.store());
router.on('/editorial/update/:id',
    ({ data }) => EditorialController.update(data));
router.on('/editorial/create',
    () => EditorialController.create());
router.on('/editorial/delete/:id',
    ({ data }) => EditorialController.destroy(data));

//Rutas libro
router.on('/libro',
    () => LibroController.index());
router.on('/libro/show/:id',
    ({ data }) => LibroController.show(data));
router.on('/libro/edit/:id',
    ({ data }) => LibroController.edit(data));
router.on('/libro/store',
    () => LibroController.store());
router.on('/libro/update/:id',
    ({ data }) => LibroController.update(data));
router.on('/libro/create',
    () => LibroController.create());
router.on('/libro/delete/:id',
    ({ data }) => LibroController.destroy(data));

//Ruta inicial
router.on('/',
    () => AutorController.index());
router.resolve();