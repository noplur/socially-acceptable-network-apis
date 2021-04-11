const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    updateThought,
    removeThought,
    removeReaction
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
router
    .route('/:userId').post(addThought)
    // .put(updateThought)

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought)


// router
//   .route('/:userId/:reactionId')
//   .put(addReaction)
//   .delete(removeThought)

// // /api/thoughts/<userId>/<thoughtId>
// router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;