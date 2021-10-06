export const setDateFormat = (createTime) => {
  let [date, time] = createTime.split('T');
  time = time.split('');
  time.splice(5);
  time = time.join('');

  return date + '  ' + time;
};

export const setKorTimeFormat = (createTime) => {
  let time = createTime.split('T')[1];
  time = time.split('');
  time.splice(5);
  time = time.join('').split(':');
  
  let flag = '오전';
  let hour = +time[0] + 9;  // utc+9
  let minute = +time[1];
  
  if (hour > 11 && hour < 24) {
    flag = '오후';
    hour -= 12;
  } else if (hour === 24) {
    hour -= 12;
  }
  return `${flag} ${hour}:${minute}`;
};

export const getCurrTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let flag = '오전';

  flag = hour > 11 ? '오후' : flag;
  minute = minute > 9 ? minute : '0' + String(minute);
  
  return `${flag} ${hour}:${minute}`
}