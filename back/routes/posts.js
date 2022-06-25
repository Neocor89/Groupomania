//: Imports Server
const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');

//: Importation for home security :
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//! Problème identifié sur certaines route et la route modifyPost
//: All routes for posts management
router.post('/', auth, multer, postsCtrl.createPost);
router.get('/:id', auth, postsCtrl.getOnePost);
router.get('/', auth, postsCtrl.getAllPosts);
router.put('/:id', auth, multer, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);

// router.post('/', auth, multer, postsCtrl.createPost);
// router.get('api/posts/:id', auth, postsCtrl.getOnePost);
// router.get('api/posts', auth, postsCtrl.getAllPosts);
// router.put('api/posts/:id', auth, multer, postsCtrl.modifyPost);
// router.delete('api/posts/:id', auth, postsCtrl.deletePost);

module.exports = router;