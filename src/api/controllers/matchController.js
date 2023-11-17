const matchService = require('../services/matchService');

exports.getAllMatches = async (req, res) => {
  try {
    const matches = await matchService.getAllMatches();
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMatchById = async (req, res) => {
  const { id } = req.params;
  try {
    const match = await matchService.getMatchById(id);
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

