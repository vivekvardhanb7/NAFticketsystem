import React from 'react';
import { useTranslation } from './src/i18n.jsx';

const LanguageDropdown = () => {
  const { lang, setLang, t } = useTranslation();

  const selectLanguage = (nextLang) => setLang(nextLang);

  return (
    <div className="flex w-[284px] p-4 flex-col items-start gap-3 rounded-[10px] border border-[#282C2F] bg-[#111315] overflow-hidden">
      <div className="text-[#EFF2F0] font-semibold text-[14px] leading-[20px]">
        {t('Interface language')}
      </div>
      {['en', 'de'].map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => selectLanguage(option)}
          className="flex h-[34px] w-full px-3 items-center gap-2 rounded-[7px] border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            backgroundColor: lang === option ? '#17241A' : 'transparent',
            borderColor: lang === option ? '#345135' : '#282C2F'
          }}
        >
          <span
            className="font-medium text-[12px] leading-[20px]"
            style={{ color: lang === option ? '#78EF63' : '#A0A8AD' }}
          >
            {option === 'en' ? 'English' : 'Deutsch'}
          </span>
          {lang === option && <span className="ml-auto text-[#78EF63]">✓</span>}
        </button>
      ))}
    </div>
  );
};

export default LanguageDropdown;
