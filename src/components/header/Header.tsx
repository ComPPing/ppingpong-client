import React from 'react';

import { BackButton } from '.';

interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

/**
 * @description 헤더의 left, center, right 영역을 설정한다.
 *              left의 경우, 기본적으로 뒤로가기 기능인 BackButton 설정되어 있다.
 */
const Header = ({ left = <BackButton />, center, right }: HeaderProps) => {
  return (
    <header className="flex items-center relative justify-between mx-4 py-3">
      <div className="absolute left-0">{left}</div>
      <div className="flex items-center justify-center w-full">{center}</div>
      <div className="absolute right-0">{right}</div>
    </header>
  );
};

export { Header };
