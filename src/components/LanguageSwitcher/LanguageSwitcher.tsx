import React, { MouseEvent, useState } from 'react';
import './LanguageSwitcher.scss';

export const LanguageSwitcher = () => {
  const [active, setActive] = useState<string>('Ru');

  const handleClick = (evt: MouseEvent<HTMLDivElement>) => {
    const language = evt.currentTarget.textContent;

    if (language) {
      setActive(language);
    }
  };

  return (
    <div className="ls-wrap">
      <div className={`language ${active === 'Ru' ? 'language_active' : ''}`} onClick={handleClick}>
        Ru
      </div>
      <div className={`language ${active === 'En' ? 'language_active' : ''}`} onClick={handleClick}>
        En
      </div>
    </div>
  );
};
