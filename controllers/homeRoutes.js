const router = require('express').Router();
const { User, Thread } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('homepage', { logged_in: _req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/predictions', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('predictions', { logged_in: _req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/offense', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('offense', { logged_in: _req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/defense', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('defense', { logged_in: _req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/highlights', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('highlights', { logged_in: _req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/random', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('random', { logged_in: _req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/schedule', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('schedule', { logged_in: _req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (_req, res) => {
  try {
    const userData = await User.findByPk(_req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Thread }],
    });

    const user = userData.get({ plain: true });

    // Change this to where you app should go
    res.render('profile', {user, logged_in: _req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/contact', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('contact', { logged_in: _req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
