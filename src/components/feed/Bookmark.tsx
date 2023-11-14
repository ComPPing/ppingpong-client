'use client';

import Image from 'next/image';
import React from 'react';

interface BookmarkProps {
  id: string;
}

const Bookmark = ({ id }: BookmarkProps) => {
  return (
    <button type="button" className="absolute right-4 top-4">
      <Image
        src="/assets/icons/bookmark.svg"
        alt="저장하기"
        width="20"
        height="20"
      />
    </button>
  );
};

export default Bookmark;
