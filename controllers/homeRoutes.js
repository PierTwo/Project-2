const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

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
    res.render('predictions');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/offense', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('offense');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/defense', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('defense');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/highlights', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('highlights');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/random', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('random');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/schedule', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('schedule');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
