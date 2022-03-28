import React from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import { Aside } from '@/components/blog/Aside';
import { Meta } from '@/layout/Meta';
import { BlogWrapper } from '@/templates/BlogWrapper';

import { getAllPosts, getSinglePost } from '../../utils/mdx';

const Post = ({ code, frontmatter }: { code: any; frontmatter: any }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const components = {
    Aside,
  };

  return (
    <BlogWrapper
      meta={
        <Meta title={frontmatter.title} description={frontmatter.description} />
      }
    >
      <div className="px-4 mx-auto hover:prose-a:text-purple-500 prose-a:decoration-purple-500 prose prose-gray md:px-0 lg:prose-xl">
        <Component components={components} />
      </div>
    </BlogWrapper>
  );
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
