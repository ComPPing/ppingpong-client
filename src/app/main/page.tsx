import React from 'react';

import { Feed } from '@/components/feed';
import totalList from '@/db.json';

const Main = () => {
  return (
    <main className="overflow-y-auto flex-1 bg-gray-200">
      <ul className="">
        {totalList.map((data) => {
          return <Feed data={data} key={data.id} />;
        })}
      </ul>
    </main>
  );
};

export default Main;
