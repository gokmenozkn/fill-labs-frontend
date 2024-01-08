import { User, FormData } from "@/types/User";
import axios, { AxiosError, AxiosResponse } from "axios";

export const BASE_URL = 'http://localhost:8080';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

class UserApi {
  private baseUrl: string = BASE_URL;

  private async performRequest<T>(method: Method, endpoint: string, data?: any) {
    const url = `${this.baseUrl}/${endpoint}`;

    try {
      const res: AxiosResponse<T> = await axios({
        method,
        url,
        headers: {
          'Content-Type': 'application/json'
        },
        data
      })

      return res.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(`Error performing ${method} request to ${url}:`, axiosError.message);
      throw axiosError;
    }
  }

  async getUsers(): Promise<User[]> {
    return this.performRequest('GET', 'users');
  }

  async getUser(userId: string): Promise<User> {
    return this.performRequest('GET', `users/${userId}`);
  }

  async createUser(formData: FormData): Promise<User> {
    return this.performRequest('POST', 'users', formData);
  }

  async updateUser(userId: string, formData: FormData): Promise<User> {
    return this.performRequest('PUT', `users/${userId}`, formData);
  }

  async deleteUser(userId: string): Promise<any> {
    return this.performRequest<any>('DELETE', 'users/' + userId);
  }
}

export default UserApi;