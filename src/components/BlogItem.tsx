import Link from 'next/link';

interface BlogItemProps {
  title: string;
  category?: string;
  slug: string;
  date: string;
  description: string;
}

export const BlogItem: React.FC<BlogItemProps> = ({
  title,
  category,
  slug,
  date,
  description,
}) => {
  return (
    // <article className="flex relative flex-col pt-8 max-w-3xl lg:ml-auto xl:w-[50rem] xl:max-w-none">
    <article className="flex relative flex-col pt-8 max-w-3xl lg:ml-auto">
      <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <div className="mb-6 prose prose-lg dark:prose-dark">{description}</div>
      <div className="flex flex-row-reverse justify-end items-center mt-auto">
        <dl>
          {category && (
            <>
              <dt className="sr-only">Category</dt>
              <dd className="absolute top-0 left-0 text-base font-semibold leading-6 text-violet-500">
                {category}
              </dd>
            </>
          )}
          <dt className="sr-only">Date</dt>
          <dd className="text-base leading-6 dark:text-gray-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap">
            <time dateTime={date}>{new Date(date).toDateString()}</time>
          </dd>
        </dl>
        <svg
          width="2"
          height="2"
          fill="currentColor"
          className="mx-4 text-gray-700 lg:hidden"
        >
          <circle cx="1" cy="1" r="1" />
        </svg>
        <Link href={`/blog/${slug}`}>
          <a className="inline-flex items-center py-2 px-4 text-base text-gray-700 bg-violet-200 hover:bg-violet-300 rounded-xl hover:shadow-lg">
            Read more<span className="sr-only">, {title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="-mr-2 w-6"
            >
              <path d="M9 18 15 12 9 6" />
            </svg>
          </a>
        </Link>
      </div>
    </article>
  );
};
