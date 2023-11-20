import { useMutation } from '@tanstack/react-query';

import { getCookie } from '@/utils/cookie';

import { http } from '../http';
import { API } from '../type';

export const useSendMessage = () => {
  type Response = API['sendMessage']['response'];
  type RequestBody = API['sendMessage']['request']['body'];

  return useMutation(async (params: RequestBody) => {
    return await http.post<Response, RequestBody>(`/api/s/messages`, params, {
      'Content-Type': 'application/json',
      Authorization: `${getCookie('token')}`,
    });
  });
};
