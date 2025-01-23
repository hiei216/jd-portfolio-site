import { useLanguage } from '../../hooks/use-language';
import { PORTFOLIO_DATA } from './../../data/portfolio-data';

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="content-container mt-[2vw]">
      <div className="w-full text-clamp">{PORTFOLIO_DATA[language].title}</div>
      <div className="mt-6 flex w-full flex-col">
        <h2 className="font-montserrat text-header-clamp font-bold text-dark-blue">{PORTFOLIO_DATA[language].contact.title}</h2>

        <div className="flex flex-row">
          <h3 className="font-montserrat text-header-clamp font-bold text-dark-blue">{}</h3>
        </div>
      </div>
    </div>
  );
};
