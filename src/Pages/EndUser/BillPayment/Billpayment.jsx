import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";


export default function Billpayment() {
  const [selectedBill, setSelectedBill] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
      <p className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-100 transition-colors">My Bills</p>
      
      {/* Bills Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-zinc-200 dark:border-gray-600 overflow-hidden mb-6 transition-colors">
        <div className="grid grid-cols-5 bg-zinc-100 dark:bg-gray-700 border-b border-zinc-200 dark:border-gray-600 font-medium transition-colors">
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600 text-sm text-zinc-600 dark:text-zinc-100 transition-colors">Month</div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600 text-sm text-zinc-600 dark:text-zinc-100 transition-colors">Total Amount</div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600 text-sm text-zinc-600 dark:text-zinc-100 transition-colors">Due Date</div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600 text-sm text-zinc-600 dark:text-zinc-100 transition-colors">Status</div>
          <div className="p-4 text-sm text-zinc-600 dark:text-zinc-100 transition-colors">Actions</div>
        </div>
        {currentItems.map((bill) => (
          <div key={bill.id} className="grid grid-cols-5 border-b border-zinc-200 dark:border-gray-600 last:border-b-0 hover:bg-zinc-50 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200">
            <div className="p-4 border-r border-zinc-200 dark:border-gray-600 transition-colors">{bill.month}</div>
            <div className="p-4 border-r border-zinc-200 dark:border-gray-600 transition-colors">₹{bill.totalAmount}</div>
            <div className="p-4 border-r border-zinc-200 dark:border-gray-600 transition-colors">{bill.dueDate}</div>
            <div className="p-4 border-r border-zinc-200 dark:border-gray-600 transition-colors">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                bill.status === 'Pending' 
                  ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' 
                  : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              }`}>
                {bill.status}
              </span>
            </div>
            <div className="p-4">
              <button
                onClick={() => handleView(bill)}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                View
              </button>
              <span className="mx-2 text-zinc-400 dark:text-zinc-500">/</span>
              <button
                onClick={() => handlePay(bill)}
                className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
              >
                Pay
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors">
        <span className="font-bold">Note: </span>
        All bills are generated on the 1st of each month.
      </p>
    </div>
  );
}

function BillDetailsPage({ bill, onBack }) {
  return (
    <div className="max-w-4xl ">
      <button
        onClick={onBack}
        className="flex items-center  text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 mb-4 transition-colors"
      >
        <span className=" mr-2"><FaArrowLeft /></span>
        <span>Bill Details – {bill.month}</span>
      </button>

      {/* Bill Summary Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-zinc-200 dark:border-gray-600 overflow-hidden mb-6 transition-colors">
        <div className="grid grid-cols-4 bg-zinc-100 dark:bg-gray-700 border-b border-zinc-200 dark:border-gray-600 transition-colors">
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">Month</div>
          </div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">Total Amount</div>
          </div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">Due Date</div>
          </div>
          <div className="p-4">
            <div className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">Status</div>
          </div>
        </div>
        <div className="grid grid-cols-4 text-gray-800 dark:text-gray-200 transition-colors">
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="font-medium">{bill.month}</div>
          </div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="font-medium">₹{bill.totalAmount}</div>
          </div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="font-medium">{bill.dueDate}</div>
          </div>
          <div className="p-4">
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              bill.status === 'Pending' 
                ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' 
                : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
            }`}>
              {bill.status}
            </span>
          </div>
        </div>
      </div>

      {/* Usage Details Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-zinc-200 dark:border-gray-600 overflow-hidden transition-colors">
        <div className="p-4 bg-zinc-100 dark:bg-gray-700 border-b border-zinc-200 dark:border-gray-600 transition-colors">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 transition-colors">Usage Details</h3>
        </div>
        <div className="grid grid-cols-4 bg-zinc-50 dark:bg-gray-700 border-b border-zinc-200 dark:border-gray-600 font-medium transition-colors">
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">Date</div>
          </div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">Reading</div>
          </div>
          <div className="p-4 border-r border-zinc-200 dark:border-gray-600">
            <div className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">Consumption</div>
          </div>
          <div className="p-4">
            <div className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">Cost</div>
          </div>
        </div>
        {bill.usageDetails.map((detail, index) => (
          <div key={index} className="grid grid-cols-4 border-b border-zinc-200 dark:border-gray-600 last:border-b-0 text-gray-800 dark:text-gray-200 transition-colors">
            <div className="p-4 border-r border-zinc-200 dark:border-gray-600">{detail.date}</div>
            <div className="p-4 border-r border-zinc-200 dark:border-gray-600">{detail.reading}</div>
            <div className="p-4 border-r border-zinc-200 dark:border-gray-600">{detail.consumption}</div>
            <div className="p-4 font-medium">₹{detail.cost}</div>
          </div>
        ))}
        {bill.usageDetails.length === 0 && (
          <div className="p-8 text-center text-zinc-500 dark:text-zinc-400 transition-colors">
            No usage details available
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
          Download Invoice
        </button>
        {bill.status === 'Pending' && (
          <button className="px-6 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors">
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
}