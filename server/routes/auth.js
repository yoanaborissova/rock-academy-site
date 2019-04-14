const router = require('express').Router();
const { body } = require('express-validator/check');
const authController = require('../controllers/auth');
const restrictedPages = require('../middleware/restrictedPages');

router.post('/signup',
  [
    body('password')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Please enter a valid password.'),
    body('username')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please enter a valid username.')
  ]
, authController.signUp);
router.post('/signin', authController.signIn);
router.get('/profile/:id', authController.viewProfile);
router.post('/profile/edit/:id', restrictedPages.isOwner, authController.editProfile);
router.get('/users/available/:id', restrictedPages.isAdmin, authController.getUsers);

module.exports = router;
