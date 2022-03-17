const model = require('../models')

module.exports = {
    getAll,
    create,
    getScholorship,
    getById,
    update,
    createCycle,
    getScholorshipCycle,
    delete: _delete,
};

async function getAll() {
    return await model.Scholorship.findAll();
}

async function create(params) {
    // validate
    if (await model.Scholorship.findOne({ where: { name: params.name } })) {
        return "Name already exists";
    }
    // save scholorship
    await model.Scholorship.create({name: params.name});
    return "Scholorship created successfully";
}

async function createCycle(params){
    // validate
    const scholorship = await model.Scholorship.findOne({ where: { name: params.name } })
    if (scholorship && await model.Scholorship_Cycle.findOne({ where: { cycle:params.cycle, scholorship_id:scholorship.id, start_date:params.start_date, deadline:params.deadline, results:params.results} })) {
        return "Scholorship Cycle already exists";
    }
    
    if (!scholorship){
        return "Scholorship not Found";
    }

    await model.Scholorship_Cycle.create({  scholorship_id: scholorship.id,
                                            cycle: params.cycle,
                                            start_date: params.start_date,
                                            deadline: params.deadline,
                                            results: params.results
                                        })
    return "Scholorship cycle created succesfully";                                    
}

async function getScholorshipCycle(params) {
    const get_scholorship = await model.Scholorship.findOne({ where: { name: params.name } });
    if(!get_scholorship){
        return 'Scholorship not found'
    }
    const scholorship = await model.Scholorship_Cycle.findOne({where: { cycle: params.cycle, scholorship_id: get_scholorship.id}});
    if (!scholorship){
        return 'Scholorship cycle not found';
    }
    return scholorship;
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
    await model.Scholorship.update(
        { name: name},	
        { where: { id: id } },	 
      )
    
   // await scholorship.save();

    return "Update Successfully";
      
    ;
}

async function _delete(id) {
    const scholorship = await getScholorship(id);
    if (!scholorship.id){
        return 'Scholorship is not found';
    }
    await scholorship.destroy();
    return 'Scholarship deleted successfully';
}

