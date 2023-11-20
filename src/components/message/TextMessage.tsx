interface TextMessageProps {
  text?: string;
}

export const TextMessage = ({ text }: TextMessageProps) => {
  if (!text) return null;
  return text;
};
