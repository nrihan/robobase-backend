const competitionData = require('../../data/competitionData');

const getAllCompetitions = async () => {
  return competitionData.getAllCompetitions();
};

const getCompetitionById = async (id) => {
  return competitionData.getCompetitionById(id);
};

const createCompetition = async (createCompetitionData) => {
  return competitionData.createCompetition(createCompetitionData);
};

const updateCompetition = async (id, updatedCompetitionData) => {
  return competitionData.updateCompetition(id, updatedCompetitionData);
};

const deleteCompetition = async (id) => {
  return competitionData.deleteCompetition(id);
};

module.exports = {
  getAllCompetitions,
  getCompetitionById,
  createCompetition,
  updateCompetition,
  deleteCompetition,
};
