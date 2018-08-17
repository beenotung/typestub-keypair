import {keypair} from "../src";

let pair = keypair();
if (!pair || !pair.public || !pair.private) {
  throw new Error('key pair is not generated correctly')
}
console.log(pair);
