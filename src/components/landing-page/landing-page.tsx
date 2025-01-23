import { useLanguage } from './../../hooks/use-language';

import { PORTFOLIO_DATA } from '../../data/portfolio-data';
import { ContentButton } from '../content-button/content-button';
import { LanguageSelector } from '../language-selector/language-selector';

export const LandingPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative h-screen w-full">
      <div className="bg-horizontal-background absolute inset-0 bg-cover bg-center brightness-50"></div>
      <div className="relative z-10 flex h-full">
        <LanguageSelector />
        <div className="ml-[16vw] mt-[10vw] flex flex-col">
          <div className="flex flex-row">
            <div className="">
              <img
                className="h-auto w-[16vw] rounded-full"
                alt="Header Image"
                src={'./personal-image.jpg'}
                loading="lazy"
              />
            </div>
            <div className="ml-8 mt-8 flex flex-col">
              <div className="ml-8 mt-8 flex flex-col items-start justify-start">
                <h1 className="font-montserrat text-header-clamp font-bold text-white">Jiri Dvorak</h1>
                <h1 className="font-montserrat text-clamp text-white">Full-Stack Developer</h1>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col">
            <div className="flex flex-row">
              <ContentButton title={PORTFOLIO_DATA[language].contact.title} />
              <ContentButton title={PORTFOLIO_DATA[language].contact.title} />
              <ContentButton title={PORTFOLIO_DATA[language].contact.title} />
              <ContentButton title={PORTFOLIO_DATA[language].contact.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
