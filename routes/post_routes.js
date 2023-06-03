const router = require('express').Router();
const {getPostsController} = require('../controllers/post/get_posts_controller');
const {getUsersController} = require('../controllers/user/get_users_controller');



router.get('/posts', getPostsController);

// user routes
router.get('/users', getUsersController);


module.exports = router;