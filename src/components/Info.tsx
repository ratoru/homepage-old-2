export const Info: React.FC = () => {
  return (
    <section className="px-2 my-24 md:px-0 md:my-36">
      <div className="container place-content-center px-8 mx-auto max-w-6xl h-full xl:px-5">
        <div className="flex flex-wrap justify-between items-center h-full">
          <div className="w-full md:w-1/2">
            <div className="pb-6 space-y-6 w-full sm:pr-5 sm:max-w-md md:pb-0 md:space-y-4 lg:pr-0 lg:space-y-8 lg:max-w-lg xl:space-y-9">
              <h1 className="font-serif text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl lg:leading-tight">
                I&apos;m Raphael, a Stanford undergrad with a passion for
                software engineering and design.
              </h1>
              <p className="mx-auto text-base text-gray-600 sm:max-w-md md:max-w-3xl lg:text-xl">
                During the day I&apos;m a Mathematical and Computational Science
                student. At night I&apos;m a roundnet enthusiast and music
                lover. In my free time I create things.
              </p>
            </div>
          </div>
          <div className="px-10 w-full md:w-1/2">
            <div className="overflow-hidden w-full h-auto">
              <img src="/assets/avatar.svg" alt="Picture of Raphael" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
