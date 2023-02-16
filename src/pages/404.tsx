import Image from 'next/image';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import astronaut from '../../public/assets/astronaut.webp';

const Custom404Page = () => (
  <Main
    meta={
      <Meta
        title="Raphael - Homepage"
        description="Hi. I'm Raphael. A software engineer."
      />
    }
  >
    <div className="px-6 pt-4 pb-24 w-screen sm:px-24 md:px-32 md:pt-12">
      <div className="flex flex-col items-center mx-auto space-y-8 max-w-3xl sm:space-y-10 md:space-y-16">
        <div className="w-32 sm:w-48">
          <Image
            src={astronaut}
            alt="Astronaout floating in space"
            priority
            layout="responsive"
          />
        </div>
        <div>
          <h1 className="mb-4 text-xl font-bold text-center sm:text-2xl md:text-4xl">
            This page is lost in space
          </h1>
          <p className="prose prose-slate md:prose-xl">
            You thought this mission to the moon would be a quick six month
            thing. Your neighbor offered to look after your dog. Your high
            school math teacher was impressed. He once said you wouldn’t amount
            to anything. You sure showed him. But now here you are, fifty feet
            from your spaceship with no way to get back. Your dog will be so
            sad. Your math teacher will be so smug. Pretty devastating.
          </p>
        </div>
      </div>
    </div>
  </Main>
);

export default Custom404Page;
