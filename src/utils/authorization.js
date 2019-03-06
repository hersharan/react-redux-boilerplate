export default function getAuthorization() {
  const config = {
    headers: {
      Authorization: `Bearer token`,
      'Content-Type': 'application/json',
    },
  };

  return config;
}