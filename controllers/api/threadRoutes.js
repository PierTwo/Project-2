const router = require('express').Router();
const { User, Thread } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const threadData = await Thread.findAll({
      include: [{ model: User, attributes: ['username'] }],
    });

    res.status(200).json(threadData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
