export type GoalType = {
  id: number
  name: string
  completed: boolean
}

export type ListType = {
  id: number
  name: string
  cards: GoalType[]
}
