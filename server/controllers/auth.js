const {
  validationResult
} = require('express-validator/check');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const encryption = require('../util/encryption');
const Band = require('../models/Band');

function validateUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({
      message: 'Validation failed, entered data is incorrect.',
      errors: errors.array()
    });
    return false;
  }

  return true;
}

module.exports = {
  signUp: (req, res, next) => {

    if (validateUser(req, res)) {
      let {
        username,
        password,
        repeatPassword,
        status,
        about,
        bands,
        instruments,
        profilePicture
      } = req.body;

      if (password === repeatPassword) {
        const salt = encryption.generateSalt();
        const hashedPassword = encryption.generateHashedPassword(salt, password);

        if (about === ''){
          about = 'No information added.';
        } if (profilePicture === ''){
          profilePicture = 'http://wallperio.com/data/out/371/profile-pictures_617151281.jpg';
        }

        User.create({
            username,
            hashedPassword,
            status,
            about,
            bands,
            instruments,
            profilePicture,
            salt
          }).then((user) => {
            const token = jwt.sign({
              username: user.username,
              userId: user._id.toString(),
              isAdmin: user.roles.indexOf('Admin') !== 0
            }, 'somesupersecret', {
              expiresIn: '1h'
            });

            res.status(201)
              .json({
                message: 'Successful registration! Please log in!',
                userId: user._id,
                username: user.username,
                token
              });
          })
          .catch((error) => {
            if (!error.statusCode) {
              error.statusCode = 500;
            }

            res.status(500)
            .json({
              message: 'This username was already taken.',
              error
            })
          });
      } else {
        const error = new Error('Passwords do not match');
        error.statusCode = 401;

        res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })

        throw error;
      }
    }
  },
  signIn: (req, res, next) => {
    const {
      username,
      password
    } = req.body;

    User.findOne({
        username
      })
      .then((user) => {
        if (!user) {
          const error = new Error('An user with this username could not be found');
          error.statusCode = 401;
          throw error;
        }

        if (!user.authenticate(password)) {
          const error = new Error('Invalid password.');
          error.statusCode = 401;
          throw error;
        }

        const token = jwt.sign({
          username: user.username,
          userId: user._id.toString(),
          isAdmin: user.roles.indexOf('Admin') !== 0
        }, 'somesupersecret', {
          expiresIn: '1h'
        });

        res.status(200).json({
          message: `Welcome, ${user.username}!`,
          token,
          userId: user._id.toString(),
          username: user.username,
          isAdmin: user.roles.indexOf('Admin') != -1,
          status: user.status,
          bands: user.bands
        });
      })
      .catch(error => {
        res.status(500)
          .json({
            error,
            message: 'Invalid credentials.'
          })
      })
  },
  viewProfile: (req, res) => {
    const userId = req.params.id;

    User.findById(userId)
      .then((user) => {
        res.status(200)
          .json(user)
      })
      .catch((error) => {
        res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
      });
  },
  editProfile: (req, res) => {
    const userId = req.params.id;

    User.findById(userId)
      .then((user) => {
        user.about = req.body.about;
        user.profilePicture = req.body.profilePicture;
        user.instruments = req.body.instruments;

        user.save()
          .then(() => {
            res.status(200)
              .json({
                message: 'Profile edited successfully.',
                user,
              })
          })
      })
      .catch((error) => {
        res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
      });
  },
  getUsers: async (req, res) => {
    try{
      let users = await User.find(
        { 'status': { $in: [ 'Student', 'Musician' ] },
        'bands': { $nin: [ req.params.id ] }
       });

      res.status(200)
      .json({
        message: 'Users fetched successfully.',
        users,
      })

    } catch(error) {
      res.status(500)
        .json({
          message: 'Something went wrong.',
          error
        })
    }
  }
};