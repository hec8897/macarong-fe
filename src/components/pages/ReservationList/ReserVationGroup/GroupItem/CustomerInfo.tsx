import React from 'react';
import { Flex, Tag } from '@/components/atoms';

import classNames from 'classnames';
import { useCustomer } from '@/hooks';
import { formatPhone } from '@/lib/utils/formatPhone';

import styles from './GroupItem.module.scss';

interface CustomerInfoProps {
  customerId: number;
  requirements: string;
  disabled?: boolean;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ customerId, requirements, disabled }) => {
  const { data: customer } = useCustomer(customerId);
  return (
    <Flex direction="col" gap={8} className="w-full">
      <Flex justify="between" align="center" className="mb-2 w-full">
        <h3 className={classNames(styles.customer_vehicle, { [styles.__disabled]: disabled })}>
          {customer?.vehicle.number} {customer?.vehicle.model}
        </h3>
        <Tag
          className={classNames({ 'text-disabled': disabled })}
          variant={disabled ? 'outline' : 'accent'}
        >
          {customer?.visitCount ? `${customer?.visitCount} 회 방문` : '신규 고객'}
        </Tag>
      </Flex>
      <div className={classNames(styles.customer_requirement, { [styles.__disabled]: disabled })}>
        <Flex as={'p'} justify="between" align="center" className={styles.head}>
          <span>{customer?.name}</span>
          <span>{formatPhone(customer?.phone || '')}</span>
        </Flex>
        {requirements && <p className={styles.body}>{requirements}</p>}
      </div>
    </Flex>
  );
};

export default CustomerInfo;
