const {v4:uuid} = require('uuid')
const axios = require('axios')

const getAllCharacters = async () =>{
    let result = await axios('https://hp-api.onrender.com/api/characters')
    return result.data
}

const getAllHogwartsStudents = async () =>{
    let result = await axios('https://hp-api.onrender.com/api/characters/students')
    return result.data
}

const getHogwarsStaff = async () =>{
    let result = await axios('https://hp-api.onrender.com/api/characters/staff')
    return result.data
}

const getCharactersByHouse = async (house) =>{
    let result = await axios(`https://hp-api.onrender.com/api/characters/house/${house}`)
    return result.data
}

const getAllSpells = async (house) =>{
    let result = await axios(`https://hp-api.onrender.com/api/spells`)
    return result.data
}

module.exports = {getAllCharacters,getAllHogwartsStudents,getHogwarsStaff,getCharactersByHouse,getAllSpells}