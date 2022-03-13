const faqsCategoryServices = require ("../services/faq_categories");

module.exports = {
    create,
    getAll,
    getCategory,
    update,
    delete: _delete,
    getCategoryId
}

function create(req, res, next) {
    faqsCategoryServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getAll(req, res, next) {
    faqsCategoryServices.getAll()
        .then((message) => res.json({message : message}))
        .catch(next);}

function getCategory(req, res, next) {
    faqsCategoryServices.getById(req.params.id)
        .then(category => res.json(category))
        .catch(next);
}

function getCategoryId(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function update(req, res, next) {
    faqsCategoryServices.update(req.body)
        .then(faq => res.json(faq))
        .catch(next);
}

function _delete(req, res, next) {
    faqsCategoryServices.delete(req.params.id)
        .then(() => res.json({ message: 'Category deleted successfully' }))
        .catch(next);
}
