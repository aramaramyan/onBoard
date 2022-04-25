export default function timeConverter(date) {
  const arr = date.split(" ");

  if(arr[1].length === 7) {
    return arr[1].slice(0, 4);
  }
  return arr[1].slice(0, 5);
}