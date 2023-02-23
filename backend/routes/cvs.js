const express = require('express')
const { getCVs, getCV, createCV, deleteCV, updateCV } = require('../controllers/cvController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require Auth for all CV routes
router.use(requireAuth)

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