export type LanguageSkills = {
  language: string;
  level: string;
};

export type LanguageData = {
  header: string;
  languages: LanguageSkills[];
};

export type ProfileData = {};

export type WorkData = {};

export type SkillData = {};

export type ProjectData = {};

export const InterestData = {};

export type Language = 'en' | 'de' | 'sk';

interface PortfolioData {
  title: string;
  languageSkills: LanguageData;
  //   about: string[];
  //   profiles: ProfileData;
  //   work: WorkData;
  //   skills: SkillData;
  //   education: EducationData;
  //   projects: ProjectData;
  //   languages: LanguageData;
  //   interests: InterestData;
}

export const PORTFOLIO_DATA: Record<string, PortfolioData> = {
  en: {
    title:
      'I am a passionate programmer who has over 10 years of professional experience in the insurance industry, with 4 years experience as Full-Stack developer. I am skilled in agile methodologies and React / Node.js development.',
    languageSkills: {
      header: 'Language skills',
      languages: [
        {
          language: 'English',
          level: 'fluent',
        },
        {
          language: 'German',
          level: 'fluent',
        },
        {
          language: 'Slovak',
          level: 'mother tongue',
        },
      ],
    },
  },
  de: {
    title:
      'Ich bin ein leidenschaftlicher Programmierer, der über 10 Jahre Berufserfahrung in der Versicherungsbranche hat, davon 4 Jahre als Full-Stack-Entwickler. Ich bin erfahren in agilen Methoden und React / Node.js Entwicklung.',
    languageSkills: {
      header: 'Sprachkenntnisse',
      languages: [
        {
          language: 'Englisch',
          level: 'fließend',
        },
        {
          language: 'Deutsch',
          level: 'fließend',
        },
        {
          language: 'Slowakisch',
          level: 'Muttersprache',
        },
      ],
    },
  },
  sk: {
    title:
      'Som vášnivý programátor, ktorý má viac ako 10 rokov profesionálnych skúseností v poisťovníctve, z toho 4 roky ako vývojár v oblasti full-stack. Mám skúsenosti s agilnými metodikami a vývojom React / Node.js.',
    languageSkills: {
      header: 'Jazykové znalosti',
      languages: [
        {
          language: 'Nemecký jazyk',
          level: 'pokročilý',
        },
        {
          language: 'Anglický jazyk',
          level: 'pokročilý',
        },
        {
          language: 'Slovenský jazyk',
          level: 'materinský jazyk',
        },
      ],
    },
  },
};
