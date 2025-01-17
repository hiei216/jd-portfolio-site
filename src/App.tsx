import { LanguageSelector } from "./components/language-selector";
import { PORTFOLIO_DATA } from "./data/portfolio-data";
import { useLanguage } from "./hooks/use-language";

import "./App.css";

export const App: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className='p-0 w-full'>
      <LanguageSelector />
      <img
        className='w-full brightness-50'
        alt='Header Image'
        src={"./horizont-header.jpg"}
        loading='lazy'
      />

      <div className='w-full flex flex-row justify-center'>
        <img
          className='absolute rounded-full -mt-[8vw] h-auto w-[18vw]'
          alt='Header Image'
          src={"./personal-image.jpg"}
          loading='lazy'
        />
      </div>

      <div className='content-container mt-[12vw]'>
        <div className='w-full text-clamp'>{PORTFOLIO_DATA[language].title}</div>
        <div className='w-full mt-6'>
          <h2 className='text-header-clamp text-dark-blue font-bold font-montserrat'>
            Contact
          </h2>
        </div>
      </div>
    </div>
  );
};
