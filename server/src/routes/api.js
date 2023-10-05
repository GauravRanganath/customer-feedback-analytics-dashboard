const express = require('express');
const router = express.Router();
const getFeedbackController = require('../controllers/getFeedbackController');
const postFeedbackController = require('../controllers/postFeedbackController')

router.get('/get_data', getFeedbackController.getData);
router.post('/post_data', postFeedbackController.postData);

module.exports = router;