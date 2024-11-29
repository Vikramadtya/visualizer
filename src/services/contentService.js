async function getSortJson() {
  const response = await fetch(
    `https://raw.githubusercontent.com/Vikramadtya/visualizer/refs/heads/main/markdown/sorts.json`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    },
  );

  return await response.json();
}

let sorts = await getSortJson();

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
