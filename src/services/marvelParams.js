import CryptoJS from 'crypto-js';

const privateKey = process.env.REACT_APP_PRIVATEKEY;
const apikey = process.env.REACT_APP_APIKEY;
const ts = Date.now();
const hash = CryptoJS.MD5(ts + privateKey + apikey).toString();

const parans = {
  ts,
  apikey,
  hash,
};

export default parans;
