const olNode = document.getElementById('listOfExamples');
const btn0Node = document.getElementById('generator0');
const btn1Node = document.getElementById('generator1');
const btn2Node = document.getElementById('reset');
const minimumNode = document.getElementById('min');
const maximumNode = document.getElementById('max');
const quantityNode = document.getElementById('qty');

//1
function randomExamples0(min = 1, max = 20, qty = 10) {
  const maxTime = 10000; // 10 seconds in milliseconds
  const startTime = Date.now();
  let counter = 0;
  let arrNew = [];
  while (arrNew.length < qty) {
    let a = Math.round(min + Math.ceil(Math.random() * max));
    let b = Math.round(min + Math.ceil(Math.random() * max));
    if (a + b <= max) {
      arrNew.push(`${a} + ${b} = `);
    } else if (a > b) {
      arrNew.push(`${a} - ${b} = `);
    } else {
      arrNew.push(`${b} - ${a} = `);
    }
    arrNew = [...new Set(arrNew)];
    counter++;
    // Check elapsed time
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    // Break the loop if it runs for more than 10 seconds
    if (elapsedTime > maxTime) {
      alert(
        'Loop exited after running for more than 10 seconds because qty is greater than distinct variants'
      );
      break;
    }
  }
  return arrNew;
}

btn0Node.addEventListener('click', () => {
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
  randomExamples0(minimum, maximum, quantity).map((el, index) =>
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
      const id = +event.currentTarget.id;
      const answer =
        id < 10
          ? eval(
              event.currentTarget.textContent
                .toString()
                .slice(1)
                .replace('=', '')
                .trim()
            )
          : id >= 10 && id < 100
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
                .slice(3)
                .replace('=', '')
                .trim()
            );
      const example = document.getElementById(event.currentTarget.id);
      example.innerText = answer;
    });
  });
});

//2
function randomExamples1(min = 1, max = 20, qty = 10) {
  const maxTime = 10000; // 10 seconds in milliseconds
  const startTime = Date.now();
  let counter = 0;
  let arrNew = [];
  while (arrNew.length < qty) {
    let a = Math.round(min + Math.ceil(Math.random() * max));
    let b = Math.round(min + Math.ceil(Math.random() * max));
    if (a * b <= max) {
      arrNew.push(`${a} * ${b} = `);
    } else if (a * b > max && a % b === 0) {
      arrNew.push(`${a} / ${b} = `);
    } else if (a * b > max && b % a === 0) {
      arrNew.push(`${b} / ${a} = `);
    }
    arrNew = [...new Set(arrNew)];
    counter++;
    // Check elapsed time
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    // Break the loop if it runs for more than 10 seconds
    if (elapsedTime > maxTime) {
      alert(
        'Loop exited after running for more than 10 seconds because qty is greater than distinct variants'
      );
      break;
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
    return alert(
      'it is too much for you son... max quantity is 100, maximum number is 1 000 000'
    );
  }

  olNode.innerHTML = '';
  randomExamples1(minimum, maximum, quantity).map((el, index) =>
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
      { value: 1000, duration: 0 },
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
      const id = +event.currentTarget.id;
      const answer =
        id < 10
          ? eval(
              event.currentTarget.textContent
                .toString()
                .slice(1)
                .replace('=', '')
                .trim()
            )
          : id >= 10 && id < 100
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
                .slice(3)
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

//set
