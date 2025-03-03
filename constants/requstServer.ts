/**
 * API Client for handling HTTP requests with Axios
 * - Automatically attaches auth token from AsyncStorage
 * - Handles 401 Unauthorized responses by prompting re-login
 *
 * Example Usage:
 *
 * import apiClient from './apiClient';
 *
 * async function fetchData() {
 *   const response = await apiClient.get('/endpoint');
 *   if (response.status) {
 *     console.log(response.data);
 *   } else {
 *     console.error('Error:', response.data);
 *   }
 * }
 */

import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {baseUrl} from './api.constents';

const navigation = useNavigation();

type ApiResponse<T = any> = {
  status: boolean | number;
  statusCode?: number;
  data: T;
};

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach Token to Requests
axiosInstance.interceptors.request.use(
  async (config: any) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('Error fetching token:', error);
      return config;
    }
  },
  error => Promise.reject(error),
);

// Response Interceptor: Handle Unauthorized Requests
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async error => {
    if (error.response?.status === 401) {
      Alert.alert('Session Expired', 'Please login again.', [
        {
          text: 'OK',
          onPress: async () => {
            await AsyncStorage.removeItem('token');
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'login'}],
              }),
            );
          },
        },
      ]);
    }
    return Promise.reject(error);
  },
);

// API Methods
const apiClient = {
  get: async <T = any>(
    url: string,
    params?: object,
    config: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await axiosInstance.get<T>(url, {params, ...config});
      return {status: response.status, data: response.data};
    } catch (error) {
      return handleError(error);
    }
  },

  post: async <T = any>(
    url: string,
    data?: object,
    config: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await axiosInstance.post<T>(url, data, {...config});
      return {status: response.status, data: response.data};
    } catch (error) {
      return handleError(error);
    }
  },

  put: async <T = any>(
    url: string,
    data?: object,
    config: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await axiosInstance.put<T>(url, data, {...config});
      return {status: response.status, data: response.data};
    } catch (error) {
      return handleError(error);
    }
  },

  delete: async <T = any>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await axiosInstance.delete<T>(url, {...config});
      return {status: response.status, data: response.data};
    } catch (error) {
      return handleError(error);
    }
  },

  patch: async <T = any>(
    url: string,
    data?: object,
    config: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await axiosInstance.patch<T>(url, data, {...config});
      return {status: response.status, data: response.data};
    } catch (error) {
      return handleError(error);
    }
  },
};

const handleError = (error: any): ApiResponse => {
  console.error('API Error:', error);
  return {
    status: false,
    statusCode: error.response?.status || 500,
    data: error.response?.data || 'An error occurred',
  };
};

export default apiClient;
