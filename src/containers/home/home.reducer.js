import {
  FETCH_HOMEPAGE_DATA,
  FETCH_HOMEPAGE_DATA_SUCCESS,
  FETCH_HOMEPAGE_DATA_FAILURE,
} from './home.constants';

export default function home(state = {
  fetchingHomeData: false, 
  fetchedHomeData: false, 
  homeData: null, 
  homeDataError: null,
}, action) {
  switch (action.type) {
    case FETCH_HOMEPAGE_DATA: {
      return {
        ...state,
        fetchingHomeData: true,
        fetchedHomeData: false,
      };
    }
    case FETCH_HOMEPAGE_DATA_SUCCESS: {
      return {
        ...state,
        fetchingHomeData: false,
        fetchedHomeData: true,
        homeData: action.payload,
      };
    }
    case FETCH_HOMEPAGE_DATA_FAILURE: {
      return {
        ...state,
        fetchedHomeData: false,
        homeDataError: action.payload,
      };
    }
    default:
      return state;
  }
}
