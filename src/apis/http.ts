import { resolveUrl } from '@/utils/url';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const http = {
  get: <T, U>(url: string, header?: U) =>
    __fetch<T, void, U>('get', url, true, header),
  post: <T, D, U>(url: string, body: D, header?: U) =>
    __fetch<T, D, U>('post', url, true, header, body),
  put: <T, D, U>(url: string, body: D, header?: U) =>
    __fetch<T, D, U>('put', url, true, header, body),
  delete: <T, U>(url: string, header?: U) =>
    __fetch<T, void, U>('delete', url, true, header),
};

export const httpWithoutBaseUrl = {
  get: <T, U>(url: string, header?: U) =>
    __fetch<T, void, U>('get', url, false, header),
  post: <T, D, U>(url: string, body: D, header?: U) =>
    __fetch<T, D, U>('post', url, false, header, body),
  put: <T, D, U>(url: string, body: D, header?: U) =>
    __fetch<T, D, U>('put', url, false, header, body),
  delete: <T, U>(url: string, header?: U) =>
    __fetch<T, void, U>('delete', url, false, header),
};

const __fetch = async <T, D, U>(
  method: string,
  path: string,
  hasBaseUrl: boolean,
  header?: U,
  body?: D,
) => {
  const response = await fetch(hasBaseUrl ? resolveUrl(BASE_URL, path) : path, {
    method,
    // @note: body가 undefined이면, stringify 된 값도 undefined이므로 body는 전송되지 않는다.
    body: JSON.stringify(body),
    headers: header ?? {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error();
    const text = await response.text();
    error.message = text;
    error.name = response.statusText;
    throw error;
  }

  if (response.headers.get('Content-length') === '0') {
    return {} as T;
  }

  const data = await response.json();
  return data as T;
};
