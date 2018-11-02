import { Reducer } from "redux";
import { BusinessState, BusinessActionTypes } from "./1types";

// typing initialState as the BusinessState type to make it type-safe
const initialState: BusinessState = {
  businesses: [],
  reviews: [],
  isLoading: false,
  errors: ""
};

const reducer: Reducer<BusinessState> = (state = initialState, action) => {
  switch (action.type) {
    case BusinessActionTypes.FETCH_BUSINESSES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case BusinessActionTypes.FETCH_BUSINESSES_SUCCESS: {
      return { ...state, isLoading: false, businesses: action.payload };
    }
    case BusinessActionTypes.FETCH_BUSINESSES_FAILURE: {
      return { ...state, isLoading: false, errors: action.payload };
    }

    case BusinessActionTypes.FETCH_REVIEWS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case BusinessActionTypes.FETCH_REVIEWS_SUCCESS: {
      return { ...state, isLoading: false, reviews: action.payload };
    }
    case BusinessActionTypes.FETCH_REVIEWS_FAILURE: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    default: {
      return state;
    }

    case BusinessActionTypes.UNSET_REVIEWS: {
      return { ...state, isLoading: false, reviews: [] };
    }
  }
};

// use named export to group the exports when you import them to index.js
export { reducer as businessReducer };
