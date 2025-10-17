import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import ThemeToggleButton from '../../ui/Button/ThemeToggleButton/Themetogglebutton';

export default function Header() {
  const location = useLocation();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  
  const isLoginPage = location.pathname === '/login' || location.pathname === '/forgotpwd' || location.pathname === '/resetpwd';
  const iconColor = isDarkMode ? 'white' : 'black';

  return (
    <div>
      <div className="flex p-4 justify-between items-center bg-gray-300 dark:bg-gray-800 transition-colors duration-300">
        <div>
          <p className="font-bold text-2xl text-gray-900 dark:text-white">MDMS</p>
        </div>
        <div className='flex items-center'>
          {!isLoginPage && (
          <div className='mx-2'>
            <IoMdNotificationsOutline color={iconColor} size='2rem' />
          </div>
          )}
          <div className='mx-2'>
            <ThemeToggleButton />
          </div>
          <div className="mx-2 grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="lang"
              name="lang"
              aria-label="lang"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-300 dark:bg-gray-700 py-1.5 pr-7 pl-3 text-base text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none  sm:text-sm/6"
            >
              <option>en</option>
              <option>hi</option>
              <option>fr</option>
            </select>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 dark:text-gray-400 sm:size-4"
            >
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </div>
          {!isLoginPage && (
           <div className='rounded-full p-2 mx-2 bg-white dark:bg-gray-700'>
          <CiUser color={iconColor} size='2rem'/>
          </div>
          )}
         
        </div>
      </div>
    </div>
  );
}


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { CiUser } from "react-icons/ci";
// import ThemeToggleButton from '../../ui/Button/ThemeToggleButton/Themetogglebutton';

// export default function Header() {
//   const location = useLocation();
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  
//   const isLoginPage = location.pathname === '/login' || location.pathname === '/forgotpwd' || location.pathname === '/resetpwd';
//   const iconColor = isDarkMode ? 'white' : 'red';

//   return (
//     <div>
//       <div className="flex p-4 justify-between items-center bg-secondary text-primary transition-colors duration-300">
//         <div>
//           <p className="font-bold text-2xl">MDMS</p>
//         </div>
//         <div className='flex items-center'>
//           {!isLoginPage && (
//           <div className='mx-2'>
//             <IoMdNotificationsOutline size='2rem' />
//           </div>
//           )}
//           <div className='mx-2'>
//             <ThemeToggleButton />
//           </div>
//           <div className="mx-2 grid shrink-0 grid-cols-1 focus-within:relative">
//             <select
//               id="lang"
//               name="lang"
//               aria-label="lang"
//               className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-secondary text-primary border-border py-1.5 pr-7 pl-3 text-base placeholder-secondary focus:outline-none sm:text-sm/6"
//             >
//               <option>en</option>
//               <option>hi</option>
//               <option>fr</option>
//             </select>
//             <svg
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               data-slot="icon"
//               aria-hidden="true"
//               className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-secondary sm:size-4"
//             >
//               <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
//             </svg>
//           </div>
//           {!isLoginPage && (
//            <div className='rounded-full p-2 mx-2 bg-white dark:bg-gray-700'>
//           <CiUser color={iconColor} size='2rem'/>
//           </div>
//           )}
         
//         </div>
//       </div>
//     </div>
//   );
// }