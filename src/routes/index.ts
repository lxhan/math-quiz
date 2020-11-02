import { Router } from 'express'
import { fetchProblem } from '../controllers/problem'
import { sendAnswer } from "../controllers/result";

const router: Router = Router()

router.get('/api/fetchProblem', fetchProblem)
router.post('/api/submit', sendAnswer)

export default router
