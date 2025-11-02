import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../../../redux/slices/theme/themeSlice';
import ToggleButton from '../ToggleButton/ToggleButton'

export default function ThemeToggleButton() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <ToggleButton isChecked={isDarkMode} onToggle={handleToggle} />
  );
}
