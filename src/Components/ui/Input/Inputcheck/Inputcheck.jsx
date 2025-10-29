import React from 'react';

export default function Inputcheck({ name, title, isChecked, onChangeFunc }) {
  return (
    <div className='justify-self-start items-center flex'>
      <input className='m-2' type="checkbox" name={name} checked={isChecked} onChange={onChangeFunc} />
      {title && <p className='text-xl'>{title}</p>}
    </div>
  );
}
