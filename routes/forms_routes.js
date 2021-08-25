const router = require('express').Router();
const formController = require('../controllers/form_controllers');
const { requireAuth } = require('../middleware/authMiddleware');


router.get('/list',requireAuth,formController.getForms); 
router.get('/surveys',requireAuth,formController.getSurveys); 
router.post('/create',requireAuth,formController.createForm); 
router.put('/edit/:id',requireAuth, formController.editForm);
router.delete('/delete/:id',requireAuth, formController.deleteForm);
router.post('/data',requireAuth, formController.postFormData);
router.get('/:form_id/submissions',requireAuth, formController.getFormSubmissions);
router.put('/:form_id/publish',requireAuth, formController.handlePublishForm);
router.get('/submission/:id',requireAuth, formController.getSubmission);
router.get('/submissions',requireAuth, formController.getSubmissions);
router.get('/statistics',requireAuth,formController.getFormsStatistics); 
router.get('/admin/:id', requireAuth, formController.adminGetForm);
router.get('/description/:id', requireAuth, formController.getDescription);
router.get('/:id', requireAuth, formController.getForm);

module.exports = router