const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {signUpvalidate,signInvalidate,updatePostValidation,createPostValidation}=require('../utills/validation')
const upload = require('../middleware/upload');
const postController = require('../controllers/postController');



router.post('/register',signUpvalidate,authController.signUp);
router.post('/login',signInvalidate,authController.signIn);

router.post('/posts', upload.single('image'),createPostValidation, postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id',updatePostValidation, postController.updatePost);
router.delete('/posts/:id',postController.deletePost);

router.post('/posts/comment/:postId',postController.createComment)

module.exports = router;