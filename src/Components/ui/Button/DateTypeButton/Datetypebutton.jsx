import React from 'react'

export default function Datetypebutton() {
    return (
        <div className="flex w-fit rounded-lg border border-gray-300 divide-x divide-gray-300 overflow-hidden">
            <button id="week-btn" className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
                Day
            </button>
            <button id="month-btn" className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
                Week
            </button>
            <button id="year-btn" className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
                Month
            </button>
        </div>
    )
}
