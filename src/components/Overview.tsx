export const Overview: React.FC = () => {
  // Previous colors: 300 and 900, emerald, pink, indigo
  return (
    <section className="my-12 mx-auto max-w-6xl md:my-36" id="about">
      <h2 className="mb-9 font-serif text-4xl font-medium lg:text-5xl">
        What I&apos;m doing
      </h2>
      <div className="grid grid-cols-5 grid-rows-3 gap-y-4 w-full">
        <div className="col-span-full row-start-1 p-6 bg-brightgreen rounded-2xl md:col-span-1 md:col-start-1 md:row-start-3">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-y-1">
              <p className="text-lg font-medium text-gray-900">UNESCO</p>
              <p className="text-base text-gray-900">Volunteer</p>
            </div>
            <p className="text-xl font-bold text-gray-900">18-19</p>
          </div>
        </div>
        <div className="col-span-full row-start-2 p-6 bg-brightpink rounded-2xl md:col-span-4 md:col-start-2 md:row-start-2">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-y-1">
              <p className="text-lg font-medium text-gray-900">
                Stanford Undergrad
              </p>
              <p className="text-base text-gray-900">Math and CS</p>
            </div>
            <p className="text-xl font-bold text-gray-900">19-23</p>
          </div>
        </div>
        <div className="col-span-full row-start-3 p-6 bg-brightblue rounded-2xl md:col-span-1 md:col-start-3 md:row-start-1">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-y-1">
              <p className="text-lg font-medium text-gray-900">System.One</p>
              <p className="text-base text-gray-900">Pre-seed VC</p>
            </div>
            <p className="text-xl font-bold text-gray-900">21</p>
          </div>
        </div>
      </div>
    </section>
  );
};
