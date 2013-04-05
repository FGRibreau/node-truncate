var assert = require('assert');
var truncate = require('./truncate.js');

describe('truncate', function() {
  it('should truncate text with given length', function() {
    var input, expect, actual;

    input = 'hello';
    actual = truncate(input, 3);
    expect = 'hel...';
    assert.strictEqual(expect, actual);

    input = 'I am not sure what I am talking about';
    actual = truncate(input, 10);
    expect = 'I am not s...';
    assert.strictEqual(expect, actual);
  });

  it('should keep url safe', function() {
    var input, expect, actual;
    input = 'Hey http://distilleryimage8.s3.amazonaws.com/719bf2329ddd11e28c3122000aa80097_7.jpg';
    actual = truncate(input, 4);
    expect = 'Hey ...';
    assert.strictEqual(expect, actual);

    input = 'Hey http://distilleryimage8.s3.amazonaws.com/719bf2329ddd11e28c3122000aa80097_7.jpg';
    actual = truncate(input, 5);
    expect = 'Hey http://distilleryimage8.s3.amazonaws.com/719bf2329ddd11e28c3122000aa80097_7.jpg';
    assert.strictEqual(expect, actual);

    input = 'Hey http://hehe.com http://plop.com';
    actual = truncate(input, 6);
    expect = 'Hey http://hehe.com...';
    assert.strictEqual(expect, actual);
  });
});
