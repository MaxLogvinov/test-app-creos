import React from 'react';
import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../servises/store';
import { toggleTheme } from '../../servises/slices/themeSlice';

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(toggleTheme());
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
      <Switch
        checked={theme === 'dark'}
        onChange={handleThemeChange}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </div>
  );
};

export default ThemeSwitcher;
