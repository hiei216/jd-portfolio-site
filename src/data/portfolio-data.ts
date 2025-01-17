export type ContactData = {
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  website: string;
};

export const ProfileData = {};

export const WorkData = {};

export const SkillData = {};

export const ProjectData = {};

export const LanguageData = {};

export const InterestData = {};

export type Language = "en" | "de" | "sk";

interface PortfolioData {
  title: string;
  //   contact: ContactData;
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
      "I am a passionate programmer who has over 10 years of professional experience in the insurance industry, with 4 years experience as Full-Stack developer. I am skilled in agile methodologies and React / Node.js development.",
  },
  de: {
    title:
      "Ich bin ein leidenschaftlicher Programmierer, der über 10 Jahre Berufserfahrung in der Versicherungsbranche hat, davon 4 Jahre als Full-Stack-Entwickler. Ich bin erfahren in agilen Methoden und React / Node.js Entwicklung.",
  },
  sk: {
    title:
      "Som vášnivý programátor, ktorý má viac ako 10 rokov profesionálnych skúseností v poisťovníctve, z toho 4 roky ako vývojár v oblasti full-stack. Mám skúsenosti s agilnými metodikami a vývojom React / Node.js.",
  },
};
