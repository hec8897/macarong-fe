import React from 'react';

import { Flex } from '@/components/atoms';
import { IconLabel } from '@/components/molecules';
import CustomerInfo from './CustomerInfo';

import classNames from 'classnames';
import type { Reservation } from '@/types';

import styles from './GroupItem.module.scss';

interface ReservationGroupProps {
  reservation: Reservation;
  customerId: number;
}

const GroupItem: React.FC<ReservationGroupProps> = ({
  reservation: { products, requirements, status },
  customerId,
}) => {
  const cancelled = status === 'CANCELLED';
  return (
    <Flex direction="col" gap={18} className={styles.group_item}>
      {cancelled && <div className={styles.cancelled}>취소된 예약</div>}
      <Flex direction="col" gap={8} className="w-full">
        <h2 className={classNames(styles.title, { [styles.__disabled]: cancelled })}>
          {products[0].name}
        </h2>
        {products.length > 1 && (
          <Flex direction="col" gap={4}>
            {products.slice(1).map((product, index) => (
              <IconLabel key={index} variant="plusCircle" disabled={cancelled}>
                {product.name}
              </IconLabel>
            ))}
          </Flex>
        )}
      </Flex>
      <div className="w-full divider"></div>
      <CustomerInfo customerId={customerId} requirements={requirements} disabled={cancelled} />
    </Flex>
  );
};

export default GroupItem;
