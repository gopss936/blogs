const upload = require('../middleware/upload');
const Post = require('../models/post');
const Comment = require('../models/comments');

const multer = require('multer');
const fs = require('fs');
const message=require('../config/constants')
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const titleExist = await Post.findOne({ title });

        if (titleExist) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ message:message.failResponse.TITLE_EXIST });
        }

        if (!req.file) {
            return res.status(400).json({ message: message.errorResponse.IMG_FILE_REQ });
        }

        const imagePath = req.file.path;
        const newPost = await Post.create({ title, content, imagePath, author: req.user.userId });
        res.status(201).json(newPost);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



exports.getAllPosts = async (req, res) => {
    try {
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit) : 10;
      const skip = (page - 1) * limit;
  
      const posts = await Post.find()
        .populate('author', 'username')
        .populate({
          path: 'comments', 
          populate: {
            path: 'author', 
            select: 'username' 
          }
        })
        .skip(skip)
        .limit(limit);
  
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  


  exports.getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
        .populate('author', 'username')
        .populate({
          path: 'comments', 
          populate: {
            path: 'author', 
            select: 'username' 
          }
        });
        
      if (!post) {
        return res.status(404).json({ message: message.failResponse.POST_NOT_FOUND });
      }
      
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
};


  exports.updatePost = async (req, res) => {
    try {
      const { title, content } = req.body;
      const postId = req.params.id;
      const userId = req.user.userId;
  
      const existingPost = await Post.findById(postId);
      if (!existingPost) {
        return res.status(404).json({ message: message.failResponse.POST_NOT_FOUND });
      }
  
      if (existingPost.author.toString() !== userId) {
        return res.status(403).json({ message: message.errorResponse.UPDATE_UNAUTHORIZE });
      }
  
      const updatedPost = await Post.findByIdAndUpdate(postId, { title, content }, { new: true });
      res.json({ message: message.succsessResponse.POST_UPDATE_SUCCESS, updatedPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  
  exports.deletePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const userId = req.user.userId;
  
      const existingPost = await Post.findById(postId);
      if (!existingPost) {
        return res.status(404).json({ message: message.failResponse.POST_NOT_FOUND });
      }
  
      if (existingPost.author.toString() !== userId) {
        return res.status(403).json({ message: message.errorResponse.DELETE_UNAUTHORIZE });
      }
  
      const deletedPost = await Post.findByIdAndDelete(postId);
      res.json({ message: message.succsessResponse.POST_DELETE_SUCCESS });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

exports.createComment = async (req, res) => {
    try {
      const { content } = req.body;
      const { postId } = req.params;
      
      const newComment = await Comment.create({
        content,
        postId,
        author: req.user.userId 
      });
      
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $push: { comments: newComment._id } }, 
        { new: true }
      );
  
      res.status(201).json({ newComment, updatedPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  