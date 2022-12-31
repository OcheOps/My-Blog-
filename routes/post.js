const express = require('express');
const router = express.Router();
// Require the post model
const Post = require('../models/post');

/* GET posts */
router.get('/', async (req, res, next) => {
  // sort from the latest to the earliest
  const posts = await Post.find().sort({ createdAt: 'desc' });
  return res.status(200).json({
    statusCode: 200,
    message: 'Fetched all posts',
    data: { posts },
  });
});

/* GET post */
router.get('/:id', async (req, res, next) => {
    // req.params contains the route parameters and the id is one of them
     const post = await Post.findById(req.params.id);
     return res.status(200).json({
       statusCode: 200,
       message: 'Fetched post',
       data: {
         post: post || {},
       },
     });
   });