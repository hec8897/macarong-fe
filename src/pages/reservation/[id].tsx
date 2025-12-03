import { ReservationRequest } from '@/components/pages/ReservationRequest';
import { Layout } from '@/components/templates';
import { useRouter } from 'next/router';

export default function ReservationRequestPage() {
  const { query } = useRouter();
  const reservationId = query.id as string;
  return (
    <Layout>
      <ReservationRequest reservationId={reservationId as string} />
    </Layout>
  );
}
