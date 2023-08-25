import React, { useState } from 'react';

function Date1() {
  const [startDate, setStartDate] = useState(new Date()); 
  const [endDate, setEndDate] = useState(new Date('2023-10-15'));

  const calculateDaysDifference = () => {
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };

  return (
    <div>
{calculateDaysDifference()}
    </div>
  );
}

export default Date1;
