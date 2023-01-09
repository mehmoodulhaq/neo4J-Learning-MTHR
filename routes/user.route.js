import express from "express";
import { findAll, findById, craeteUser, deleteUser, findByIdAndUpdate, findByIdAndUpdatePartially } from '../controllers/user.controller';
const route = express.Router()

route.get('/', findAll)
route.get('/:id', findById)
route.post('/', craeteUser);
route.put('/:id', findByIdAndUpdate);
route.patch('/:id', findByIdAndUpdatePartially)
route.delete('/:id', deleteUser)

export default route;