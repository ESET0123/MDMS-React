import { useState } from 'react';

export default function Inputrange({ title, minvalue, maxvalue }) {
  const [value, setValue] = useState(0);
  const min = minvalue;
  const max = maxvalue;

  const percentage = ((value - min) / (max - min)) * 100;

  const ticks = [];
  const tickCount = 10;
  for (let i = 0; i <= tickCount; i++) {
    const tickValue = (max / tickCount) * i;
    ticks.push(tickValue);
  }

  return (
    <div className="w-full m-4 max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors">
      <h3 className="text-gray-800 dark:text-gray-100 text-sm font-normal mb-6 transition-colors">
        {title}
      </h3>

      <div className="relative">
        <div className="relative pt-2 px-4 pb-2">
          <div className="absolute h-6 rounded-full bg-white dark:bg-gray-700 px-2 top-1/2 left-0 right-0 -translate-y-1/2 transition-colors">
            <div
              className="absolute h-6 bg-purple-800 dark:bg-purple-600 rounded-l-full left-0 transition-colors"
              style={{ width: `${percentage}%` }}
            />
            <div
              className="absolute h-6 bg-purple-200 dark:bg-purple-900 rounded-r-full right-0 transition-colors"
              style={{ width: `${100 - percentage}%` }}
            />
          </div>

          {/* Tick marks on top of track */}
          <div className="relative">
            {ticks.map((tick, index) => {
              const tickPercentage = (tick / max) * 100;
              const isPassed = tick <= value;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{ left: `${tickPercentage}%` }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isPassed 
                      ? 'bg-white dark:bg-gray-700' 
                      : 'bg-purple-800 dark:bg-purple-400'
                  }`} />
                </div>
              );
            })}
          </div>

          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute w-full top-1/2 -translate-y-1/2 opacity-0 cursor-pointer z-10"
          />

          {/* Slider thumb - vertical line */}
          <div
            className="absolute top-1/2 w-1.5 h-8 border-2 rounded-xl border-white dark:border-gray-600 bg-purple-700 dark:bg-purple-500 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors"
            style={{ left: `${percentage}%` }}
          />
        </div>

        <div className="flex justify-between mt-1 px-1">
          <span className="text-xs font-bold text-gray-800 dark:text-gray-100 transition-colors">{min}</span>
          <span className="text-xs font-bold text-gray-800 dark:text-gray-100 transition-colors">{max}</span>
        </div>
      </div>

      {/* Display current value */}
      <div className="mt-4 text-center">
        <span className="text-lg font-bold text-purple-700 dark:text-purple-400 transition-colors">
          Current Value: {value}
        </span>
      </div>
    </div>
  );
}