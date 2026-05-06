// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

//test cases for div
test('Testing div -- success', () => {
  const expected = 5;
  const got = mut.div(15, 3);
  expect(got).toBe(expected);
});

test('Testing div -- division by zero', () => {
  const expected = Infinity;
  const got = mut.div(15, 0);
  expect(got).toBe(expected);
});

test('Testing div -- negatives', () => {
  const expected = -5;
  const got = mut.div(15, -3);
  expect(got).toBe(expected);
});

//tests for containsNumbers
test('Testing containsNumbers -- string with numbers', () => {
  const expected = true;
  const got = mut.containsNumbers("Meri08");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- string with spaces and numbers', () => {
  const expected = true;
  const got = mut.containsNumbers("Meri.   08");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- string without numbers', () => {
  const expected = false;
  const got = mut.containsNumbers("Hello");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- empty string', () => {
  const expected = false;
  const got = mut.containsNumbers("");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- only numbers', () => {
  const expected = true;
  const got = mut.containsNumbers("05052026");
  expect(got).toBe(expected);
});