export const getArticles = ({ qty, rss_url }) => fetch(`api/articles/?url=${rss_url}${qty ? `&qty=${qty}` : ''}`, {
  method: 'get'
}).then(response => response.json().then(data => data)
).catch((error) => {
  console.warn('deliver articles error', error);
});

const authRequest = endpoint => payload => 
  fetch(`api/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  })
  .then(response => response.json());

export const registerRequest = authRequest('register');

export const loginRequest = authRequest('login');
