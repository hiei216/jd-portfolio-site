import { Link } from 'react-scroll';

type Props = {
  title: string;
  link: string;
};

export const ContentButton: React.FC<Props> = ({ title, link }) => {
  return (
    <Link
      className="m-2 flex aspect-square w-24 items-center justify-center rounded-full border border-solid border-white bg-transparent text-center text-white transition-all duration-300 ease-in-out hover:aspect-video hover:w-40 hover:bg-white hover:text-dark-blue"
      to={link}
      smooth={true}
    >
      {title}
    </Link>
  );
};
