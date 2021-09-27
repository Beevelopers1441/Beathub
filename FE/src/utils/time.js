export const setDateFormat = (createTime) => {
  let [date, time] = createTime.split('T');
  time = time.split('');
  time.splice(5);
  time = time.join('');

  return `${date}  ${time}`;
}