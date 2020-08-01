# regex-examples

__phone number:__

    '/^[\\d\\.]+$/'

https://twig.symfony.com/doc/2.x/templates.html#comparisons



### exec

    var string = "casa, castanha, carpinteiro, cana de açucar, cama, casar, cavalo.",
        pattern = /ca.a/g,
        resultado;

    // Executa nossa expressão
    while(resultado = pattern.exec(string)){
        console.log("casou", resultado);
    }


### match

    var string = "casa, castanha, carpinteiro, cana de açucar, cama, casar, cavalo.",
        pattern = /ca.a/g,
        resultado,
        i;

    // Executa nossa expressão
    resultado = string.match(pattern)

    for(i = 0; i < resultado.length; i++){
        console.log(resultado[i]);
    }


### test

    var string = "casa, castanha, carpinteiro, cana de açucar, cama, casar, cavalo.",
        pattern = /ca.a/,
        resultado;

    // Executa nossa expressão
    resultado = pattern.test(string);

    if (resultado) {
        console.log("casou", resultado);
    } else {
        console.log("não casou", resultado);
    }

### test bootstratp 5

- https://github.com/twbs/bootstrap/blob/main/js/src/util/index.js#L18

    const toType = obj => {
    if (obj === null || obj === undefined) {
        return `${obj}`
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase()
    }

