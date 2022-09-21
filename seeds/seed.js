const sequelize = require('../config/connection');
const { User, Thread } = require('../models');

const userData = require('./userData.json');
const threadData = require('./threadData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const threads = await Thread.bulkCreate(threadData, {
    individualHooks: true,
    returning: true,
  });

  console.info('Users Seeded:', users);

  console.info('Threads Seeded:', threads);

  process.exit(0);
};

seedDatabase();
