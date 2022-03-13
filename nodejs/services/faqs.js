const { param } = require('../app');
const model = require('../models')

module.exports = {
    create,
    getFaqs,
    getFaq,
    update,
    delete: _delete,
    deleteCategoryFaqs,
}

async function create(params) {
    // validate
    if (await model.Faq.findOne({ where: { category_id: params.category_id, question: params.question } })) {
        return "Faq already exists"
    }
    // save faq
    await model.Faq.create({category_id: params.category_id,
                            question: params.question,
                            answer: params.answer            
                            });
    return "Faq created successfully"
}

async function getFaqs(category_id) {
    const faqs = await model.Faq.findAll({where: {category_id: category_id}});
    if (Object.keys(faqs).length === 0){
        return 'Category is not found';
    }
    return faqs;
}

async function getFaq(id) {
    const faq = await model.Faq.findByPk(id);
    if (!faq){
        return 'FAQ not found';
    }
    return faq;
}

async function update(params) {
    const faq = await getFaq(params.id);

    // validate
    const faqChanged = faq.category_id !== params.category_id || faq.question !== params.question || faq.answer !== params.answer;
    if (faqChanged && await model.Faq.findByPk(faq.id)) {
        return 'FAQ already exists';
    }

    // update params to faq and save but not working directly on postman
    model.Faq.update(
        { category_id: params.category_id, question: params.question, answer: params.answer},	
        { where: { id: params.id } },	 
      )
    
    await faq.save();

    return faq.get();
}

async function _delete(id) {
    const faq = await getFaq(id);
    if (Object.keys(faq).length === 0){
        return 'Faq is not found';
    }
    await model.Faq.destroy({
        where:{id: id}
    });
}

async function deleteCategoryFaqs(params) {
    const faq = await getFaqs(params.category_id);
    if (Object.keys(faq).length === 0){
        return 'Category is not found';
    }
    await model.Faq.destroy({
        where:{category_id: params.category_id}
    });
}