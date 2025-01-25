import { LandingPage } from './components/landing-page/landing-page';

import './App.css';
import { LanguageSkills } from './components/language/language-skills';

export const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
      <LanguageSkills />
    </div>
  );
};
