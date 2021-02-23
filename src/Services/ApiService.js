import { REACT_APP_API_BASE } from '../config';

const ApiService = {
  getCat() {
    return fetch(`${REACT_APP_API_BASE}/cats`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch((error) => console.error(error));
  },

  getDog() {
    return fetch(`${REACT_APP_API_BASE}/dogs`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch((error) => console.error(error));
  },

  getPeople() {
    return fetch(`${REACT_APP_API_BASE}/people`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch((error) => console.error(error));
  },

  queueUser(name) {
    return fetch(`${REACT_APP_API_BASE}/people`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: name }),
    })
      // .then((res) => {
      //   if (!res.ok) {
      //     return res.json().then((e) => Promise.reject(e));
      //   } else {
      //     return res.json();
      //   }
      // })
      .catch((error) => console.error(error));
  },

  dequeuePerson() {
    return fetch(`${REACT_APP_API_BASE}/people`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
      // .then((res) => {
      //   if (!res.ok) {
      //     return res.json().then((e) => Promise.reject(e));
      //   } else {
      //     return res.json();
      //   }
      // })
      .catch((error) => console.error(error));
  },

  dequeueCat() {
    return fetch(`${REACT_APP_API_BASE}/cats`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
      // .then((res) => {
      //   if (!res.ok) {
      //     return res.json().then((e) => Promise.reject(e));
      //   } else {
      //     return res.json();
      //   }
      // })
      .catch((error) => console.error(error));
  },

  dequeueDog() {
    return fetch(`${REACT_APP_API_BASE}/dogs`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
      // .then((res) => {
      //   if (!res.ok) {
      //     return res.json().then((e) => Promise.reject(e));
      //   } else {
      //     return res.json();
      //   }
      // })
      .catch((error) => console.error(error));
  },
};

export default ApiService;
