import { BlogItem } from '@/components/BlogItem';
import { Info } from '@/components/Info';
import { Overview } from '@/components/Overview';
import { Project } from '@/components/Project';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import { getAllPosts } from '../utils/mdx';

export type Frontmatter = {
  title: string;
  description: string;
  category: string;
  date: string;
};

type Post = {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
};

const gradientStyle = {
  backgroundImage:
    'linear-gradient( 64.3deg,  rgba(254,122,152,0.81) 17.7%, rgba(255,206,134,1) 64.7%, rgba(172,253,163,0.64) 112.1% )',
};

const gradientStyle2 = {
  backgroundImage:
    'radial-gradient( circle farthest-corner at 92.3% 71.5%,  rgba(83,138,214,1) 0%, rgba(134,231,214,1) 90% )',
};

const gradientStyle3 = {
  backgroundImage: 'linear-gradient(to right, #F1F2B5,  #135058)',
};

const Index: React.FC<{ posts: Post[] }> = ({ posts }) => {
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
        <div className="container place-content-center px-2 mx-auto h-full">
          <Info />
          <div className="flex flex-col gap-16" id="projects">
            <Project
              title="Raycast"
              tags={['OPEN SOURCE']}
              link="https://www.raycast.com/ratoru"
              imgSrc="/assets/raycast-extension.png"
              gradient={gradientStyle2}
            />
            <Project
              title="Psetgroups"
              tags={['WEB APP']}
              link="https://psetgroups.ratoru.com/"
              imgSrc="/assets/student.png"
              gradient={gradientStyle}
            />
            <Project
              title="SpikeStats"
              tags={['WEB APP']}
              link="https://spikestats.ratoru.com/"
              imgSrc="/assets/roundnet-logo-color.svg"
              gradient={gradientStyle3}
            />
          </div>
          <Overview />
          <section className="mx-auto mb-12 max-w-6xl" id="blog">
            <h2 className="mb-9 font-serif text-4xl font-medium text-gray-900 lg:text-5xl">
              Blog
            </h2>
            <div className="space-y-16 w-full lg:space-y-20">
              {posts.map((post, index) => (
                <BlogItem
                  key={index}
                  title={post.frontmatter.title}
                  category={post.frontmatter.category}
                  slug={post.slug}
                  date={post.frontmatter.date}
                  description={post.frontmatter.description}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </Main>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default Index;
