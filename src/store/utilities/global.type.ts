export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum Auth {
  COOKIE = 'auth',
  AUTHORIZATION = 'Authorization',
  CONTENT_TYPE = 'Content-Type',
  APPLICATION_JSON = 'application/json',
}

export enum Banners {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
}

// Interfaces
export interface HeadersBody {
  method: Method;
  headers: Headers;
  body?: string;
}

export interface APIResponse<R> {
  status: number;
  ok: boolean;
  data: R;
}
