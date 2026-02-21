const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? '';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions {
  method: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
}

async function request<T>(endpoint: string, options: RequestOptions): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const apiClient = {
  get: <T>(endpoint: string, headers?: Record<string, string>): Promise<T> =>
    request<T>(endpoint, { method: 'GET', headers }),

  post: <T>(endpoint: string, body: unknown, headers?: Record<string, string>): Promise<T> =>
    request<T>(endpoint, { method: 'POST', body, headers }),

  put: <T>(endpoint: string, body: unknown, headers?: Record<string, string>): Promise<T> =>
    request<T>(endpoint, { method: 'PUT', body, headers }),

  patch: <T>(endpoint: string, body: unknown, headers?: Record<string, string>): Promise<T> =>
    request<T>(endpoint, { method: 'PATCH', body, headers }),

  delete: <T>(endpoint: string, headers?: Record<string, string>): Promise<T> =>
    request<T>(endpoint, { method: 'DELETE', headers }),
};
