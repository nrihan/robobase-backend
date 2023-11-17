const robotService = require('../services/robotService');

exports.getAllRobots = async (req, res) => {
  try {
    const robots = await robotService.getAllRobots();
    res.json(robots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRobotById = async (req, res) => {
  const { id } = req.params;
  try {
    const robot = await robotService.getRobotById(id);
    res.json(robot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

