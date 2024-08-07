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
      <header className="header">
        <p>
          {t('wwn')}: {currentWorkWeek}
        </p>
        <nav className="header__navigation">
          <a className="header__link" href="/">
            Главная
          </a>
          <a className="header__link" href="/issues">
            Задачи
          </a>
          <a className="header__link" href="/designers">
            Дизайнеры
          </a>
        </nav>
        <div className="header__buttons">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('ru')}>RU</button>
          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
}
