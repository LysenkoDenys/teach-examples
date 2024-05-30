const olNode = document.getElementById('listOfExamples');
const btn1Node = document.getElementById('generator');
const btn2Node = document.getElementById('reset');
const minimumNode = document.getElementById('min');
const maximumNode = document.getElementById('max');
const quantityNode = document.getElementById('qty');

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
  const minimum = +minimumNode.value;
  const maximum = +maximumNode.value;
  const quantity = +quantityNode.value;
  if (!minimum || !maximum || !quantity) {
    alert('some of parameters are not defined');
  }

  olNode.innerHTML = '';
  randomExamples(minimum, maximum, quantity).map((el) =>
    olNode.insertAdjacentHTML(
      'beforeend',
      `<div class='item-example'>${el}</div>`
    )
  );
});

btn2Node.addEventListener('click', () => {
  minimumNode.value = '';
  maximumNode.value = '';
  quantityNode.value = '';
  olNode.innerHTML = '';
});
