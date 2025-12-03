import React from 'react';

import type { ReservationRequestProps } from './ReservationRequest.types';

export const ReservationRequest: React.FC<ReservationRequestProps> = ({ reservationId }) => {
  return <div>{reservationId}</div>;
};
