export const Info: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl h-screen">
      <div className="flex flex-wrap items-center h-full md:justify-around">
        <div className="w-full md:w-1/2">
          <div className="pb-6 space-y-6 w-full sm:pr-5 sm:max-w-md md:pb-0 md:space-y-4 lg:pr-0 lg:space-y-8 lg:max-w-lg xl:space-y-9">
            <h1 className="font-serif text-5xl font-medium tracking-tight text-gray-900 sm:text-6xl lg:text-7xl lg:leading-tight">
              Hi! I&apos;m Raphael. <br />
              An engineer.
            </h1>
            <p className="mx-auto text-base text-gray-600 sm:max-w-md md:max-w-3xl lg:text-xl">
              I&apos;m a Stanford undergrad with a passion for software
              engineering and design. I focus on Computer & Network security.
            </p>
          </div>
        </div>
        <div className="px-10 w-full md:w-1/2">
          <div className="overflow-hidden w-full h-auto">
            <img src="/assets/portrait-no-bg.png" alt="Picture of Raphael" />
          </div>
        </div>
      </div>
    </section>
  );
};
