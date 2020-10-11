const data = [
  {
    id: 1,
    pathImage: 'images/\/pizza-pluse.jpg',
    altImage: 'pizza-pluse',
    cardTitle: 'Пицца-плюс',
    time: '35 мин',
    rating: '4.7',
    price: 'от 900 Р',
    category: 'Пицца',
  },
  {
    id: 2,
    pathImage: 'images/\/tanuki.jpg',
    altImage: 'tanuki',
    cardTitle: 'Тануки',
    time: '55 мин',
    rating: '5.0',
    price: 'от 550 Р',
    category: 'Пельмени',
  },
  {
    id: 3,
    pathImage: 'images/\/foodband.jpg',
    altImage: 'foodband',
    cardTitle: 'FoodBand',
    time: '40 мин',
    rating: '4.3',
    price: 'от 1000 Р',
    category: 'Шаурма',
  },
  {
    id: 4,
    pathImage: 'images/\/jadina-pizza.jpg',
    altImage: 'jadina-pizza',
    cardTitle: 'Жадина-пицца',
    time: '45 мин',
    rating: '4.8',
    price: 'от 800 Р',
    category: 'Суши',
  },
  {
    id: 5,
    pathImage: 'images/\/tochka-edi.jpg',
    altImage: 'tochka-edi',
    cardTitle: 'Точка еды',
    time: '30 мин',
    rating: '4.6',
    price: 'от 750 Р',
    category: 'Русская кухня',
  },
  {
    id: 6,
    pathImage: 'images/\/pizza-burg.jpg',
    altImage: 'pizza-burg',
    cardTitle: 'PizzaBurger',
    time: '50 мин',
    rating: '4.5',
    price: 'от 1100 Р',
    category: 'Пицца',
  }
];

const createVNode = (tagName, props = {}, children = []) => {
  return {
    tagName,
    props,
    children
  };
};

const vNode = createVNode('div', { class: 'card' }, [
  createVNode('img', { src: 'images/\pizza-burg.jpg', alt: 'pizza-pluse', class: 'card-image'}),
  createVNode('div', { class: 'card-text' }, [
    createVNode('div', { class: 'card-heading' }, [
      createVNode('h3', { class: 'card-title' }, ['PizzaBurg']),
      createVNode('span', { class: 'card-tag tag'}, ['50 мин'])
    ]),
    createVNode('div', { class: 'card-info' }, [
      createVNode('div', { class: 'rating' }, [
        createVNode('img', { src: 'images/\star-fill.svg', alt: 'star-rating' }),
        '4.5',
      ]),
      createVNode('div', { class: 'price' }, ['от 1000 Р']),
      createVNode('div', { class: 'category' }, ['Пицца'])
    ]),
  ]),
]);

console.log(vNode);

const createDOMNode = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const { tagName, props, children } = vNode;
  const node = document.createElement(tagName);

  Object.entries(props).forEach(([ key, value ]) => {
    node.setAttribute(key, value);
  });

  children.forEach((child) => {
    node.appendChild(createDOMNode(child));
  });

  return node;
};

console.log(createDOMNode(vNode));

const cards = document.querySelector('.cards');

data.map((item) => {
  const { pathImage, altImage, cardTitle, time, rating, price, category } = item;
  
  const element = createVNode('div', { class: 'card' }, [
    createVNode('img', { src: pathImage, alt: altImage, class: 'card-image'}),
    createVNode('div', { class: 'card-text' }, [
      createVNode('div', { class: 'card-heading' }, [
        createVNode('h3', { class: 'card-title' }, [cardTitle]),
        createVNode('span', { class: 'card-tag tag'}, [time])
      ]),
      createVNode('div', { class: 'card-info' }, [
        createVNode('div', { class: 'rating' }, [
          createVNode('img', { src: 'images/\star-fill.svg', alt: 'star-rating' }),
          rating,
        ]),
        createVNode('div', { class: 'price' }, [price]),
        createVNode('div', { class: 'category' }, [category])
      ]),
    ]),
  ]);

  cards.append(createDOMNode(element));
});