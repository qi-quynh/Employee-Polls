function format(timestamp) {
  let oDate = new Date(timestamp);
  let sDay = oDate.getDate();

  if (sDay < 10) {
    sDay = `0${sDay}`;
  }
  let sMonth = oDate.getMonth() + 1;

  if (sMonth < 10) {
    sMonth = `0${sMonth}`;
  }

  let sYear = oDate.getFullYear();

  return `${sDay}-${sMonth}-${sYear}`;
}

export default format;
