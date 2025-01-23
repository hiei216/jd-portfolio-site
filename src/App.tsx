import { Contact } from './components/contact/contact';
import { LandingPage } from './components/landing-page/landing-page';

import './App.css';

export const App: React.FC = () => {
  return (
    <>
      <LandingPage />
      <Contact />
    </>
  );
};
