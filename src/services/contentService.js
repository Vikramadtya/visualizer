import fs from "fs";
import path from "path";

let sorts = {
  "bubble-sort": {
    title: "bubble sort",
    description: "bubble sort",
    slug: "bubble-sort",
  },
};

export async function getAllBlogs() {
  return Object.values(sorts);
}

export async function getBlogMetaDataBySlug(slug) {
  return sorts[slug];
}

export function getBlogContentBySlug(slug) {
  let filePath = path.join(__dirname, "../../../../../markdown", slug + ".mdx");
  return fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
}
