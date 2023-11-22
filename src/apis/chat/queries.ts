import { useQuery } from '@tanstack/react-query';

import { TOKEN_KEY } from '@/constants';
import { getCookie } from '@/utils/cookie';

import { http } from '../http';
import { API } from '../type';

export const useGetTotalMessage = () => {
  type Response = API['getTotalMessages']['response'];

  return useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      return await http.get<Response>(`/api/s/messages`, {
        'Content-Type': 'application/json',
        ACCESS_TOKEN: `${getCookie(TOKEN_KEY)}`,
      });
    },
  });
};
