export const Aside = (props: any) => {
  return (
    <aside className="relative py-6 px-8 my-5 prose-p:!my-0 prose-h4:!mt-0 w-full hover:prose-a:!text-blue-500 prose-a:!decoration-blue-500 bg-blue-100 rounded-xl border-l-4 border-blue-500">
      <svg
        className="absolute top-0 left-0 p-2 text-blue-500 bg-offwhite rounded-full -translate-x-1/2 -translate-y-1/2"
        height="48"
        width="48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8 12 12" />
        <path d="M12 16 12.01 16" />
      </svg>
      <div className="mb-4 text-lg font-bold text-gray-900 lg:text-xl">
        {props.title}
      </div>
      {props.children}
    </aside>
  );
};
