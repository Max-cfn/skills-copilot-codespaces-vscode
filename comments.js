// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const { check } = require('express-validator');

// Add comment
// api/comments
router.post('/', 
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('id_post', 'Post id is required').not().isEmpty()
    ],
    commentsController.addComment
);

// Get comments by post id
// api/comments/:id
router.get('/:id',
    commentsController.getCommentsById
);

// Delete comment
// api/comments/:id
router.delete('/:id',
    commentsController.deleteComment
);

module.exports = router;