export default function cleanSet(set, str) {
  const arr = [];
  if (str && typeof str === 'string') {
    [...set].forEach((elem) => {
      if (elem.startsWith(str)) arr.push(elem.slice(str.length));
    });
  }
  return arr.join('-');
}
