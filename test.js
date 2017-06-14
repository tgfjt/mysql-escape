const tape = require('tape');

const myEscape = require('./');

tape('should escaped', t => {
  t.equal(
    myEscape(`{"name":"Q't\t30%"}`),
    `{\\"name\\":\\"Q\\\'t\\t30\\%\\"}`,
    'result was OK'
  );
  t.end();
});
