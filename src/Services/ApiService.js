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
};

export default ApiService;
