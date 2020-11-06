import { BaseContext } from "koa";

interface HttpErrors {
  100: "continue";
  101: "switching protocols";
  102: "processing";
  200: "ok";
  201: "created";
  202: "accepted";
  203: "non-authoritative information";
  204: "no content";
  205: "reset content";
  206: "partial content";
  207: "multi-status";
  300: "multiple choices";
  301: "moved permanently";
  302: "moved temporarily";
  303: "see other";
  304: "not modified";
  305: "use proxy";
  307: "temporary redirect";
  400: "bad request";
  401: "unauthorized";
  402: "payment required";
  403: "forbidden";
  404: "not found";
  405: "method not allowed";
  406: "not acceptable";
  407: "proxy authentication required";
  408: "request time-out";
  409: "conflict";
  410: "gone";
  411: "length required";
  412: "precondition failed";
  413: "request entity too large";
  414: "request-uri too large";
  415: "unsupported media type";
  416: "requested range not satisfiable";
  417: "expectation failed";
  418: "i'm a teapot\"";
  422: "unprocessable entity";
  423: "locked";
  424: "failed dependency";
  425: "unordered collection";
  426: "upgrade required";
  428: "precondition required";
  429: "too many requests";
  431: "request header fields too large";
  500: "internal server error";
  501: "not implemented";
  502: "bad gateway";
  503: "service unavailable";
  504: "gateway time-out";
  505: "http version not supported";
  506: "variant also negotiates";
  507: "insufficient storage";
  509: "bandwidth limit exceeded";
  510: "not extended";
  511: "network authentication required";
}

declare global {
  interface Context extends BaseContext {
    request: {
      params: object;
      body: object;
    };

    send(data: any): void;

    sendError(options: {
      statusCode: keyof HttpErrors;
      error: string;
      message: string;
      errors: any;
    }): void;
  }
}
