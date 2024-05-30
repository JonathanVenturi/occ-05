//votre code ici

function printNumbers(n) {
    let output = '';
    for (let i = 1; i <= n; i++) {
        output = output + i;
        if (i < n) {
            output = output + ' ';
        }
    }
    return output;
}

export default printNumbers
