import { Project } from '@/components/Project';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Raphael - Homepage"
          description="Hi. I'm Raphael. A software engineer."
        />
      }
    >
      <section className="px-2 md:px-0">
        <div className="container place-content-center px-2 mx-auto max-w-6xl h-full">
          <div className="flex flex-col gap-16">
            <Project
              title="Raycast"
              description="OPEN SOURCE"
              link="https://www.raycast.com/ratoru"
              imgSrc="/assets/raycast-extension.png"
              color="bg-sky-400"
            />
            <Project
              title="Psetgroups"
              description="WEB APP"
              link="https://psetgroups.ratoru.com/"
              imgSrc="/assets/student.png"
              color=""
            />
            <Project
              title="SpikeStats"
              description="WEB APP"
              link="https://spikestats.ratoru.com/"
              imgSrc="/assets/roundnet-logo-color.svg"
              color=""
            />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
