export default function createInt8TypedArray(length, position, value) {
  const dv = new DataView(new ArrayBuffer(length));
  if (position >= length) {
    throw new Error('Position outside range');
  }
  dv.setUint8(position, value);
  return dv;
}
