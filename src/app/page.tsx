import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-h1 text-primary-main bg-primary-50">
      hi 안녕하세요
      <Image
        src="/assets/icons/logo.svg"
        alt="핑퐁 로고"
        width="280"
        height="170"
      />
    </div>
  );
}
