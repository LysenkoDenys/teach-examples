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

const getRandomInt = (min, max) =>
  Math.round(min + Math.ceil(Math.random() * max));

const generateExamples = (min, max, qty, operation) => {
  const maxTime = 10000;
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

const insertExamples = (examples, container, isProverb = false) => {
  container.innerHTML = '';
  container.style.display = isProverb ? 'flex' : 'grid';
  container.style.flexDirection = isProverb ? 'column' : 'initial';

  examples.forEach((el, index) => {
    container.insertAdjacentHTML(
      'beforeend',
      `<div class='item-example${isProverb ? '-proverb' : ''}' id='${
        index + 1
      }'><div class='item-example-num'>${index + 1}</div>${el}</div>`
    );
  });

  anime({
    targets: `.item-example${isProverb ? '-proverb' : ''}`,
    translateX: [
      { value: 1000, duration: 0 },
      { value: 0, duration: 2000 },
    ],
    delay: (el, i) => i * 100,
  });
};

const addAnswerEventListeners = (selector, isProverb = false) => {
  document.querySelectorAll(selector).forEach((node) => {
    let isAnswerShowed = false;
    node.dataset.originalText = node.innerText;

    node.addEventListener('click', (event) => {
      const id = +event.currentTarget.id;
      isAnswerShowed = !isAnswerShowed;

      const example = document.getElementById(id);
      const originalText = example.dataset.originalText;

      if (isAnswerShowed) {
        const content = originalText.replace(/^\d+\s*/, '').trim();
        const answer = isProverb
          ? db.find((el) => el.proverb === content)?.meaning
          : eval(content.replace('=', '').trim());
        example.innerHTML = `<div class='item-example-num'>${id}</div>${answer}</div>`;
        example.style.color = colors.answer;
      } else {
        example.innerHTML = `<div class='item-example-num'>${id}</div>${originalText.replace(
          /^\d+\s*/,
          ''
        )}</div>`;
        example.style.color = colors.visited;
      }
    });
  });
};

const handleButtonClick = (operation) => {
  const min = +elements.minimumNode.value || 1;
  const max = +elements.maximumNode.value || 21;
  const qty = +elements.quantityNode.value || 10;

  if (!min || !max || !qty || qty > 100 || max > 1000000) {
    return alert('Invalid parameters or limits exceeded.');
  }

  const examples = generateExamples(min, max, qty, operation);
  insertExamples(examples, elements.olNode);
  addAnswerEventListeners('.item-example');
};

elements.btn0Node.addEventListener('click', () =>
  handleButtonClick('addition')
);
elements.btn1Node.addEventListener('click', () =>
  handleButtonClick('multiplication')
);

elements.btn3Node.addEventListener('click', () => {
  const qty = +elements.quantityNode.value || 10;
  if (qty <= 0 || qty > 100)
    return alert('Quantity must be between 1 and 100.');

  const proverbs = Array.from(
    { length: qty },
    () => db[Math.floor(Math.random() * db.length)].proverb
  );
  insertExamples(proverbs, elements.olNode, true);
  addAnswerEventListeners('.item-example-proverb', true);
});

elements.btn2Node.addEventListener('click', () => {
  anime({
    targets: '.item-example, .item-example-proverb',
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
