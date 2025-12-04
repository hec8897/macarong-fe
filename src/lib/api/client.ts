/**
 * API 클라이언트
 * Axios를 사용한 HTTP 클라이언트
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { API_BASE_URL } from '@/constants/api';

// Axios 인스턴스 생성
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30초
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 여기서 토큰 등을 추가할 수 있습니다
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    // 204 No Content 응답을 에러로 처리
    if (response.status === 204) {
      const error = new Error('데이터가 없습니다.');
      // AxiosError 형태로 변환
      return Promise.reject({
        ...error,
        response: {
          ...response,
          status: 204,
          statusText: 'No Content',
        },
        isAxiosError: true,
      });
    }
    return response;
  },
  (error: AxiosError) => {
    // 에러 처리
    if (error.response) {
      // 서버가 응답을 반환한 경우
      const message = (error.response.data as { message?: string })?.message || error.message;
      throw new Error(message);
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못한 경우
      throw new Error('서버로부터 응답이 없습니다.');
    } else {
      // 요청 설정 중 에러가 발생한 경우
      throw new Error(error.message);
    }
  }
);

// API 클라이언트 객체
export const apiClient = {
  // GET 요청
  get: async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.get<T>(endpoint, config);
    return response.data;
  },
};

// axios 인스턴스를 직접 사용해야 하는 경우를 위해 export
export { axiosInstance };
