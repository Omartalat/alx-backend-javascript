export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((val, key) => {
      if (val === 1) {
        map.set(key, 100);
      }
    });
  } else {
    throw new Error('Cannot process');
  }
}
