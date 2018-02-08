const test = require('tape');
const { formatSwedishPersonalIdentityNumber } = require('./dist/formatter');

test('personal identity numbers from the 20th century (for people under 100 years of age) in the short year format', assert => {
    assert.equal(formatSwedishPersonalIdentityNumber('80010'), '80010');
    assert.equal(formatSwedishPersonalIdentityNumber('800101'), '19800101-');
    assert.equal(formatSwedishPersonalIdentityNumber('8001011'), '19800101-1');
    assert.equal(formatSwedishPersonalIdentityNumber('80010111'), '19800101-11');
    assert.equal(formatSwedishPersonalIdentityNumber('800101111'), '19800101-111');
    assert.equal(formatSwedishPersonalIdentityNumber('8001011111'), '19800101-1111');
    assert.equal(formatSwedishPersonalIdentityNumber('800101-'), '19800101-');
    assert.equal(formatSwedishPersonalIdentityNumber('800101-1'), '19800101-1');
    assert.equal(formatSwedishPersonalIdentityNumber('800101-11'), '19800101-11');
    assert.equal(formatSwedishPersonalIdentityNumber('800101-111'), '19800101-111');
    assert.equal(formatSwedishPersonalIdentityNumber('800101-1111'), '19800101-1111');
    assert.end();
});

test('personal identity numbers from the 20th century (for people under 100 years of age) in the long year format', assert => {
    assert.equal(formatSwedishPersonalIdentityNumber('19800'), '19800');
    assert.equal(formatSwedishPersonalIdentityNumber('198001'), '198001');
    assert.equal(formatSwedishPersonalIdentityNumber('1980010'), '1980010');
    assert.equal(formatSwedishPersonalIdentityNumber('19800101'), '19800101-');
    assert.equal(formatSwedishPersonalIdentityNumber('198001011'), '19800101-1');
    assert.equal(formatSwedishPersonalIdentityNumber('1980010111'), '19800101-11');
    assert.equal(formatSwedishPersonalIdentityNumber('19800101111'), '19800101-111');
    assert.equal(formatSwedishPersonalIdentityNumber('198001011111'), '19800101-1111');
    assert.equal(formatSwedishPersonalIdentityNumber('19800101-'), '19800101-');
    assert.equal(formatSwedishPersonalIdentityNumber('19800101-1'), '19800101-1');
    assert.equal(formatSwedishPersonalIdentityNumber('19800101-11'), '19800101-11');
    assert.equal(formatSwedishPersonalIdentityNumber('19800101-111'), '19800101-111');
    assert.equal(formatSwedishPersonalIdentityNumber('19800101-1111'), '19800101-1111');
    assert.end();
});

test('personal identity numbers from the 21st century (for people under 100 years of age) in the short year format', assert => {
    assert.equal(formatSwedishPersonalIdentityNumber('10010'), '10010');
    assert.equal(formatSwedishPersonalIdentityNumber('100101'), '20100101-');
    assert.equal(formatSwedishPersonalIdentityNumber('1001011'), '20100101-1');
    assert.equal(formatSwedishPersonalIdentityNumber('10010111'), '20100101-11');
    assert.equal(formatSwedishPersonalIdentityNumber('100101111'), '20100101-111');
    assert.equal(formatSwedishPersonalIdentityNumber('1001011111'), '20100101-1111');
    assert.equal(formatSwedishPersonalIdentityNumber('100101-'), '20100101-');
    assert.equal(formatSwedishPersonalIdentityNumber('100101-1'), '20100101-1');
    assert.equal(formatSwedishPersonalIdentityNumber('100101-11'), '20100101-11');
    assert.equal(formatSwedishPersonalIdentityNumber('100101-111'), '20100101-111');
    assert.equal(formatSwedishPersonalIdentityNumber('100101-1111'), '20100101-1111');
    assert.end();
});

test('personal identity numbers from the 21st century (for people under 100 years of age) in the long year format', assert => {
    assert.equal(formatSwedishPersonalIdentityNumber('20100'), '20100');
    assert.equal(formatSwedishPersonalIdentityNumber('201001'), '201001');
    assert.equal(formatSwedishPersonalIdentityNumber('2010010'), '2010010');
    assert.equal(formatSwedishPersonalIdentityNumber('20100101'), '20100101-');
    assert.equal(formatSwedishPersonalIdentityNumber('201001011'), '20100101-1');
    assert.equal(formatSwedishPersonalIdentityNumber('2010010111'), '20100101-11');
    assert.equal(formatSwedishPersonalIdentityNumber('20100101111'), '20100101-111');
    assert.equal(formatSwedishPersonalIdentityNumber('201001011111'), '20100101-1111');
    assert.equal(formatSwedishPersonalIdentityNumber('20100101-'), '20100101-');
    assert.equal(formatSwedishPersonalIdentityNumber('20100101-1'), '20100101-1');
    assert.equal(formatSwedishPersonalIdentityNumber('20100101-11'), '20100101-11');
    assert.equal(formatSwedishPersonalIdentityNumber('20100101-111'), '20100101-111');
    assert.equal(formatSwedishPersonalIdentityNumber('20100101-1111'), '20100101-1111');
    assert.end();
});

test('should never contain more than 13 characters', assert => {
    assert.equal(formatSwedishPersonalIdentityNumber('21000101-1111'), '19210001-0111');
    assert.end();
});
