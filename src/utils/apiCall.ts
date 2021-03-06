export function callApi(method: string, url: string, path: string, data?: any) {
  return fetch(url + path, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
