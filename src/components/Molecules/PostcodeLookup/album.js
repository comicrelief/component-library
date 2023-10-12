import axios from 'axios';

export const fetchAlbum = function () {
  return axios
    .get('https://jsonplaceholder.typicode.com/albums/2')
    .then(response => response.data);
};

