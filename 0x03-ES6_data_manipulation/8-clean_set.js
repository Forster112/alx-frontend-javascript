export default function cleanSet(set, str) {
  let s = '';
  const arr = [];
  if (str && typeof str === 'string') {
    [...set].forEach((elem) => {
      if (elem.startsWith(str)) arr.push(elem.slice(str.length));
    });
    s = arr.join('-');
  }
  return s;
}
