import axios from 'axios';
import getAuthorization from '../../utils/authorization';

const config = getAuthorization();

function getHomeData() {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_HOMEPAGE_DATA' });
    axios.get('https://jsonplaceholder.typicode.com/users', config)
      .then((response) => {
        dispatch({ type: 'FETCH_HOMEPAGE_DATA_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_HOMEPAGE_DATA_FAILURE', payload: error });
      });
  });
}

const homeActions = {
  getHomeData,
};

export default homeActions;
