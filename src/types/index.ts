export interface IProblem {
  id: number
  problemText: string
  type: number
  choices: string
  answer: string
}

export interface IResult {
  id?: number
  problemId?: number
  answer?: string
  result: number
}

export interface IAnswer {
  id: number
  answer: string
}
