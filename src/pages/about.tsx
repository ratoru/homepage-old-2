import { Info } from '@/components/Info';
import { Overview } from '@/components/Overview';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={<Meta title="Raphael - About" description="Learn more about me." />}
  >
    <Info />
    <Overview />
    {/* <section className="px-2 my-32 md:px-0 md:my-24">
      <div className="container place-content-center px-8 mx-auto max-w-6xl h-full xl:px-5">
        <div className="grid grid-cols-2">
          <Link href="/">
            <a className="group flex flex-row justify-end items-center mr-4 font-serif text-2xl font-medium hover:underline lg:text-3xl">
              <img
                src="/assets/noun-hand-drawn-arrow-left.svg"
                alt="next arrow"
                className="w-12 group-hover:-rotate-6 md:w-20"
              />
              Projects
            </a>
          </Link>
          <Link href="/">
            <a className="group flex flex-row justify-start items-center ml-4 font-serif text-2xl font-medium hover:underline lg:text-3xl">
              Blog
              <img
                src="/assets/noun-hand-drawn-arrow.svg"
                alt="next arrow"
                className="w-12 group-hover:rotate-6 md:w-20"
              />
            </a>
          </Link>
        </div>
      </div>
    </section> */}
  </Main>
);

export default About;
