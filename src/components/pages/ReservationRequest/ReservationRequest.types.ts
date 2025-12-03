import { Reservation } from '@/types';

export interface ReservationRequestProps {
  reservationId?: string;
}

export interface ReservationDetailProps {
  reservation: Reservation;
  onApprove: () => void;
  onReject: () => void;
}
