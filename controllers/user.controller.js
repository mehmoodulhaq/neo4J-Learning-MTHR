
import userService from '../models/user.model';

export const findAll = async (req, res) => {
    const result  = await userService.findAll()
    res.json(result)
}

export const findById = async (req, res) => {
    const result  = await userService.findById(req.params.id)
    res.json(result)
}

export const craeteUser  = async (req, res) => { 
    const result  = await userService.craeteUser(req.body)
    res.json(result)
}


export const findByIdAndUpdate  = async (req, res) => {
    const result  = await userService.findByIdAndUpdate(id, req.body)
    res.json(result)

}

export const findByIdAndUpdatePartially  = async (req, res) => {
    const result  = await userService.findById(req.params.id)
    res.json(result)
}


export const deleteUser  = async (req, res) => {
    res.json({hello:'hello world'})
}



