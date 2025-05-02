export type CardType = {
  id: number
  text: string
  completed: boolean
}

export type ListType = {
  id: number
  name: string
  cards: CardType[]
}
