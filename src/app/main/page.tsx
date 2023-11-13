'use client';

import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    // localStorage.getItem('token') ?? window.location.replace('/login');
  }, []);
  return <div>Main</div>;
};

export default Main;
