import { useMutation } from '@tanstack/react-query';

import { TOKEN_KEY } from '@/constants/token';
import { getCookie } from '@/utils/cookie';

import { http } from '../http';
import { API } from '../type';

export const useSendMessage = () => {
  type Response = API['sendMessage']['response'];
  type RequestBody = API['sendMessage']['request']['body'];

  return useMutation({
    mutationFn: async (params: RequestBody) => {
      return await http.post<Response, RequestBody>(`/api/s/messages`, params, {
        'Content-Type': 'application/json',
        ACCESS_TOKEN: `${getCookie(TOKEN_KEY)}`,
      });
    },
  });
};
