const faqsServices = require ("../services/faqs");

module.exports = {
    create,
    getFaq,
    getFaqs,
    update,
    delete: _delete,
    deleteCategoryFaqs
}

function create(req, res, next) {
    faqsServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getFaq(req, res, next) {
    faqsServices.getFaq(req.params.id)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getFaqs(req, res, next) {
    faqsServices.getFaqs(req.body.category_id)
        .then((message) => res.json({message : message}))
        .catch(next);}

function update(req, res, next) {
    faqsServices.update(req.body)
        .then(faq => res.json(faq))
        .catch(next);
}

function _delete(req, res, next) {
    faqsServices.delete(req.params.id)
        .then(() => res.json({ message: 'FAQ deleted successfully' }))
        .catch(next);
}

/// Not working properly
function deleteCategoryFaqs(req, res, next) {
    faqsServices.delete(req.params.category_id)
        .then(() => res.json({ message: 'FAQs deleted successfully' }))
        .catch(next);
}