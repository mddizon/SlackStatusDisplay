export async function fetchUserInfo(userId, bearerToken) {
  const response = await fetch('https://slack.com/api/users.profile.get', {
    method: 'POST',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `token=${bearerToken}&user=${userId}`,
  });

  return response.json();
}

export async function fetchUserPresence(userId, bearerToken) {
  const response = await fetch('https://slack.com/api/users.getPresence', {
    method: 'POST',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `token=${bearerToken}&user=${userId}`,
  });

  return response.json();
}
