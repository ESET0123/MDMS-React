// NotFound404.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound404() {
  return (
    <div className="flex items-center justify-center h-full dark:bg-gray-900 text-center px-4">
      <h1 className="text-5xl font-bold uppercase text-zinc-900 dark:text-white">404 NOT FOUND</h1>
    </div>
  );
}
