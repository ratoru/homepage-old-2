import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), 'src/posts');

export const getFileContent = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8');
};

const getCompiledMDX = async (mdxSource: string) => {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }
  // Add your remark and rehype plugins here
  const remarkPlugins: any = [];
  const rehypePlugins: any = [];

  /* eslint-disable */
  return bundleMDX({
    source: mdxSource,
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        ...rehypePlugins,
      ];

      return options;
    },
  });
  /* eslint-enable */
};

export const getSinglePost = async (slug: string) => {
  const source = getFileContent(`${slug}.mdx`);
  const { code, frontmatter } = await getCompiledMDX(source);

  return {
    frontmatter,
    code,
  };
};

function dateSortDesc(a: string, b: string) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((fpath) => /\.mdx?$/.test(fpath))
    .map((fileName) => {
      const source = getFileContent(fileName);
      const slug = fileName.replace(/\.mdx?$/, '');
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug,
      };
    })
    .sort((a, b) => dateSortDesc(a.frontmatter.date, b.frontmatter.date));
};
