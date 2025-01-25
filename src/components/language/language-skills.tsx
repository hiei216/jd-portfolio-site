import { useLanguage } from '../../hooks/use-language';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

export const LanguageSkills: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="content-container mt-[2vw] flex items-center" id="language-skills">
      <div className="font-bold flex w-full items-center justify-center font-montserrat text-header-clamp text-dark-blue">
        {PORTFOLIO_DATA[language].languageSkills.header}
      </div>
      <div className="mt-6 flex w-[25vw] flex-col items-start">
        {PORTFOLIO_DATA[language].languageSkills.languages.map((language) => (
          <div className="w-full p-2 flex flex-col items-start">
            <div className="text-clamp font-montserrat font-bold">{language.language}</div>
            <div className="text-small-clamp font-montserrat text-bold">{language.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
