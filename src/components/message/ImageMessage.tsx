interface ImageMessageProps {
  urls?: string[];
}

export const ImageMessage = ({ urls }: ImageMessageProps) => {
  if (!urls) return null;
  return (
    <div>
      {urls?.map((url, index) => (
        <button
          key={url}
          type="button"
          className="w-30 h-30 mr-2 rounded-lg flex items-center justify-center "
          onClick={() => {
            window.open(url, '_blank');
          }}
        >
          장소 {index + 1}
          {/* <img src={url} alt="img" className="rounded-lg" /> */}
        </button>
      ))}
    </div>
  );
};
