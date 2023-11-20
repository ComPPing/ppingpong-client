import { useQuery } from '@tanstack/react-query';

import { getCookie } from '@/utils/cookie';

import { http } from '../http';
import { API } from '../type';

export const useGetTotalMessage = () => {
  type Response = API['getTotalMessages']['response'];

  return useQuery(['messages'], async () => {
    return await http.get<Response>(`/api/s/messages`, {
      'Content-Type': 'application/json',
      Authorization: `${getCookie('token')}`,
    });
  });
};
