const express = require('express');
const router = express.Router();
const { 
  generateText, 
  generateImage, 
  processImage 
} = require('../controllers/ai.controller');

// AI Generation endpoints
router.post('/generate-text', generateText);
router.post('/generate-image', generateImage);
router.post('/process-image', processImage);

module.exports = router;