/**
 * 고객 관련 React Query Hooks
 */

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getCustomerDetail } from '@/lib/api/customer';

/**
 * 고객 상세 정보 조회 훅
 */
export const useCustomer = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.CUSTOMERS.DETAIL(id),
    queryFn: () => getCustomerDetail(id),
    enabled: !!id, // id가 있을 때만 실행
  });
};
