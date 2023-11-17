const competitionService = require('../../business/services/competitionService');

const getAllCompetitions = async (req, res) => {
    try {
        const competitions = await competitionService.getAllCompetitions();
        res.json(competitions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCompetitionById = async (req, res) => {
    const { id } = req.params;
    try {
        const competition = await competitionService.getCompetitionById(id);
        res.json(competition);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCompetition = async (req, res) => {
    const competitionData = req.body;
    try {
        const newCompetition = await competitionService.createCompetition(competitionData);
        res.json(newCompetition);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCompetition = async (req, res) => {
    const { id } = req.params;
    const updatedCompetitionData = req.body;
    try {
        const updatedCompetition = await competitionService.updateCompetition(id, updatedCompetitionData);
        res.json(updatedCompetition);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCompetition = async (req, res) => {
    const { id } = req.params;
    try {
        await competitionService.deleteCompetition(id);
        res.json({ message: 'Competition deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCompetitions,
    getCompetitionById,
    createCompetition,
    updateCompetition,
    deleteCompetition,
};
