const express = require('express')

const { userController } = require('../controllers')
const { validate } = require('../middlewares')

const router = express.Router()

router
    .route('/')
    .get(validate.sayBye, userController.getUserByEmail)
    .post((validate.sayBye, userController.createUser))
    .put()
    .patch()
    
router
    .route('/bye')
    .get()


module.exports = router