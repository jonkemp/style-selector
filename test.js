/*eslint-disable */

const assert = require('assert');
const sel = require('./');

describe('selector', () => {
    it('should return an object', () => {
        const selector = sel('body', [ 0, 0, 0, 1 ]);
        assert(selector);
        assert.equal(selector.text, 'body');
        assert.deepEqual(selector.spec, [ 0, 0, 0, 1 ]);
    });
});

describe('selector.parsed', () => {
    it('should get parsed selector', () => {
        const selector = sel('body');
        assert(selector.parsed());
        assert.equal(selector.parsed()['0'].tag, 'body');
        assert.equal(selector.parsed().length, 1);
    });
});

describe('selector.specificity', () => {
    it('should get specificity', () => {
        const selector = sel('body');
        assert.deepEqual(selector.specificity(), [ 0, 0, 0, 1 ]);
    });
});
