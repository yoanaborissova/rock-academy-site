const router = require('express').Router();
const applicationController = require('../controllers/application');
const restrictedPages = require('../middleware/restrictedPages');

router.get('/applications', applicationController.getAllApplications);
router.get('/applications/:id', applicationController.getUsersApplications);
router.post('/application/create', applicationController.createApplication);
router.post('/application/approve/:id', applicationController.approveApplication);
router.post('/application/disapprove/:id', applicationController.disapproveApplication);

module.exports = router;