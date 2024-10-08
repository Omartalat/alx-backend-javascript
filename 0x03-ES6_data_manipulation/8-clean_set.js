export default function cleanSet(set, startString) {
  const arr = [];
  const start = startString.length;
  if (start === 0) return '';
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      arr.push(element.slice(start));
    }
  });
  return arr.join('-');
}
