const { Robot } = require('../models'); 

exports.getAllRobots = async () => {
  return await Robot.findAll();
};

exports.getRobotById = async (id) => {
  return await Robot.findByPk(id);
};

