

//alternative solution
/* function printPyramd(levels) {
    let maxDigit = levels.toString().length;

    for (let i = 1; i <= levels; i++) {
        let row = document.createElement('div');
        row.classList.add('pyramid-row');
        for (let j = levels; j >= i; j--) {
            row.innerHTML += "&nbsp;&nbsp;";
        }
        for (let k = 1; k <= i; k++) {
            let num = i.toString().padStart(maxDigit, ' ');
            let numberSpan = document.createElement('span');
            numberSpan.classList.add('pyramid-number');
            numberSpan.textContent = num + " ";
            if (i % 2 === 0) {
                numberSpan.classList.add('pyramid-even');
            } else {
                numberSpan.classList.add('pyramid-odd');
            }
            row.appendChild(numberSpan);
        }
        document.body.appendChild(row);
    }
}

let amount = parseInt(prompt("Enter the number of pyramid levels: "));
printPyramd(amount); */
function printPyramd(levels) {
    let colorIndex = 1;
    const colors = ['color-1', 'color-2'];

    for (let i = 1; i <= levels; i++) {
        let row = document.createElement('div');
        row.classList.add('pyramid-row');
        for (let j = levels; j >= i; j--) {
            row.innerHTML += "&nbsp;&nbsp;";
        }
        for (let k = 1; k <= i; k++) {
            let block = document.createElement('div');
            block.classList.add('pyramid-block');
            block.classList.add(colors[colorIndex % colors.length]);
            row.appendChild(block);
            colorIndex++;
        }
        document.body.appendChild(row);
    }
}

let amount = parseInt(prompt("Enter the number of pyramid levels: "));
printPyramd(amount);

