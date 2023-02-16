const express = require('express')
const { getCVs, getCV, createCV, deleteCV, updateCV } = require('../controllers/cvController')

const router = express.Router()

// GET all CVs
router.get('/', getCVs)

//GET a single CV
router.get('/:id', getCV)

//POST a new CV
router.post('/', createCV)

//DELETE a CV
router.delete('/:id', deleteCV)

//UPDATE a CV
router.patch('/:id', updateCV)

module.exports = router