import { IHttpClient } from '@/interfaces'
import { User } from '@/types'

export class UserService {
  constructor(private _client: IHttpClient) {}

  list() {
    return this._client.get<User[]>('/users')
  }

  create(user: User) {
    return this._client.post('/users', user)
  }

  edit(id: number, user: Partial<User>) {
    return this._client.patch(`/users/${id}`, user)
  }

  delete(id: number) {
    return this._client.delete(`/users/${id}`)
  }
}
