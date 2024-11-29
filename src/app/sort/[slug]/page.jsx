import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import { Separator } from "../../../components/molecule/separator";
import { prettyCodeOptions } from "../../../utils/markdownConstants.mjs";
import Comments from "../../../components/molecule/comment";
import Doodle from "../../../components/molecule/doodle";
import {
  getBlogContentBySlug,
  getAllBlogs,
  getBlogMetaDataBySlug,
} from "../../../services/contentService";

import { customMDXComponents } from "../../../mdx-components";
import ShareBar from "../../../components/molecule/shareBar";
import SortFactory from "../../../libs/sortMethods/factory";
import { shuffle } from "../../../libs/utility";
import Visualiser from "../../../components/organism/visualiser/visualiser";

export async function generateStaticParams() {
  const posts = await getAllBlogs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const metadata = await getBlogMetaDataBySlug(slug);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Post({ params }) {
  const { slug } = await params;

  const blogData = await getBlogMetaDataBySlug(slug);
  const content = await getBlogContentBySlug(slug);

  let maxNumber = 10;

  let sorter = SortFactory(slug);
  sorter.sort(shuffle([...Array(maxNumber).keys()]));

  return (
    <>
      <article className="prose prose-sm mx-auto  pb-20 pt-20 md:prose-base lg:prose-lg ">
        <div className="dark:text-gray-50">
          <Visualiser
            data={JSON.stringify(sorter.getSortHistory())}
            maxNumber={maxNumber}
          />

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
