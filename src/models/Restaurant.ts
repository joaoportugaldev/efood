class RestaurantItem {
  title: string
  image: string
  rate: number
  description: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    image: string,
    rate: number,
    description: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.rate = rate
    this.description = description
    this.infos = infos
  }
}

export default RestaurantItem
