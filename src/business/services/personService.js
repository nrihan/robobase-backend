const { Person } = require('../models'); 

exports.getAllPeople = async () => {
  return await Person.findAll();
};

exports.getPersonById = async (id) => {
  return await Person.findByPk(id);
};

