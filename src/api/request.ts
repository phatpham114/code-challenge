type TPayload = {
  params?: Object;
  body?: Object;
};

type TRequest = {
  url: string;
  method?: string;
  payload?: TPayload;
};

const fetchAPI = ({ url, method = "GET", payload = {} }: TRequest) =>
  fetch(url, {
    method,
    body: JSON.stringify(payload.body),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error: error.message }));

export type { TRequest };

export default fetchAPI;
