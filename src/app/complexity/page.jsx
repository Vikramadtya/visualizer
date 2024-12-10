import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import { Separator } from "../../components/molecule/separator";
import { prettyCodeOptions } from "../../utils/markdownConstants.mjs";
import Comments from "../../components/molecule/comment";
import Doodle from "../../components/molecule/doodle";
import { getBlogContentBySlug } from "../../services/contentService";

import { customMDXComponents } from "../../mdx-components";
import ShareBar from "../../components/molecule/shareBar";

export default async function Post() {
  const blogData = {
    title: "Time Complexity",
    slug: "complexity",
  };
  const content = await getBlogContentBySlug(blogData.slug);

  return (
    <>
      <article className="prose prose-sm mx-auto  pb-20 pt-20 md:prose-base lg:prose-lg ">
        <div className="dark:text-gray-50">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkMath],
                rehypePlugins: [
                  [rehypePrettyCode, prettyCodeOptions],
                  rehypeKatex,
                ],
              },
            }}
            components={customMDXComponents()}
          />
        </div>

        <Separator className="mb-10 mt-20" />

        <ShareBar
          className="mb-10"
          shareUrl={`https://www.neuralcook.com/blogs/${blogData.slug}`}
          title={blogData.title}
        />

        <div className="flex items-center justify-center">
          <Doodle classData={"h-20 w-20"} />
        </div>
        <div className="flex items-center justify-center">
          <Comments />
        </div>
      </article>
    </>
  );
}
