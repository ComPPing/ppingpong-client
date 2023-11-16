'use client';

import React, { useEffect } from 'react';

import { Feed } from '@/components/feed';

type FeedType = {
  id: string;
  restaurantName: string;
  category: string;
  place: string;
  description: string;
  images: string[];
};

const DUMMY_DATA: FeedType[] = [
  {
    id: '0',
    restaurantName: '쉐라톤크랜드인천호텔 유에',
    category: '소고기구이',
    place: '인천대입구역 1번 출구에서 550m',
    description:
      '임시 설명입니다. 임시 설명입니다. 임시 설명입니다. 임시 설명입니다. 임시 설명입니다. 임시 설명입니다.',
    images: [
      'http://via.placeholder.com/100x100',
      'http://via.placeholder.com/100x100',
    ],
  },
  {
    id: '1',
    restaurantName: '쉐라톤크랜드인천호텔 유에',
    category: '소고기구이',
    place: '인천대입구역 1번 출구에서 550m',
    description:
      '임시 설명입니다. 임시 설명입니다. 임시 설명입니다. 임시 설명입니다. 임시 설명입니다. 임시 설명입니다.',
    images: [
      'http://via.placeholder.com/100x100',
      'http://via.placeholder.com/100x100',
    ],
  },
];

const Main = () => {
  useEffect(() => {
    // localStorage.getItem('token') ?? window.location.replace('/login');
  }, []);

  return (
    <main className="overflow-y-auto flex-1 bg-gray-200">
      <ul className="">
        {DUMMY_DATA.map((data) => {
          return <Feed data={data} key={data.id} />;
        })}
      </ul>
    </main>
  );
};

export default Main;
