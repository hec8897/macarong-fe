import React from 'react';

import Header from './Header';
import type { ReservationRequestProps } from './ReservationRequest.types';

export const ReservationRequest: React.FC<ReservationRequestProps> = ({ reservationId }) => {
  return (
    <div className="bg-background-gray">
      <Header />
      {reservationId}
    </div>
  );
};
