import Image from 'next/image';
import React, { Fragment } from 'react';

import { Menubar } from '@/components/menubar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <header className="p-3 border-b-2 w-full bg-white/95 h-14 flex items-center">
        <Image
          src="/assets/images/smallLogo.png"
          alt="logo"
          width="140"
          height="26"
        />
      </header>
      <main className=""></main>
      {children}
      <Menubar />
    </Fragment>
  );
};

export default Layout;
