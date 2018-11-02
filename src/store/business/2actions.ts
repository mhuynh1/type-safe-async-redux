import { action } from "typesafe-actions";
import { Business, BusinessActionTypes, Review } from "./1types";

// action helper from 'typesafe-actions' will help write type-safe Redux actions
export const fetchBusinessesRequest = (term: string) =>
  action(BusinessActionTypes.FETCH_BUSINESSES_REQUEST, term);

export const fetchBusinessesSuccess = (data: Business[]) =>
  action(BusinessActionTypes.FETCH_BUSINESSES_SUCCESS, data);

export const fetchBusinessesFailure = (err: string) =>
  action(BusinessActionTypes.FETCH_BUSINESSES_FAILURE, err);

export const fetchReviewsRequest = (biz_id: number) =>
  action(BusinessActionTypes.FETCH_REVIEWS_REQUEST, biz_id);

export const fetchReviewsSuccess = (data: Review[]) =>
  action(BusinessActionTypes.FETCH_REVIEWS_SUCCESS, data);

export const fetchReviewsFailure = (err: string) =>
  action(BusinessActionTypes.FETCH_REVIEWS_FAILURE, err);

export const unsetReviews = () => action(BusinessActionTypes.UNSET_REVIEWS);

export const selectBiz = () => {};
