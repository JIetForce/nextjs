'use client';

import { PostSearch } from '@/components/PostSearch';
import { Posts } from '@/components/Posts';
import { getAllPosts, getPostBySearch } from '@/services/getPosts';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const onSearch = (search: string) => {
    getPostBySearch(search).then(setPosts);
  };

  return (
    <>
      <h1>Blog Page</h1>
      <PostSearch onSearch={onSearch} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
