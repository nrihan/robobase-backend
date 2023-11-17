const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const competitionRoutes = require('./src/api/routes/competitionRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/competitions', competitionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
