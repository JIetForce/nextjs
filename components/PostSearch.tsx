'use client';

import { useState } from 'react';

type Props = {
  onSearch: (value: string) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export { PostSearch };
