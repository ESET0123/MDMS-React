import React, { useState, useRef } from 'react';
import { FaRegUser } from "react-icons/fa";
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton';
import Labelinputtext from '../../ui/Input/Labelinputtext/Labelinputtext';
import { MdModeEdit } from "react-icons/md";

export default function Profiletab() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [profilePicture, setProfilePicture] = useState(null); 
  const fileInputRef = useRef(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file); 
      console.log('Selected file:', file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileData);
    console.log('Submitted profile picture:', profilePicture);
  };

  return (
    <div className='m-5 w-2/3 p-4 justify-self-center'>
        <form className='p-4' onSubmit={handleSubmit}>
          <div className='relative w-fit justify-self-center p-5 bg-zinc-800 rounded-full'>
            <FaRegUser color='white' size='5rem'/>
            <div className='absolute top-0 right-0 p-1 bg-gray-50 rounded-full cursor-pointer' onClick={handleIconClick} >
                <MdModeEdit color='black' size='1.5rem' />
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />
          </div>
          <div className='w-2/4 justify-self-center'>
            <Labelinputtext placeholder="Name" name="name" type="text" value={profileData.name} onChange={handleChange} />
            <Labelinputtext placeholder="Email" name="email" type="email" value={profileData.email} onChange={handleChange} />
            <Labelinputtext placeholder="Mobile no." name="mobile" type="tel" value={profileData.mobile} onChange={handleChange} />
            <Submitbutton title="Save and continue" />
          </div>
        </form>
    </div>
  );
}
