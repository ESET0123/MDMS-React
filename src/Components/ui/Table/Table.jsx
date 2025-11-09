import React from 'react';

const Table = ({ data, actionsColumn }) => {
  if (!data || data.length === 0) {
    return <p className="text-zinc-500 dark:text-zinc-400 text-center py-4">No data to display.</p>;
  }

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="overflow-x-auto">
      <div className="rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-700">
        <table className="min-w-full border-collapse">
          <thead className="bg-zinc-50 dark:bg-gray-800">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="border-b border-zinc-300 dark:border-zinc-700 px-6 py-3 font-extrabold uppercase text-left text-xs text-zinc-900 dark:text-zinc-300 tracking-wider first:border-l-0 border-l"
                >
                  {column}
                </th>
              ))}
              {actionsColumn && (
                <th
                  scope="col"
                  className="border-b border-l border-zinc-300 dark:border-zinc-600 px-6 py-3 text-left font-extrabold uppercase text-xs text-zinc-900 dark:text-zinc-300 tracking-wider"
                >
                  {actionsColumn.title}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-700 divide-y divide-zinc-300 dark:divide-zinc-600">
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-white first:border-l-0 border-l border-zinc-300 dark:border-zinc-600"
                  >
                    {item[column]}
                  </td>
                ))}
                {actionsColumn && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-white border-l border-zinc-300 dark:border-zinc-600 space-x-2">
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