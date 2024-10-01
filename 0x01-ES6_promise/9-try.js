export default function guardrail(mathFunction) {
  const queue = [];
  const message = 'Guardrail was processed';
  try {
    const res = mathFunction();
    queue.push(res);
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push(message);
  }
  return queue;
}
