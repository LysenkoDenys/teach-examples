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
  const minimum = +minimumNode.value || 0;
  const maximum = +maximumNode.value || 21;
  const quantity = +quantityNode.value || 10;
  if (minimum === '' || !maximum || !quantity) {
    alert('some of parameters are not defined');
  }
  if (quantity > 1000 || maximum > 1000000) {
    return alert('it is too much for you son...');
  }

  olNode.innerHTML = '';
  randomExamples(minimum, maximum, quantity).map((el, index) =>
    olNode.insertAdjacentHTML(
      'beforeend',
      `<div class='item-example'><div class='item-example-num'>${
        index + 1
      }</div>${el}</div>`
    )
  );
});

btn2Node.addEventListener('click', () => {
  minimumNode.value = '';
  maximumNode.value = '';
  quantityNode.value = '';
  olNode.innerHTML = '';
});
