import express from "express";
import { UserModel } from "../../models/mongModel/user.model";
const route = express.Router()

route.get('/', async(req, res) => {
    
    const data = await UserModel.find({})
    return res.json(data)
})
route.get('/:id', async (req, res)=> {
        const data = await UserModel.findById(req.params.id)
        res.json(data)
} )
route.post('/', async (req, res) => {
    const user  =  new UserModel(req.body);
    await user.save()
    res.json(user)
});
route.put('/:id', async (req, res) => {
    const data =await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(data)
});
route.patch('/:id', async (req, res) => {
    const data = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(data)
})
route.delete('/:id', async (req, res) => {
    const data =await UserModel.findByIdAndRemove(req.params.id)
    res.json(data)
})

export default route;