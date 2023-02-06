const express = require('express')
const { 
  getCVs,
  getCV,
  createCV,
  deleteCV,
  updateCV
 } = require('../controllers/cvController')

// Create an instance of the express router
const router = express.Router()

// Handle the various routes - remember we require a prefix of '/api/cvs' to our request
  // so our first route below will invoke the function when we make a request to '/api/cvs/'

//GET all CVs
router.get('/', getCVs)         // When a get request is redeived to 'api/cvs/' then invoke getCVs in cvController.js

//GET a single CV
router.get('/:id', getCV)       // When a get request is received to '/api/cvs/[id number]' then invoke getCV in cvController.js

//POST a new CV
router.post('/', createCV)      // When a post request is received to '/api/cvs/' then invoke createCV in cvController.js

//DELETE a CV
router.delete('/:id', deleteCV)    // When a delete request is received to '/api/cvs/[id number]' then invoke deleteCV

//UPDATE a CV
router.patch('/:id', updateCV)  // When a patch request is received to '/api/cvs/[id number]' then invoke updateCV


// Export the router after it has handled the proper request
module.exports = router