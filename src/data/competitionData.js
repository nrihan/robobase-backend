const pool = require('./db');

const getAllCompetitions = async () => {
  const result = await pool.query('SELECT * FROM competitions');
  return result.rows;
};

const getCompetitionById = async (id) => {
  const result = await pool.query('SELECT * FROM competitions WHERE id = $1', [id]);
  return result.rows[0];
};

const createCompetition = async (competitionData) => {
  const { name, category, description, registration_fee } = competitionData;
  const result = await pool.query(
    'INSERT INTO competitions (name, category, description, registration_fee) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, category, description, registration_fee]
  );
  return result.rows[0];
};

const updateCompetition = async (id, updatedCompetitionData) => {
  const { name, category, description, registration_fee } = updatedCompetitionData;
  const result = await pool.query(
    'UPDATE competitions SET name = $1, category = $2, description = $3, registration_fee = $4 WHERE id = $5 RETURNING *',
    [name, category, description, registration_fee, id]
  );
  return result.rows[0];
};

const deleteCompetition = async (id) => {
  await pool.query('DELETE FROM competitions WHERE id = $1', [id]);
};

module.exports = {
  getAllCompetitions,
  getCompetitionById,
  createCompetition,
  updateCompetition,
  deleteCompetition,
};
