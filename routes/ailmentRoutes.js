const express = require('express');
const ailmentController = require('./../controllers/ailmentController');

const router = express.Router();


router.route('/')
    .get(ailmentController.getAllAilments)
    .post(ailmentController.postAilment)

router.route('/:id')
    .get(ailmentController.getAilment)
    .put(ailmentController.updateAilment)
    .delete(ailmentController.deleteAilment)


module.exports = router
// app.get('/api/ailments', ailmentController.getAllAilments)

// app.post('/api/ailments', ailmentController.postAilment)

// app.get('/api/ailments/:id', ailmentController.getAilment)

// app.delete('/api/ailments/:id', ailmentController.deleteAilment)

// app.put('/api/ailments/:id', ailmentController.updateAilment)