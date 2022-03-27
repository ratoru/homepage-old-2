export const Overview: React.FC = () => {
  return (
    <section className="my-12 mx-auto max-w-6xl md:my-36" id="about">
      <h2 className="mb-9 font-serif text-4xl font-medium lg:text-5xl">
        What I&apos;m doing
      </h2>
      <div className="grid grid-cols-5 grid-rows-3 gap-y-4 w-full">
        <div className="col-span-full row-start-1 p-6 bg-emerald-300 rounded-2xl md:col-span-1 md:col-start-1 md:row-start-3">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-y-1">
              <p className="text-lg font-medium text-emerald-900">UNESCO</p>
              <p className="text-base text-emerald-900">Volunteer</p>
            </div>
            <p className="text-xl font-bold text-emerald-900">18-19</p>
          </div>
        </div>
        <div className="col-span-full row-start-2 p-6 bg-pink-300 rounded-2xl md:col-span-4 md:col-start-2 md:row-start-2">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-y-1">
              <p className="text-lg font-medium text-pink-900">
                Stanford Undergrad
              </p>
              <p className="text-base text-pink-900">Math and CS</p>
            </div>
            <p className="text-xl font-bold text-pink-900">19-23</p>
          </div>
        </div>
        <div className="col-span-full row-start-3 p-6 bg-indigo-300 rounded-2xl md:col-span-1 md:col-start-3 md:row-start-1">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-y-1">
              <p className="text-lg font-medium text-indigo-900">System.One</p>
              <p className="text-base text-indigo-900">Pre-seed VC</p>
            </div>
            <p className="text-xl font-bold text-indigo-900">21</p>
          </div>
        </div>
      </div>
    </section>
  );
};
