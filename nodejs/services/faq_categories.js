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

async function getFaqCategory(id) {
    const faq_category = await model.Faq_Category.findByPk(id);
    if (!faq_category){
        return 'FAQ Category not found';
    }
    return faq_category;
}

async function create(params) {
    // validate
    if (await model.Faq_Category.findOne({ where: { category: params.category } })) {
        return "Category already exists"
    }
    // save category
    await model.Faq_Category.create({category: params.category});
    return "Category created successfully"
}

async function getAll(category_id) {
    const faqs = await model.Faq_Category.findAll();
    return faqs;
}

async function getCategory(name) {
    const faq_category = await model.Faq.findOne({where:{category: name}});
    if (!faq_category){
        return 'Category not found';
    }
    return faq_category;
}

async function update(category) {
    const faq_category = await getCategory(category);

    // validate
    const faqCategoryChanged = category && faq_category.category !== category;
    if (faqCategoryChanged && await model.Faq_Category.findOne({where:{category: category}})){
        return 'Category already exists';
    }

    // update params to faq and save but not working directly on postman
    model.Faq_Category.update(
        { category: category},	
        { where: { id: faq_category.id } },	 
      )
    
    await faq.save();

    return faq.get();
}

async function _delete(name) {
    const faq_category = await getCategory(name);
    if (Object.keys(faq_category).length === 0){
        return 'Category is not found';
    }
    await model.Faq_Category.destroy({
        where:{id: faq_category.id}
    });
}