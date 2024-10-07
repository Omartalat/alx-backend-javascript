export default function createInt8TypedArray(length, position, value) {
  const dv = new DataView(new ArrayBuffer(length));
  dv.setUint8(position, value);
  return dv;
}
