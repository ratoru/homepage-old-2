import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  color: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  imgSrc,
}) => {
  return (
    <Link href={link}>
      <a className="px-12 pt-12 pb-16 mx-auto w-full max-w-4xl bg-gradient-to-br from-gray-100 to-gray-600 rounded-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out md:px-16">
        <p className="text-sm font-bold text-gray-700 md:text-base">
          {description}
        </p>
        <h2 className="font-serif text-4xl font-medium text-gray-900 md:text-5xl">
          {title}
        </h2>
        <img
          src={imgSrc}
          alt={`${title} image`}
          className="mt-12 transition duration-300 ease-in-out hover:-translate-y-1"
        />
      </a>
    </Link>
  );
};
