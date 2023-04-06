const express = require('express')

const { homeView, formView, formSubmission, getAllUsers } = require('../controllers/userController')

const router = express.Router()

router.get('/', homeView)

router.get('/', formView)

router.post('/', formSubmission)

router.get('/user-list', getAllUsers)

module.exports = router;

