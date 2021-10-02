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

export const setSliceText = (type, text) => {
  let newText = text;
  if (type === 'title') {
    if (text.length > 28) {
      newText = text.slice(0, 28) + '...';
    };
  } else if (type === 'content') {
    if (text.length > 80) {
      newText = text.slice(0, 80) + '...';
    };
  };
  return newText;
}