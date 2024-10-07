export default function hasValuesFromArray(st, arr) {
  for (const el of arr) {
    if (!st.has(el)) return false;
  }
  return true;
}
