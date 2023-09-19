import axios from 'axios';

const key = '39033383-61403046dd5e6a3052ef44954';

export const getProducts = async params => {
  return await axios
    .get(`https://pixabay.com/api/?key=${key}`, {
      params: {
        ...params,
      },
    })
    .then(({ status, message, data }) => {
      if (status !== 200) {
        throw new Error(message);
      }
      return data;
    });
};
