import fs from "fs";
import path from "path";

let sorts = {
  "bubble-sort": {
    title: "Bubble sort",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    slug: "bubble-sort",
  },
};

export function getAllBlogs() {
  return Object.values(sorts);
}

export async function getBlogMetaDataBySlug(slug) {
  return sorts[slug];
}

export function getBlogContentBySlug(slug) {
  let filePath = path.join(__dirname, "../../../../../markdown", slug + ".mdx");
  return fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
}
