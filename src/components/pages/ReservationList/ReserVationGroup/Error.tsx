import React, { memo } from 'react';

const Error: React.FC = memo(() => (
  <div className="w-full bg-background-gray min-h-screen pt-[100px]">
    <p className="text-body-1-regular text-center">예약 정보를 불러오는데 실패했습니다.</p>
  </div>
));

Error.displayName = 'Error';

export default Error;
