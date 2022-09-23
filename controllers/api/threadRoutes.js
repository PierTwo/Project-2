const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Category, Thread, Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const threadData = await Thread.findAll({
      attributes: ['title', 'body', 'likes'],
      include: [
        { model: User, attributes: ['username'] },
        { model: Category, attributes: ['category'] },
        {
          model: Comment,
          attributes: ['comment'],
          include: [{ model: User, attributes: ['username'] }],
        },
      ],
    });

    res.status(200).json(threadData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
