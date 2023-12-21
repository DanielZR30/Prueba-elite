const hpService = require('../services/hpService.js')

const getAllCharacters = async (req,res) => {
    console.log("GET  - /")
    try{
        let characters = await hpService.getAllCharacters()
        
        res.status(200).json(characters)
    }catch(ex){
        res.status(400).json({isError:true, message:ex.message})
    }
}

const getAllHogwartsStudents= async (req,res) => {
    try{
        let characters = await hpService.getAllHogwartsStudents()
        res.status(200).json(characters)
    }catch(ex){
        res.status(400).json({isError:true, message:ex.message})
    }
}

const getHogwarsStaff = async (req,res) => {
    try{
        let characters = await hpService.getHogwarsStaff()
        res.status(200).json(characters)
    }catch(ex){
        res.status(400).json({isError:true, message:ex.message})
    }
}

const getCharactersByHouse = async (req,res) => {
    try{
        let characters = await hpService.getCharactersByHouse(req.params.house)
        res.status(200).json(characters)
    }catch(ex){
        res.status(400).json({isError:true, message:ex.message})
    }
}

const getAllSpells = async (req,res) => {
    try{
        let characters = await hpService.getAllSpells(req.params.house)
        res.status(200).json(characters)
    }catch(ex){
        res.status(400).json({isError:true, message:ex.message})
    }
}

module.exports = {getAllCharacters,getAllHogwartsStudents,getHogwarsStaff,getCharactersByHouse,getAllSpells}