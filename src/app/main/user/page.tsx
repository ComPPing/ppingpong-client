'use client';

import React, { useEffect, useState } from 'react';

import { USER_NAME_KEY } from '@/constants';

const User = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem(USER_NAME_KEY) ?? '');
  }, []);
  return (
    <div className="flex-1">
      <span className="p-4">{name}님 환영합니다.</span>
    </div>
  );
};

export default User;
