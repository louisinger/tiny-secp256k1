const js = require('../js')

require('./ecdsa')(js)
require('./privates')(js)
require('./points')(js)

try {
  const native = require('tiny-secp256k1-native')
  require('./ecdsa')(native)
  require('./privates')(native)
  require('./points')(native)
} catch (e) {
  console.warn('Could not test NATIVE bindings')
}
