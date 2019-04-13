const router = require('express').Router();
const articleController = require('../controllers/article');
const restrictedPages = require('../middleware/restrictedPages');

router.get('/articles', articleController.getArticles);
router.post('/article/create', articleController.createArticle);
router.get('/article/details/:id', articleController.articleDetails);
router.post('/article/edit/:id', articleController.editArticle);
router.post('/article/delete/:id', articleController.deleteArticle);

module.exports = router;