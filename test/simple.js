const test = require('ava');

// deve retirar os traços
test('must remove the traces', t => {

    //
    //    /-/g
    //
    let pattern = /-/g;

    var value = "a-b-c".replace(pattern, "");
    t.is(value, 'abc');

    var value = "2019-04-27".replace(pattern, "");
    t.is(value, '20190427');

    t.pass();

});