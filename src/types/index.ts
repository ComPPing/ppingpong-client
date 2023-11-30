export type Message = {
  sender: SenderType;
  createdAt: Date;
  content: string;
  restaurantUrls?: string[];
};

export type SenderType = 'user' | 'assistant';

export type OAuthProvider = 'google' | 'kakao';

export type Feed = {
  id: number;
  restaurantName: string;
  category: string;
  place: string;
  description: string;
  images: string[];
  link: string;
};
