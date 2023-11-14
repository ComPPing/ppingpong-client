import React from 'react';

import Bookmark from './Bookmark';
import ImageGroup from './ImageGroup';

// FIXME
type FeedType = {
  id: string;
  restaurantName: string;
  category: string;
  place: string;
  description: string;
};

interface FeedProps {
  data: FeedType;
}

export function Feed({ data }: FeedProps) {
  return (
    <li key={data.id} className="mt-8">
      {/* TODO: swiper 처리 */}
      <div className="flex w-full">
        <ImageGroup />
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
