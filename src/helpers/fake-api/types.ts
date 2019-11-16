export type FakeApiHandler = (body: string) => Promise<Partial<Response> | void>;

export function typeSafeUrl(input: RequestInfo): string {
  return input.toString();
}

export function typeSafeOptions(init: RequestInit = {}): RequestInit & { body: string } {
  return {
    ...init,
    body: `${init.body}`,
  };
}

export function typeSafeResponse(partialResponse: Partial<Response> | void = {}): Response {

  const headers: Headers = {
    append: (): void => undefined,
    delete: (): void => undefined,
    has: (): boolean => false,
    get: (): null => null,
    set: (): void => undefined,
    [Symbol.iterator]: function* (): IterableIterator<[string, string]> {
      // not empty function
    },
    forEach: (): void => undefined,
    entries: function* (): IterableIterator<[string, string]> {
      // not empty function
    },
    keys: function* (): IterableIterator<string> {
      // not empty function
    },
    values: function* (): IterableIterator<string> {
      // not empty function
    },
  };

  const response: Response = {
    ...partialResponse,
    arrayBuffer: async (): Promise<ArrayBuffer> => new ArrayBuffer(0),
    blob: async (): Promise<Blob> => new Blob(),
    body: null,
    bodyUsed: false,
    clone: (): Response => ({ ...response }),
    formData: async (): Promise<FormData> => new FormData(),
    headers,
    json: async (): Promise<{}> => ({}),
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    text: async (): Promise<string> => "",
    trailer: Promise.resolve(headers),
    type: "basic",
    url: "",
  };

  return response;
}
