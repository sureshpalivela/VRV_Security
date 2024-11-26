const express = require('express');
const { verifyToken, roleAuthorization } = require('../middleware/auth');
const router = express.Router();

// Admin-only route
router.get('/admin', verifyToken, roleAuthorization(['Admin']), (req, res) => {
  res.status(200).json({ message: 'Welcome Admin!' });
});

// Moderator-only route
router.get('/moderator', verifyToken, roleAuthorization(['Moderator']), (req, res) => {
  res.status(200).json({ message: 'Welcome Moderator!' });
});

// User route (accessible to all roles)
router.get('/user', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Welcome User!' });
});

module.exports = router;
