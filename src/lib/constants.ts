const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const URLS = {
  GET_LIGHT: (id: string) => `${BASE_URL}/${id}`,
  GET_LIGHTS: `${BASE_URL}/`,
};
