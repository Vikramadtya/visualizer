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

export async function getBlogContentBySlug(slug) {
  const response = await fetch(
    `https://raw.githubusercontent.com/Vikramadtya/visualizer/refs/heads/main/markdown/${slug}.mdx`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    },
  );
  return await response.text();
}
