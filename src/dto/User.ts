export class UserDTO {
  username: string
  email: string
  address: { city?: string; street?: string; block?: string }

  constructor(
    username: string,
    email: string,
    addres: { city?: string; street?: string; block?: string }
  ) {
    this.username = username
    this.email = email
    this.address = addres
  }

  static get emptyUser() {
    return new UserDTO('', '', { city: '', street: '', block: '' })
  }
}
