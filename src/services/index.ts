import { UserService } from './UserService'
import { Api } from '@/api'

export class ServiceContainer {
  private static _instance: ServiceContainer
  private _api: Api
  private _userService: UserService

  private constructor() {
    this._api = new Api()
    this._userService = new UserService(this._api.getClient())
  }

  public static getInstance(): ServiceContainer {
    if (ServiceContainer._instance === undefined) {
      ServiceContainer._instance = new ServiceContainer()
    }

    return ServiceContainer._instance
  }

  getUserService() {
    return this._userService
  }
}
