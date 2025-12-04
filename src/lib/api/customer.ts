/**
 * 고객 관련 API
 */

import { apiClient } from './client';
import { API_ENDPOINTS } from '@/constants';
import type { Customer } from '@/types';

/**
 * 고객 상세 정보 조회
 */
export const getCustomerDetail = async (id: number): Promise<Customer> => {
  return apiClient.get<Customer>(API_ENDPOINTS.CUSTOMER_DETAIL(id));
};

