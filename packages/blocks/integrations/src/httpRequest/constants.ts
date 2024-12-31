import type { HttpRequestBlockV6, HttpRequestBlockVbeta } from "./schema";

export enum HttpMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  HEAD = "HEAD",
  CONNECT = "CONNECT",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
}

export const defaultHttpRequestAttributes = {
  method: HttpMethod.POST,
} as const;

export const defaultHttpRequestBlockOptions = {
  isAdvancedConfig: false,
  isCustomBody: false,
  isExecutedOnClient: false,
  fireAndForget: true
} as const satisfies HttpRequestBlockVbeta["options"];

export const defaultTimeout = 10;
export const maxTimeout = 120;
