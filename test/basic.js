const ieee754 = require('../')
const test = require('tape')

const EPSILON = 0.00001

const bufferAllocators = [
  function createBuffer (n) {
    return Buffer.alloc(n)
  },
  function createArray (n) {
    return new Array(n)
  }
]
for (const allocateBuffer of bufferAllocators) {
  test(allocateBuffer.name, function (t) {
    t.test('read float', function (t) {
      const val = 42.42
      const buffer = Buffer.alloc(4)
      buffer.writeFloatLE(val, 0)

      const buf = allocateBuffer(4)
      for (let i = 0; i < buffer.length; i++) {
        buf[i] = buffer[i]
      }

      const num = ieee754.read(buf, 0, true, 23, 4)

      t.ok(Math.abs(num - val) < EPSILON)
      t.end()
    })

    t.test('write float', function (t) {
      const val = 42.42
      const buf = allocateBuffer(4)

      ieee754.write(buf, val, 0, true, 23, 4)
      const num = Buffer.from(buf).readFloatLE(0)

      t.ok(Math.abs(num - val) < EPSILON)
      t.end()
    })

    t.test('read double', function (t) {
      const value = 12345.123456789
      const buffer = Buffer.alloc(8)
      buffer.writeDoubleLE(value, 0)

      const buf = allocateBuffer(8)
      for (let i = 0; i < buffer.length; i++) {
        buf[i] = buffer[i]
      }

      const num = ieee754.read(buf, 0, true, 52, 8)

      t.ok(Math.abs(num - value) < EPSILON)
      t.end()
    })

    t.test('write double', function (t) {
      const value = 12345.123456789
      const buf = allocateBuffer(8)

      ieee754.write(buf, value, 0, true, 52, 8)
      const num = Buffer.from(buf).readDoubleLE(0)

      t.ok(Math.abs(num - value) < EPSILON)
      t.end()
    })
  })
}
