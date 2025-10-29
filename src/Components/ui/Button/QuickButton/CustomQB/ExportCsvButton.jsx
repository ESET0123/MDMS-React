import React from 'react';
import { CSVLink } from 'react-csv';
import { MdOutlineFileUpload } from 'react-icons/md';

const ExportCsvButton = ({ data, filename, headers }) => {
  return (
    <CSVLink
      data={data}
      filename={filename}
      headers={headers}
      className="px-4 py-2 flex items-center border border-zinc-300 rounded-xl w-fit mr-4 my-4 hover:bg-zinc-100 transition-colors"
    >
      <div className='flex items-center'>
        <MdOutlineFileUpload />
        <p className='ml-2'>Export as CSV</p>
      </div>
    </CSVLink>
  );
};

export default ExportCsvButton;
