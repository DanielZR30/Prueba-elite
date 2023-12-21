const express = require('express')
const router = express.Router();
const hpController = require('../controllers/hpController.js');


router
    .get('/',hpController.getAllCharacters)
    .get('/students',hpController.getAllHogwartsStudents)
    .get('/staff',hpController.getHogwarsStaff)
    .get('/:house',hpController.getCharactersByHouse)
    .get('/spells',hpController.getAllSpells)

module.exports = router