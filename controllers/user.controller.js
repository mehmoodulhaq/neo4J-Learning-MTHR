
import userService from '../models/user.model';

const findAll = async (req, res) => {
    const result  = await userService.findAll()
    res.json(result)
}

const findById = async (req, res) => {
    const result  = await userService.findById(req.params.id)
    res.json(result)
}

const craeteUser  = async (req, res) => { 
    const result  = await userService.craeteUser(req.body)
    res.json(result)
}


const findByIdAndUpdate  = async (req, res) => {
    const result  = await userService.findByIdAndUpdate(id, req.body)
    res.json(result)

}

const findByIdAndUpdatePartially  = async (req, res) => {
    const result  = await userService.findById(req.params.id)
    res.json(result)
}


const deleteUser  = async (req, res) => {
    res.json({hello:'hello world'})
}



export {findAll,findById,craeteUser,deleteUser, findByIdAndUpdate, findByIdAndUpdatePartially }