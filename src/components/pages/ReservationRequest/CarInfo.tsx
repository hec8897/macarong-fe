import React from 'react';
import { Flex } from '@/components/atoms';
import { Vehicle } from '@/types';
import { FUEL_TYPE_LABELS } from '@/constants';

interface CarInfoProps {
  vehicle: Vehicle;
}

const CarInfo: React.FC<CarInfoProps> = ({ vehicle }) => {
  const { brand, model, number, fuelType } = vehicle;
  const carInfo = [brand, model, FUEL_TYPE_LABELS[fuelType]];
  return (
    <div>
      <h3 className="text-heading-4-semibold mb-3">차량 정보</h3>
      <Flex direction="col" gap={6}>
        <Flex className="w-full" justify="between" align="center">
          <p className="text-title-1-medium text-tertiary">차량 정보</p>
          <Flex as="p" gap={6} className="text-title-1-semibold text-secondary">
            {carInfo.map((info, idx) =>
              idx < carInfo.length - 1 ? (
                <React.Fragment key={info}>
                  {info}
                  <span className="text-disabled"> · </span>
                </React.Fragment>
              ) : (
                info
              )
            )}
          </Flex>
        </Flex>
        <Flex className="w-full" justify="between" align="center">
          <p className="text-title-1-medium text-tertiary">차량 번호</p>
          <p className="text-title-1-medium text-secondary">{number}</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default CarInfo;
