export const setSimpleUsername = (username) => {
  let newUsername = username;
  const isOverSeven = (_username) => {
    if (_username.length > 7) {
      return true;
    };
    return false;
  };
  if (isOverSeven(username)) {
    newUsername = username.slice(0, 7) + '...';
  };
  return newUsername
};