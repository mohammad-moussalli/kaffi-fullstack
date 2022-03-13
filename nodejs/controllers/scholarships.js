const scholorshipServices = require ("../services/scholarships")


module.exports = {
    getAll,
    create,
    getScholorship,
    getById,
    update,
    _delete
};

function getAll(req, res, next) {
    scholorshipServices.getAll()
        .then(scholorship => res.json(scholorship))
        .catch(next);
}

function create(req, res, next) {
    scholorshipServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getScholorship(req, res, next) {
    scholorshipServices.getScholorship(req.params.id)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getById(req, res, next) {
    scholorshipServices.getById(req.params.id)
        .then(scholorship => res.json(scholorship))
        .catch(next);
}

function update(req, res, next) {
    scholorshipServices.update(req.body.id, req.body.name)
        .then(scholorship => res.json(scholorship))
        .catch(next);
}

function _delete(req, res, next) {
    scholorshipServices.delete(req.params.id)
        .then(() => res.json({ message: 'Scholarship deleted successfully' }))
        .catch(next);
}