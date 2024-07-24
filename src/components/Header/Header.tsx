import './Header.scss';
import { useTranslation } from 'react-i18next';
import '../../utils/i18n';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { getCurrentWorkWeek } from '../../utils/getCurrentWorkWeek';

export default function Header() {
  const { t, i18n } = useTranslation();
  const currentWorkWeek = getCurrentWorkWeek();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="header">
        <h2>
          {t('wwn')}: {currentWorkWeek}
        </h2>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <h1>{t('welcome')}</h1>
        <ThemeSwitcher />
      </div>
    </>
  );
}
