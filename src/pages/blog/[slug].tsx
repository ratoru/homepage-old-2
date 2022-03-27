import React from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import { Meta } from '@/layout/Meta';
import { BlogWrapper } from '@/templates/BlogWrapper';

import { getAllPosts, getSinglePost } from '../../utils/mdx';

const Post = ({ code, frontmatter }: { code: any; frontmatter: any }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogWrapper
      meta={
        <Meta title={frontmatter.title} description={frontmatter.description} />
      }
    >
      <div className="mx-auto prose-a:decoration-purple-500 prose prose-gray lg:prose-xl">
        <Component />
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
