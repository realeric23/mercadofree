import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FILTER_PRODUCTS,
} from '../constants/constants';

const initialState = {
  loading: false,
  products: [],
  filterItems: [],
  condition: '',
  error: '',
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filterItems: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        loading: false,
        filterItems: action.payload.products,
        condition: action.payload.condition,
      };

    default:
      return state;
  }
};

export default search;
