var expect = require("expect.js");

describe('regex', function() {
   describe('simples', function() {

       //
       //    /-/g
       //
       it('deve retirar os traços', function() {

           var value = "a-b-c".replace(/-/g, "");
           expect(value).to.equal('abc');

           var value = "2019-04-27".replace(/-/g, "");
           expect(value).to.equal('20190427');

       })
   })
})