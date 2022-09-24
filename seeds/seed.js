const sequelize = require('../config/connection');
const { User, Category, Thread, Comment } = require('../models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const threadData = require('./threadData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  const threads = await Thread.bulkCreate(threadData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  console.info('Users Seeded: ', users);

  console.info('Categories Seeded: ', categories);

  console.info('Threads Seeded: ', threads);

  console.info('Comments Seeded: ', comments);

  process.exit(0);
};

seedDatabase();
