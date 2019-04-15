const router = require('express').Router();
const bandController = require('../controllers/band');
const restrictedPages = require('../middleware/restrictedPages');

router.get('/bands', bandController.getBands);
router.post('/band/create', restrictedPages.isAdmin, bandController.createBand);
router.post('/band/add/member/:id', restrictedPages.isAdmin, bandController.addMember);
router.post('/band/remove/member/:id', restrictedPages.canRemove, bandController.removeMember);
router.get('/band/details/:id', bandController.bandDetails);
router.get('/band/user/:id', bandController.getUserBands);
router.post('/band/edit/:id', restrictedPages.isMember, bandController.editBand);
router.post('/band/delete/:id', restrictedPages.isAdmin, bandController.deleteBand);

module.exports = router;