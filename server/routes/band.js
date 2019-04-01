const router = require('express').Router();
const bandController = require('../controllers/band');
const restrictedPages = require('../middleware/restrictedPages');

router.get('/bands', bandController.getBands);
router.post('/band/create', bandController.createBand);
router.post('/band/add/member/:id', bandController.addMember);
router.post('/band/remove/member/:id', bandController.removeMember);
router.get('/band/details/:id', bandController.bandDetails);
router.post('/band/edit/:id', bandController.editBand);
router.post('/band/delete/:id', bandController.deleteBand);

module.exports = router;