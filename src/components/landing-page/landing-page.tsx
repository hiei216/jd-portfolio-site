import { useLanguage } from './../../hooks/use-language';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';
import { ContentButton } from '../content-button/content-button';
import { LanguageSelector } from '../language-selector/language-selector';
import { ReactComponent as LinkedinIcon } from './../../assets/linkedin.svg';

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
                <span className="font-montserrat text-header-clamp font-bold text-white">
                  Jiri Dvorak
                </span>
                <span className="font-montserrat text-clamp text-white">Full-Stack Developer</span>
                <a
                  href="mailto:jiri.dvorak@gmx.de"
                  className="text-small-clamp mt-4 font-montserrat text-white"
                >
                  jiri.dvorak@gmx.de
                </a>
                <span className="text-small-clamp font-montserrat text-white">
                  Ahornweg 11, 85757 Karlsfeld
                </span>
                <a
                  href="https://www.jirkodvorak.com/"
                  className="hover:coursor text-small-clamp font-montserrat text-white"
                >
                  www.jirkodvorak.com
                </a>
                <div className="relative mt-5">
                  <a href="https://www.linkedin.com/in/jiri-dvorak-528270163/">
                    <LinkedinIcon className="fill-white" width="30" height="30" />
                  </a>
                </div>
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
