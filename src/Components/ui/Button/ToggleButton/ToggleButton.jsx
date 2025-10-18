
import React from 'react';

export default function ToggleButton({ isDarkMode, onToggle }) {
  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={isDarkMode} onChange={onToggle} className="sr-only peer"/>
          <div className="relative w-11 h-6 bg-zinc-200 peer-checked:bg-blue-900 peer-focus:outline-none  rounded-full peer dark:bg-zinc-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-zinc-500 after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600"></div>
      </label>
    </div>
  );
}
