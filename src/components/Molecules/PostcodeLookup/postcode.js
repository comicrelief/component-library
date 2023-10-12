// https://jsonplaceholder.typicode.com/albums/2
import axios from 'axios';

const endpoint = 'https://jsonplaceholder.typicode.com/albums/2';
const endpoint2 = 'https://lookups-staging.sls.comicrelief.com/postcode/lookup/bs56hq';

export const fetchPostcode = function () {
  return axios
    .get(endpoint)
    .then(response => response.data);
};

