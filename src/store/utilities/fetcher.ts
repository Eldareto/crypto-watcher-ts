/* Type */
import { Method, HeadersBody, Auth, APIResponse } from './global.type';

/*
 * Headers configurations
 */
const headerConfig = (authRequired: boolean, accessToken?: string): Headers => {
  let headers = new Headers();

  headers.append(Auth.CONTENT_TYPE, Auth.APPLICATION_JSON);

  if (authRequired) {
    headers.append(Auth.AUTHORIZATION, `Bearer ${accessToken}`);
  }

  return headers;
};

/*
 * Fetcher configuration
 */
const fetchConfig = <P>(payload: P, method: Method, authRequired: boolean, accessToken?: string) => {
  let headers;

  headers = headerConfig(authRequired, accessToken);

  const headersBody: HeadersBody = {
    method,
    headers,
  };

  if ((method === Method.POST || method === Method.PUT) && payload !== null) {
    headersBody.body = JSON.stringify(payload);
  }

  return headersBody;
};

/*
 * Main Fetcher
 */

export const fetcher = async <BodyRequest, ServerResponse>(
  url: string,
  payload: BodyRequest,
  method: Method,
  authRequired: boolean,
  accessToken?: string
): Promise<APIResponse<ServerResponse>> => {
  const response: APIResponse<ServerResponse> = await fetch(
    url,
    fetchConfig(payload, method, authRequired, accessToken)
  )
    .then((res) =>
      res.json().then((body: ServerResponse) => {
        return {
          status: res.status,
          ok: res.ok,
          data: body,
        };
      })
    )
    .catch((error) => {
      throw Error(error);
    });

  return response;
};
