import { resolveUrl } from '@/utils/url';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const http = {
  get: <T>(url: string, header?: HeadersInit) =>
    __fetch<T, void>('get', url, true, header),
  post: <T, D>(url: string, body: D, header?: HeadersInit) =>
    __fetch<T, D>('post', url, true, header, body),
  put: <T, D, U>(url: string, body: D, header?: HeadersInit) =>
    __fetch<T, D>('put', url, true, header, body),
  delete: <T>(url: string, header?: HeadersInit) =>
    __fetch<T, void>('delete', url, true, header),
};

export const httpWithoutBaseUrl = {
  get: <T>(url: string, header?: HeadersInit) =>
    __fetch<T, void>('get', url, false, header),
  post: <T, D>(url: string, body: D, header?: HeadersInit) =>
    __fetch<T, D>('post', url, false, header, body),
  put: <T, D>(url: string, body: D, header?: HeadersInit) =>
    __fetch<T, D>('put', url, false, header, body),
  delete: <T>(url: string, header?: HeadersInit) =>
    __fetch<T, void>('delete', url, false, header),
};

const __fetch = async <T, D>(
  method: string,
  path: string,
  hasBaseUrl: boolean,
  header?: HeadersInit,
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
