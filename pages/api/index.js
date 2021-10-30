const fetchApi = async (
  gqlKey,
  query
) => {
  const url = "http://localhost:3600/graphql";
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  };
  const response = await fetch(url, opts);
  const data = await response.json();
  return data.data[gqlKey];
};

export default fetchApi;
