export const getAllPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();
  return data;
};

export const getPostBySearch = async (searchTerm: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`
  );
  const data = await res.json();
  return data;
};
