import axios from 'axios';
import constants from '../constants';

const getAnimalsRequest = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then(results => {
        const animales = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach(key => {
            results.data[key].id = key;
            animales.push(results.data[key]);
          });
        }
        console.error(animales);
        resolve(animales);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {
  getAnimalsRequest,
};
