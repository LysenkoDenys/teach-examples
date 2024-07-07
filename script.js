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

// get random numbers:
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
// generate examples:
const generateExamples = (min, max, qty, operation) => {
  const maxTime = 10000; // 10 seconds in milliseconds
  const startTime = Date.now();
  let arrNew = new Set();

  while (arrNew.size < qty) {
    const a = getRandomInt(min, max);
    const b = getRandomInt(min, max);
    let example;

    switch (operation) {
      case 'addition':
        example =
          a + b <= max
            ? `${a} + ${b} = `
            : a > b
            ? `${a} - ${b} = `
            : `${b} - ${a} = `;
        break;
      case 'multiplication':
        if (a * b <= max) {
          example = `${a} * ${b} = `;
        } else if (a % b === 0) {
          example = `${a} / ${b} = `;
        } else if (b % a === 0) {
          example = `${b} / ${a} = `;
        }
        break;
    }

    if (example) {
      arrNew.add(example);
    }

    if (Date.now() - startTime > maxTime) {
      alert(
        'Loop exited after running for more than 10 seconds because qty is greater than distinct variants'
      );
      break;
    }
  }

  return [...arrNew];
};
// default parameters:
const getParameters = () => {
  const minimum = +elements.minimumNode.value || 0;
  const maximum = +elements.maximumNode.value || 21;
  const quantity = +elements.quantityNode.value || 10;

  if (!maximum || !quantity) {
    alert('Some of the parameters are not defined');
    return null;
  }

  if (quantity > 100 || maximum > 1000000) {
    alert(
      'It is too much for you son... max quantity is 100, maximum number is 1 000 000'
    );
    return null;
  }

  return { minimum, maximum, quantity };
};
//item block:
const getItemBlock = (el, index, blockType) => {
  return `<div class='container-item' id='${index + 1}'>
  <div class='item-example-num'>${index + 1}</div>
  <div class='item-example${
    blockType === 'example' ? '' : '-proverb'
  }'>${el}</div>
  </div>`;
};
//animation:
const getAnimation = (type) => {
  return anime({
    targets: '.container-item',
    translateX: [
      { value: type === 'addition' ? -1000 : 1000, duration: 0 },
      { value: 0, duration: 2000 },
    ],
    delay: (el, i) => i * 100,
  });
};
//toggle answer:
const toggleAnswer = (id, isAnswerShowed) => {
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
};
//timer:
let timeElapsed = 0;
let timerInterval;
const startTimer = () => {
  timerInterval = setInterval(() => {
    timeElapsed++;
    updateTimerDisplay(timeElapsed);
  }, 1000);
};

function updateTimerDisplay(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById('timer').textContent = `${padZero(minutes)}:${padZero(
    seconds
  )}`;
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

function resetTimer() {
  clearInterval(timerInterval);
  timeElapsed = 0;
  // isRunning = false;
  document.getElementById('timer').textContent = '00:00';
}

//1 addition
elements.btn0Node.addEventListener('click', () => {
  const params = getParameters();
  if (!params) return;
  resetTimer();
  startTimer();
  elements.olNode.innerHTML = '';
  elements.olNode.style.display = 'grid';

  generateExamples(
    params.minimum,
    params.maximum,
    params.quantity,
    'addition'
  ).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      getItemBlock(el, index, 'example')
    )
  );
  getAnimation('addition');

  //get the answer:
  const exampleNodes = document.querySelectorAll('.container-item');
  exampleNodes.forEach((node) => {
    let isAnswerShowed = false;
    // Store the original example text in a data attribute
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', function (event) {
      const id = +event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;
      toggleAnswer(id, isAnswerShowed);
    });
  });
});

//2 multiplication:
elements.btn1Node.addEventListener('click', () => {
  const params = getParameters();
  if (!params) return;
  resetTimer();
  startTimer();
  elements.olNode.innerHTML = '';
  elements.olNode.style.display = 'grid';

  generateExamples(
    params.minimum,
    params.maximum,
    params.quantity,
    'multiplication'
  ).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      getItemBlock(el, index, 'example')
    )
  );
  getAnimation('multiplication');

  //get the answer:
  const exampleNodes = document.querySelectorAll('.container-item');
  exampleNodes.forEach((node) => {
    let isAnswerShowed = false;
    // Store the original example text in a data attribute
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', function (event) {
      const id = +event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;
      toggleAnswer(id, isAnswerShowed);
    });
  });
});

//3 proverb
function getRandomProverbs(qty = 10) {
  const proverbsSet = new Set();

  while (proverbsSet.size < qty) {
    let indexProverb = Math.floor(Math.random() * db.length);
    proverbsSet.add(db[indexProverb].proverb);
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
  resetTimer();
  startTimer();
  elements.olNode.style.display = 'flex';
  elements.olNode.style.flexDirection = 'column';

  elements.olNode.innerHTML = '';
  getRandomProverbs(quantity).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      getItemBlock(el, index, 'proverb')
    )
  );
  getAnimation('proverb');

  //get the explanation:
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

//4 reset:
elements.btn2Node.addEventListener('click', () => {
  resetTimer();
  anime({
    targets: '.container-item',
    translateX: [{ value: 2000, duration: 2000 }],
    delay: (el, i) => i * 100,
  });
  elements.minimumNode.value = '';
  elements.maximumNode.value = '';
  elements.quantityNode.value = '';
  setTimeout(() => {
    elements.olNode.innerHTML = '';
  }, 2000);
});

//* generic random function
//* generic anime
//* generic answer eval
//* generic styles
