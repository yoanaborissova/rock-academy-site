const router = require('express').Router();
const applicationController = require('../controllers/application');
const restrictedPages = require('../middleware/restrictedPages');

router.get('/applications', restrictedPages.isAdmin, applicationController.getAllApplications);
router.get('/applications/:id', applicationController.getUsersApplications);
router.post('/application/apply', restrictedPages.isAuthed, applicationController.createApplication);
router.post('/application/approve/:id', restrictedPages.isAdmin, applicationController.approveApplication);
router.post('/application/disapprove/:id', restrictedPages.isAdmin, applicationController.disapproveApplication);

module.exports = router;