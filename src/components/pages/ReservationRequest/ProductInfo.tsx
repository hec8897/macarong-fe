import React from 'react';
import { Flex } from '@/components/atoms';
import { IconLabel } from '@/components/molecules';

import { Product } from '@/types';

interface ProductInfoProps {
  products: Product[];
  requirements: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ products, requirements }) => {
  return (
    <div className="bg-white py-8 px-5">
      <Flex direction="col" gap={12}>
        {products.length > 0 && (
          <div>
            <h2 className="text-heading-3-bold font-bold">{products[0].group}</h2>
            <p className="text-title-medium-1 text-secondary">{products[0].name}</p>
          </div>
        )}
        {products.length > 1 && (
          <Flex direction="col" gap={4}>
            {products.slice(1).map((product, index) => (
              <IconLabel variant="plusCircle" key={index}>
                {product.name}
              </IconLabel>
            ))}
          </Flex>
        )}
      </Flex>
      {requirements && (
        <div className="border rounded-[10px] p-3 mt-4">
          <h4 className="text-title-2-medium text-tertiary mb-1">요청사항</h4>
          <p className="text-title-2-medium text-secondary">{requirements}</p>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
