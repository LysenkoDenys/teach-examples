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
  if (quantity > 100 || maximum > 1000000) {
    return alert('it is too much for you son...');
  }

  olNode.innerHTML = '';
  randomExamples(minimum, maximum, quantity).map((el, index) =>
    olNode.insertAdjacentHTML(
      'beforeend',
      `<div class='item-example' id='${
        index + 1
      }'><div class='item-example-num'>${index + 1}</div>${el}</div>`
    )
  );
  anime({
    targets: '.item-example',
    translateX: [
      { value: -1000, duration: 0 },
      { value: 0, duration: 2000 },
    ],
    delay: function (el, i, l) {
      return i * 100;
    },
  });
  //get the answer:
  const exampleNodes = document.querySelectorAll('.item-example');
  exampleNodes.forEach((node) => {
    node.addEventListener('click', function (event) {
      if (!/=/.test(event.currentTarget.textContent.toString())) {
        return;
      }
      const answer =
        +event.currentTarget.id > 9
          ? eval(
              event.currentTarget.textContent
                .toString()
                .slice(2)
                .replace('=', '')
                .trim()
            )
          : eval(
              event.currentTarget.textContent
                .toString()
                .slice(1)
                .replace('=', '')
                .trim()
            );
      const example = document.getElementById(event.currentTarget.id);
      example.innerText = answer;
    });
  });
});

btn2Node.addEventListener('click', () => {
  anime({
    targets: '.item-example',
    translateX: [{ value: 2000, duration: 2000 }],
    delay: function (el, i, l) {
      return i * 100;
    },
  });
  minimumNode.value = '';
  maximumNode.value = '';
  quantityNode.value = '';
  setTimeout(() => {
    olNode.innerHTML = '';
  }, 2000);
});
