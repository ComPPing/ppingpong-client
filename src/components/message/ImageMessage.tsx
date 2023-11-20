interface ImageMessageProps {
  urls?: string[];
}

export const ImageMessage = ({ urls }: ImageMessageProps) => {
  if (!urls) return null;
  return (
    <div className="max-w-fit overflow-x-auto block whitespace-nowrap">
      {urls?.map((url) => (
        <button
          key={url}
          type="button"
          className="w-30 h-30 mr-2 rounded-lg inline-flex items-center justify-center"
          onClick={() => {
            // FIXME: 임시 url
            window.open(
              'https://map.naver.com/p/entry/place/1028649657?c=15.00,0,0,0,dh',
            );
          }}
        >
          <img src={url} alt="img" className="rounded-lg" />
        </button>
      ))}
    </div>
  );
};
