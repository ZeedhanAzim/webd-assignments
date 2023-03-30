const express = require('express')

const { homeView, formView } = require('../controllers/userController')

const router = express.Router()

router.get('/', homeView)

router.get('/', formView)

module.exports = router;

