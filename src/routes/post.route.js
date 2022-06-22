const express = require('express')

const { postController } = require('../controllers')
const { validate } = require('../middlewares')

const router = express.Router()

router
    .route('/')
    .get(validate.sayBye, postController.getPublicPosts)
    .post()
    .patch()
    
router
    .route()
    .get()


module.exports = router