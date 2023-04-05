const express = require('express')
const router = express.Router()

// Load DB Models
const Part = require('../models/Part')
const RemovedPart = require('../models/RemovedPart')

//Route for jeff's home page 
router.get('/', function(req,res){
    res.render('pages/jeff', {banner: 'Jeffs Home Page', message:''})
    let ip = req.ip
    let date = new Date().toLocaleString();
    console.log(`Jeff -> by ${ip} at ${date}`)
})

module.exports = router