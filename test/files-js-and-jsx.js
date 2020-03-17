var expect = require("expect.js");

describe('rarquivos terminados', function () {
    describe('em .js .jx', function () {

        //
        //    /\.(js|jsx)$/g
        //
        let pattern = /\.(js|jsx)$/g;

        it('pattern.test', function () {

            let text = "file.jsx";
            let resultado = pattern.test(text);
            expect(resultado).to.equal(true);

            let next = pattern.test(text);
            expect(next).to.equal(false);

        })

        it('pattern.exec', function () {

            let text = "file.jsx";
            let resultado = pattern.exec(text);
            // console.log(resultado);

            expect(resultado[0]).to.equal('.jsx');
            expect(resultado[1]).to.equal('jsx');
            expect(resultado['index']).to.equal(4);
            expect(resultado['input']).to.equal(text);
            expect(resultado['grups']).to.equal(undefined);

        })

    })
})