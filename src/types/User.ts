export type User = {
  id: number
  username: string
  email: string
  address: {
    city?: string
    street?: string
    block?: string
  }
}
