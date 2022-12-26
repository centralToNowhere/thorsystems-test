import { AxiosInstance } from 'axios'

import {
  DataProvider,
  DataProviderType,
  ResourceData,
  ResponseType,
} from '@/services/DataProvider'

interface RESTDataProviderProps {
  apiUrl: string
  httpClient: AxiosInstance
  options?: {
    populate: boolean
  }
}

export class RESTDataProvider extends DataProvider implements DataProviderType {
  apiUrl: string
  httpClient: AxiosInstance
  query: string = ''

  constructor(props: RESTDataProviderProps) {
    super()

    this.apiUrl = props.apiUrl
    this.httpClient = props.httpClient

    if (props.options && props.options.populate) {
      this.query = `?populate=deep`
    }
  }

  async create<T, R>(
    resourceName: string,
    payload: ResourceData<T>,
  ): Promise<ResponseType<R>> {
    const url = `${this.apiUrl}/${resourceName}${this.query}`

    const { data, status, statusText } = await this.httpClient.post<R>(url, payload)

    return {
      data,
      status,
      statusText,
    }
  }

  async update<T>(resourceName: string, id: string, payload: ResourceData<T>) {
    const url = `${this.apiUrl}/${resourceName}/${id}${this.query}`

    const { data, status, statusText } = await this.httpClient.put<T>(url, payload)

    return {
      data,
      status,
      statusText,
    }
  }

  async delete<T>(resourceName: string, id: string) {
    const url = `${this.apiUrl}/${resourceName}/${id}${this.query}`

    const { data, status, statusText } = await this.httpClient.delete<T>(url)

    return {
      data,
      status,
      statusText,
    }
  }

  async updateSingle<T>(resourceName: string, payload: ResourceData<T>) {
    const url = `${this.apiUrl}/${resourceName}${this.query}`

    const { data, status, statusText } = await this.httpClient.put<T>(url, payload)

    return {
      data,
      status,
      statusText,
    }
  }

  async get<T>(resourceName: string, id: string) {
    const url = `${this.apiUrl}/${resourceName}/${id}${this.query}`

    const { data, status, statusText } = await this.httpClient.get<T>(url)

    return {
      data,
      status,
      statusText,
    }
  }

  async getMany<T>(resourceName: string) {
    const url = `${this.apiUrl}/${resourceName}${this.query}`

    const { data, status, statusText } = await this.httpClient.get<T>(url)

    return {
      data,
      status,
      statusText,
    }
  }

  async getSingle<T>(resourceName: string) {
    const url = `${this.apiUrl}/${resourceName}${this.query}`

    const { data, status, statusText } = await this.httpClient.get<T>(url)

    return {
      data,
      status,
      statusText,
    }
  }
}
