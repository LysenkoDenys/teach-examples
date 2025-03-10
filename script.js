import db from './db.js';
import dbEn from './dbEn.js';
import dbCz from './dbCz.js';
import dbJp from './dbJp.js';

const elements = {
  olNode: document.getElementById('listOfExamples'),
  btn0Node: document.getElementById('generator0'),
  btn1Node: document.getElementById('generator1'),
  btn2Node: document.getElementById('reset'),
  btn3Node: document.getElementById('proverb'),
  btn4Node: document.getElementById('en'),
  btn5Node: document.getElementById('cz'),
  btn6Node: document.getElementById('jp'),
  minimumNode: document.getElementById('min'),
  maximumNode: document.getElementById('max'),
  quantityNode: document.getElementById('qty'),
  timerNode: document.getElementById('timer'),
  h1Node: document.getElementById('h1'),
  modalContainerNode: document.getElementById('modal_container'),
  closeButtonNode: document.getElementById('close'),
};

const colors = {
  answer: 'rgb(238, 246, 97)',
  visited: 'rgb(19, 128, 231)',
  runningTimer: 'rgba(127, 116, 116, 60%)',
  pausedTimer: 'rgba(64, 64, 64, 80%)',
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

const getItemWordsBlock = (el1, el2, index) => {
  return `<div class='container-item' id='${index + 1}'>
  <div class='item-example-num'>${index + 1}</div>
  <div class='item-example-proverb'>${el1}</div>
  <div class='item-example-tip'>context: ${el2}</div>
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
let isRunning = false;

const startTimer = () => {
  // if (isRunning) return;
  isRunning = true;
  elements.timerNode.style.backgroundColor = colors.runningTimer;
  timerInterval = setInterval(() => {
    timeElapsed++;
    updateTimerDisplay(timeElapsed);
  }, 1000);
};

function pauseTimer() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timerInterval);
  elements.timerNode.style.backgroundColor = colors.pausedTimer;
}

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
  document.getElementById('timer').textContent = '00:00';
  elements.timerNode.style.backgroundColor = colors.runningTimer;
}

// utility function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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

//3.1. proverb:
function getRandomProverbs(qty = 10) {
  const shuffledProverbs = shuffleArray([...db]); // clone and shuffle the array
  return shuffledProverbs.slice(0, qty).map((item) => item.proverb);
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

//3.2. en:
function getRandomWords(qty = 10) {
  const shuffledWords = shuffleArray([...dbEn]); // clone and shuffle the array
  return shuffledWords.slice(0, qty).map((item) => [item.en, item.context]);
}

elements.btn4Node.addEventListener('click', () => {
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
  getRandomWords(quantity).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      getItemWordsBlock(el[0], el[1], index)
    )
  );
  getAnimation('proverb');

  //get the ua word:
  const exampleNodes = document.querySelectorAll('.container-item');

  exampleNodes.forEach((node) => {
    let isAnswerShowed = false;
    // Store the original english word in a data attribute
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', function (event) {
      const id = event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;

      const example = document.getElementById(id);
      const originalText = example.dataset.originalText;

      const wordText2Find = originalText
        .replace(/\d/g, '')
        .replace(/context:.*/, '')
        .trim();
      const index = dbEn.findIndex((el) => el.en === wordText2Find);

      if (isAnswerShowed) {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example-proverb'>${dbEn[index].ua}</div><div class='item-example-tip'>association: ${dbEn[index].association}</div>`;
        example.style.color = colors.answer;
      } else {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example-proverb'>${originalText
          .replace(/\d/g, '')
          .replace(/context:.*/, '')
          .trim()}</div><div class='item-example-tip'>context:${
          dbEn[index].context
        }</div>`;
        example.style.color = colors.visited;
      }
    });
  });
});

//3.3. cz:
// function getRandomWordsCz(qty = 10) {
//   const wordsSet = new Set();

//   while (wordsSet.size < qty) {
//     let indexWord = Math.floor(Math.random() * dbCz.length);
//     wordsSet.add([dbCz[indexWord].cz, dbCz[indexWord].context]);
//   }
//   return [...wordsSet];
// }

function getRandomWordsCz(qty = 10) {
  const shuffledWordsCz = shuffleArray([...dbCz]); // clone and shuffle the array
  return shuffledWordsCz.slice(0, qty).map((item) => [item.cz, item.context]);
}

elements.btn5Node.addEventListener('click', () => {
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
  getRandomWordsCz(quantity).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      getItemWordsBlock(el[0], el[1], index)
    )
  );
  getAnimation('proverb');

  //get the ua word:
  const exampleNodes = document.querySelectorAll('.container-item');

  exampleNodes.forEach((node) => {
    let isAnswerShowed = false;
    // Store the original english word in a data attribute
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', function (event) {
      const id = event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;

      const example = document.getElementById(id);
      const originalText = example.dataset.originalText;

      const wordText2Find = originalText
        .replace(/\d/g, '')
        .replace(/context:.*/, '')
        .trim();
      const index = dbCz.findIndex((el) => el.cz === wordText2Find);

      if (isAnswerShowed) {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example-proverb'>${dbCz[index].ua}</div><div class='item-example-tip'>association: ${dbCz[index].association}</div>`;
        example.style.color = colors.answer;
      } else {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example-proverb'>${originalText
          .replace(/\d/g, '')
          .replace(/context:.*/, '')
          .trim()}</div><div class='item-example-tip'>context:${
          dbCz[index].context
        }</div>`;
        example.style.color = colors.visited;
      }
    });
  });
});

//3.4. jp:
// function getRandomWordsCz(qty = 10) {
//   const wordsSet = new Set();

//   while (wordsSet.size < qty) {
//     let indexWord = Math.floor(Math.random() * dbCz.length);
//     wordsSet.add([dbCz[indexWord].cz, dbCz[indexWord].context]);
//   }
//   return [...wordsSet];
// }

function getRandomWordsJp(qty = 10) {
  const shuffledWordsJp = shuffleArray([...dbJp]); // clone and shuffle the array
  return shuffledWordsJp.slice(0, qty).map((item) => [item.jp, item.context]);
}

elements.btn6Node.addEventListener('click', () => {
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
  getRandomWordsJp(quantity).map((el, index) =>
    elements.olNode.insertAdjacentHTML(
      'beforeend',
      getItemWordsBlock(el[0], el[1], index)
    )
  );
  getAnimation('proverb');

  //get the ua word:
  const exampleNodes = document.querySelectorAll('.container-item');

  exampleNodes.forEach((node) => {
    let isAnswerShowed = false;
    // Store the original english word in a data attribute
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', function (event) {
      const id = event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;

      const example = document.getElementById(id);
      const originalText = example.dataset.originalText;

      const wordText2Find = originalText
        .replace(/\d/g, '')
        .replace(/context:.*/, '')
        .trim();
      const index = dbJp.findIndex((el) => el.jp === wordText2Find);

      if (isAnswerShowed) {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example-proverb'>${dbJp[index].ua}</div><div class='item-example-tip'>association: ${dbJp[index].association}</div>`;
        example.style.color = colors.answer;
      } else {
        example.innerHTML = `<div class='item-example-num'>${id}</div><div class='item-example-proverb'>${originalText
          .replace(/\d/g, '')
          .replace(/context:.*/, '')
          .trim()}</div><div class='item-example-tip'>context:${
          dbJp[index].context
        }</div>`;
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

//5 timer:
elements.timerNode.addEventListener('click', () => {
  isRunning ? pauseTimer() : startTimer();
});

//6 cheer:
elements.h1Node.addEventListener('click', () => {
  elements.modalContainerNode.classList.add('show');
});

elements.closeButtonNode.addEventListener('click', () => {
  elements.modalContainerNode.classList.remove('show');
});

// TODO:
// 1. the same random numbers issue: proverb/en/cz/jp
