import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Blog = () => (
  <Main
    meta={<Meta title="Raphael - About" description="Learn more about me." />}
  >
    <section className="px-2 md:px-0">
      <div className="container place-content-center px-8 mx-auto space-y-9 max-w-6xl h-full xl:px-5">
        <h1 className="font-serif text-4xl font-medium lg:text-5xl">Blog</h1>
        <div className="space-y-16"></div>
      </div>
    </section>
  </Main>
);

export default Blog;
