import { FakeApiHandler, typeSafeOptions, typeSafeResponse, typeSafeUrl } from './types';
import { handleUserRegister, handleUsersAuthenticate } from "./handlers";

export function configureFakeAPI() {
  const realFetch = window.fetch;

  window.fetch = async (input, init) => {
    const url = typeSafeUrl(input);
    const opts = typeSafeOptions(init);

    if (url.endsWith("/users/authenticate") && opts.method === "POST") {
      return fakeFetch(handleUsersAuthenticate);
    }

    if (url.endsWith("/users/register") && opts.method === "POST") {
      return fakeFetch(handleUserRegister);
    }

    return realFetch(url, opts);

    async function fakeFetch(handler: FakeApiHandler) {
      await delay();
      const res = await handler(opts.body);
      return typeSafeResponse(res);

      function delay() {
        return new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  };
}
