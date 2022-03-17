const scholorshipServices = require ("../services/scholarships")


module.exports = {
    getAll,
    create,
    getScholorship,
    getById,
    update,
    _delete,
    createCycle,
    getScholorshipCycle
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

function createCycle(req, res, next) {
    scholorshipServices.createCycle(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getScholorship(req, res, next) {
    scholorshipServices.getScholorship(req.params.id)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getScholorshipCycle(req, res, next) {
    scholorshipServices.getScholorshipCycle(req.body)
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
        .then((message) => res.json({ message: message }))
        .catch(next);
}