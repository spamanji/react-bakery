const express = require('express')
const router = express.Router();
const cake = require('../models/cake')
const middleWare = require('../helpers/middlewares')
// Routes

/* All cakes */
router.get('/', async (req, res) => {
    await cake.getCakes()
        .then(cakes => res.json(cakes))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
});

/* Insert a new cake */ // middleWare.checkFieldsPost, 
router.post('/', middleWare.checkFieldsPost, async (req, res) => {
    await cake.insertCake(req.body)
        .then(cake => res.status(201).json({
            message: `The cake #${cake.id} has been created`,
            content: cake
        }))
        .catch(err => res.status(500).json({ message: err.message }))
});

/* A cake by id */
router.get('/:id', middleWare.mustBeInteger, async (req, res) => {
    const id = req.params.id
    await cake.getCake(id)
        .then(cake => res.json(cake))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
});

/* Update a cake */ //middleWare.mustBeInteger, middleWare.checkFieldsPost,
router.put('/:id', middleWare.mustBeInteger, middleWare.checkFieldsPost, async (req, res) => {
    const id = req.params.id
    await cake.updateCake(id, req.body)
        .then(cake => res.json({
            message: `The cake #${id} has been updated`,
            content: cake
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
});

/* Delete a cake */
router.delete('/:id', middleWare.mustBeInteger, async (req, res) => {
    const id = req.params.id
    console.log('id to delete: ' + id);
    await cake.deleteCake(id)
        .then(() => res.json({
            message: `The cake #${id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
});

module.exports = router