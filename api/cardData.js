import client from '../utils/client';

const endpoint = client.databaseURL;

// get cards
const getCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// create card
const createCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// update card
const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// delete card
const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// get single card
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// https://vocab-assessment-default-rtdb.firebaseio.com/cards.json

const jsCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="category"&equalTo="JS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const pythonCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="category"&equalTo="Python"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const htmlCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="category"&equalTo="HTML/CSS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const miscCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="category"&equalTo="Misc."`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getCards,
  createCard,
  deleteCard,
  updateCard,
  getSingleCard,
  jsCards,
  pythonCards,
  htmlCards,
  miscCards
};
