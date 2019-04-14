const router = require('express').Router();
const commentController = require('../controllers/comment');
const restrictedPages = require('../middleware/restrictedPages')

router.get('/comment/:id', commentController.getComment);
router.get('/comments/:id', commentController.getComments);
router.post('/comment/create', restrictedPages.isAuthed, commentController.createComment);
router.post('/comment/edit/:id', commentController.editComment);
router.post('/comment/delete/:id', restrictedPages.isOwner, commentController.deleteComment);

module.exports = router;