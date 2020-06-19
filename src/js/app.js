// TODO: write your code here
import json from '../parser';
import read from '../reader';

console.log('worked');
const dataIn = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
(async () => {
  try {
    const data = await read(dataIn);
    const value = await json(data);
    console.log(value);
  } catch (error) {
    console.error(error);
  }
})();
