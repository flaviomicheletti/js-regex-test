const test = require('ava');

//
//    /\.(js|jsx)$/g
//
let pattern = /\.(js|jsx)$/g;
let text = "file.jsx";

// arquivos terminados em
test('pattern.test, files ending in .js .jx ', t => {

    let text = "file.jsx";
    let result = pattern.test(text);
    t.true(result);

    let next = pattern.test(text);
    t.false(next);

    t.pass();

});

// arquivos terminados em
test('pattern.exec, files ending in .js .jx', t => {

    let result = pattern.exec(text);

    t.is(result[0], '.jsx');
    t.is(result[1], 'jsx');
    t.is(result['index'], 4);
    t.is(result['input'], text);
    t.is(result['grups'], undefined);

    t.pass();
});

