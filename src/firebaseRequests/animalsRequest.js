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
        resolve(animales);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const newAnimalRequest = inputAnimal => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/mashups.json`, inputAnimal)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {
  getAnimalsRequest,
  newAnimalRequest,
};
