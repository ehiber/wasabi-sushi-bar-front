const credentials: string | null = localStorage.getItem('credentials');
const tempToken = window.localStorage.getItem('tempCredentials');

export const getAuthHeader = () => {
  let jwt;

  if (credentials) {
    jwt = JSON.parse(credentials).jwt;
  }

  if (tempToken) {
    jwt = JSON.parse(tempToken).jwt;
  }

  return {
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json',
  };
};

export const getImageHeader = () => {
  let jwt;

  if (credentials) {
    jwt = JSON.parse(credentials).jwt;
  }

  if (tempToken) {
    jwt = JSON.parse(tempToken).jwt;
  }

  return {
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'multipart/form-data',
  };
};
