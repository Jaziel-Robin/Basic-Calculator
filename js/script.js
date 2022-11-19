window.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.calculator-screen');
    const addBtn = document.querySelector('#add');
    const subBtn = document.querySelector('#sub');
    const mulBtn = document.querySelector('#mul');
    const divBtn = document.querySelector('#div');
    const seven = document.querySelector('#seven');
    const eight = document.querySelector('#eight');
    const nine = document.querySelector('#nine');
    const four = document.querySelector('#four');
    const five = document.querySelector('#five');
    const six = document.querySelector('#six');
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');
    const zero = document.querySelector('#zero');
    const decBtn = document.querySelector('#dec');
    const ceBtn = document.querySelector('#ce');
    const eqBtn = document.querySelector('#eq');

    const buttons = [
        addBtn,
        subBtn,
        mulBtn,
        divBtn,
        seven,
        eight,
        nine,
        four,
        five,
        six,
        one,
        two,
        three,
        zero,
        decBtn,
        ceBtn,
        eqBtn
    ];

    const numbers = [
        seven,
        eight,
        nine,
        four,
        five,
        six,
        one,
        two,
        three,
        zero
    ];

    const operators = [
        addBtn,
        subBtn,
        mulBtn,
        divBtn,
        ceBtn,
        eqBtn
    ];

    var result;
    var isZero = false;

    numbers.forEach((number) => {
        number.onclick = () => {
            ceBtn.innerHTML = 'CE';
            ceBtn.value = 'clear-entry';
            if (display.value === '0') {
                display.value = '';
            }
            if (number.value === '0') {
                isZero = true;
            }
            display.value += number.value;
        };
    });

    operators.forEach((operator) => {
        operator.onclick = () => {
            if (operator.value === 'all-clear') {
                display.value = '0';
                ceBtn.innerHTML = 'CE';
                ceBtn.value = 'clear-entry';
            } else if (operator.value === 'clear-entry') {
                var exp = display.value.split('');
                if (exp[exp.length - 1] === ' ') {
                    exp.pop();
                    exp.pop();
                } else if (exp[exp.length - 1] === `${operator.value}`) {
                    exp.pop();
                    exp.pop();
                    exp.pop();
                } else {
                    exp.pop();
                }
                exp = exp.join('').trim();
                if (exp === '') {
                    exp = '0';
                }
                display.value = exp;
            } else {
                if (operator.value === '=') {
                    if (display.value === '' || display.value === '0') {
                        display.value = '0';
                    } else {
                        try {
                            result = eval(display.value);
                        } catch (err) {
                            result = err.name;
                        }
                        display.value = result;
                    }
                    ceBtn.innerHTML = 'AC';
                    ceBtn.value = 'all-clear';
                } else {
                    if (isZero) {
                        display.value += ' ' + operator.value + ' ';
                    } else {
                        if (display.value === '0') {
                            display.value = '';
                        }
                        display.value += ' ' + operator.value + ' ';
                        isZero = true;
                    }
                    ceBtn.innerHTML = 'CE';
                    ceBtn.value = 'clear-entry';
                }
            }
        };
    });

    decBtn.onclick = () => {
        ceBtn.innerHTML = 'CE';
        ceBtn.value = 'clear-entry';
        display.value += '.';
    };

    var timeoutId = 0;

    $('#ce').on('mousedown', function() {
        timeoutId = setTimeout(clearInput, 600);
    }).on('mouseup mouseleave', function() {
        clearTimeout(timeoutId);
    });

    function clearInput() {
        display.value = '';
    }
});

// function disablePage() {
//     buttons.forEach((button) => (button.disabled = true));
// }

// function enablePage() {
//     buttons.forEach((button) => (button.disabled = false));
// }

// this.setTimeout(() => {
//     disablePage();
// }, 3000);
