import express from 'express'
import { getProdes } from '../../controllers'

export const prodeRoutes = express.Router()

prodeRoutes.get('/prodes', getProdes)
