export const HitApi = (json, api, method) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token'); // Assuming the JWT token is stored in localStorage

    const requestOptions = {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : ""  // Set the token in the Authorization header
      },
      body: JSON.stringify(json),
    };

    if (method.toUpperCase() === 'GET') {
      requestOptions.body = null;
    }

    fetch(api, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result) {
            resolve(result);
          }
        },
        (error) => {
          resolve(error);
        }
      );
  });
};
