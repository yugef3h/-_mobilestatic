export interface AxiosRequestConfig {
  url?: string
  method?: string
  baseURL?: string
  xsrfCookieName?: string
  xsrfHeaderName?: string
  headers?: any
  params?: any
  data?: any
  timeout?: number
  withCredentials?: boolean
  responseType?: XMLHttpRequestResponseType
  paramsSerializer?: (params: any) => string
  onUploadProgress?: (progressEvent: any) => void
  onDownloadProgress?: (progressEvent: any) => void
  validateStatus?: (status: number) => boolean
  adapter?: AxiosAdapter
  auth?: any
  transformRequest?: AxiosTransformer | AxiosTransformer[]
  transformResponse?: AxiosTransformer | AxiosTransformer[]
  cancelToken?: CancelToken
}

export interface AxiosAdapter {
  (config: AxiosRequestConfig): AxiosPromise<any>
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> { }

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request?: any
}

export interface AxiosBasicCredentials {
  username?: string
  password?: string
}

export interface AxiosTransformer {
  (data: any, headers?: any): any
}

export interface CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel
  throwIfRequested (): void
}

export interface Cancel {
  message: string
}

export interface Interceptor {
  fulfilled: (data: any) => any
  rejected: (error: any) => any
}

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}
export interface AxiosReslove {
  (value?: AxiosResponse<any> | PromiseLike<AxiosResponse<any>>): void
}

export interface CancelStatic {
  new (message?: string): Cancel
}

export interface Cancel {
  message: string
}

export interface Canceler {
  (message?: string): void
}

export interface CancelTokenStatic {
  new (executor: (cancel: Canceler) => void): CancelToken
  source (): CancelTokenSource
}

export interface CancelTokenSource {
  token: CancelToken
  cancel: Canceler
}
export interface AxiosInterceptorManager<V> {
  use (
    onFulfilled?: (value: V) => V | Promise<V>,
    onRejected?: (error: any) => any
  ): number
  eject (id: number): void
}
export interface AxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise
  (url: string, config?: AxiosRequestConfig): AxiosPromise
  defaults: AxiosRequestConfig
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  }
  getUri (config?: AxiosRequestConfig): string
  request<T = any, R = AxiosResponse<T>> (
    config: AxiosRequestConfig
  ): Promise<R>
  get<T = any, R = AxiosResponse<T>> (
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>
  delete<T = any, R = AxiosResponse<T>> (
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>
  head<T = any, R = AxiosResponse<T>> (
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>
  post<T = any, R = AxiosResponse<T>> (
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>
  put<T = any, R = AxiosResponse<T>> (
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>
  patch<T = any, R = AxiosResponse<T>> (
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>
}
export interface AxiosStatic extends AxiosInstance {
  Cancel: CancelStatic
  create (config?: AxiosRequestConfig): AxiosInstance
  isCancel (value: any): boolean
  all<T> (values: (T | Promise<T>)[]): Promise<T[]>
  spread<T, R> (callback: (...args: T[]) => R): (array: T[]) => R
}
