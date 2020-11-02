import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IProblem } from '../types'
import Problem from '../entity/Problem'

export const fetchProblem = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const problemRepo = getRepository(Problem)
    const problems: IProblem[] = await problemRepo.find()
    res.status(200).json({ problems })
  } catch (err) {
    console.error(err)
    throw err
  }
}
