import React from 'react';
import { useTranslation } from 'react-i18next';

const Languagedropdown = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="mx-2 grid shrink-0 grid-cols-1 focus-within:relative">
      <select
        id="lang"
        name="lang"
        aria-label="lang"
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-zinc-300 dark:bg-zinc-700 py-1.5 pr-7 pl-3 text-base text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none sm:text-sm/6"
        onChange={handleLanguageChange}
        value={i18n.language}
      >
        <option value="en">en</option>
        <option value="hi">hi</option>
        <option value="fr">fr</option>
      </select>
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        data-slot="icon"
        aria-hidden="true"
        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-zinc-500 dark:text-zinc-400 sm:size-4"
      >
        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
      </svg>
    </div>
  );
};

export default Languagedropdown;
