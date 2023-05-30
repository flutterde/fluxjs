const router = require('express').Router();
const {getPostsController} = require('../controllers/post/get_posts_controller');



router.get('/posts', getPostsController);


module.exports = router;