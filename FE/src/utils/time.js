export const setDateFormat = (createTime) => {
  let [date, time] = createTime.split('T');
  time = time.split('');
  time.splice(5);
  time = time.join('');

  return date + '  ' + time;
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