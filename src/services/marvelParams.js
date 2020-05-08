import CryptoJS from 'crypto-js';

const privateKey = 'd4c375f371a41d89750039c1c513cb7ecedfccf0';
const apikey = '7debee90ca219cdc3961194be7f34950';
const ts = Date.now();
const hash = CryptoJS.MD5(ts + privateKey + apikey).toString();

const parans = {
  ts,
  apikey,
  hash,
};

export default parans;
