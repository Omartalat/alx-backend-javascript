export default function createIteratorObject(report) {
  const iterator = [];
  for (const val of Object.values(report.allEmployees)) {
    for (const el of val) {
      iterator.push(el);
    }
  }
  return iterator;
}
