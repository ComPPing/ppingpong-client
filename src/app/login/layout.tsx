import { Metadata, Viewport } from 'next';
import React, { Fragment } from 'react';

export const metadata: Metadata = {
  themeColor: 'rgb(var(--color-primary-50))',
};

export const viewport: Viewport = {
  themeColor: '#FFEFD4',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Fragment>{children}</Fragment>;
};

export default Layout;
