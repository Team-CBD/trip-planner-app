const router = require('express').Router();
const Comment = require('../../models/comment.model');

router.get('/', (req, res) => {
    Comment.find((err, comments) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: comments });
    });
  });
  
  router.post('/', (req, res) => {
    const comment = new Comment();
    const { author, text } = req.body;
    if (!author || !text) {
      return res.json({
        success: false,
        error: 'You must provide an author and comment'
      });
    }
    comment.author = author;
    comment.text = text;
    comment.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  router.put('/:commentId', (req, res) => {
    const { commentId } = req.params;
    if (!commentId) {
      return res.json({ success: false, error: 'No comment id provided' });
    }
    Comment.findById(commentId, (error, comment) => {
      if (error) return res.json({ success: false, error });
      const { author, text } = req.body;
      if (author) comment.author = author;
      if (text) comment.text = text;
      comment.save(error => {
        if (error) return res.json({ success: false, error });
        return res.json({ success: true });
      });
    });
  });
  
  router.delete('/:commentId', (req, res) => {
    const { commentId } = req.params;
    if (!commentId) {
      return res.json({ success: false, error: 'No comment id provided' });
    }
    Comment.remove({ _id: commentId }, (error, comment) => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });

module.exports = router;