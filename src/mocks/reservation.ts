import { Reservation, ReservationListResponse } from '@/types';

/**
 * 예약 더미 데이터
 */

export const mockReservations: Reservation[] = [
  {
    serverId: 35,
    customerId: 464,
    status: 'CREATED',
    reservedAt: '2024-07-14T09:00:00',
    requirements: '',
    products: [
      {
        group: '엔진오일 교체',
        name: '쉘 힐릭스 울트라 5W-40',
        price: 105000,
        quantity: 1,
      },
      {
        group: '배터리 교체',
        name: '델코 AGM70L',
        price: 190000,
        quantity: 1,
      },
      {
        group: '와이퍼 교체',
        name: 'PIAA 실리콘 와이퍼 600mm',
        price: 40000,
        quantity: 1,
      },
    ],
    paymentMethod: 'VBANK',
  },
  {
    serverId: 36,
    customerId: 465,
    status: 'DEFERRED',
    reservedAt: '2024-07-15T10:30:00',
    requirements: '차량 번호: 12가 3456',
    products: [
      {
        group: '타이어 교체',
        name: '넥센 엔페라 RU1 235/60R18',
        price: 450000,
        quantity: 4,
      },
    ],
    paymentMethod: 'CARD',
  },
  {
    serverId: 37,
    customerId: 466,
    status: 'CREATED',
    reservedAt: '2024-07-15T14:00:00',
    requirements: '오전 중 연락 부탁드립니다',
    products: [
      {
        group: '엔진오일 교체',
        name: '캐스트롤 GTX 5W-30',
        price: 85000,
        quantity: 1,
      },
      {
        group: '에어컨 필터 교체',
        name: '순정 에어컨 필터',
        price: 25000,
        quantity: 1,
      },
    ],
    paymentMethod: 'CASH',
  },
  {
    serverId: 38,
    customerId: 467,
    status: 'CANCELLED',
    reservedAt: '2024-07-16T11:00:00',
    requirements: '',
    products: [
      {
        group: '브레이크 패드 교체',
        name: '현대 모비스 순정 브레이크 패드',
        price: 120000,
        quantity: 1,
      },
    ],
    paymentMethod: 'VBANK',
  },
  {
    serverId: 39,
    customerId: 468,
    status: 'CREATED',
    reservedAt: '2024-07-16T15:30:00',
    requirements: '픽업 서비스 필요합니다',
    products: [
      {
        group: '엔진오일 교체',
        name: '모빌1 0W-40',
        price: 135000,
        quantity: 1,
      },
      {
        group: '미션오일 교체',
        name: 'ATF 순정 미션오일',
        price: 95000,
        quantity: 1,
      },
      {
        group: '와이퍼 교체',
        name: '보쉬 에어로트윈 550mm',
        price: 35000,
        quantity: 2,
      },
    ],
    paymentMethod: 'TRANSFER',
  },
  {
    serverId: 40,
    customerId: 469,
    status: 'DEFERRED',
    reservedAt: '2024-07-17T09:30:00',
    requirements: '사전 견적 확인 후 연락드리겠습니다',
    products: [
      {
        group: '배터리 교체',
        name: '로케트 MF80L',
        price: 165000,
        quantity: 1,
      },
    ],
    paymentMethod: 'CARD',
  },
];

/**
 * 페이지네이션이 포함된 예약 리스트 응답 더미 데이터
 */
export const mockReservationListResponse: ReservationListResponse = {
  data: mockReservations,
  totalPages: 9,
  hasPrevious: false,
  hasNext: true,
};

/**
 * 페이지별 예약 리스트 응답 생성 함수
 */
export const getMockReservationListResponse = (
  page: number = 1,
  pageSize: number = 10
): ReservationListResponse => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const totalPages = Math.ceil(mockReservations.length / pageSize);

  return {
    data: mockReservations.slice(start, end),
    totalPages,
    hasPrevious: page > 1,
    hasNext: page < totalPages,
  };
};
