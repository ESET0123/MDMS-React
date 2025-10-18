import React from 'react'

export default function Datetypebutton() {
    return (
        <div className="flex w-fit border rounded-3xl border-zinc-300 divide-x divide-zinc-300 overflow-hidden">
            <button id="week-btn" className="px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200">
                Day
            </button>
            <button id="month-btn" className="px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200">
                Week
            </button>
            <button id="year-btn" className="px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200">
                Month
            </button>
        </div>
    )
}
