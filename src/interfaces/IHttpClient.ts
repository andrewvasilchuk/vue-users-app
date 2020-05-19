type Response<T> = {
  data: T
}

export interface IHttpClient {
  get<T>(url: string): Promise<Response<T>>
  post<T>(url: string, body: any): Promise<Response<T>>
  patch<T>(url: string, body: any): Promise<Response<T>>
  delete<T>(url: string): Promise<Response<T>>
}
