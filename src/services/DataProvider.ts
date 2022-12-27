export type ResourceData<T> = {
  data: {
    [k in keyof T]: T[k]
  }
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
  update: <T, R>(
    resourceName: string,
    id: string,
    payload: ResourceData<T>,
  ) => Promise<ResponseType<R>>
  updateSingle: <T, R>(
    resourceName: string,
    payload: ResourceData<T>,
  ) => Promise<ResponseType<R>>
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
  abstract update<T, R>(
    resourceName: string,
    id: string,
    payload: ResourceData<T>,
  ): Promise<ResponseType<R>>
  abstract updateSingle<T, R>(
    resourceName: string,
    payload: ResourceData<T>,
  ): Promise<ResponseType<R>>
  abstract delete<T>(resourceName: string, id: string): Promise<ResponseType<T>>
}
