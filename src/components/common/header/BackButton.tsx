'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="flex items-center justify-center z-9"
      onClick={() => {
        router.back();
      }}
    >
      <Image
        alt="뒤로가기 버튼"
        src="/assets/icons/left.svg"
        width="26"
        height="26"
      />
    </button>
  );
};

export { BackButton };
