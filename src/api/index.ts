import axios from 'axios'
import { IHttpClient } from '@/interfaces'

type ConstructorOptions = {
  client?: IHttpClient
  baseUrl?: string
}

export class Api {
  private _client: IHttpClient

  constructor(options: ConstructorOptions = {}) {
    this._client =
      options.client ||
      axios.create({
        baseURL: options.baseUrl || process.env.VUE_APP_BASE_URL,
      })
  }

  getClient() {
    return this._client
  }
}
