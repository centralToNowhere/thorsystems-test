export type ResourceData<T> = {
  [k in keyof T]: T[k]
}

export type ResponseType<T> = {
  data: T
  status: number
  statusText: string
}

export interface DataProviderType {
  get: <T>(resourceName: string, id: string) => Promise<ResponseType<T>>
  getSingle: <T>(resourceName: string) => Promise<ResponseType<T>>
  getMany: <T>(resourceName: string) => Promise<ResponseType<T>>
  create: <T, R>(
    resourceName: string,
    payload: ResourceData<T>,
  ) => Promise<ResponseType<R>>
  update: <T>(
    resourceName: string,
    id: string,
    payload: ResourceData<T>,
  ) => Promise<ResponseType<T>>
  updateSingle: <T>(
    resourceName: string,
    payload: ResourceData<T>,
  ) => Promise<ResponseType<T>>
  delete: <T>(resourceName: string, id: string) => Promise<ResponseType<T>>
}

export abstract class DataProvider implements DataProviderType {
  abstract get<T>(resourceName: string, id: string): Promise<ResponseType<T>>
  abstract getSingle<T>(resourceName: string): Promise<ResponseType<T>>
  abstract getMany<T>(resourceName: string): Promise<ResponseType<T>>
  abstract create<T, R>(
    resourceName: string,
    payload: ResourceData<T>,
  ): Promise<ResponseType<R>>
  abstract update<T>(
    resourceName: string,
    id: string,
    payload: ResourceData<T>,
  ): Promise<ResponseType<T>>
  abstract updateSingle<T>(
    resourceName: string,
    payload: ResourceData<T>,
  ): Promise<ResponseType<T>>
  abstract delete<T>(resourceName: string, id: string): Promise<ResponseType<T>>
}
