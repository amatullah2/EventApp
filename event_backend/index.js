const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const eventsRouter = require('./routes/events');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/events', eventsRouter);

const PORT = 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully!');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
  }
}

start();
