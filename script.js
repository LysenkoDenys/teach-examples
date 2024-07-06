import db from './db.js';

const elements = {
  olNode: document.getElementById('listOfExamples'),
  btn0Node: document.getElementById('generator0'),
  btn1Node: document.getElementById('generator1'),
  btn2Node: document.getElementById('reset'),
  btn3Node: document.getElementById('proverb'),
  minimumNode: document.getElementById('min'),
  maximumNode: document.getElementById('max'),
  quantityNode: document.getElementById('qty'),
};

const colors = {
  answer: 'rgb(238, 246, 97)',
  visited: 'rgb(19, 128, 231)',
};

//1 addition
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

elements.btn0Node.addEventListener('click', () => {
  const minimum = +elements.minimumNode.value || 0;
  const maximum = +elements.maximumNode.value || 21;
  const quantity = +elements.quantityNode.value || 10;
  if (minimum === '' || !maximum || !quantity) {
    alert('some of parameters are not defined');
  }
  if (quantity > 100 || maximum > 1000000) {
    return alert('it is too much for you son...');
  }

  elements.olNode.innerHTML = '';
  elements.olNode.style.display = 'grid';

  randomExamples0(minimum, maximum, quantity).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      `<div class='container-item' id='${index + 1}'>
      <div class='item-example-num'>${index + 1}</div>
      <div class='item-example'>${el}</div>
      </div>`
    )
  );
  anime({
    targets: '.container-item',
    translateX: [
      { value: -1000, duration: 0 },
      { value: 0, duration: 2000 },
    ],
    delay: function (el, i, l) {
      return i * 100;
    },
  });

  //get the answer:
  const exampleNodes = document.querySelectorAll('.container-item');
  exampleNodes.forEach((node) => {
    let isAnswerShowed = false;
    // Store the original example text in a data attribute
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', function (event) {
      const id = +event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;

      const example = document.getElementById(id);
      const originalExample = example.dataset.originalText;

      if (isAnswerShowed) {
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
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example'>${answer}</div>`;
        example.style.color = colors.answer;
      } else {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example'>${originalExample
          .replace(/^\d+/, '')
          .trim()}</div>`;
        example.style.color = colors.visited;
      }
    });
  });
});

//2 multiplication
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

elements.btn1Node.addEventListener('click', () => {
  const minimum = +elements.minimumNode.value || 0;
  const maximum = +elements.maximumNode.value || 21;
  const quantity = +elements.quantityNode.value || 10;
  if (minimum === '' || !maximum || !quantity) {
    alert('some of parameters are not defined');
  }
  if (quantity > 100 || maximum > 1000000) {
    return alert(
      'it is too much for you son... max quantity is 100, maximum number is 1 000 000'
    );
  }

  elements.olNode.innerHTML = '';
  elements.olNode.style.display = 'grid';

  randomExamples1(minimum, maximum, quantity).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      `<div class='container-item' id='${index + 1}'>
      <div class='item-example-num'>${index + 1}</div>
      <div class='item-example'>${el}</div>
      </div>`
    )
  );
  anime({
    targets: '.container-item',
    translateX: [
      { value: 1000, duration: 0 },
      { value: 0, duration: 2000 },
    ],
    delay: function (el, i, l) {
      return i * 100;
    },
  });

  //get the answer:
  const exampleNodes = document.querySelectorAll('.container-item');
  exampleNodes.forEach((node) => {
    let isAnswerShowed = false;
    // Store the original example text in a data attribute
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', function (event) {
      const id = +event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;

      const example = document.getElementById(id);
      const originalExample = example.dataset.originalText;

      if (isAnswerShowed) {
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
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example'>${answer}</div>`;
        example.style.color = colors.answer;
      } else {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example'>${originalExample
          .replace(/^\d+/, '')
          .trim()}</div>`;
        example.style.color = colors.visited;
      }
    });
  });
});

//3 proverb
function getRandomProverbs(qty = 10) {
  const maxTime = 10000; // 10 seconds in milliseconds
  const startTime = Date.now();
  const proverbsSet = new Set();

  while (proverbsSet.size < qty) {
    let indexProverb = Math.round(1 + Math.ceil(Math.random() * db.length - 1));
    proverbsSet.add(db[indexProverb].proverb);

    // Check elapsed time
    const elapsedTime = Date.now() - startTime;

    // Break the loop if it runs for more than 10 seconds
    if (elapsedTime > maxTime) {
      alert(
        'Loop exited after running for more than 10 seconds because qty is greater than distinct variants'
      );
      break;
    }
  }
  return [...proverbsSet];
}

elements.btn3Node.addEventListener('click', () => {
  const quantity = +elements.quantityNode.value || 10;
  if (quantity <= 0) {
    alert('quantity must be greater than zero');
  }
  if (quantity > 100) {
    return alert('it is too much for you son... max quantity is 100');
  }

  elements.olNode.style.display = 'flex';
  elements.olNode.style.flexDirection = 'column';

  elements.olNode.innerHTML = '';
  getRandomProverbs(quantity).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      `<div class='container-item' id='${index + 1}'>
      <div class='item-example-num'>${index + 1}</div>
      <div class='item-example-proverb'>${el}</div>
      </div>`
    )
  );
  anime({
    targets: '.container-item',
    translateX: [
      { value: 1000, duration: 0 },
      { value: 0, duration: 2000 },
    ],
    delay: function (el, i, l) {
      return i * 100;
    },
  });

  //get the answer:
  //'find in db by proverb and display the explanation'
  const exampleNodes = document.querySelectorAll('.container-item');

  exampleNodes.forEach((node) => {
    let isAnswerShowed = false;
    // Store the original proverb text in a data attribute
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', function (event) {
      const id = event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;

      const example = document.getElementById(id);
      const originalText = example.dataset.originalText;

      if (isAnswerShowed) {
        const proverbText2Find = originalText.replace(/\d/g, '').trim();
        const index = db.findIndex((el) => el.proverb === proverbText2Find);
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example-proverb'>${db[index].meaning}</div>`;
        example.style.color = colors.answer;
      } else {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example-proverb'>${originalText
          .replace(/\d/g, '')
          .trim()}</div>`;
        example.style.color = colors.visited;
      }
    });
  });
});

//4 reset
elements.btn2Node.addEventListener('click', () => {
  anime({
    targets: '.item-example,.item-example-proverb',
    translateX: [{ value: 2000, duration: 2000 }],
    delay: function (el, i, l) {
      return i * 100;
    },
  });
  elements.minimumNode.value = '';
  elements.maximumNode.value = '';
  elements.quantityNode.value = '';
  setTimeout(() => {
    elements.olNode.innerHTML = '';
  }, 2000);
});

// generic random function
// generic anime
// generic styles
