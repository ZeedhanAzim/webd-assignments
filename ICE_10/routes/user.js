const express = require('express')

const { homeView, formView, formSubmission } = require('../controllers/userController')

const router = express.Router()

router.get('/', homeView)

router.get('/', formView)

router.post('/', formSubmission)


module.exports = router;

