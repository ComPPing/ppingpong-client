'use client';

import React, { useState } from 'react';

import Bookmark from './Bookmark';
import ImageGroup from './ImageGroup';

// FIXME
type FeedType = {
  id: string;
  restaurantName: string;
  category: string;
  place: string;
  description: string;
  images: string[];
};

interface FeedProps {
  data: FeedType;
}

export function Feed({ data }: FeedProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <li key={data.id} className="mt-8">
      <div className="relative">
        <div className="absolute z-10 top-4 text-body3 right-2 py-1 px-2 bg-gray-100 rounded-full">
          {activeIndex + 1} / {data.images.length}
        </div>
        <ImageGroup images={data.images} setActiveIndex={setActiveIndex} />
      </div>
      <div className="p-4 bg-white relative">
        <div className="flex gap-2">
          <h2 className="text-subtitle2">{data.restaurantName}</h2>
          <span className="text-body3 text-gray-500">{data.category}</span>
        </div>
        <div className="text-gray-700 text-body3">{data.place}</div>
        <div className="text-body3 mt-2 text-gray-900">{data.description}</div>
        <Bookmark id={data.id} />
      </div>
    </li>
  );
}
