const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
  isAuthed: (req, res, next) => {
    const authHeaders = req.get('Authorization');

    if (!authHeaders) {
      return res.status(401)
        .json({ message: 'This action is allowed only for logged in users.' });
    }

    const token = req.get('Authorization').split(' ')[1];

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, 'somesupersecret')
    } catch (error) {
      return res.status(401)
        .json({ message: 'Token is invalid.', error });
    }

    next();
  },
  isAnonymous: (req, res, next) => {
    const authHeaders = req.get('Authorization');

    const token = authHeaders.split(' ')[1];

    if (token) {
      return res.status(401)
        .json({ message: 'You are already logged in.' });
    }

    next();
  },
  isAdmin: (req, res, next) => {
    const authHeaders = req.get('Authorization');

    if (!authHeaders) {
      return res.status(401)
        .json({ message: 'This action is allowed only for logged in users.' });
    }

    const token = req.get('Authorization').split(' ')[1];

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, 'somesupersecret')
    } catch (error) {
      return res.status(401)
        .json({ message: 'Token is invalid.', error });
    }

    let userId = decodedToken.userId;

    User.findById(userId)
      .then(user => {
        if (user.roles.indexOf('Admin') === -1) {
          return res.status(401)
            .json({ message: 'This action is allowed only for admins.' });
        }

        next();
      })
  },
  isOwner: (req, res, next) => {
    const authHeaders = req.get('Authorization');

    if (!authHeaders) {
      return res.status(401)
        .json({ message: 'This action is allowed only for logged in users.' });
    }

    const token = req.get('Authorization').split(' ')[1];

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, 'somesupersecret')
    } catch (error) {
      return res.status(401)
        .json({ message: 'Token is invalid.', error });
    }

    let userId = decodedToken.userId;

    User.findById(userId)
      .then(user => {
        if (user.id !== req.params.id && user.roles.indexOf('Admin') === -1) {
          return res.status(401)
            .json({ message: 'Not allowed.' });
        }

        next();
      })
  },
  isMember: (req, res, next) => {
    const authHeaders = req.get('Authorization');

    if (!authHeaders) {
      return res.status(401)
        .json({ message: 'This action is allowed only for logged in users.' });
    }

    const token = req.get('Authorization').split(' ')[1];

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, 'somesupersecret')
    } catch (error) {
      return res.status(401)
        .json({ message: 'Token is invalid.', error });
    }

    let userId = decodedToken.userId;

    User.findById(userId)
      .then(user => {
        console.log(user.bands.indexOf(req.params.id));
        if (user.bands.indexOf(req.params.id) === -1 && user.roles.indexOf('Admin') === -1) {
          return res.status(401)
            .json({ message: 'Not allowed.' });
        }

        next();
      })
  },
  canRemove: (req, res, next) => {
    const authHeaders = req.get('Authorization');

    if (!authHeaders) {
      return res.status(401)
        .json({ message: 'This action is allowed only for logged in users.' });
    }

    const token = req.get('Authorization').split(' ')[1];

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, 'somesupersecret')
    } catch (error) {
      return res.status(401)
        .json({ message: 'Token is invalid.', error });
    }

    let userId = decodedToken.userId;

    User.findById(userId)
      .then(user => {
        if (user.id !== req.body.member && user.roles.indexOf('Admin') === -1) {
          return res.status(401)
            .json({ message: 'Not allowed.' });
        }

        next();
      })
  },
}