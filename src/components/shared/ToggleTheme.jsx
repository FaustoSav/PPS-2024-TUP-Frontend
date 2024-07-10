import { useContext } from 'react';
import { ThemeIcon } from './ThemeIcon';
import { AuthContext } from '../../context/Auth/AuthContext';

export const ToggleTheme = ({ customClass }) => {
  const { setTheme, theme } = useContext(AuthContext);
  // const iconsOptions = [
  //   {
  //     icon: 'sun',
  //     text: 'light',
  //   },
  //   {
  //     icon: 'moon',
  //     text: 'dark',
  //   },
  // ];

  return (
    <div className={`toggle-theme__container  ${customClass}`}>
      {theme == 'dark' ? (
        <div
          onClick={() => setTheme('light')}
          className="theme-icon__container bg-rounded select-none"
        >
          {' '}
          {<ThemeIcon icon={'sun'} />}
        </div>
      ) : (
        <div
          onClick={() => setTheme('dark')}
          className="theme-icon__container bg-rounded select-none"
        >
          {' '}
          {<ThemeIcon icon={'moon'} />}
        </div>
      )}

      {/* {iconsOptions.map((opt) => {
          return (
            <div
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={` theme-icon__container  ${theme === opt.text && 'bg- rounded '} select-none`}
            >
              {' '}
              {<ThemeIcon icon={opt.icon} />}
            </div>
          )
        })} */}
    </div>
  );
};
