const router = require('express').Router();

const { 
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

// Set up GET all at /api/thoughts
router
  .route('/')
  .get(getAllThought)

// Set up GET all at /api/thoughts by id
router
    .route('/:id')
    .get(getThoughtById)

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').put(updateThought);
router.route('/:userId/:thoughtId').delete(removeThought);


// router
//   .route('/:userId/:reactionId')
//   .put(addReaction)
//   .delete(removeThought)

// // /api/thoughts/<userId>/<thoughtId>
// router.route('/:userId/:thoughtId').delete(removeThought);

// router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;