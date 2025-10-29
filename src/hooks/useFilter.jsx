import { useState, useMemo } from 'react';

export function useFilter(data, columns = []) {
  const searchableColumns = useMemo(() => {
    if (columns.length > 0) return columns;

    if (!data || data.length === 0) return [];

    const firstItem = data[0];
    return Object.keys(firstItem).map(key => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
    }));
  }, [data, columns]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColumn, setSelectedColumn] = useState(searchableColumns[0]?.key || '');

  // Filter data based on search term and selected column
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    const lowerSearchTerm = searchTerm.toLowerCase();

    return data.filter(item => {
      if (selectedColumn === 'all') {
        return Object.values(item).some(value =>
          String(value).toLowerCase().includes(lowerSearchTerm)
        );
      } else {
        const value = item[selectedColumn];
        return value && String(value).toLowerCase().includes(lowerSearchTerm);
      }
    });
  }, [data, searchTerm, selectedColumn]);

  const resetSearch = () => {
    setSearchTerm('');
    setSelectedColumn(searchableColumns[0]?.key || '');
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedColumn,
    setSelectedColumn,
    filteredData,
    searchableColumns,
    resetSearch
  };
}
