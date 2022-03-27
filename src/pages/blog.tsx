import { BlogItem } from '@/components/BlogItem';
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

const Blog: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <Main
    meta={
      <Meta
        title="Raphael - Blog"
        description="Here is where I share my thoughts with you."
      />
    }
  >
    <section className="px-2 md:px-0">
      <div className="container place-content-center px-8 mx-auto space-y-9 max-w-6xl h-full xl:px-5">
        <h1 className="font-serif text-4xl font-medium text-gray-900 lg:text-5xl">
          Blog
        </h1>
        <div className="space-y-16 lg:space-y-20">
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
      </div>
    </section>
  </Main>
);

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default Blog;
