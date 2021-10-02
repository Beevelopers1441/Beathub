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
};

export const setTeamFlagColor = (idx) => {
  const ele0 = document.querySelector('.teamFlag-container > p:nth-child(1)');
  const ele1 = document.querySelector('.teamFlag-container > p:nth-child(2)');
  if (idx === 0) {
    ele0?.setAttribute('class', 'teamFlag-active');
    ele1?.setAttribute('class', 'teamFlag');
  } else {
    ele0?.setAttribute('class', 'teamFlag');
    ele1?.setAttribute('class', 'teamFlag-active');
  };
};