import json from '../parser';
import read from '../reader';

test('should test', async () => {
  expect.assertions(1);
  const dataIn = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const data = await read(dataIn);
  const value = await json(data);
  const expected = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
  expect(value).toEqual(expected);
});

test('should handle errors', async () => {
  expect.assertions(1);

  try {
    const data = await read();
    const value = await json(data);
  } catch (e) {
    expect(e).toEqual(new Error('error'));
  }
});
