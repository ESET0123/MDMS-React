import React from 'react';

export default function DateTypeButton({buttons, selected, onSelect }) {
//   const buttons = ['Day', 'Week', 'Month'];
  
  return (
    <div className="flex w-fit border rounded-3xl border-zinc-300 divide-x divide-zinc-300 overflow-hidden">
      {buttons.map((label) => (
        <button
          key={label}
          onClick={() => onSelect(label.toLowerCase())}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            selected === label.toLowerCase()
              ? 'bg-purple-100 text-zinc-800'
              : 'text-zinc-900 hover:bg-zinc-800'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}