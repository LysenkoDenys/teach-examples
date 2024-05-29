const olNode = document.getElementById('listOfExamples');
const btn1Node = document.getElementById('generator');

function randomExamples(min = 1, max = 20, qty = 10) {
  let arrNew = [];
  while (arrNew.length < qty) {
    let a = min + Math.floor(Math.random() * max);
    let b = min + Math.floor(Math.random() * max);
    if (a + b <= max) {
      arrNew.push(`${a} + ${b} = `); //${a + b}
    } else if (a > b) {
      arrNew.push(`${a} - ${b} = `); //${a - b}
    } else {
      arrNew.push(`${b} - ${a} = `); //${b - a}
    }
  }
  return arrNew;
}

btn1Node.addEventListener('click', () => {
  olNode.innerHTML = '';
  randomExamples().map((el) =>
    olNode.insertAdjacentHTML(
      'beforeend',
      `<div class='item-example'>${el}</div>`
    )
  );
});

//parameters
