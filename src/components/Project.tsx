import Link from 'next/link';

interface ProjectProps {
  title: string;
  tags: string[];
  link: string;
  imgSrc: string;
  gradient: any;
}

// const gradientStyle = {
//   backgroundImage:
//     'linear-gradient( 64.3deg,  rgba(254,122,152,0.81) 17.7%, rgba(255,206,134,1) 64.7%, rgba(172,253,163,0.64) 112.1% )',
// };

// const gradientStyle2 = {
//   backgroundImage:
//     'radial-gradient( circle farthest-corner at 92.3% 71.5%,  rgba(83,138,214,1) 0%, rgba(134,231,214,1) 90% )',
// };

// const gradientStyle3 = {
//   backgroundImage: 'linear-gradient(to right, #F1F2B5,  #135058)',
// };

export const Project: React.FC<ProjectProps> = ({
  title,
  tags,
  link,
  imgSrc,
  gradient,
}) => {
  return (
    <Link href={link}>
      <a
        style={gradient}
        className="group px-12 pt-12 pb-16 mx-auto w-full rounded-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out md:px-16"
      >
        <div className="flex flex-row gap-4 mb-2">
          {tags.map((tag) => {
            return (
              <p
                key={tag}
                className="w-fit text-sm font-bold tracking-wider text-gray-700 md:text-base"
              >
                {tag}
              </p>
            );
          })}
        </div>
        <h2 className="font-serif text-4xl font-medium text-gray-900 md:text-5xl">
          {title}
        </h2>
        <img
          src={imgSrc}
          alt={`${title} image`}
          className="mx-auto mt-12 w-full max-w-5xl transition duration-300 ease-in-out group-hover:-translate-y-1"
        />
      </a>
    </Link>
  );
};
