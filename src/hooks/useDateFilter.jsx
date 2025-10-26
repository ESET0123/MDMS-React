import { useState, useMemo } from 'react';

export default function useDateFilter(data, dateKey = 'date', initialRange = 'Day') {
  const [selectedRange, setSelectedRange] = useState(initialRange);

  const filteredData = useMemo(() => {
    const now = new Date();
    const filtered = data.filter((item) => {
      const itemDate = new Date(item[dateKey]);
      const diffTime = now - itemDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      switch (selectedRange) {
        case 'Day':
          return diffDays <= 1;
        case 'Week':
          return diffDays <= 7;
        case 'Month':
          return diffDays <= 30;
        default:
          return true;
      }
    });
    return filtered;
  }, [data, dateKey, selectedRange]);

  return { filteredData, selectedRange, setSelectedRange };
}
