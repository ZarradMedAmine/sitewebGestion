
const express = require('express');
const router = express.Router();
const superAdminController = require('../controllers/superadmin.controller');

// Routes
router.post('/superadmins', superAdminController.createSuperAdmin);
router.get('/superadmins', superAdminController.getAllSuperAdmins);

module.exports = router;