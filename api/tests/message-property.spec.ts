var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('MessageProperty unit tests:', () => {
    it('Should create a MessageProperty instance', (done: Function) => {
        api.post('/MessageProperties').send({
            key: 'test',
            value: 'test'
        }).expect(200, done);
    });
});
