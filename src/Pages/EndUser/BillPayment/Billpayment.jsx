// import React, { useEffect, useState } from 'react'
// import { usePagination } from '../../../hooks/usePagination';
// import Table from '../../../Components/ui/Table/Table';
// import Pagination from '../../../Components/ui/Pagination/Pagination';
import React, { useState } from 'react';

export default function Billpayment() {
  const [selectedBill, setSelectedBill] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  //   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/bill_payments')
//       .then(res => res.json())
//       .then(data => setTableData(data))
//       .catch(err => console.log(err));  //add error page
//   }, []);
  
  const tableData = [
    {
      id: 1,
      month: 'September 2025',
      totalAmount: 7230,
      dueDate: '12 Oct 2025',
      status: 'Pending',
      usageDetails: [
        { date: '01 Sep 2025', reading: '25 kWh', consumption: '25kWh', cost: 7120 }
      ]
    },
    {
      id: 2,
      month: 'August 2025',
      totalAmount: 6890,
      dueDate: '12 Sep 2025',
      status: 'Paid',
      usageDetails: [
        { date: '01 Aug 2025', reading: '23 kWh', consumption: '23kWh', cost: 6890 }
      ]
    },
    {
      id: 3,
      month: 'July 2025',
      totalAmount: 7100,
      dueDate: '12 Aug 2025',
      status: 'Paid',
      usageDetails: [
        { date: '01 Jul 2025', reading: '24 kWh', consumption: '24kWh', cost: 7100 }
      ]
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = tableData.slice(startIndex, startIndex + itemsPerPage);

  const handleView = (bill) => {
    setSelectedBill(bill);
  };

  const handleBack = () => {
    setSelectedBill(null);
  };

  const handlePay = (bill) => {
    alert(`Paying bill for: ${bill.month}`);
  };

  if (selectedBill) {
    return <BillDetailsPage bill={selectedBill} onBack={handleBack} />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <p className="font-bold text-xl mb-4">My Bills</p>
      
      {/* Bills Table */}
      <div className="bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden mb-6">
        <div className="grid grid-cols-5 bg-zinc-100 border-b border-zinc-200 font-medium">
          <div className="p-4 border-r border-zinc-200 text-sm text-zinc-600">Month</div>
          <div className="p-4 border-r border-zinc-200 text-sm text-zinc-600">Total Amount</div>
          <div className="p-4 border-r border-zinc-200 text-sm text-zinc-600">Due Date</div>
          <div className="p-4 border-r border-zinc-200 text-sm text-zinc-600">Status</div>
          <div className="p-4 text-sm text-zinc-600">Actions</div>
        </div>
        {currentItems.map((bill) => (
          <div key={bill.id} className="grid grid-cols-5 border-b border-zinc-200 last:border-b-0 hover:bg-zinc-50">
            <div className="p-4 border-r border-zinc-200">{bill.month}</div>
            <div className="p-4 border-r border-zinc-200">₹{bill.totalAmount}</div>
            <div className="p-4 border-r border-zinc-200">{bill.dueDate}</div>
            <div className="p-4 border-r border-zinc-200">{bill.status}</div>
            <div className="p-4">
              <button
                onClick={() => handleView(bill)}
                className=" "
              >
                View
              </button>
              <span className="mx-2 text-zinc-400">/</span>
              <button
                onClick={() => handlePay(bill)}
                className=""
              >
                Pay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center items-center gap-2 mb-6">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-zinc-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-zinc-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-50"
        >
          Next
        </button>
      </div> */}

      <p className="text-sm text-zinc-600">
        <span className="font-bold">Note: </span>
        All bills are generated on the 1st of each month.
      </p>
    </div>
  );
}

function BillDetailsPage({ bill, onBack }) {
  return (
    <div className="max-w-4xl mx-auto l-0">
      <button
        onClick={onBack}
        className="flex items-center text-zinc-600 hover:text-zinc-900 mb-4 transition-colors"
      >
        <span className="text-xl mr-2">←</span>
        <span>Bill Details – {bill.month}</span>
      </button>

      <div className="bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden mb-6">
        <div className="grid grid-cols-4 bg-zinc-100 border-b border-zinc-200">
          <div className="p-4 border-r border-zinc-200">
            <div className="text-sm text-zinc-600">Month</div>
          </div>
          <div className="p-4 border-r border-zinc-200">
            <div className="text-sm text-zinc-600">Total Amount</div>
          </div>
          <div className="p-4 border-r border-zinc-200">
            <div className="text-sm text-zinc-600">Due Date</div>
          </div>
          <div className="p-4">
            <div className="text-sm text-zinc-600">Status</div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="p-4 border-r border-zinc-200">
            <div className="font-medium">{bill.month}</div>
          </div>
          <div className="p-4 border-r border-zinc-200">
            <div className="font-medium">₹{bill.totalAmount}</div>
          </div>
          <div className="p-4 border-r border-zinc-200">
            <div className="font-medium">{bill.dueDate}</div>
          </div>
          <div className="p-4">{bill.status}</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden">
        <div className="grid grid-cols-4 bg-zinc-100 border-b border-zinc-200 font-medium">
          <div className="p-4 border-r border-zinc-200">
            <div className="text-sm text-zinc-600">Date</div>
          </div>
          <div className="p-4 border-r border-zinc-200">
            <div className="text-sm text-zinc-600">Reading</div>
          </div>
          <div className="p-4 border-r border-zinc-200">
            <div className="text-sm text-zinc-600">Consumption</div>
          </div>
          <div className="p-4">
            <div className="text-sm text-zinc-600">Cost</div>
          </div>
        </div>
        {bill.usageDetails.map((detail, index) => (
          <div key={index} className="grid grid-cols-4 border-b border-zinc-200 last:border-b-0">
            <div className="p-4 border-r border-zinc-200">{detail.date}</div>
            <div className="p-4 border-r border-zinc-200">{detail.reading}</div>
            <div className="p-4 border-r border-zinc-200">{detail.consumption}</div>
            <div className="p-4">₹{detail.cost}</div>
          </div>
        ))}
        {bill.usageDetails.length === 0 && (
          <div className="p-8 text-center text-zinc-500">
            No usage details available
          </div>
        )}
      </div>
    </div>
  );
}