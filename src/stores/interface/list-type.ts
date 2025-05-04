export type TagType = {
  id: string
  name: string
  color: string
}

export type CardType = {
  id: number
  text: string
  description?: string
  completed: boolean
}

export type ListType = {
  id: number
  name: string
  cards: CardType[]
}
