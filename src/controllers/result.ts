import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IAnswer, IResult } from '../types'
import Problem from '../entity/Problem'
import Result from '../entity/Result'

export const sendAnswer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const input = JSON.parse(req.body?.input)
    const body = input as Partial<IAnswer>[]
    const problemRepo = getRepository(Problem)
    const resultRepo = getRepository(Result)
    const answers = await Promise.all(
      body.map(async item => {
        const problem = await problemRepo.findOne(item.id)
        const correct =
          problem?.answer === item.answer || problem?.type === 3 ? 1 : 0
        const result: IResult = {
          problemId: problem?.id,
          answer: item.answer,
          result: correct,
        }
        return result
      })
    )
    resultRepo.save(answers)
    res.status(200).send({ results: answers })
  } catch (err) {
    console.error(err)
    throw err
  }
}
