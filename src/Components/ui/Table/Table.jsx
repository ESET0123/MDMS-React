import React from 'react';

const Table = ({ data, actionsColumn }) => {
  if (!data || data.length === 0) {
    return <p className="text-zinc-500 dark:text-zinc-400 text-center py-4">No data to display.</p>;
  }

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="overflow-x-auto">
      <div className="rounded-lg overflow-hidden border border-zinc-900 dark:border-zinc-700">
        <table className="min-w-full border-collapse">
          <thead className="bg-zinc-50 dark:bg-zinc-800">
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope="col"
                  className="border-b border-r border-zinc-800 dark:border-zinc-700 px-6 py-3 font-extrabold uppercase text-left text-xs text-zinc-900 dark:text-zinc-300 tracking-wider">
                  {column}
                </th>
              ))}
              {actionsColumn && (
                <th scope="col" className="border-b border-zinc-800 dark:border-zinc-700 px-6 py-3 text-left font-extrabold uppercase text-xs text-zinc-900 dark:text-zinc-300 tracking-wider">
                  {actionsColumn.title}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-zinc-900">
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="border-b border-r border-zinc-800 dark:border-zinc-700 px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-white">
                    {item[column]}
                  </td>
                ))}
                {actionsColumn && (
                  <td className="border-b border-zinc-800 dark:border-zinc-700 px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-white space-x-2">
                    {actionsColumn.render(item)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
