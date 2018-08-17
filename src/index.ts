let lib = require('keypair');

export function keypair(opts?: {
  bits: 2048 | number,
  e: 65537 | number
}): { public: string, private: string } {
  return lib(opts);
}
