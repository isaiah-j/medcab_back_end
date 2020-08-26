const express = require('express');
const ailmentController = require('./../controllers/ailmentController');
const authController = require('../controllers/authController')
const router = express.Router();

router.use(authController.protect)

router.
    route('/')
    .get(ailmentController.getAllAilments)
    .post(ailmentController.postAilment)

router
    .route('/:id')
    .get(ailmentController.getAilment)
    .patch(authController.restrictTo('admin'), ailmentController.updateAilment)
    .delete(authController.restrictTo('admin'), ailmentController.deleteAilment)

module.exports = router
// app.get('/api/ailments', ailmentController.getAllAilments)

// app.post('/api/ailments', ailmentController.postAilment)

// app.get('/api/ailments/:id', ailmentController.getAilment)

// app.delete('/api/ailments/:id', ailmentController.deleteAilment)

// app.put('/api/ailments/:id', ailmentController.updateAilment)