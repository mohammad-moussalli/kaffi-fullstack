const db = require('../config/database');
const model = require('../models')

module.exports = {
    getAll,
    create,
    getScholorship,
    getById,
    update,
    delete: _delete

};

async function getAll() {
    return await model.Scholorship.findAll();
}

async function create(params) {
    // validate
    if (await model.Scholorship.findOne({ where: { name: params.name } })) {
        return "Name already exists"
    }
    // save scholorship
    await model.Scholorship.create({name: params.name});
    return "Scholoship created successfully"
}

async function getScholorship(id) {
    const scholorship = await model.Scholorship.findByPk(id);
    if (!scholorship){
        return 'scholorship not found';
    }
    return scholorship;
}

async function getById(id) {
    return await getScholorship(id);
}

/////validation is not working
async function update(id, name) {
    const scholorship = await getScholorship(id);

    // validate
    const scholorshipNameChanged = name && scholorship.name !== name;
    if (scholorshipNameChanged && await model.Scholorship.findOne({ where: { name: name } })) {
        return 'Name "' + name + '" is already taken';
    }

    // update params to scholorship and save but not working directly on postman
    model.Scholorship.update(
        { name: name},	
        { where: { id: id } },	 
      )
    
    await scholorship.save();

    return scholorship.get();
}

async function _delete(id) {
    const scholorship = await getScholorship(id);
    await scholorship.destroy();
}

