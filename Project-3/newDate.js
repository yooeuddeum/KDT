module.exports = newDate;

function newDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return year + "-" + month + "-" + day;
}
console.log(newDate());